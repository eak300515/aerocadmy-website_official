// src/components/HeroSection/HeroSection.jsx
import './HeroSection.css';
import HeroDrone from '/assets/hero-drone.mp4'; // use a drone-themed vector here

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Master the Skies with aerocadmy</h1>
        <p>Learn how to build, fly, and innovate with drones through hands-on, expert-led courses designed for the next generation of aerial pioneers.</p>
        <button className="cta-button">Explore Courses</button>
      </div>
      <div className="drone-video">
              <video src={HeroDrone} autoPlay loop muted playsInline />
            </div>
    </section>
  );
}
