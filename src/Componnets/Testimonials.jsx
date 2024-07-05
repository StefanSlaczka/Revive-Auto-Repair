import React from 'react';
import Slider from 'react-slick';
import '../Style/Testimonials.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Testimonials() {
    const testimonials = [
        { name: "John Doe", feedback: "Great service and amazing cars!" },
        { name: "Jane Smith", feedback: "Highly recommend this dealership." },
        { name: "Alice Johnson", feedback: "Wonderful experience from start to finish." },
        { name: "Michael Brown", feedback: "Best car buying experience I've ever had!" }
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    };

    return (
        <div className="Testimonials">
            <h2>Customer Testimonials</h2>
            <Slider {...settings}>
                {testimonials.map((testimonial, index) => (
                    <div key={index} className="testimonialSlide">
                        <p>"{testimonial.feedback}"</p>
                        <h4>- {testimonial.name}</h4>
                    </div>
                ))}
            </Slider>
        </div>
    );
}

export default Testimonials;
