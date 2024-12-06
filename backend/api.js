// ENV dosyası için bu kurulum gereklidir.
require('dotenv').config();
const express = require('express');
const Database = require('better-sqlite3');
// Database instance oluşturulur.
const db = new Database('database.db');
const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json());
db.prepare(`
	CREATE TABLE IF NOT EXISTS Location (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    country TEXT NOT NULL,
    city TEXT
	)`).run();
db.prepare(`
	CREATE TABLE IF NOT EXISTS Contact(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL,
	surname TEXT NOT NULL,
	email TEXT NOT NULL,
	phone_number TEXT NOT NULL,
	company TEXT NULL,
	location_id INTEGER,
	FOREIGN KEY (location_id) REFERENCES Location(id)
	)`).run();
// GET işlemi
app.get('/',(req,res)=>{
	const joinedData = db.prepare(`
		SELECT
		 	Contact.*, 
            Location.country, 
            Location.city
		FROM Contact
		JOIN Location ON Contact.location_id = Location.id	
	`);
	const result = joinedData.all();
	res.send(result);
});
//POST İŞLEMİ
app.post('/submit',(req,res)=>{
	const {name,surname,email,phone_number,company,country,city} = req.body;
	if(!name || !surname || !email || !phone_number || !country)
		res.status(400).send('Eksik parametreler');
	const locationChecking = db.prepare(`
		SELECT id FROM Location WHERE country= ? AND city = ?	
	`);
	let location = locationChecking.get(country,city);
	if(!location){
		const newLocation = db.prepare(`
			INSERT INTO Location (country,city) VALUES (?,?)
		`);
		const result = newLocation.run(country,city);
		location = {id:result.lastInsertRowid};
	}
	const insertContact = db.prepare(`
		INSERT INTO Contact (name,surname,email,phone_number,company,location_id) VALUES (?,?,?,?,?,?)	
	`);
	insertContact.run(name,surname,email,phone_number,company,location.id);
	res.status(201).send('Kayıt Başarılı');
	
});
// DELETE by ID
app.delete('/delete/:id',(req,res)=>{
	const { id } = req.params;
	const deleteContact = db.prepare(`
	DELETE FROM Contact WHERE id = ?
	`);
	const result = deleteContact.run(id);
	result.changes ? res.status(200).send('Contact başarılı bir şekilde silindi') : res.status(404).send('Kayıt bulunamadı');
});	
// GET by ID
app.get('/contact/:id',(req,res)=>{
	const {id} = req.params;
	const getContactById = db.prepare(`
	SELECT * FROM Contact WHERE id = ?
	`);
	const result = getContactById.get(id);
	result ? res.status(200).send(result) : res.status(404).send('Bu idye sahip bir kullanıcı bulunmamaktadır.');
});
// DELETE ALL Contact and Location Data
app.delete('/deleteAll',(req,res)=>{
	try{
		const deleteAllContact = db.prepare(`
			DELETE FROM Contact
		`)
		deleteAllContact.run();
		const deleteReletedLocation = db.prepare(`
			DELETE FROM Location WHERE id NOT IN (SELECT DISTINCT location_id FROM Contact)
		`);
		deleteReletedLocation.run();
		db.prepare(`VACUUM`).run();
		res.status(200).send("Tüm veriler silindi.");
	}catch(err){
		console.error(err);
		res.status(500).send('Hata oluştu!');
	}
});
// UPDATE işlemi
app.put('/update/:id',(req,res)=>{
	try{
		const {id} = req.params;
		const {name,surname,email,phone_number,company,country,city} = req.body;
		const updatingContact = db.prepare(`
			UPDATE Contact 
			SET name = ?, surname = ?, email = ?,phone_number=?, company =?
			WHERE id = ?
		`);
		const updatedContact = updatingContact.run(name,surname,email,phone_number,company,id);
		let locationChecking = db.prepare(`
			SELECT id FROM Location WHERE country =? AND city = ? 
		`);
		let location = locationChecking.get(country,city);
		if(!location){
			const result = db.prepare(`INSERT INTO Location (country,city) VALUES (?,?)`).run(country,city);
			location = {id:result.lastInsertRowid};
		}
		const updateContactLocation = db.prepare(`UPDATE Contact SET  location_id = ? WHERE id = ?`).run(location.id,id);
		updatedContact.changes && updateContactLocation.changes ? res.status(200).send('Location ve Contact başarıyla güncellendi'):res.status(404).send('Contact bulunamadı')
	}catch(err){
		console.error('Error',err);
		res.status(500).send('Güncelleme sırasında hatayla karşılaşıldı.');
	}
	
})
app.listen(PORT,()=>{
	console.log('Port dinleniyor...');
});