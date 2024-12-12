import React, { useState } from 'react'
import filterImg from '../assets/Filter.svg'
function Filtering() {
	const [isOpen,setIsOpen] = useState(false);
	const toggleActive = () => setIsOpen(!isOpen);
  return (
	<div className='relative'>
	    <button onClick={toggleActive} className='w-[34px]'>
			<img src={filterImg} alt="filter" className='w-full h-auto' />
	    </button>
		<form className={`${isOpen ? 'visible':'invisible'} bg-white p-2 absolute z-[2] min-w-[230px] right-0 rounded-lg top-[40px]`}>
			<div className='flex flex-col align-items-start mb-1'>
				<label className='font-light text-secondary'>Priority</label>
				<div className='flex justify-evenly py-2'>
					<button className='w-[23px] h-[23px] border border-solid hover:border-secondary border-white rounded-full'>
						<span className=' block w-[15px] h-[15px] rounded-full bg-high m-auto'></span>
					</button>
					<button className='w-[23px] h-[23px] border border-solid hover:border-secondary border-white rounded-full'>
						<span className=' block w-[15px] h-[15px] rounded-full bg-medium-high m-auto'></span>
					</button>
					<button className='w-[23px] h-[23px] border border-solid hover:border-secondary border-white rounded-full'>
						<span className=' block w-[15px] h-[15px] rounded-full bg-medium m-auto'></span>
					</button>
					<button className='w-[23px] h-[23px] border border-solid hover:border-secondary border-white rounded-full'>
						<span className=' block w-[15px] h-[15px] rounded-full bg-medium-low m-auto'></span>
					</button>
					<button className='w-[23px] h-[23px] border border-solid hover:border-secondary border-white rounded-full'>
						<span className=' block w-[15px] h-[15px] rounded-full bg-low m-auto'></span>
					</button>
				</div>
			</div>
			<div className='flex justify-between mb-2'>
				<label className='font-light text-secondary'> Country </label>
				<input type="text" className='border border-solid border-secondary w-[130px] rounded-lg p-1 text-[13px] focus:outline-none caret-primary' />
			</div>
			<div className='flex justify-between mb-2'>
				<label className='font-light text-secondary'> City </label>
				<input type="text" className='border border-solid border-secondary w-[130px] rounded-lg p-1 text-[13px] focus:outline-none caret-primary' />
			</div>
			<div className='flex justify-end my-1'>
				<button className='text-secondary font-semibold underline mr-1'>Filter</button>
			</div>
		</form>
	</div>
  )
}

export default Filtering
