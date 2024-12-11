import logo from './logo.svg';
import './App.css';
import Header from './Components/header';
import Profile from './Components/profile';
import { useState, useEffect } from 'react';

function App() {



  return (
    <div className="App">
      <div className='mx-10 my-10 mb-10'>
        <Header />
        <div className=' sm:grid sm:grid-cols-[2fr_3fr] gap-8 w-full mt-10 h-screen '  >
          <div className="mb-3 sm:mb-6 " style={{ flex: 1 }}>
            <img
              src="images/map.png"
              alt="oops"
              className="w-full h-full object-cover rounded-lg sm:min-w-[600px] "
              style={{ flex: 1 }}
            />
          </div>
          <div className='mb-3 sm:mb-6'>
            <Profile />
          </div>

        </div>
      </div>
    </div>
  );
}

export default App;
