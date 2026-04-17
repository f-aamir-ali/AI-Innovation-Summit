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
          Build real AI solutions for local businesses | 8 Volunteering Hours<br />Zero coding experience required.
        </p>

        <div className="hero-element mt-16 inline-block px-12 py-10 rounded-[2rem] bg-white/5 glass-3d-intensified text-white font-fredoka text-center lg:min-w-[400px]">
          <h3 className="text-primary font-norwester text-2xl md:text-3xl uppercase tracking-[0.2em] mb-4 opacity-80">Event Details</h3>
          <div className="h-[2px] w-12 bg-primary/40 mx-auto mb-6"></div>
          <div className="flex flex-col gap-4">
            <span className="text-xl md:text-2xl opacity-90 tracking-wide">Saturday, May 25th, 2026</span>
            <span className="text-xl md:text-2xl opacity-90 tracking-wide">9:00 AM - 5:00 PM</span>
            <span className="text-xl md:text-2xl opacity-90 tracking-wide">Fleetwood Park Secondary</span>
          </div>
        </div>

        <div className="hero-element mt-12 flex flex-col md:flex-row items-center gap-4">
          <button className="px-10 py-4 rounded-full glass-3d-primary text-white font-fredoka font-bold tracking-wider hover:scale-105 transition-all duration-300 text-lg">
            Register Now
          </button>

          <a
            href="/details.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 mb-2 rounded-full glass-3d-card text-white font-fredoka font-medium hover:bg-white/20 transition-all duration-300 text-lg"
          >
            More Details
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
