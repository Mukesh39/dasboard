import React from 'react';
import Dashb2 from '../components/Dashb2';
import Sidebar from '../components/Sidebar'; 
import './First.css';

const First = () => {
  return (
    <>
    <div className="first1">
     <div className='first1a'>
     <Dashb2/> 
     </div>
     <div className='first1b'>
     <Sidebar/>
     </div>
    </div>
    </>
  )
}

export default First ;

