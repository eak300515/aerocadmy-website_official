import React from 'react';
import './LearningExperience.css';
import DroneJourneyVideo from '/assets/drone-journey.mp4'; // path to your video

const LearningExperience = () => {
  return (
    <section className="learning-experience">
      <div className="experience-content">
        <h2>Our Drone Learning Journey</h2>
        <div className="steps">
          <div className="step">
            <span>1</span>
            <p>Start with the basics: Learn drone theory and flight principles</p>
          </div>
          <div className="step">
            <span>2</span>
            <p>Interactive drone simulators & hands-on building exercises</p>
          </div>
          <div className="step">
            <span>3</span>
            <p>Fly real drones, complete missions, and explore aerial coding</p>
          </div>
          <div className="step">
            <span>4</span>
            <p>Build projects like delivery drones, FPV systems & AI tracking</p>
          </div>
        </div>
      </div>

      <div className="experience-video">
        <video src={DroneJourneyVideo} autoPlay loop muted playsInline />
      </div>
    </section>
  );
};

export default LearningExperience;
