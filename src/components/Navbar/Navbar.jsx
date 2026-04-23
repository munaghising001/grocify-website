import React, { useState } from 'react'
import { FaHeart } from "react-icons/fa6";
import { RiShoppingBag4Fill } from "react-icons/ri"
import { FaSearch } from "react-icons/fa";
import { TbMenu2 } from "react-icons/tb";


const Navbar = () => {

  const [showMenu, setShow] = useState(false);
  const toggleMenu = () => {

    setShowMenu(!showMenu);


  }
  return (
    <header className='bg-white-300 fixed top-0 right-0 left-0'>
      <nav className='max-w-[1100px] mx-auto px-10 md:h-[14vh] h-[12vh] flex justify-between items-center'>
        {/* logo */}
        <a href='#' className='text-3xl font-semibold'>
          Gr<span className='text-orange-500 uppercase'>o</span>cify
        </a>

        {/*Desktop Menu */}
        <ul className='md:flex items-center gap-x-15 hidden'>
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
        <div className='md:flex p-1 border-2 border-orange-500 rounded-full hidden'>
          <input type='text' name='text' id='text' placeholder='Search.....' autoComplete='off' className='flex-1 h-[5vh] px-3 focus:outline-none'/>
          <button className='bg-gradient-to-b from-red-600 to-orange-400 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'>
            <FaSearch />
          </button>
        </div>
          <a href='#' className='text-zinc-800 text-2xl'>
            <FaHeart />
            </a>
            <a href='#' className='text-zinc-800 text-2xl'>
            <RiShoppingBag4Fill />
            </a>

        {/* Hamburger */}
          <a href='#' className='text-zinc-800 text-3xl md:hidden' onClick={toggleMenu}>
              <TbMenu2 />
            </a>
        </div>


        {/* Mobile Menu */}
        <ul className={`flex flex-col gap-y-12 bg-orange-500/15 backdrop-blur-xl rounded-xl p-10 items-center md:hidden absolute top-20 -left-full transform -translate-x-1/2 transition-all duration-300 ${showMenu ? 'left-1/2' : ''}`}>       
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
          <li className='flex p-1 border-2 border-orange-500 rounded-full md:hidden'>
          <input type='text' name='text' id='text' placeholder='Search.....' autoComplete='off' className='flex-1 h-[5vh] px-3 focus:outline-none'/>
          <button className='bg-gradient-to-b from-red-600 to-orange-400 text-white w-10 h-10 flex justify-center items-center rounded-full text-xl'>
            <FaSearch />
          </button>
        </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar
