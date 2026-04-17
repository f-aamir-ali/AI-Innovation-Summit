import React, { useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';


gsap.registerPlugin(ScrollTrigger);

const Roster = () => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Fade in section title
      gsap.from(".roster-title", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });

      // Scale/fade the main card
      gsap.from(cardRef.current, {
        scale: 0.95,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="roster" ref={containerRef} className="py-24 md:py-32 px-6 md:px-12 w-full max-w-6xl mx-auto relative z-10">

      {/* Section Heading */}
      <h2 className="roster-title font-norwester text-white text-5xl md:text-6xl text-center mb-16 tracking-widest ">
        Guest Speaker
      </h2>

      {/* Minimalist Glass Card */}
      <div
        ref={cardRef}
        className="w-full bg-[#162032]/60 backdrop-blur-xl rounded-[2rem] overflow-hidden flex flex-col relative"
        style={{ 
          boxShadow: 'inset 4px 4px 4px rgba(255, 255, 255, 0.25), inset -4px -4px 4px rgba(0, 0, 0, 0.4), 0px 12px 48px rgba(0, 0, 0, 0.5)',
          border: 'none'
        }}
      >
        <div className="relative w-full h-48 md:h-72 bg-[#1a2538] overflow-hidden">
          {/* Banner Placeholder Image */}
          <img
            src="/roster/banner-placeholder.jpg"
            alt="Speaker Banner"
            className="w-full h-full object-cover opacity-60 mix-blend-lighten"
          />
          {/* Liquid Glass Overlay (Physical Geometry) */}
          <div 
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              boxShadow: 'inset 4px 4px 4px rgba(255, 255, 255, 0.25), inset -4px -4px 4px rgba(0, 0, 0, 0.4)',
              borderRadius: 'inherit'
            }}
          />
        </div>

        {/* Content Area */}
        <div className="relative px-6 md:px-12 pb-12 pt-24 md:pt-32">

          {/* Circular Profile Image. Absolute positioned to overlap the banner. */}
          <div className="absolute -top-20 md:-top-32 left-6 md:left-12 w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)] z-30 ring-8 ring-[#162032] bg-[#162032]">
            <img
              src="/roster/profile-placeholder.jpg"
              alt="Marc Low"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Name, Bio, and Affiliations Flex Container */}
          <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mt-12 md:mt-16">

            {/* Left: Name and Title - Left-aligned below the image */}
            <div className="flex flex-col max-w-2xl">
              <h3 className="font-fredoka font-bold text-4xl md:text-5xl text-white mb-3 tracking-wide">
                Marc Low
              </h3>
              <p className="font-poppins text-white/90 text-lg md:text-xl font-medium leading-normal mb-1">
                Partner, Advisory (AI, Innovation and Emerging Tech) | AI Market Lead
              </p>
              <p className="font-poppins text-white/50 text-base md:text-lg">
                Keynote speaker
              </p>
            </div>

            {/* Right: Affiliations / Roles */}
            <div 
              className="flex flex-col gap-4 bg-white/5 p-6 rounded-2xl w-full lg:w-auto min-w-[300px] mt-4 lg:mt-0 lg:-translate-y-8"
              style={{ boxShadow: 'inset 2px 2px 2px rgba(255, 255, 255, 0.15), inset -2px -2px 2px rgba(0, 0, 0, 0.3)' }}
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#00338D] overflow-hidden flex items-center justify-center shrink-0 shadow-lg">
                  <img src="/roster/kpmg-logo.jpg" alt="KPMG" className="w-full h-full object-cover" />
                </div>
                <span className="font-poppins font-semibold text-white/90 text-base md:text-lg">KPMG Canada</span>
              </div>

              <div className="w-full h-[1px] bg-white/10 my-2"></div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-[#57068c] overflow-hidden flex items-center justify-center shrink-0 shadow-lg">
                  <img src="/roster/nyu-logo.jpg" alt="NYU Stern" className="w-full h-full object-cover" />
                </div>
                <span className="font-poppins font-semibold text-white/90 text-base md:text-lg">NYU Stern School of Business</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Roster;
