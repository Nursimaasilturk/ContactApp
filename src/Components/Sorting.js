import React, { useState } from 'react'
import sortImg from '../assets/Sıralama.svg'
function Sorting() {
  const [isOpen,setIsOpen] = useState(false);
  const toggleClass = () => setIsOpen(!isOpen);
  return (
	<div>
		<div className='relative'>
	    <button onClick={toggleClass} className='w-[24px]'>
			<img src={sortImg} alt="sort" className='w-full h-auto' />
		</button>
		<ul className={`${isOpen ? "visible" :"invisible"} bg-white p-2 absolute z-[2] min-w-[200px] right-0 rounded-lg top-[40px]`}>
			<li className='w-full '><button className='text-secondary font-light p-1 hover:pl-2 w-full text-left hover:bg-secondary hover:text-white rounded-[5px]'>A to Z</button></li>
			<li  className='w-full '><button className='text-secondary font-light p-1 hover:pl-2  w-full text-left hover:bg-secondary hover:text-white rounded-[5px]'>Z to A</button></li>
			<li className='w-full '><button className='text-secondary font-light p-1 hover:pl-2  w-full text-left hover:bg-secondary hover:text-white rounded-[5px]'>Newest Contact</button></li>
			<li  className='w-full '><button className='text-secondary font-light p-1 hover:pl-2  w-full text-left hover:bg-secondary hover:text-white rounded-[5px]'>Oldest Contact</button></li>
		</ul>
	</div>
	</div>
  )
}

export default Sorting;
