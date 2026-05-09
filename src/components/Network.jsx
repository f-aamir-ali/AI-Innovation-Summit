import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const participatingClubs = [
  {
    name: "AI Club",
    school: "Fleetwood Park Secondary",
    igLink: "https://www.instagram.com/fpss_ai.club/",
    logoUrl: "/logos/fleetwood.png",
    description: "The founding chapter and lead organizers of the Surrey Youth AI Summit, dedicated to fostering a community of student innovators across the region."
  },
  {
    name: "AI Club",
    school: "Panorama Ridge Secondary",
    igLink: "https://www.instagram.com/prss_ai_club/",
    logoUrl: "/logos/prss.jpg",
    description: "The founding chapter and lead organizers of the Surrey Youth AI Summit, dedicated to fostering a community of student innovators across the region."
  },
  {
    name: "Coding Club",
    school: "North Surrey Secondary School",
    igLink: "https://www.instagram.com/nss_coding_club/",
    logoUrl: "/logos/north-surrey-coding.jpg",
    description: "Teaching students at North Surrey Secondary how to program, and collaborating to open up opportunities to those willing to learn more about innovation with AI."
  },
  {
    name: "CS Club",
    school: "Earl Marriott Secondary",
    igLink: null,
    logoUrl: "/logos/earl-marriott-cs.svg",
    description: "Empowering students to explore computer science and AI through hands-on projects and collaborative learning. Proud partners in bringing SYAIS to life."
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
          once: true,
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
      <h2 className="roster-element text-5xl md:text-6xl font-norwester text-white mb-20 text-center tracking-wide">
        Partner Clubs
      </h2>

      <div className="grid w-full grid-cols-1 gap-8 md:grid-cols-2">
        {participatingClubs.map((club, idx) => (
          <div
            key={idx}
            className="roster-element w-full bg-[#1E293B] glass-3d-intensified rounded-[2rem] p-10 flex flex-col min-h-[330px] md:min-h-[350px]"
          >
            {/* Header: Logo + Title/Subtitle */}
            <div className="flex items-center gap-6 mb-8">
              <div className="w-20 h-20 rounded-full bg-[#162032] border border-white/10 flex-shrink-0 flex items-center justify-center overflow-hidden">
                <img src={club.logoUrl} alt={`${club.school} Logo`} className="w-full h-full object-cover" />
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
              {club.description}
            </p>

            <div className="flex-grow"></div>

            {club.igLink && (
              <div className="mt-auto relative z-10">
                <a
                  href={club.igLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-lift inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full glass-3d-card text-white font-fredoka text-lg font-medium shadow-sm hover:bg-white/10 hover:shadow-[0_18px_34px_rgba(0,0,0,0.38)]"
                  aria-label={`${club.name} Instagram`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                  Instagram
                </a>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Network;
