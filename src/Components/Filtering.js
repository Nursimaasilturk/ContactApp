import React from 'react'
import filterImg from '../assets/Filter.svg'
function Filtering() {
  return (
	<div className='relative'>
	    <button className='w-[34px]'>
			<img src={filterImg} alt="filter" className='w-full h-auto' />
	    </button>
		<ul className='bg-white p-2 absolute z-[2] min-w-[200px] right-0 rounded-lg top-[40px]'>
			<li><button className='text-secondary'>A to Z</button></li>
			<li><button>Z to A</button></li>
			<li><button>Newest Contact</button></li>
			<li><button>Oldest Contact</button></li>
		</ul>
	</div>
  )
}

export default Filtering
