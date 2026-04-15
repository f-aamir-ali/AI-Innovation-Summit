import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const Hero = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".hero-element", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.2
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="hero" ref={containerRef} className="min-h-screen relative flex flex-col justify-center items-center overflow-hidden py-32 md:py-48 px-6 md:px-12 text-center">
      {/* Background with strictly enforced overlay */}
      <img 
        src="/hero.jpg" 
        alt="The Summit" 
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#162032]/30 via-[#162032]/60 to-[#162032]"></div>

      <div className="relative z-10 flex flex-col items-center">
        <h1 className="hero-element text-[clamp(4rem,10vw,8rem)] font-norwester text-white leading-tight">
          Surrey Youth AI Summit
        </h1>
        
        <p className="hero-element text-lg md:text-xl font-poppins text-white/80 mt-6 max-w-3xl">
          Build real AI solutions for local businesses | Add a massive project to your university portfolio | Zero coding experience required.
        </p>
        
        <div className="hero-element mt-16 inline-block px-12 py-10 rounded-[2rem] bg-white/10 backdrop-blur-md border border-white/20 text-white font-fredoka text-left">
          <div className="flex flex-col gap-4 border-l-4 border-[#3B82F6] pl-8">
            <span className="text-xl md:text-2xl opacity-90 tracking-wide">Saturday, May 30th, 2026</span>
            <span className="text-xl md:text-2xl opacity-90 tracking-wide">9:00 AM - 5:00 PM</span>
            <span className="text-xl md:text-2xl opacity-90 tracking-wide">Fleetwood Park Secondary</span>
          </div>
        </div>

        <button className="hero-element mt-12 px-8 py-4 rounded-full bg-gradient-to-br from-[#0058bc] to-[#0070eb] text-white font-medium tracking-wide hover:scale-[1.02] transition-transform duration-300 shadow-lg shadow-blue-900/20 text-lg">
          Register
        </button>
      </div>
    </section>
  );
};

export default Hero;
