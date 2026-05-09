import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Mic2, UsersRound } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const sponsorHighlights = [
  {
    title: "2 Scholarships",
    description: "Winners will have the opportunity to choose from eligible Generation AI programs.",
    Icon: Award
  },
  {
    title: "Guest Speaker",
    description: "Dr. Peter Ostafichuk, will speak about AI, innovation, and real-world learning.",
    Icon: Mic2
  },
  {
    title: "Mentors & Judges",
    description: "Generation AI staff will support teams through mentoring, workshop help, and project judging.",
    Icon: UsersRound
  }
];

const Sponsors = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".sponsor-element", {
        y: 28,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 78%",
          once: true
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="sponsor" ref={containerRef} className="w-full px-6 py-28 md:px-12 md:py-36">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <h2 className="sponsor-element font-norwester text-4xl tracking-wide text-white md:text-5xl">
          Education Partner & Prize Sponsor
        </h2>

        <div
          className="sponsor-element mt-12 w-full rounded-[2rem] bg-[#162032]/70 px-8 py-12 backdrop-blur-xl md:px-14 md:py-14"
          style={{
            boxShadow: 'inset 4px 4px 4px rgba(255, 255, 255, 0.22), inset -4px -4px 4px rgba(0, 0, 0, 0.36), 0px 18px 54px rgba(0, 0, 0, 0.34)',
            border: 'none'
          }}
        >
          <img
            src="/logos/generation-ai.jpg"
            alt="Generation AI Inc. logo"
            className="mx-auto h-24 w-24 rounded-full object-cover md:h-28 md:w-28"
          />

          <h3 className="mt-7 font-fredoka text-3xl font-bold tracking-wide text-white">
            Generation AI Inc.
          </h3>

          <div className="mx-auto mt-5 h-px w-24 bg-white/15"></div>

          <p className="mx-auto mt-6 max-w-3xl font-poppins text-base leading-relaxed text-white/70 md:text-lg">
            Generation AI Inc. is a Surrey-based AI education organization helping students
            build future-ready skills in artificial intelligence, coding, and technology.
          </p>

          <p className="mx-auto mt-4 max-w-3xl font-poppins text-base leading-relaxed text-white/70 md:text-lg">
            As our Official AI Education Partner & Prize Sponsor, Generation AI will support
            the summit through two student scholarships, a guest speaker, and 5-6 team members
            helping with mentorship, workshop support, and judging during the project showcase.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {sponsorHighlights.map(({ title, description, Icon }) => (
              <div
                key={title}
                className="flex flex-col items-center rounded-3xl bg-white/[0.055] p-5 text-center backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:bg-white/[0.08]"
                style={{
                  boxShadow: 'inset 2px 2px 3px rgba(255, 255, 255, 0.16), inset -3px -3px 4px rgba(0, 0, 0, 0.28), 0 14px 30px rgba(0, 0, 0, 0.2)'
                }}
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/20 text-primary">
                  {React.createElement(Icon, { size: 22, strokeWidth: 2.4 })}
                </div>
                <div className="flex flex-col items-center">
                  <h4 className="font-fredoka text-xl font-semibold text-white">
                    {title}
                  </h4>
                  <p className="mt-2 max-w-[14rem] font-poppins text-sm leading-relaxed text-white/62">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
