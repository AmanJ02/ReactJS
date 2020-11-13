import React from 'react';

const Images = (props) => {
    return <img 
    src = {props.imgsrc}                                            // Using the value through props
    alt="myPic" 
    className = "card__img" 
  />
};

export default Images;