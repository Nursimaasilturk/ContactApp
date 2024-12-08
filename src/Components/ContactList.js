import React, { useEffect, useState } from 'react'
import { useApi } from '../Context/Api';
import PhoneIcon from './Icons/PhoneIcon';
import CompanyIcon from './Icons/CompanyIcon';
import EmailIcon from './Icons/EmailIcon';
import LocationIcon from './Icons/LocationIcon';
function ContactList() {	
  const { error,loading,fetchDataHandler }= useApi();
	const [data,setData] = useState([]);
  useEffect(()=>{
	document.title = "Contact App | Sima";
  },[])
  useEffect(()=>{
	const fetchContacts =  async() =>{
		try{
			const data = await fetchDataHandler('/contacts');
			setData(data);
		}catch(err){
			console.error('Hata oluştu',err);
		}
	}
	fetchContacts();
  },[fetchDataHandler])
  if (loading) return <p>Loading</p>
  if (error) return <p>Error occured!</p>
  return (
	<div className='h-[83%] rounded-[13px] overflow-hidden'>	
		<div className='w-full h-[89%]  flex flex-col gap-4 overflow-y-scroll scrollbar-hide'>
			{data.map((contact =>(
				<div key={contact.id} className="contact-item w-full rounded-[13px] bg-secondary px-4 py-3 flex items-center justify-between">
					<img src={contact.image} alt="" width={60} height={60} className='rounded-full'/>
					<div className="flex flex-col justify-start ml-3 w-4/12">
						<p className='text-white font-semibold'>{contact.name}</p>
						<p className='text-white font-semibold'>{contact.surname}</p>
					</div>
					<div className='w-6/12 flex flex-wrap gap-2'>
						<div className="w-5/12 flex items-center">
							<PhoneIcon className="mr-3 fill-primary"/>		
							<p className='text-[#ededed] font-light text-[11px]'>{contact.phone_number}</p>
						</div>
						<div className="w-5/12 flex items-center">
							<LocationIcon className="mr-3 fill-primary"/>
							<p className='text-[#ededed] font-light text-[11px] truncate'>{`${contact.country}/${contact.city}`}</p>
						</div>
						<div className="w-5/12 flex items-center">
							<EmailIcon className="mr-3 fill-primary"/>
							<p className='text-[#ededed] font-light text-[11px] truncate'>{contact.email}</p>
						</div>
						<div className="w-5/12 flex items-center">
							<CompanyIcon className="mr-3 fill-primary"/>
							<p className='text-[#ededed] font-light text-[11px]'>{contact.company}</p>
						</div>
					</div>
					<span className='bg-high w-priority-medium h-priority-medium rounded-full shadow-high'></span>
			    </div>
			)))}
		</div>
		<div className='py-4 flex items-end justify-end'>
			<button className='bg-primary py-2 px-5 rounded-[13px] text-white font-semibold tracking-wider'>EDIT</button>
		</div>
	</div>		
  )
}

export default ContactList
