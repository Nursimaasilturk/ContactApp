const db = require('../database');
exports.getAllLocations = (req,res)=>{
	try{
		const location = db.prepare(`
			SELECT * FROM Location	
		`).all();
		res.status(200).send(location);
	}catch(err){
		console.error(err);
		res.status(500).send('Lokasyonalar alınamadı.')
	}
}