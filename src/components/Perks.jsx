import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Perks = () => {
  const containerRef = useRef(null);
  const stackerRef = useRef(null);
  const emanateRef = useRef(null);
  const countRef = useRef(null);
  const podiumRef = useRef(null);

  // Fluid, Glitch-Free Counter Logic via native GSAP DOM Update
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const obj = { value: 0 };

      gsap.to(obj, {
        value: 8,
        duration: 2.0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: countRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse"
        },
        onUpdate: () => {
          if (countRef.current) {
            countRef.current.textContent = Number(obj.value).toFixed(1);
          }
        },
        onComplete: () => {
          gsap.fromTo(".emanate-ring",
            { scale: 0.8, opacity: 1 },
            {
              scale: 3,
              opacity: 0,
              duration: 1.2,
              ease: "expo.out",
              stagger: 0.15
            }
          );
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);


  // Podium Animation for Card 2
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: podiumRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });

      tl.fromTo(".podium-bar",
        { scaleY: 0, transformOrigin: "bottom" },
        {
          scaleY: 1,
          stagger: 0.15,
          duration: 1.2,
          ease: "back.out(1.5)"
        }
      )
        .fromTo(".podium-reward",
          { opacity: 0, y: 10 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: "power2.out"
          },
          "<0.2" // Start slightly after the bar growth begins
        );
    }, podiumRef);
    return () => ctx.revert();
  }, []);

  // Card 3 Food Pop Animation with GSAP
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Set initial scale and opacity off-screen
      gsap.set(".food-pop-item", { scale: 0, opacity: 0, transformOrigin: "center center" });

      // Animate ONLY scale and opacity, preserving the intrinsic Tailwind rotations
      gsap.to(".food-pop-item", {
        scale: 1,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: stackerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse"
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="perks" ref={containerRef} className="py-32 md:py-48 px-6 md:px-12 w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Card 1: 8 Volunteering Hours */}
        <div
          className="bg-[#e2e6be]/90 backdrop-blur-md rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-between min-h-[300px]"
          style={{ boxShadow: 'inset 2px 2px 2px rgba(255, 255, 255, 0.6), inset -2px -2px 2px rgba(0, 0, 0, 0.15), 0 12px 48px rgba(0, 0, 0, 0.1)' }}
        >
          <h3 className="font-fredoka font-bold text-2xl text-canvas">8 Volunteering Hours</h3>
          <p className="font-poppins text-canvas/70 text-sm mt-2 mb-8">Official school-authorized hours.</p>

          <div className="flex-1 flex items-center justify-center relative">
            <div className="relative z-10 flex items-center justify-center px-4">
              <span
                ref={countRef}
                className="font-norwester text-8xl md:text-9xl bg-gradient-to-br from-[#3E2723] to-[#5D4037] bg-clip-text text-transparent inline-block tabular-nums pr-4"
                style={{
                  fontVariantNumeric: 'tabular-nums',
                  filter: 'drop-shadow(-3px -3px 0px rgba(255,255,255,0.6)) drop-shadow(3px 3px 0px rgba(0,0,0,0.2))'
                }}
              >
                0.0
              </span>
            </div>

            {/* Fluid Emanate Rings */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="emanate-ring absolute w-32 h-32 border-2 border-[#3B82F6]/30 rounded-full opacity-0"></div>
              <div className="emanate-ring absolute w-32 h-32 border border-[#3B82F6]/20 rounded-full opacity-0"></div>
              <div className="emanate-ring absolute w-32 h-32 border border-[#3B82F6]/10 rounded-full opacity-0"></div>
            </div>
          </div>
        </div>

        {/* Card 2: Cash Prizes - The Figma Podium */}
        <div
          ref={podiumRef}
          className="bg-[#e2e6be]/90 backdrop-blur-md rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-between min-h-[300px]"
          style={{ boxShadow: 'inset 2px 2px 2px rgba(255, 255, 255, 0.6), inset -2px -2px 2px rgba(0, 0, 0, 0.15), 0 12px 48px rgba(0, 0, 0, 0.1)' }}
        >
          <div>
            <h3 className="font-fredoka font-bold text-2xl text-canvas">Cash Prizes</h3>
            <p className="text-canvas/70 text-sm mt-2 mb-6">Real cash for top builders.</p>
          </div>

          <div className="flex-grow flex items-end justify-center gap-4 md:gap-8 mt-12 h-52 pb-4">
            {/* 2nd Place */}
            <div className="flex flex-col items-center gap-3">
              <span className="podium-reward font-inter font-bold text-[#5D4037] text-lg z-10">$80</span>
              <div
                className="w-16 h-[100px] bg-[#5D4037]/20 backdrop-blur-md rounded-[20px] podium-bar"
                style={{ boxShadow: 'inset 3px 3px 3px rgba(255, 255, 255, 0.5), inset -3px -3px 3px rgba(0, 0, 0, 0.2), 0 10px 30px rgba(0, 0, 0, 0.1)' }}
              ></div>
              <span className="font-inter font-bold text-[#5D4037]/50 tracking-wide text-sm">Second</span>
            </div>

            {/* 1st Place */}
            <div className="flex flex-col items-center gap-3">
              <span className="podium-reward font-inter font-bold text-[#3E2723] text-xl z-10">$100</span>
              <div
                className="w-16 h-[140px] bg-[#3E2723]/30 backdrop-blur-md rounded-[20px] podium-bar"
                style={{ boxShadow: 'inset 3px 3px 3px rgba(255, 255, 255, 0.5), inset -3px -3px 3px rgba(0, 0, 0, 0.2), 0 10px 30px rgba(0, 0, 0, 0.1)' }}
              ></div>
              <span className="font-inter font-bold text-[#3E2723]/70 tracking-wide text-sm">First</span>
            </div>

            {/* 3rd Place */}
            <div className="flex flex-col items-center gap-3">
              <span className="podium-reward font-inter font-bold text-[#8D6E63] text-lg z-10">$60</span>
              <div
                className="w-16 h-[70px] bg-[#8D6E63]/20 backdrop-blur-md rounded-[20px] podium-bar"
                style={{ boxShadow: 'inset 3px 3px 3px rgba(255, 255, 255, 0.5), inset -3px -3px 3px rgba(0, 0, 0, 0.2), 0 10px 30px rgba(0, 0, 0, 0.1)' }}
              ></div>
              <span className="font-inter font-bold text-[#8D6E63]/60 tracking-wide text-sm">Third</span>
            </div>
          </div>
        </div>


        {/* Card 3: Free Food & Drinks */}
        <div
          className="bg-[#e2e6be]/90 backdrop-blur-md rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-between min-h-[300px]"
          ref={stackerRef}
          style={{ boxShadow: 'inset 2px 2px 2px rgba(255, 255, 255, 0.6), inset -2px -2px 2px rgba(0, 0, 0, 0.15), 0 12px 48px rgba(0, 0, 0, 0.1)' }}
        >
          <div>
            <h3 className="font-fredoka font-bold text-2xl text-canvas">Free Food & Drinks</h3>
            <p className="font-poppins text-canvas/70 text-sm mt-2">Fuel the build.</p>
          </div>

          <div className="relative flex-grow min-h-[220px] w-full mt-8">
            <img src="/food/cookie.png" alt="Cookie" className="food-pop-item drop-shadow-2xl absolute top-0 left-[5%] w-24 md:w-28 z-10 -rotate-12" />
            <img src="/food/pizza.png" alt="Pizza" className="food-pop-item drop-shadow-2xl absolute top-[10%] right-[-5%] w-28 md:w-32 z-10 rotate-12" />
            <img src="/food/juice.png" alt="Juice Box" className="food-pop-item drop-shadow-2xl absolute bottom-[5%] left-[10%] w-20 md:w-24 z-20 -rotate-3" />
            <img src="/food/donut.png" alt="Donut" className="food-pop-item drop-shadow-2xl absolute bottom-0 right-[10%] w-24 md:w-28 z-30 rotate-6" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Perks;
