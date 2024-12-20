import React from 'react'
import Sorting from './Sorting'
import Filtering from './Filtering'
function ContactInfo() {
  return (
	<div className='contact-info w-full h-[13%]'>
		<div className='w-full flex items-start justify-between'>
			<h1 className='text-white font-semibold text-[29px]'>Contact List</h1>
			<div className="flex gap-5">
				<Filtering />
				<Sorting />
			</div>
		</div>
	 	<input type="text" placeholder='Search...' className='w-full p-2 rounded-[13px] bg-[rgba(255,255,255,0.23)] backdrop-blur-[11px] placeholder:text-[#ededed] placeholder:font-light border border-solid border-[rgba(255,255,255,0.27)] pl-[40px] bg-search-icon bg-no-repeat' />
	</div>
  )
}

export default ContactInfo
