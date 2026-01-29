
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Location from './components/Location';
import Footer from './components/Footer';
import MobileStickyBar from './components/MobileStickyBar';

/**
 * DASAN - DESIGN TOKENS (FRESH DENTAL BOUTIQUE)
 * -----------------------------------------------
 * Background Main: #F5EFE7
 * Cards Background: #FFFFFF
 * Text Primary: #2F2F2F
 * Text Secondary: #6F6F6F
 * Brand Accent: #11B7B5
 * Hover Accent: #0E8F8D
 * Dark Neutral: #3A4A4F
 */

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen bg-[#F5EFE7]">
      <Navbar scrolled={scrolled} />
      
      <main>
        <Hero />
        <Services />
        <About />
        <FAQ />
        <Contact />
        <Location />
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
};

export default App;
