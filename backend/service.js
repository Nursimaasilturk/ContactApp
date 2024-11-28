const express = require('express');
const fs = require('fs/promises');
const axios = require('axios');
const app = express();
const port = 3000;

app.get('/',(req,res)=>{
	const data =
	[
		{
			name:'Sima',
			surname:'ASİLTÜRK',
			age:25
	    },
		{
			name:'Ömer',
			surname:'ATAYİLMAZ',
			age:24
		},
		{
			name:'Ahmet',
			surname:'Veysel',
			age:25
		}
	]
	res.json(data);
});
app.get('/user', async(req,res)=>{
	try{
		const data = await fs.readFile('./data.json','utf-8');
		const users= JSON.parse(data);
		res.send(users);
	}catch(err){
		console.error('Dosya okunamadı!',err);
		return res.status(500).json({error:'Dosya okunmadı!!'})
	}
})
app.get('/user/:id', async (req,res)=>{
    const enteredId= req.params.id;
	try{
		const response = await axios.get('http://localhost:3000/user') ;
		const users = response.data;
		const specialUser = users.find( u => u.id === parseInt(enteredId));
		specialUser ? res.json(specialUser): res.status(404).json({ error: 'Kullanıcı bulunamadı' });
		
	}catch(error){
		console.error('API Hatası',error);
		res.status(500).json({error:'API isteği sırasında hata oluştu!'})
	}
});

app.get('/search/:query?',async(req,res,next)=>{
	let query = req.params.query;
	if (!query) {
        return res.status(400).json({ error: 'Arama sorgusu eksik' });
    }
	const filterByValue = (data,value) =>{
		return data.filter(user => Object.values(user).some(val => val.toString().toLowerCase().includes(value.toLowerCase())));
	}
	try{
		const response = await axios.get('http://localhost:3000/user') ;
		const users = response.data;
		const searchedUser = filterByValue(users,query);
		if (searchedUser.length > 0) {
            res.json(searchedUser);
        } else {
            res.status(404).json({ error: 'Kullanıcı bulunamadı' });
        }
	}catch(error){
		console.error('API Hatası',error);
		res.status(500).json({error:'API isteği sırasında hata oluştu!'})
	}
});
app.listen(port,()=>{
	console.log(`My port ${port}`);
})