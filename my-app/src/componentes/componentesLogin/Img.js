import React from 'react';
import './Login.css'


const Img = (props) => {
  return (
    <div className='body'>
    <img src= {props.photo} alt='' className="Logo" />
    </div>
  );
};

export default Img;