import React, { useState } from "react";
import "./Testimonials.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const testimonials = [
  {
    name: "Aarav Mehta",
    quote: "Aerocadmy's drone courses are game-changing! The hands-on approach helped me build and fly my own drone.",
    image: "/assets/testimonial1.svg",
  },
  {
    name: "Sarah Johnson",
    quote: "The AI drone module was incredible! I now understand how drones use vision and automation.",
    image: "/assets/testimonial1.svg",
  },
  {
    name: "Rohan Sharma",
    quote: "From beginner to pro! Aerocadmy made drone learning engaging and super practical.",
    image: "/assets/testimonial1.svg",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="testimonials">
      <h2>What Our Students Say</h2>
      <div className="testimonial-card">
        <img src={testimonials[currentIndex].image} alt={testimonials[currentIndex].name} />
        <p>"{testimonials[currentIndex].quote}"</p>
        <h3>- {testimonials[currentIndex].name}</h3>
      </div>
      <div className="testimonial-controls">
        <button onClick={prevTestimonial}>
          <FaChevronLeft />
        </button>
        <button onClick={nextTestimonial}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Testimonials;
