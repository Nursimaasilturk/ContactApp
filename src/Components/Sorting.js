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
		<ul className={`${isOpen ? "visible" :"invisible"} sorting-box`}>
			<li><button>A to Z</button></li>
			<li><button>Z to A</button></li>
			<li><button>Newest Contact</button></li>
			<li><button>Oldest Contact</button></li>
		</ul>
	</div>
	</div>
  )
}

export default Sorting;
