import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const scrambleLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

const RandomRevealText = ({ text }) => {
  const [displayText, setDisplayText] = useState(text.replace(/[^\s]/g, ""));

  useEffect(() => {
    const indexes = text
      .split("")
      .map((char, index) => ({ char, index }))
      .filter(({ char }) => char !== " ")
      .map(({ index }) => index)
      .sort(() => Math.random() - 0.5);

    const revealed = new Set();
    let step = 0;

    const interval = window.setInterval(() => {
      if (step < indexes.length) {
        revealed.add(indexes[step]);
        step += 1;
      }

      const next = text
        .split("")
        .map((char, index) => {
          if (char === " ") return " ";
          if (revealed.has(index)) return char;
          return scrambleLetters[Math.floor(Math.random() * scrambleLetters.length)];
        })
        .join("");

      setDisplayText(next);

      if (revealed.size === indexes.length) {
        window.clearInterval(interval);
        setDisplayText(text);
      }
    }, 42);

    return () => window.clearInterval(interval);
  }, [text]);

  return <span>{displayText}</span>;
};

const Perks = () => {
  const containerRef = useRef(null);
  const countRef = useRef(null);
  const podiumRef = useRef(null);

  // Fluid, Glitch-Free Counter Logic via native GSAP DOM Update
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const obj = { value: 0 };

      gsap.to(obj, {
        value: 6,
        duration: 2.0,
        ease: "power2.out",
        scrollTrigger: {
          trigger: countRef.current,
          start: "top 90%",
          once: true
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
          once: true
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

  // Scholarship badge entrance
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".scholarship-badge", {
        y: 34,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".scholarship-badge",
          start: "top 88%",
          once: true
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="perks" ref={containerRef} className="py-32 md:py-48 px-6 md:px-12 w-full max-w-7xl mx-auto">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Card 1: 6 Volunteering Hours */}
        <div
          className="bg-[#4a8eed]/90 backdrop-blur-xl rounded-[3rem] p-10 relative overflow-hidden flex flex-col justify-between min-h-[340px]"
          style={{ 
            boxShadow: 'inset 4px 4px 4px rgba(255, 255, 255, 0.3), inset -4px -4px 4px rgba(0, 0, 0, 0.4), 0px 32px 64px rgba(0, 0, 0, 0.3)' 
          }}
        >
          <h3 className="font-fredoka font-bold text-3xl tracking-wide text-canvas text-center">6 Volunteering Hours</h3>
          <p className="font-fredoka font-semibold text-canvas/70 text-base mt-3 mb-8 text-center">Official school-authorized hours.</p>

          <div className="flex-1 flex items-center justify-center relative">
            <div className="relative z-10 flex items-center justify-center px-4">
              <span
                ref={countRef}
                className="liquid-glass-text font-norwester text-9xl md:text-[10rem] inline-block tabular-nums pr-4 relative z-20"
                style={{
                  fontVariantNumeric: 'tabular-nums',
                  letterSpacing: '-0.02em'
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
          className="bg-[#4a8eed]/90 backdrop-blur-md rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-between min-h-[300px]"
          style={{ boxShadow: 'inset 2px 2px 2px rgba(255, 255, 255, 0.6), inset -2px -2px 2px rgba(0, 0, 0, 0.15), 0 12px 48px rgba(0, 0, 0, 0.1)' }}
        >
          <div className="text-center">
            <h3 className="font-fredoka font-bold text-3xl tracking-wide text-canvas">Cash Prizes</h3>
            <p className="font-fredoka font-semibold text-canvas/70 text-base mt-3 mb-6">Real cash for top builders.</p>
          </div>

          <div className="flex-grow flex items-end justify-center gap-4 md:gap-8 mt-12 h-52 pb-4">
            {/* 2nd Place */}
            <div className="flex flex-col items-center gap-3">
              <span className="podium-reward font-fredoka font-semibold text-[#202b8c] text-xl z-10">$140</span>
              <div
                className="w-16 h-[100px] bg-[#3157f4] backdrop-blur-md rounded-[20px] podium-bar"
                style={{ boxShadow: 'inset 4px 4px 3px rgba(190, 209, 255, 0.58), inset -5px -5px 4px rgba(24, 36, 111, 0.55), 0 12px 24px rgba(16, 21, 69, 0.22)' }}
              ></div>
              <span className="font-fredoka font-semibold text-[#202b8c] tracking-wide text-base">Second</span>
            </div>

            {/* 1st Place */}
            <div className="flex flex-col items-center gap-3">
              <span className="podium-reward font-fredoka font-semibold text-[#101545] text-2xl z-10">$200</span>
              <div
                className="w-16 h-[140px] bg-gradient-to-br from-[#2a3b8c] via-[#101545] via-[40%] to-[#101545] backdrop-blur-md rounded-[20px] podium-bar"
                style={{ boxShadow: 'inset 3px 3px 3px rgba(255, 255, 255, 0.5), inset -3px -3px 3px rgba(0, 0, 0, 0.2), 0 10px 30px rgba(0, 0, 0, 0.1)' }}
              ></div>
              <span className="font-fredoka font-semibold text-[#101545] tracking-wide text-base">First</span>
            </div>

            {/* 3rd Place */}
            <div className="flex flex-col items-center gap-3">
              <span className="podium-reward font-fredoka font-semibold text-[#223fb5] text-xl z-10">$100</span>
              <div
                className="w-16 h-[70px] bg-gradient-to-br from-[#7c9bff] via-[#3157f4] via-[48%] to-[#18246f] backdrop-blur-md rounded-[20px] podium-bar"
                style={{ boxShadow: 'inset 3px 3px 3px rgba(255, 255, 255, 0.5), inset -3px -3px 3px rgba(0, 0, 0, 0.2), 0 10px 30px rgba(0, 0, 0, 0.1)' }}
              ></div>
              <span className="font-fredoka font-semibold text-[#223fb5] tracking-wide text-base">Third</span>
            </div>
          </div>
        </div>


        {/* Card 3: Scholarship */}
        <div
          className="bg-[#4a8eed]/90 backdrop-blur-md rounded-[2rem] p-8 relative overflow-hidden flex flex-col justify-between min-h-[300px]"
          style={{ boxShadow: 'inset 2px 2px 2px rgba(255, 255, 255, 0.6), inset -2px -2px 2px rgba(0, 0, 0, 0.15), 0 12px 48px rgba(0, 0, 0, 0.1)' }}
        >
          <div className="text-center">
            <h3 className="font-fredoka font-bold text-3xl tracking-wide text-canvas">Scholarship</h3>
            <p className="font-fredoka font-semibold text-canvas/70 text-base mt-3 md:whitespace-nowrap">Choose program of your choice</p>
          </div>

          <div className="flex flex-1 items-center justify-center py-8">
            <div
              className="scholarship-badge liquid-glass-accent relative flex h-44 w-44 items-center justify-center overflow-hidden rounded-[2rem] text-center"
            >
              <div className="relative z-10">
                <div className="font-norwester text-6xl leading-none text-white/90">1</div>
                <div className="mt-2 font-fredoka text-xl font-bold tracking-wider text-white/85">FULL YEAR</div>
                <div className="mt-3 font-poppins text-base font-bold uppercase tracking-[0.18em] text-white/70">GENERATION AI</div>
              </div>
            </div>
          </div>

          <p className="absolute bottom-4 right-5 font-poppins text-[10px] font-medium text-canvas/45">
            Terms and conditions apply*
          </p>
        </div>

      </div>

      <p className="mt-16 text-center font-norwester text-3xl md:text-4xl tracking-[0.14em] text-primary">
        <RandomRevealText text="FREE SNACKS AND DRINKS PROVIDED" />
      </p>

      {/* Liquid Glass Filter definitions for inside the number */}
      <svg width="0" height="0" className="absolute pointer-events-none opacity-0">
        <defs>
          <filter id="liquid-glass-inner-number" x="-20%" y="-20%" width="140%" height="140%">
            {/* Template-style liquid edge: no stroke, only internal light and recess. */}
            <feGaussianBlur in="SourceAlpha" stdDeviation="1.15" result="blur" />
            
            {/* LIGHT CATCH: Top-left refraction. */}
            <feOffset in="blur" dx="2" dy="2" result="offsetHighlight" />
            <feComposite in="SourceAlpha" in2="offsetHighlight" operator="out" result="highlightMask" />
            <feFlood floodColor="white" floodOpacity="0.32" result="whiteFlood" />
            <feComposite in="whiteFlood" in2="highlightMask" operator="in" result="innerHighlight" />

            {/* DARK RECESS: Bottom-right occlusion. */}
            <feOffset in="blur" dx="-2" dy="-2" result="offsetShadow" />
            <feComposite in="SourceAlpha" in2="offsetShadow" operator="out" result="shadowMask" />
            <feFlood floodColor="#071052" floodOpacity="0.34" result="blackFlood" />
            <feComposite in="blackFlood" in2="shadowMask" operator="in" result="innerShadow" />

            {/* Combine the original text with these internal lighting effects */}
            <feMerge>
              <feMergeNode in="SourceGraphic" />
              <feMergeNode in="innerHighlight" />
              <feMergeNode in="innerShadow" />
            </feMerge>
          </filter>
        </defs>
      </svg>
    </section>
  );
};

export default Perks;
