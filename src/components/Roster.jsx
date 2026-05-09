import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const fallbackImage = "/roster/banner-placeholder.jpg";

const speakerDetails = {
  name: "Dr. Peter Ostafichuk",
  title: "PhD (UBC)",
  role: "Co-founder at Generation AI Inc. | Professor of Teaching, The University of British Columbia",
  details: "Dr. Peter Ostafichuk is a Professor of Teaching in the Department of Mechanical Engineering at the University of British Columbia (UBC). He currently serves as the Chair of First-Year Engineering, where he has been instrumental in redesigning the first-year curriculum to provide students with a comprehensive introduction to the engineering profession. Dr. Ostafichuk's dedication to engineering education has been recognized through several prestigious awards, including the Engineers Canada Medal for Distinction in Engineering Education in 2023 and the 3M Teaching Fellowship in 2015. He was also named an inaugural Fellow of the Canadian Engineering Education Association (CEEA-ACEG) in 2020.",
  photo: "/roster/peter-ostafichuk.jpg",
  banner: "/roster/peter-banner.jpg"
};

const handleImageFallback = (event) => {
  event.currentTarget.onerror = null;
  event.currentTarget.src = fallbackImage;
};

const Roster = () => {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const [showDetails, setShowDetails] = useState(false);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".roster-title", {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 85%",
          once: true
        }
      });

      gsap.from(cardRef.current, {
        scale: 0.95,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 80%",
          once: true
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!showDetails) return undefined;

    const handleEscape = (event) => {
      if (event.key === 'Escape') {
        setShowDetails(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [showDetails]);

  return (
    <section id="roster" ref={containerRef} className="py-24 md:py-32 px-6 md:px-12 w-full max-w-6xl mx-auto relative z-10">
      <h2 className="roster-title font-norwester text-white text-5xl md:text-6xl text-center mb-16 tracking-widest">
        Guest Speaker
      </h2>

      <div
        ref={cardRef}
        className="w-full bg-[#162032]/60 backdrop-blur-xl rounded-[2rem] overflow-hidden flex flex-col relative"
        style={{
          boxShadow: 'inset 4px 4px 4px rgba(255, 255, 255, 0.25), inset -4px -4px 4px rgba(0, 0, 0, 0.4), 0px 12px 48px rgba(0, 0, 0, 0.5)',
          border: 'none'
        }}
      >
        <div className="relative w-full h-48 md:h-72 bg-[#1a2538] overflow-hidden">
          <img
            src={speakerDetails.banner}
            onError={handleImageFallback}
            alt="Speaker Banner"
            className="w-full h-full object-cover opacity-60 mix-blend-lighten"
          />
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              boxShadow: 'inset 4px 4px 4px rgba(255, 255, 255, 0.25), inset -4px -4px 4px rgba(0, 0, 0, 0.4)',
              borderRadius: 'inherit'
            }}
          />
        </div>

        <div className="relative px-6 md:px-12 pb-12 pt-24 md:pt-32">
          <div className="absolute -top-20 md:-top-32 left-6 md:left-12 w-40 h-40 md:w-60 md:h-60 rounded-full overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)] z-30 ring-8 ring-[#162032] bg-[#162032]">
            <img
              src={speakerDetails.photo}
              onError={handleImageFallback}
              alt={speakerDetails.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-col lg:flex-row justify-between items-center gap-10 mt-12 md:mt-16">
            <div className="flex flex-col max-w-2xl">
              <h3 className="font-fredoka font-bold text-[clamp(1.75rem,4vw,2.25rem)] lg:text-4xl text-white mb-3 tracking-wide sm:whitespace-nowrap">
                Dr. Peter Ostafichuk, PhD
              </h3>
              <p className="font-poppins text-white/90 text-lg md:text-xl font-medium leading-normal mb-1">
                {speakerDetails.role}
              </p>
            </div>

            <div className="flex flex-col items-center justify-center w-full lg:w-auto min-w-0 sm:min-w-[300px] mt-4 lg:mt-0 lg:-translate-y-8">
              <button
                type="button"
                onClick={() => setShowDetails(true)}
                className="button-lift px-8 py-3 rounded-full glass-3d-primary text-white font-fredoka font-bold tracking-wider text-base"
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {showDetails && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#071120]/75 px-5 py-8 backdrop-blur-md" onClick={() => setShowDetails(false)}>
          <div
            className="max-h-[86vh] w-full max-w-2xl overflow-y-auto rounded-[2rem] bg-[#162032] p-8 text-white glass-3d-intensified"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="mb-5 flex items-start justify-between gap-6">
              <div>
                <p className="font-poppins text-sm font-semibold uppercase tracking-[0.2em] text-primary">More Details</p>
                <h3 className="mt-2 font-fredoka text-3xl font-bold">Dr. Peter Ostafichuk</h3>
              </div>
              <button
                type="button"
                onClick={() => setShowDetails(false)}
                className="button-lift rounded-full bg-white/10 px-4 py-2 font-fredoka text-sm text-white/80 hover:bg-white/20"
              >
                Close
              </button>
            </div>

            <p className="font-poppins text-base leading-relaxed text-white/75">
              {speakerDetails.details}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Roster;
