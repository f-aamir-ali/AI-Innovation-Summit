import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Mission = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".mission-text", {
        y: 60,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%",
          toggleActions: "play none none reverse"
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 md:py-48 px-6 md:px-12 bg-canvas relative z-10 w-full flex justify-center text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <h2 className="mission-text text-4xl md:text-6xl lg:text-7xl font-norwester text-white mb-8 tracking-wide leading-tight">
          Skip the flashcards.<br/>Build real impact.
        </h2>
        
        <p className="mission-text text-xl md:text-2xl font-poppins text-white/70 leading-relaxed max-w-3xl">
          You won't be building fake study apps. You will use drag-and-drop AI tools to solve real operational bottlenecks for local Surrey businesses and Non-Profit.
        </p>

        <div className="mission-text mt-16 w-1px h-32 bg-gradient-to-b from-primary to-transparent opacity-50"></div>
      </div>
    </section>
  );
};

export default Mission;
