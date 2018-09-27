import React from 'react';
import './friends.css'

const Img = (props) => {
  return (
    <div>
    <img src= {props.photo} alt='' className="friends " />
    </div>
  );
};

export default Img;