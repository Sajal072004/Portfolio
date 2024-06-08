import React from 'react';
import { Link } from 'react-scroll';

import './certificationCards.scss'; // Import SCSS file


const CertificationCards = ({ data }) => {
  return (
    <div className="certification-cards-container">
      {data.map((item) => (
        <a href= {`${item.link}`}  target = '_blank'  className="card" style={{ 
          backgroundImage: `url(/${item.src})`,
          backgroundSize: 'contain',  // Ensures the background image covers the entire card
          backgroundPosition: 'center',  // Centers the background image
          backgroundRepeat: 'no-repeat'  // Prevents the background image from repeating
        }}  >

        </a>
      ))}
    </div>
  );
};

export default CertificationCards;
