import React from 'react'
import { FaHeart } from "react-icons/fa6";
import { RiShoppingBag4Fill } from "react-icons/ri"
import { FaSearch } from "react-icons/fa";


const Navbar = () => {
  return (
    <header className='bg-white'>
      <nav className='max-w-[1100px] mx-auto px-10 h-[14vh] flex justify-between items-center'>
        {/* logo */}
        <a href='#' className='text-3xl font-semibold'>
          Gr<span className='text-orange-500 uppercase'>o</span>cify
        </a>

        {/*Desktop Menu */}
        <ul className='flex items-center gap-x-15'>
          <li>
            <a href="#" className='font-semibold tracking-wider text-orange-800'>Home</a>
          </li>
          <li>
            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>About US</a>
          </li>
          <li>
            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Process</a>
          </li>
          <li>
            <a href="#" className='font-semibold tracking-wider text-zinc-800 hover:text-orange-500'>Contact Us</a>
          </li>
        </ul>

        {/*Nav Action*/}
        <div className='flex items-center gap-x-5'>
        {/* Input Field */}
        <div className='flex p-1 border-2 border-orange-500 rounded-full'>
          <input type='text' name='text' id='text' placeholder='Search.....' autoComplete='off' className='flex-1 h-[5vh] px-3 focus:outline-none'/>
          <button className='bg-gradient-to-b from-red-600 to-orange-400 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'><FaSearch /></button>
        </div>
          <a href='#' className='text-zinc-800 text-2xl'>
            <FaHeart />
            </a>
            <a href='#' className='text-zinc-800 text-2xl'>
            <RiShoppingBag4Fill />
            </a>
        </div>
      </nav>
    </header>
  )
}

export default Navbar
