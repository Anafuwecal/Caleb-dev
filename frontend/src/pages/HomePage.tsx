import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import ServicesSection from '../components/sections/ServicesSection';
import PortfolioSection from '../components/sections/PortfolioSection';
import TestimonialsSection from '../components/sections/TestimonialsSection';

const HomePage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Caleb Anafuwe | AI Engineer, Full-Stack Developer & Graphic Designer</title>
        <meta
          name="description"
          content="Caleb Anafuwe is an AI Engineer, Full-Stack Web Developer, and Graphic Designer based in Nigeria. Specializing in machine learning, React, Node.js, and creative design solutions."
        />
        <meta
          name="keywords"
          content="AI Engineer, Full-Stack Developer, Graphic Designer, React, Node.js, Machine Learning, Nigeria"
        />
        <link rel="canonical" href="https://calebanafuwe.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Caleb Anafuwe | AI Engineer & Full-Stack Developer" />
        <meta property="og:description" content="AI Engineer, Full-Stack Developer, and Graphic Designer crafting digital experiences." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://calebanafuwe.com" />
        <meta property="og:image" content="https://calebanafuwe.com/assets/images/logo.svg" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Caleb Anafuwe | AI Engineer & Full-Stack Developer" />
        <meta name="twitter:description" content="AI Engineer, Full-Stack Developer, and Graphic Designer." />
        <meta name="twitter:image" content="https://calebanafuwe.com/assets/images/og-image.jpg" />
      </Helmet>

      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
    </>
  );
};

export default HomePage;