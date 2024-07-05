import React from 'react';
import '../Style/CarsShowcase.css';

function CarsShowcase() {
    return (
      <div className="CarsShowcase">
        <div className="row">
          <div className="carBox">Car 1</div>
          <div className="carBox">Car 2</div>
        </div>
        <div className="row">
          <div className="carBox">Car 3</div>
          <div className="carBox">Car 4</div>
        </div>
      </div>
    );
  }
  
  export default CarsShowcase;
