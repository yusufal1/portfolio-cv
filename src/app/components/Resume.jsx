"use client"
import React from 'react'
import { FaBriefcase, FaUniversity  } from "react-icons/fa";
import { RiArrowDownDoubleFill } from "react-icons/ri";
import hm from "../../../public/img/hm.svg"
import ebebek from "../../../public/img/ebebek.svg"
import demirtas from "../../../public/img/demirtas.svg"
import Image from 'next/image';

const Resume = () => {
  return (
    <div className='text-white mt-[10%] flex justify-between gap-[10%]'>
      <div className='flex flex-col basis-1/2 gap-5'>
        <div className='flex gap-2 items-center border-b border-gray-500 py-2'>
          <FaBriefcase size={25} className='text-primary'/>
          <h3 className='font-semibold text-xl'>EXPERIENCE</h3>          
        </div>
        <div className='flex flex-col gap-3'>
            <span className='border border-primary px-3 py-1 w-fit text-sm text-primary'>Oct 2023 - Present</span>
            <div className='flex justify-between'>
              <span className='text-lg font-semibold'>Sales Consultant</span>
              <Image src={hm} width={50}/>
            </div>
            <span className='text-[#6B7280] font-semibold'>H&M</span>
            <p className='text-[#6B7280]'>I work part time as a sales consultant.</p>
        </div>
        <RiArrowDownDoubleFill className='mx-auto text-primary' size={25}/>
        <div className='flex flex-col gap-3'>
            <span className='border border-primary px-3 py-1 w-fit text-sm text-primary'>Feb 2023 - May 2023</span>
            <div className='flex justify-between'>
              <span className='text-lg font-semibold'>Front-end Developer Intern</span>
              <Image src={demirtas} width={100}/>
            </div>
            <span className='text-[#6B7280] font-semibold'>Demirtaş Sistem</span>
            <p className='text-[#6B7280]'>I took part in many projects. I converted the designer's design into code. I completed daily tasks. I used Html, Css, Javascript, React, React-Native, Laravel, Tailwind, JQuery technologies.</p>
        </div>
        <RiArrowDownDoubleFill className='mx-auto text-primary' size={25}/>
        <div className='flex flex-col gap-3'>
            <span className='border border-primary px-3 py-1 w-fit text-sm text-primary'>Nov 2021 - Jan 2023</span>
            <div className='flex justify-between'>
              <span className='text-lg font-semibold'>Sales Consultant</span>
              <Image src={ebebek} width={100}/>
            </div>
            <span className='text-[#6B7280] font-semibold'>Ebebek</span>
            <p className='text-[#6B7280]'>I took part in Ebebek's program called "Everest Journey". During this period, I worked part-time as a sales consultant in the store. I also did the assigned homework and tasks.</p>
        </div>
      </div>
      <div className='flex flex-col basis-1/2'>
        <div className='flex gap-2 items-center border-b border-gray-500 py-2 '>
          <FaUniversity size={25} className='text-primary'/>
          <h3 className='font-semibold text-xl'>EDUCATION</h3>          
        </div>
        <div>
            asdasd
          </div>
      </div>
    </div>
  )
}

export default Resume