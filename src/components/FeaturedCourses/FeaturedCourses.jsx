// src/components/FeaturedCourses/FeaturedCourses.jsx
import React, { useState } from 'react';
import './FeaturedCourses.css';
import beginnerIcon from '/assets/course-drone.svg';
import fpvIcon from '/assets/course-race.svg';
import aiIcon from '/assets/course-ai.svg';
import mappingIcon from '/assets/course-race.svg';
import deliveryIcon from '/assets/course-race.svg';
import buildIcon from '/assets/course-race.svg';

const FeaturedCourses = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [slideDirection, setSlideDirection] = useState('right');

  const slides = [
    [
      {
        icon: beginnerIcon,
        title: 'Drone Fundamentals',
        description: 'Master the basics of drone flight and safety.',
      },
      {
        icon: fpvIcon,
        title: 'FPV Flying & Racing',
        description: 'Experience the thrill of first-person drone racing.',
      },
      {
        icon: aiIcon,
        title: 'AI in Drones',
        description: 'Learn how drones use vision and AI to track & follow.',
      },
    ],
    [
      {
        icon: mappingIcon,
        title: 'Drone Mapping',
        description: 'Use drones for topographical and 3D mapping missions.',
      },
      {
        icon: deliveryIcon,
        title: 'Drone Delivery Systems',
        description: 'Explore drone logistics for smart delivery use-cases.',
      },
      {
        icon: buildIcon,
        title: 'Build Your Own Drone',
        description: 'Assemble, program, and test your own custom drone.',
      },
    ],
  ];

  const handleNext = () => {
    setSlideDirection('right');
    setSlideIndex((prev) => (prev + 1) % slides.length);
  };

  const handlePrev = () => {
    setSlideDirection('left');
    setSlideIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <section className="featured-courses">
      <h2>Explore Our Courses</h2>

      <div className="slider-controls">
        {slideIndex > 0 && (
          <button className="nav-arrow left" onClick={handlePrev}>
            &larr;
          </button>
        )}

        <div className={`course-grid slide-${slideDirection}`}>
          {slides[slideIndex].map((course, index) => (
            <div className="course-card" key={index}>
              <img src={course.icon} alt={course.title} className="course-icon" />
              <h3>{course.title}</h3>
              <p>{course.description}</p>
              <button className="learn-more-btn">Learn More</button>
            </div>
          ))}
        </div>

        {slideIndex < slides.length - 1 && (
          <button className="nav-arrow right" onClick={handleNext}>
            &rarr;
          </button>
        )}
      </div>
    </section>
  );
};

export default FeaturedCourses;
