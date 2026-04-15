import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Perks from './components/Perks';
import Mission from './components/Mission';
import Protocol from './components/Protocol';
import Logistics from './components/Logistics';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

gsap.registerPlugin(ScrollTrigger);

function App() {
  const appRef = useRef();

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Global animations can be placed here
    }, appRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={appRef} className="min-h-screen bg-canvas selection:bg-primary/30 selection:text-white">
      <Navbar />
      <Hero />
      <Perks />
      <Mission />
      <Protocol />
      <Logistics />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
