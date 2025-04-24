// src/components/WhyAerocadmy/WhyAerocadmy.jsx
import './WhyAerocadmy.css';
import whyGraphic from '/assets/why-aerocadmy.svg'; // Replace with your SVG

export default function WhyAerocadmy() {
  return (
    <section className="why-section">
      <div className="why-image">
        <img src={whyGraphic} alt="Drone Learning Concept" />
      </div>
      <div className="why-content">
        <h2>Why aerocadmy?</h2>
        <p>
          At aerocadmy, we combine immersive drone simulations, real-world projects, and industry-expert guidance to help you gain practical UAV skills.
        </p>
        <ul>
          <li>🚀 Hands-on drone labs & flight missions</li>
          <li>🎓 Learn from certified drone instructors</li>
          <li>🌐 Courses aligned with global drone standards</li>
        </ul>
      </div>
    </section>
  );
}
