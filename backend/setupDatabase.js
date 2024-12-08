const db = require('./database');
function setupDatabase(){
	try{
		//Location
		db.prepare(`
			CREATE TABLE IF NOT EXISTS Location (
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			country TEXT NOT NULL,
			city TEXT
			)`).run();
		//Contact
		db.prepare(`
			CREATE TABLE IF NOT EXISTS Contact(
			id INTEGER PRIMARY KEY AUTOINCREMENT,
			name TEXT NOT NULL,
			surname TEXT NOT NULL,
			email TEXT NOT NULL,
			phone_number TEXT NOT NULL,
			company TEXT NULL,
			location_id INTEGER,
			image BLOB NULL,
			FOREIGN KEY (location_id) REFERENCES Location(id)
			)`).run();
	}catch(err){
		console.error('Tablo oluşturulurken bir hata oluştu',err);
		
	}
}
module.exports = setupDatabase;