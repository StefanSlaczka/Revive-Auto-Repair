import React from 'react';
import '../Style/CarsShowcase.css';

import carImage1 from '../Style/CarImages/2011-Ford-Ranger-1-e1643705775100.jpg';
import carImage2 from '../Style/CarImages/438080018_470417839010479_2784950718894927336_n.jpg';
import carImage3 from '../Style/CarImages/448794735_1431904137461464_5485682079997354381_n.jpg';
import carImage4 from '../Style/CarImages/449695697_1639521453549160_3605511861775721669_n.jpg';

function CarsShowcase() {
    const cars = [
        { title: "2011 Ford Ranger", price: "$15,000", image: carImage1 },
        { title: "2004 Mazda 6 wagon", price: "$5,000", image: carImage2 },
        { title: "1997 Ford escort", price: "$4,500", image: carImage3 },
        { title: "2008 Nissan altima 3.5 SE Coupe 2D", price: "$10,000", image: carImage4 },
    ];

    return (
      <div className="CarsShowcase">
        <div className="row">
          {cars.slice(0, 2).map((car, index) => (
            <div className="carBox" key={index}>
              <img src={car.image} alt={car.title} className="carImage" />
              <h3>{car.title}</h3>
              <p>{car.price}</p>
            </div>
          ))}
        </div>
        <div className="row">
          {cars.slice(2, 4).map((car, index) => (
            <div className="carBox" key={index}>
              <img src={car.image} alt={car.title} className="carImage" />
              <h3>{car.title}</h3>
              <p>{car.price}</p>
            </div>
          ))}
        </div>
      </div>
    );
}

export default CarsShowcase;
