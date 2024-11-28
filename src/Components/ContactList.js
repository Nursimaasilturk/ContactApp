import React, { useEffect } from 'react'
import { useContactMembers } from '../Context/ContactMember';
import PhoneIcon from './Icons/PhoneIcon';
import CompanyIcon from './Icons/CompanyIcon';
import EmailIcon from './Icons/EmailIcon';
import LocationIcon from './Icons/LocationIcon';
function ContactList() {	
  const { contactMembers }= useContactMembers();

  useEffect(()=>{
	document.title = "Contact App | Sima";
  },[])
  return (
	<div className='h-[83%] rounded-[13px] overflow-hidden'>	
		<div className='w-full h-[89%]  flex flex-col gap-4 overflow-y-scroll scrollbar-hide'>
			{contactMembers.map((contact =>(
				<div key={contact.id} className="contact-item w-full rounded-[13px] bg-secondary px-4 py-3 flex items-center justify-between">
					<img src={contact.image} alt="" width={60} height={60} className='rounded-full'/>
					<div className="flex flex-col justify-start ml-3 w-4/12">
						<p className='text-white font-semibold'>{contact.name}</p>
						<p className='text-white font-semibold'>{contact.surname}</p>
					</div>
					<div className='w-6/12 flex flex-wrap gap-2'>
						<div className="w-5/12 flex items-center">
							<PhoneIcon className="mr-3 fill-primary"/>		
							<p className='text-[#ededed] font-light text-[11px]'>{contact.phoneNumber}</p>
						</div>
						<div className="w-5/12 flex items-center">
							<LocationIcon className="mr-3 fill-primary"/>
							<p className='text-[#ededed] font-light text-[11px] truncate'>{`${contact.location['city']}/${contact.location['province']}`}</p>
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
