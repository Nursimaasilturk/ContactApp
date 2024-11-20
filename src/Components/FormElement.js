import React from 'react';
import memberImage from '../assets/form-member-image.png';
const FormElement = () => {
  return (
	    <form className=' flex flex-col justify-start items-center h-full w-[32%] bg-[rgba(255,255,255,0.22)] backdrop-blur-2xl rounded-[20px] overflow-hidden py-5 px-8 gap-5'>
		    <img alt='' src={memberImage} width={140} height={140} className='bg-white rounded-full'/>
			<input type='text' placeholder='Name' required className='w-full p-1 rounded-md pl-2' />
			<input type='text' placeholder='Surname' required  className='w-full p-1 rounded-md pl-2'/>
			<input type='email' placeholder='Email' required  className='w-full p-1 rounded-md pl-2'/>
			<input type='text' placeholder='Phone Number' required  className='w-full p-1 rounded-md pl-2'/>
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
			<input type='text' placeholder='Company' required  className='w-full p-1 rounded-md pl-2'/>
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
