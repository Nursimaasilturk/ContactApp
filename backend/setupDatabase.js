const db = require('./database');
function setupDatabase(){


	try{

		db.prepare('DROP TABLE IF EXISTS Location').run();
		db.prepare('DROP TABLE IF EXISTS Contact').run();
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
			image TEXT NULL,
			FOREIGN KEY (location_id) REFERENCES Location(id)
			)`).run();
	}catch(err){
		console.error('Tablo oluşturulurken bir hata oluştu',err);
		
	}
}
module.exports = setupDatabase;