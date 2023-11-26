"use client"
import React from 'react'
import { TypeAnimation } from 'react-type-animation';


const About = () => {
    

  return (
    <>
        <div className='text-primary w-10/12 mx-auto mt-5 h-screen'>
            <h1 className='text-6xl text-white text-center'>About Me</h1>
            <div className='flex flex-col items-center gap-5'>
            <TypeAnimation
            sequence={[
                'Hi, I am Yusuf AL',
                1000,
                'Hi, I am Front-end Developer',
                1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '4em', display: 'inline-block' }}
            repeat={Infinity}
            />
            <p className='text-white text-3xl leading-10'>As a new graduate with internship and voluntary practical experience, my passion lies in creating user-friendly front-end solutions for both
            web and mobile applications. I am eager to find a role that offers me the opportunity to further improve my skills and grow as a front-end
            developer.
            </p>
            <div className='flex flex-col'>
                <div className='flex mt-5'>
                    <span className='bg-primary text-black px-2 py-1 rounded-md'>Age:</span>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default About