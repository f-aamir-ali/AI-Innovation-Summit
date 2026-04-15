import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Perks = () => {
  const containerRef = useRef(null);
  const stackerRef = useRef(null);
  const emanateRef = useRef(null);
  const countRef = useRef(null);
  const [terminalText, setTerminalText] = useState('');
  const fullText = "1st Place: $100\n2nd Place: $80\n3rd Place: $60.";

  // Fluid, Glitch-Free Counter Logic via native GSAP DOM Update
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const obj = { value: 0 };
      
      gsap.to(obj, {
        value: 8,
        duration: 2.0,
        ease: "power2.out",
        repeat: -1,
        repeatDelay: 1.5,
        scrollTrigger: {
          trigger: countRef.current,
          start: "top 90%",
          toggleActions: "play none none none"
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


  // Terminal Typing for Card 2
  useEffect(() => {
    let currentIdx = 0;
    let typeInterval = setInterval(() => {
      if (currentIdx <= fullText.length) {
        setTerminalText(fullText.slice(0, currentIdx));
        currentIdx++;
      } else {
        setTimeout(() => { currentIdx = 0; }, 3000); // loop
      }
    }, 50);
    return () => clearInterval(typeInterval);
  }, []);

  // Animations with GSAP
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Professional Stack Distribution Logic
      gsap.fromTo(".stack-pill",
        { y: 40, opacity: 0, scale: 0.9 },
        { 
          y: (i) => -i * 55, // Explicitly calculated to prevent overlap based on pill height
          opacity: 1, 
          scale: 1,
          duration: 1.2, 
          stagger: 0.1,
          ease: "elastic.out(1, 0.8)",
          repeat: -1,
          repeatDelay: 1.5,
          scrollTrigger: {
            trigger: stackerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="perks" ref={containerRef} className="py-32 md:py-48 px-6 md:px-12 w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1: 8 Volunteering Hours */}
        <div className="bg-[#f4f4ef] rounded-2xl p-8 border border-[#1a1c19]/10 relative overflow-hidden flex flex-col justify-between min-h-[300px]">
          <h3 className="font-norwester text-2xl text-[#1a1c19]">8 Volunteering Hours</h3>
          <p className="font-poppins text-[#1a1c19]/70 text-sm mt-2 mb-8">Official school-authorized hours.</p>
          
          <div className="flex-1 flex items-center justify-center relative">
            <div className="relative z-10 flex items-center justify-center">
              <span 
                ref={countRef}
                className="font-norwester text-8xl md:text-9xl tracking-tighter bg-gradient-to-br from-[#3B82F6] to-[#60A5FA] bg-clip-text text-transparent inline-block tabular-nums"
                style={{ fontVariantNumeric: 'tabular-nums' }}
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

        {/* Card 2: Cash Prizes */}
        <div className="bg-[#f4f4ef] rounded-2xl p-8 border border-[#1a1c19]/10 relative overflow-hidden flex flex-col justify-between min-h-[300px]">
          <div>
            <h3 className="font-norwester text-2xl text-[#1a1c19]">Cash Prizes</h3>
            <p className="font-poppins text-[#1a1c19]/70 text-sm mt-2 mb-6">Real cash for top builders.</p>
          </div>
          
          <div className="bg-[#1a1c19] rounded-xl p-6 text-white font-mono flex-1 relative flex flex-col">
            <div className="flex items-center gap-2 mb-4 border-b border-white/10 pb-2">
              <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
              <span className="text-xs text-white/50 tracking-widest uppercase">sys.prizes</span>
            </div>
            <div className="whitespace-pre flex-1 text-green-400 text-sm leading-relaxed">
              {terminalText}
              <span className="animate-pulse inline-block w-2 bg-green-400 ml-1 h-4 align-middle"></span>
            </div>
          </div>
        </div>

        {/* Card 3: Free Food & Drinks */}
        <div className="bg-[#f4f4ef] rounded-2xl p-8 border border-[#1a1c19]/10 relative overflow-hidden flex flex-col justify-between min-h-[300px]" ref={stackerRef}>
          <div>
            <h3 className="font-norwester text-2xl text-[#1a1c19]">Free Food & Drinks</h3>
            <p className="font-poppins text-[#1a1c19]/70 text-sm mt-2 mb-12">Fuel the build.</p>
          </div>

          <div className="relative flex-1 flex flex-col items-center justify-end pb-12">
            {/* Normalized origin point (bottom-6) for all pills to prevent distribution conflicts */}
            <div className="stack-pill absolute z-30 bottom-6 w-[80%] bg-[#1a1c19] text-white py-3 px-6 rounded-full text-center font-medium shadow-xl border border-white/10 text-sm">
              Free Lunch
            </div>
            <div className="stack-pill absolute z-20 bottom-6 w-[88%] bg-[#1a1c19]/90 backdrop-blur-sm text-white py-3 px-6 rounded-full text-center font-medium shadow-lg border border-white/10 text-sm">
              Free Drinks
            </div>
            <div className="stack-pill absolute z-10 bottom-6 w-[96%] bg-[#1a1c19]/80 backdrop-blur-md text-white py-3 px-6 rounded-full text-center font-medium shadow-md border border-white/10 text-sm">
              Free Snacks
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Perks;
