// src/App.jsx
import './index.css';
import Header from './components/Header/Header';
import HeroSection from './components/HeroSection/HeroSection';
import WhyAerocadmy from './components/WhyAerocadmy/WhyAerocadmy';
import LearningExperience from './components/LearningExperience/LearningExperience';
import FeaturedCourses from './components/FeaturedCourses/FeaturedCourses';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Testimonials from './components/Testimonials/Testimonials';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <WhyAerocadmy />
      <LearningExperience />
      <FeaturedCourses />
      <HowItWorks />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
