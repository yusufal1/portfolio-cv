"use client"
import React, { useState } from 'react'
import Navbar from './Navbar'
import About from './About'
import Resume from './Resume'

const Home = () => {

    const [active, setActive] = useState(0)

    const handleTabClick = (tabIndex) => {
        setActive(tabIndex)
    }

  return (
    <div className='w-10/12 mx-auto'>
        <Navbar active={active} handleTabClick={handleTabClick}/>
        {active == 0 && <About/>}
        {active == 1 && <Resume/>}
        
    </div>
  )
}

export default Home