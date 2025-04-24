import React from "react";
import "./HowItWorks.css";
import step1Icon from "/assets/step1.svg";
import step2Icon from "/assets/step2.svg";
import step3Icon from "/assets/step3.svg";
import step4Icon from "/assets/step4.svg";

const steps = [
  {
    icon: step1Icon,
    title: "Step 1: Learn the Basics",
    description: "Understand drone physics, safety, and basic operations.",
  },
  {
    icon: step2Icon,
    title: "Step 2: Hands-on Practice",
    description: "Use simulators & real drones for interactive learning.",
  },
  {
    icon: step3Icon,
    title: "Step 3: Build & Innovate",
    description: "Create real-world drone projects and apply your skills.",
  },
  {
    icon: step4Icon,
    title: "Step 4: Advanced Drone Applications",
    description: "Apply drone technology in real-world scenarios like mapping, delivery, and surveillance.",
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <h2>How It Works</h2>
      <div className="timeline">
        {steps.map((step, index) => (
          <div
            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
            key={index}
          >
            {/* Horizontal Line Connector */}
            <div className="connector"></div>

            <div className="content">
              <img src={step.icon} alt={step.title} className="step-icon" />
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
