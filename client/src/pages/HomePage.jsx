import React from 'react';
import HeroSection from '../components/sections/HeroSection';  // Adjust the import path if necessary
import AboutSection from '../components/sections/AboutSection';
import TechStack from '../components/sections/TechStack';
import Navbar from '../components/navbar/Navbar'

function Homepage() {
  return (
    <div>
      <Navbar />
      {/* HeroSection is placed here */}
      <HeroSection>
        {/* Add any content you want to display over the canvas */}
      </HeroSection>
      <AboutSection />
      <TechStack />
    </div>
  );
}

export default Homepage;
