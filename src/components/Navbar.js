import React from 'react';
import './styles/Navbar.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InfoIcon from '@mui/icons-material/Info';
import Ellipse1 from '../assets/Ellipse1.png';

const Navbar = () => {
  return (
    <div className="container">
      <div className="iconContainer"> 
        <NotificationsIcon className='fontIcon' fontSize="large" />
      </div>

      <div className="iconContainer">
        <InfoIcon  className='fontIcon' fontSize="large"/>
      </div>

      <div className="infoContainer">
        <span> 
          <p>MY Name is Mukesh</p>
          <p>Welcome Back</p> 
        </span>
        <img src={Ellipse1} alt="Mukesh" className="profileImage" /> 
      </div>
    </div>
  );
};

export default Navbar;
