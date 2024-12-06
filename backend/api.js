require('dotenv').config();
const express = require('express');
const Database = require('better-sqlite3');
const contactRoute = require('./routes/contactRoute');
const locationRoute = require('./routes/locationRoute');
const setupDatabase = require('./setupDatabase');

const app = express();
const PORT = process.env.PORT || 8000;
setupDatabase();
app.use(express.json());

app.use('/contacts', contactRoute);
app.use('/locations',locationRoute);

app.listen(PORT,()=>{
	console.log('Port dinleniyor...');
});