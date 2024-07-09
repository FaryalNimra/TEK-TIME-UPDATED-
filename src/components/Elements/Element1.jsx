import React from 'react';
import './Element1.scss'; // Ensure the path is correct

const Element1 = () => {
  return (
    <div className="element1-container">
      <div className="image-container">
        <img src="/Assests/2t.png" alt="Image" className="element1-image" />
      </div>
      <div className="white-background">
        <div className="row">
          <div className="column">
            <img src="/Assests/Object (5).png" alt="MakeLess" className="column-image" />
          </div>
          <div className="column">
            <img src="/Assests/Object.png" alt="coworks" className="column-image" />
          </div>
          <div className="column">
            <img src="/Assests/Object (1).png" alt="greener" className="column-image" />
          </div>
          <div className="column">
            <img src="/Assests/Object (2).png" alt="SAAS" className="column-image" />
          </div>
          <div className="column">
            <img src="/Assests/Object (4).png" alt="askimat" className="column-image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Element1;
