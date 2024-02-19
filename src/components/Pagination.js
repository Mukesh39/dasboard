import React from 'react';
import './styles/Pagination.css' ;
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const Pagination = () => {
 


  return (

    <div className="pagination">
      <button className='btn'
      >
      <ArrowBackIcon/>    
        </button>
      <ul className="pageMove">
        <ul><i className="fas fa-light fa-circle icon"></i></ul>
        <ul><i className="fas fa-solid fa-circle icon"></i></ul>
      </ul>
      <button className='btn'>
      <ArrowForwardIcon/>
      </button>
    </div>
  );
};

export default Pagination;