import React, { useState, useEffect } from 'react';

import './styles/Counter.css'



//why I played with counter local storage that is bcs of I donot want to change the Counter even it it will refresh the page ever time .



const Counter = () => {
  // Initialize count state with the value from local storage or default to 0
  const [count, setCount] = useState(() => {
    const storedCount = localStorage.getItem('counter');
    return storedCount ? parseInt(storedCount) : 0;
  });




  // Update local storage whenever count changes
  useEffect(() => {
    localStorage.setItem('counter', count.toString());
  }, [count]);

  const increment = () => {
    setCount(prevCount => prevCount + 1);
  };

  const decrement = () => {
    setCount(prevCount => prevCount - 1);
  };

  return (
    <div className='counter'>
    <h1>If you like give me your unchanging heart , I can save for ever in this app </h1> 
         <h2>Total Hearts : {count}</h2>
      <button className='heartBtn' onClick={increment}>  <img  className='image' src="https://themayanagari.com/wp-content/uploads/2020/09/Heart-Png-Image-Free-download-7.png" alt="heart"  /></button>
     <button  className='likeBtn' onClick={decrement}>.</button> 
      
    </div>
  );
};

export default Counter ;
