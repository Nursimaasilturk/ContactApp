// ENV dosyası için bu kurulum gereklidir.
require('dotenv').config();
const express = require('express');
const Database = require('better-sqlite3');
// Database instance oluşturulur.
const db = new Database('database.db');
const app = express();

db.prepare(`CREATE TABLE IF NOT EXIST Contact(
	id INTEGER PRIMARY KEY AUTOINCREMENT,
	name TEXT NOT NULL,
	surname TEXT NOT NULL,
	email TEXT NOT NULL,
	phone_number TEXT NOT NULL,
	company TEXT NULLABLE,
	location_id INTEGER,
	FOREIGN KEY (location_id) REFERENCES Location(id)
	image BLOB NULLABLE
);
  CREATE TABLE IF NOT EXIST Location(
	id INTEGER FOREIGN KEY AUTOINCREMENT,
	country TEXT NOT NULL,
	city TEXT NULLABLE
  )`
);
db.prepare(`
	INSERT INTO Contact(name,surname,email,phone_number,company,location_id) VALUES ('Sima','ASİLTÜRK','nursima.asilturk@gmail.com','05555555555','Fedsima',1);
	INSERT INTO Location(country,city) VALUES ('Turkey','Bursa');	
`);

const joinedData = db.prepare(`
	SELECT Contact.name, Contact.surname, Contact.email, Contact.phone_number, Contact.company,Location.country, Location.city
	FROM Contact
	JOIN Location ON Contact.location_id = Location.id	
`);
joinedData.all();