import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
  const containerRef = useRef(null);
  const missionRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Central Text Animation
      gsap.from(".mission-text", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: missionRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="mission" ref={containerRef} className="bg-canvas relative z-10 w-full overflow-hidden">
      <div ref={missionRef} className="relative w-full max-w-7xl mx-auto py-12 md:py-16 px-6 flex flex-col items-center justify-center overflow-hidden">
        
        {/* Text Stack (Center) */}
        <div className="z-10 relative max-w-4xl text-center flex flex-col gap-8">
          <h2 className="mission-text font-norwester text-white text-[clamp(2.5rem,8vw,5.5rem)] leading-[1.1] tracking-wide">
            SKIP THE FLASHCARDS.<br />
            BUILD REAL IMPACT.
          </h2>
          
          <p className="mission-text font-poppins text-white/70 text-lg md:text-2xl leading-relaxed max-w-3xl mx-auto">
            You won't be building fake study apps. You will use drag-and-drop AI tools to solve real operational bottlenecks for local Surrey businesses and Non-Profit.
          </p>
        </div>

        <div className="mission-text mt-12 w-[2px] h-12 bg-gradient-to-b from-primary to-transparent opacity-30"></div>
      </div>
    </section>
  );
};

export default Mission;
