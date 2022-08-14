import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import './main-layout.scss'
import SideBar from '../components/SideBar/SideBar'
import NavBar from '../components/NavBar/NavBar'

const MainLayout = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
        <SideBar isOpen={isOpen} toggle={toggle}/>
        <div className='main'>
                <NavBar toggle={toggle}/>
            <div className="main__content">
                <Outlet />
            </div>
        </div>
    </>
  )
}

export default MainLayout