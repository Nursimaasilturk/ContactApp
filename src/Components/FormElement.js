import React from 'react';
import { useState } from 'react';
import { useContactMembers } from '../Context/ContactMember';
import memberImage from '../assets/form-member-image.png';
const FormElement = () => {
	const { contactMember }= useContactMembers();
	const initialForm = {
		name:'',
		surname:'',
		email:'',
		phoneNumber:'',
		company:''
	}
	const [form,setForm]= useState(initialForm);
    const handleChange = (e) => {
		setForm({...form,[e.target.name]:e.target.value})
	}
	
	const onSubmitForm = () => {
		console.log(form);
		setForm(initialForm)
	}
  return (
	    <form onSubmit={(e) => {e.preventDefault();onSubmitForm()}} className='flex flex-col justify-start items-center h-full w-[32%] bg-[rgba(255,255,255,0.22)] backdrop-blur-2xl rounded-[20px] overflow-hidden py-5 px-8 gap-5'>
		    <img alt='' src={memberImage} width={140} height={140} className='bg-white rounded-full'/>
			<input placeholder='Name' name='name' value={form.name} onChange={(event) => handleChange(event)} required className='w-full p-1 rounded-md pl-2' />
			<input placeholder='Surname' name='surname' value={form.surname} onChange={(event) => handleChange(event)} required  className='w-full p-1 rounded-md pl-2'/>
			<input type='email' name='email' value={form.email} onChange={(event) => handleChange(event)} placeholder='Email' required  className='w-full p-1 rounded-md pl-2'/>
			<input placeholder='Phone Number' name='phoneNumber' value={form.phoneNumber} onChange={(event) => handleChange(event)} required  className='w-full p-1 rounded-md pl-2'/>
			<div className=" w-full flex items-center justify-between">
				<select defaultValue="city" className='w-[120px] h-8 rounded-md pl-2 appearance-none pr-[30px] bg-select-arrow bg-no-repeat '>
					<option value="city">City</option>
  					<option value="elma">Elma</option>
 			    	<option value="armut">Armut</option>
				</select>
				<select defaultValue="province" className='w-[120px] h-8 rounded-md pl-2 appearance-none pr-[30px] bg-select-arrow bg-no-repeat '>
					<option value="province">Province</option>
  					<option value="elma">Elma</option>
 			    	<option value="armut">Armut</option>
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
