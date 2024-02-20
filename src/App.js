import './App.css';
import Second from './Pages/Second';
import First from './Pages/First';
import Counter from './components/Counter' ;

import React from 'react';

const App = () => {
  return (
    <>
    <div className="App">
       <Second/>
       <First/>
       <Counter/>
       </div>
     </>
  );
};

export default App;
