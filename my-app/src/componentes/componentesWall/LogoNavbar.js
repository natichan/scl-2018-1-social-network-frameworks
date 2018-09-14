import React from 'react';
import './wall.css';

const Img = (props) => {
  return (
    <div className='body'>
    <img src= {props.photo} alt='' className="logo" />
    </div>
  );
};

export default Img;