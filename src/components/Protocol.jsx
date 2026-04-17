import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const phases = [
  {
    time: "09:00 AM - 10:00 AM",
    title: "Kickoff & No-Code Tool Training",
    desc: "We teach you everything."
  },
  {
    time: "10:00 AM - 03:00 PM",
    title: "The Build Phase",
    desc: "Brainstorm and prototype with your team."
  },
  {
    time: "03:00 PM - 04:00 PM",
    title: "The Science Fair Pitch",
    desc: "Judges will walk by your table for your demo"
  },
  {
    time: "04:00 PM - 05:00 PM",
    title: "Awards & Wrap-up",
    desc: "Celebrate and collect your prizes."
  }
];

const Protocol = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Draw the vertical logic
      gsap.fromTo(".timeline-line-progress",
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: ".timeline-container",
            start: "top 20%",
            end: "bottom 80%",
            scrub: true
          }
        }
      );

      // Staggered fade-in for cards
      gsap.from(".protocol-card", {
        x: -30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="schedule" ref={containerRef} className="py-32 md:py-48 px-6 md:px-12 w-full max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-norwester text-white mb-24 text-center tracking-wide">
        The 8-Hour Blueprint
      </h2>

      <div className="timeline-container relative pl-12 md:pl-20">
        {/* The Vertical Line Base */}
        <div className="absolute left-0 top-2 bottom-0 w-[2px] bg-white/5"></div>

        {/* The Progress Line (Drawn on Scroll) */}
        <div className="timeline-line-progress absolute left-0 top-2 bottom-0 w-[2px] bg-primary origin-top"></div>

        <div className="flex flex-col gap-12">
          {phases.map((phase, idx) => (
            <div key={idx} className="relative protocol-card">
              {/* Pulsing Dot Indicator */}
              <div className="absolute -left-[54px] md:-left-[86px] top-8 flex items-center justify-center">
                <div className="w-3 h-3 rounded-full bg-primary z-10 shadow-[0_0_15px_rgba(59,130,246,0.6)]"></div>
              </div>

              <div className="bg-[#162032] glass-3d-intensified rounded-[2rem] p-8 md:p-10 flex flex-col gap-4">
                <div className="flex justify-between items-center">
                  <span className="font-fredoka text-primary text-sm tracking-widest uppercase">Phase 0{idx + 1}</span>
                  <span className="font-fredoka text-white/50 text-base md:text-lg">{phase.time}</span>
                </div>

                <h3 className="font-fredoka text-2xl md:text-3xl font-semibold text-white tracking-wide">
                  {phase.title}
                </h3>

                <p className="font-poppins text-white/60 text-base leading-relaxed">
                  {phase.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Protocol;
