import React from 'react';
import './profile.css';

const Picture = (props) => {
  return (
    <div className="body">
    <img src= {props.photo} alt='' className="picture" />
    </div>
  );
};

export default Picture;