import React from 'react';
import './App.css';
import logo from './cover/logo-cinema.jfif';
function Banner()  {
    const title = 'Cinema Home'
    return (
        
        <div className='banner'>
            <img src={logo} alt='Cinema' className='logo' />
            <h1 className='title'>{title}</h1>
        </div>
    )
  }
  export default Banner;