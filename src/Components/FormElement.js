import React, { useEffect } from 'react';
import { useState } from 'react';
import memberImage from '../assets/form-member-image.png';
const FormElement = () => {
	useEffect(()=>{
		fetchCountries();
	},[]);
	const fetchCountries = async () =>{
		try{
			const response = await fetch('https://countriesnow.space/api/v0.1/countries'); 
			const data = await response.json();
			setCountries(data.data);
		}catch(err){
			console.error('Error: Countries do not exist !',err);
		}
	}
	const fetchCities = async (country) => {
		try {
		  const response = await fetch("https://countriesnow.space/api/v0.1/countries");
		  const data = await response.json();
		  const countryData = data.data.filter((item) => item.country.toLowerCase() === country.toLowerCase());
		  setCities(countryData[0].cities);
		} catch (err) {
		  console.error("Error: Cities do not exist!", err);
		}
	};
	const initialForm = {
		name:'',
		surname:'',
		email:'',
		phoneNumber:'',
		location:{
			country:'',
			city:''
		},
		company:'',
		image:null
	}
	const [form,setForm]= useState(initialForm);
	const [countries,setCountries]=useState([]);
	const [selectedCountry,setSelectedCountry]= useState('default');
	const [cities,setCities]=useState([]);
	const [selectedCity,setSelectedCity]=useState('default');

	const handleCountryChange = (e) =>{
		const country = e.target.value;
		setSelectedCountry(country);
		setForm({...form,location:{
			...form.location,
			country:e.target.value
		}});
		fetchCities(country);
	}
	const handleCityChange = (e) =>{
		setSelectedCity(e.target.value);
		setForm({...form,location:{
			...form.location,
			city:e.target.value
		}});
	}
    const handleChange = (e) => {
		setForm({...form,[e.target.name]:e.target.value})
	}
	const onSubmitForm = () => {
		console.log(form);
		setForm(initialForm);
		setSelectedCountry('default');
		setSelectedCity('default');
		setCities([]);
	}
	const hangleImageChange = (e) =>{
		const file = e.target.files[0];
		if(file){
			setForm({...form,image:URL.createObjectURL(file)})
		}
	}
  return (
	    <form onSubmit={(e) => {e.preventDefault();onSubmitForm()}} className='flex flex-col justify-start items-center h-full w-[32%] bg-[rgba(255,255,255,0.22)] backdrop-blur-2xl rounded-[20px] overflow-hidden py-5 px-8 gap-5'>
			<div className="relative w-[140px] h-[140px]">
				<img alt='' src={form.image || memberImage} className='w-full h-full bg-white rounded-full cursor-pointer object-cover'/>
				<input type='file' accept='image/*' onChange={(e) => hangleImageChange(e)} className='w-full h-full absolute top-0 left-0 w-full h-full opacity-0'/>
			</div>
			<input placeholder='Name' name='name' value={form.name} onChange={(event) => handleChange(event)} required className='w-full p-1 rounded-md pl-2' />
			<input placeholder='Surname' name='surname' value={form.surname} onChange={(event) => handleChange(event)} required  className='w-full p-1 rounded-md pl-2'/>
			<input type='email' name='email' value={form.email} onChange={(event) => handleChange(event)} placeholder='Email' required  className='w-full p-1 rounded-md pl-2'/>
			<input placeholder='Phone Number' name='phoneNumber' value={form.phoneNumber} onChange={(event) => handleChange(event)} required  className='w-full p-1 rounded-md pl-2'/>
			<div className=" w-full flex items-center justify-between">
				<select name='country' value={selectedCountry} onChange={(e)=>{handleCountryChange(e)}} className='w-[120px] h-8 rounded-md pl-2 appearance-none pr-[30px] bg-select-arrow bg-no-repeat '>
					<option value="default">Country</option>
					{countries.map((country,index)=>(
						<option key={index} value={country.country}>{country.country}</option>
					))}
				</select>
				<select name='city' value={selectedCity} onChange={(e)=>{handleCityChange(e)}} className='w-[120px] h-8 rounded-md pl-2 appearance-none pr-[30px] bg-select-arrow bg-no-repeat '>
					<option value="city">City</option>
					{cities.map((city,index)=>(
						<option key={index} value={city}>{city}</option>
					))}
				</select>
			</div>
			<input type='text' placeholder='Company' name='company' value={form.company} onChange={(event) => handleChange(event)} className='w-full p-1 rounded-md pl-2'/>
			<div className=" w-full flex flex-col mb-5">
				<div className=" w-full flex items-center justify-between px-1">
					<button className='bg-high w-priority-small h-priority-small rounded-full shadow-high'></button>
					<button className='bg-medium-high w-priority-small h-priority-small rounded-full shadow-medium-high'></button>
					<button className='bg-medium w-priority-small h-priority-small rounded-full shadow-medium'></button>
					<button className='bg-medium-low w-priority-small h-priority-small rounded-full shadow-medium-low'></button>
					<button className='bg-low w-priority-small h-priority-small rounded-full shadow-low'></button>
				</div>
			</div>
			<button className='bg-primary w-full p-2 rounded-xl text-white font-semibold tracking-wider'>SEND</button>
		</form>
  )
}

export default FormElement;
