import React from 'react';
import './styles/Test.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import InfoIcon from '@mui/icons-material/Info';
import  mukesh from '../assets/mukesh.png';


const Test = () => {
  return (


    <div className="container">
      <div className="iconContainer"> 
      <NotificationsIcon fontSize="large" />
      </div>

      <div className="iconContainer">
      <InfoIcon  fontSize="large"/>
      </div>

      <div className="infoContainer">
      <span> 
      <p>MY Name is Mukesh</p>
      <p>Welcome Back</p> 
      </span>
      <img src={mukesh} alt="Mukesh" className="profileImage" /> 
      </div>

    </div>
  );
};

export default Test;
