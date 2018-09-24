import React from 'react';

const Img = (props) => {
  return (
    <div>
    <img src= {props.photo} alt='' className="friends" />
    </div>
  );
};

export default Img;