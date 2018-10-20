import React from 'react';
import './friends.css'

const Img = (props) => {
  return (
    <div>
    <img src= {props.photo} alt=''/>
    </div>
  );
};

export default Img;