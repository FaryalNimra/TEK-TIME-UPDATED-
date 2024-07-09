import React from 'react';
import './Element8.scss'; // Ensure the path is correct

const Element8 = () => {
  return (
    <div className="element8-container container">
      <div className="text-center">
        <p className="element8-paragraph">Why choose us</p>
        <h2 className="element8-heading">People choose us because we serve the <br />best for everyone</h2>
      </div>
      <div className="row">
        <div className="col-md-4">
          <div className="element8-content">
            <div className="d-flex align-items-center">
              <img src="/Assests/Icon.png" alt="Icon" className="img-fluidn" />
              <h3 className="element8-subheading">Associative</h3>
            </div>
            <p className="element8-subparagraph">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="element8-content">
            <div className="d-flex align-items-center">
              <img src="/Assests/Icon (1).png" alt="Icon" className="img-fluidn" />
              <h3 className="element8-subheading">Ecological</h3>
            </div>
            <p className="element8-subparagraph">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="element8-content">
            <div className="d-flex align-items-center">
              <img src="/Assests/Icon (2).png" alt="Icon" className="img-fluidn" />
              <h3 className="element8-subheading">Privacy</h3>
            </div>
            <p className="element8-subparagraph">With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Element8;
