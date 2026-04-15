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
    desc: "Live demos for the judges."
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
      // Draw the vertical line on scroll
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

      // Animate items as they come into view
      gsap.utils.toArray(".timeline-item").forEach((item) => {
        gsap.fromTo(item, 
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );

        // Dot pulse activation
        gsap.fromTo(item.querySelector(".timeline-dot-core"),
          { scale: 0.5, backgroundColor: "#162032" },
          {
            scale: 1.2,
            backgroundColor: "#3B82F6",
            duration: 0.5,
            scrollTrigger: {
              trigger: item,
              start: "top 85%",
              toggleActions: "play none none reverse"
            }
          }
        );
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="schedule" ref={containerRef} className="py-32 md:py-48 px-6 md:px-12 w-full max-w-5xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-norwester text-white mb-20 text-center tracking-wide">
        The 8-Hour Blueprint
      </h2>

      <div className="timeline-container relative pl-8 md:pl-16">
        {/* The Vertical Line Base */}
        <div className="absolute left-0 top-2 bottom-0 w-[2px] bg-white/5"></div>
        
        {/* The Progress Line (Drawn on Scroll) */}
        <div className="timeline-line-progress absolute left-0 top-2 bottom-0 w-[2px] bg-[#3B82F6] origin-top"></div>

        <div className="flex flex-col gap-16">
          {phases.map((phase, idx) => (
            <div key={idx} className="timeline-item relative">
              {/* Pulsing Dot */}
              <div className="absolute -left-[37px] md:-left-[69px] top-1 flex items-center justify-center">
                <div className="timeline-dot-core w-4 h-4 rounded-full bg-[#162032] border-2 border-[#3B82F6] z-10"></div>
                <div className="absolute w-4 h-4 rounded-full bg-[#3B82F6] opacity-30 animate-pulse"></div>
              </div>

              <div className="font-mono text-[#3B82F6] text-sm mb-2">{phase.time}</div>
              <h3 className="font-norwester text-2xl md:text-3xl text-white mb-2">{phase.title}</h3>
              <p className="font-poppins text-white/60 text-lg">{phase.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Protocol;
