import React from 'react';
import Heading from './Heading';
import Images from './Images';

function Card(props){                                                       // Use of props
    return (
      <>
      <div className = "cards">
        <div className = "card">
          <Images imgsrc = {props.imgsrc} />
          <div className = "card__info">
            <span className =" card__category"> {props.title}</span>        {/* Using the value through props */}
          <Heading sname = {props.sname} />                {/* Using the value through props */}
            <a href = {props.link} target = "blank" >                       {/* Using the value through props */}
              <button> Watch Now </button>
            </a>
          </div>
        </div>
      </div>
    </>
    );
  }

  export default Card;