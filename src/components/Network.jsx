import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const participatingClubs = [
  {
    name: "AI Club",
    school: "Fleetwood Park Secondary",
    igLink: "https://www.instagram.com/fpss_ai.club/",
    logoUrl: "/logos/fleetwood.png"
  },
  {
    name: "AI Club",
    school: "Panorama Ridge Secondary",
    igLink: "https://www.instagram.com/prss_ai_club/",
    logoUrl: "/logos/prss.jpg"
  }
];

const Network = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Entrance Animation
      gsap.from(".roster-element", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom-=100",
          toggleActions: "play none none reverse",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        clearProps: "all"
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="network" ref={containerRef} className="py-32 md:py-48 px-6 md:px-12 w-full max-w-6xl mx-auto overflow-hidden">
      <h2 className="roster-element text-4xl md:text-5xl font-norwester text-white mb-20 text-center tracking-wide">
        The Static Roster
      </h2>

      <div className="flex flex-wrap justify-center gap-8 w-full">
        {participatingClubs.map((club, idx) => (
          <div
            key={idx}
            className="roster-element w-full md:w-[calc(50%-1rem)] max-w-[450px] bg-[#1E293B] glass-3d-intensified rounded-[2rem] p-10 flex flex-col h-full min-h-[350px]"
          >
            {/* Header: Logo + Title/Subtitle */}
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-full bg-[#162032] border border-white/10 flex-shrink-0 flex items-center justify-center overflow-hidden">
                {club.logoUrl ? (
                  <img src={club.logoUrl} alt={`${club.school} Logo`} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full bg-[#3B82F6]/20"></div> // Placeholder circle matching mockup
                )}
              </div>
              <div className="flex flex-col">
                <h3 className="font-poppins font-semibold text-2xl text-white tracking-wide">
                  {club.name}
                </h3>
                <p className="font-poppins text-white/50 text-sm mt-1">
                  {club.school}
                </p>
              </div>
            </div>

            {/* Body Text */}
            <p className="font-poppins text-white/70 text-base leading-relaxed mb-10">
              Please add your content here. Keep it short and simple. And smile :)
            </p>

            <div className="flex-grow"></div>

            {/* Bottom Action: Exact Pill Button */}
            <div className="mt-auto relative z-10">
              <a
                href={club.igLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full glass-3d-card transition-colors text-white font-fredoka text-lg font-medium shadow-sm hover:shadow-md"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
                Instagram
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Network;
