"use client"
import React, {useState} from 'react'
import { CgProfile } from "react-icons/cg";
import { FaRegListAlt, FaRegFolderOpen, FaRegPaperPlane } from "react-icons/fa";

const Navbar = ({active, handleTabClick}) => {


  return (
    <header className='py-5 px-8 md:w-10/12 md:mx-auto mx-4 bg-secondary mt-5 rounded-md'>
        <nav className='flex gap-x-10 justify-center text-white'>
            <div onClick={() => handleTabClick(0)} className={`flex flex-col items-center gap-1 cursor-pointer ${active === 0 && 'text-primary'}`}>
                <CgProfile size={25}/>
                <span>About</span>
            </div>
            <div onClick={() => handleTabClick(1)} className={`flex flex-col items-center gap-1 cursor-pointer ${active === 1 && 'text-primary'}`}>
                <FaRegListAlt size={25}/>
                <span>Resume</span>
            </div>
            <div onClick={() => handleTabClick(2)} className={`flex flex-col items-center gap-1 cursor-pointer ${active === 2 && 'text-primary'}`}>
                <FaRegFolderOpen size={25}/>
                <span>Projects</span>
            </div>
            <div onClick={() => handleTabClick(3)} className={`flex flex-col items-center gap-1 cursor-pointer ${active === 3 && 'text-primary'}`}>
                <FaRegPaperPlane size={25}/>
                <span>Contact</span>
            </div>
        </nav>
    </header>
  )
}

export default Navbar