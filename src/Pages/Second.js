import React from 'react';
import Sidebar from '../components/Sidebar';
import Dasb1 from '../components/Dasb1';
import Navbar from '../components/Navbar';
import './Second.css';

const Second = () => {
  return (

    <>
    <div className='secondPages'>
            <div className="navbar1">
              <Navbar/>
            </div>
    <div className="dashBoards">
        <div className="firtsDashBoard">
         <Sidebar/>
        </div>
        <div className="secondDashBoard">
        <Dasb1/>
        </div>
    </div>

    
    </div>
    </>
  )
}

export default Second