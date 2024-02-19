import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import './styles/Sidebar.css';
import { Button } from 'react-bootstrap';
import upload from '.././assets/Upload.png'



const sidebar = () => {
  return (
    <div className='sidebarContainer'>
    <div className="dropDown">
    <div className="dropDownbutton1">
            <Dropdown className='dropDown1'>
            <Dropdown.Toggle className='toggle'  id="dropdown-basic">
                Events
            </Dropdown.Toggle>

            <Dropdown.Menu className='dropDownmenu1'>
                <Dropdown.Item href="#/action-1">New Request</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Estimate </Dropdown.Item>
                <Dropdown.Item href="#/action-3">Events</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Partial Request</Dropdown.Item>
            </Dropdown.Menu>
            </Dropdown>  
            </div> 

            <div className="positions">
            <p>Positions</p>
            </div>

            <div className="contractors">
            <p>Contractors</p>
            </div>
            
            
            <div className="dropDownbutton2">
                <Dropdown  className='dropDown2'>
                <Dropdown.Toggle className='toggle' id="dropdown-basic">
                    Users
                </Dropdown.Toggle>

                <Dropdown.Menu  className='dropDownmenu2'>
                    <Dropdown.Item >Admin </Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Clients</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Coordinators</Dropdown.Item>
                </Dropdown.Menu>
                </Dropdown>  
            </div> 

            <div className="profiles">
            <p>Profiles</p>
            </div>
            
            </div>

            <div className="logoutButton">
                    <Button className='btn' variant="danger">
                      <img src={upload} alt="btn" /> Logout
                    </Button>
            </div>

            </div>
   
  )
}

export default sidebar