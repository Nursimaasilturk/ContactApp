const db = require('../database');
exports.getAllContact = (req,res) =>{
   try{
		const joinedData = db.prepare(`
			SELECT
		 		Contact.*, 
            	Location.country, 
            	Location.city
			FROM Contact
			JOIN Location ON Contact.location_id = Location.id	
		`);
		const result = joinedData.all();
		res.status(200).send(result);
   }catch(err){
		console.error(err);
		res.status(500).send("Veriler alınamadı.");
   }
} 
exports.createContact = async (req,res) =>{
	try{
		const {name,surname,email,phone_number,company,country,city,priority} = req.body;
        const { file }  = req;
	    
		const imagePath = `/uploads/${file.filename}`;
		
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
			INSERT INTO Contact (name,surname,email,phone_number,company,location_id,priority,image) VALUES (?,?,?,?,?,?,?,?)	
		`);
		insertContact.run(name,surname,email,phone_number,company,location.id,priority,imagePath);
		res.status(201).send('Kayıt Başarılı');
	}catch(err){
		console.error(err);
		res.status(500).send("Kişi eklenirken hata oluştu.")
	}
} 
exports.deleteAllContact = (req,res) =>{
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
} 
exports.updateContact = (req,res)=>{
	try{
		const {id} = req.params;
		const {name,surname,email,phone_number,company,priority,country,city} = req.body;
		const updatingContact = db.prepare(`
			UPDATE Contact 
			SET name = ?, surname = ?, email = ?,phone_number=?, company =?,priority=?,
			WHERE id = ?
		`);
		const updatedContact = updatingContact.run(name,surname,email,phone_number,company,priority,id);
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
}
exports.getContactById = (req,res) =>{
	try{
		const {id} = req.params;
		const getContactById = db.prepare(`
		SELECT * FROM Contact WHERE id = ?
		`);
		const result = getContactById.get(id);
		result ? res.status(200).send(result) : res.status(404).send('Bu idye sahip bir kullanıcı bulunmamaktadır.');
	}catch(err){
		console.error(err);
		res.status(500).send('Veri alınamadı.')
	}
}
exports.deleteContactById = (req,res)=>{
	try{
		const { id } = req.params;
		const deleteContact = db.prepare(`
		DELETE FROM Contact WHERE id = ?
		`);
		const result = deleteContact.run(id);
		result.changes ? res.status(200).send('Contact başarılı bir şekilde silindi') : res.status(404).send('Kayıt bulunamadı');
	}catch(err){
		console.error(err);
		res.status(500).send('Silme sırasında hatayla karşılaşıldı.');
	}
}