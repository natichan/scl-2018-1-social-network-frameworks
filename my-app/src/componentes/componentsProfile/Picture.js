import React from 'react';

const Picture = (props) => {
  return (
    <div>
    <img src= {props.photo} alt='' className='picture' />
    </div>
  );
};

export default Picture;