import React from 'react';

import './horizontal.scss'; // Import SCSS file


const HorizontalCards = ({ data }) => {
  return (
    <div className="horizontal-cards-container">
      {data.map((item) => (
        <div  className="card">
          <img src= {`${item.src}`} alt="" />
          <div className="card-title">{item.title}</div>
          
        </div>
      ))}
    </div>
  );
};

export default HorizontalCards;
