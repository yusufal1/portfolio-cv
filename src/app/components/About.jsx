"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation';


const About = () => {
    

  return (
    <>
        <div className='text-primary mt-[10%]'>
            <h1 className='text-6xl text-white text-center'>About Me</h1>
            <div className='flex flex-col items-center gap-5 mt-5'>
            <TypeAnimation
            className='md:text-6xl text-4xl'
            sequence={[
                'Hi, I am Yusuf AL',
                1000,
                'Hi, I am Front-end Developer',
                1000
            ]}
            wrapper="span"
            speed={50}
            style={{ display: 'inline-block' }}
            repeat={Infinity}
            />
            <p className='text-white md:text-3xl text-xl leading-10'>As a new graduate with internship and voluntary practical experience, my passion lies in creating user-friendly front-end solutions for both
            web and mobile applications. I am eager to find a role that offers me the opportunity to further improve my skills and grow as a front-end
            developer.
            </p>
            <div className='flex flex-col'>
                <div className='flex mt-5 items-center w-60 bg-primary rounded-md justify-between px-2 py-1 text-black'>
                    <span className='font-bold'>Age:</span>
                    <span>23</span>
                </div>
                <div className='flex mt-5 items-center w-60 bg-primary rounded-md justify-between px-2 py-1 text-black'>
                    <span className='font-bold'>Residence:</span>
                    <span>Turkey</span>
                </div>
                <div className='flex mt-5 items-center w-60 bg-primary rounded-md justify-between px-2 py-1 text-black'>
                    <span className='font-bold'>Availability:</span>
                    <span>Open to Work</span>
                </div>
                <div className='flex mt-5 items-center w-60 bg-primary rounded-md justify-between px-2 py-1 text-black'>
                    <span className='font-bold'>Address:</span>
                    <span>Çekmeköy, İstanbul</span>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default About