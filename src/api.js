const fetchCountries = async () =>{
	try{
		const response = await fetch('​https://countriesnow.space/api/v0.1/countries'); 
		console.log(response);
	}catch(err){
		console.error('Error:',err);
	}
}
fetchCountries();