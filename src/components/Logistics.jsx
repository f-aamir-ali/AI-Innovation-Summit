import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Logistics = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".control-panel", {
        y: 30,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%"
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-32 md:py-48 px-6 md:px-12 w-full max-w-7xl mx-auto">
      <div className="bg-[#443f63] text-[#fafaf5] rounded-[2.5rem] p-8 md:p-16 w-full relative overflow-hidden">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16 z-10 w-full">

          <div className="control-panel flex flex-col justify-center border border-white/10 rounded-[2rem] p-12 bg-[#162032]/40 backdrop-blur-md hover:bg-[#162032]/60 transition-colors duration-500 min-h-[320px]">
            <div className="text-xl text-[#3B82F6] font-norwester mb-6 tracking-[0.2em] uppercase">Location</div>
            <div className="font-poppins text-white text-xl md:text-2xl leading-relaxed font-medium">
              Fleetwood Park Secondary's Library.
            </div>
          </div>

          <div className="control-panel flex flex-col justify-center border border-white/10 rounded-[2rem] p-12 bg-[#162032]/40 backdrop-blur-md hover:bg-[#162032]/60 transition-colors duration-500 min-h-[320px]">
            <div className="text-xl text-[#3B82F6] font-norwester mb-6 tracking-[0.2em] uppercase">Teams</div>
            <div className="font-poppins text-white text-xl md:text-2xl leading-relaxed font-medium">
              Sign up solo and choose your own teams!
            </div>
          </div>

          <div className="control-panel flex flex-col justify-center border border-white/10 rounded-[2rem] p-12 bg-[#162032]/40 backdrop-blur-md hover:bg-[#162032]/60 transition-colors duration-500 min-h-[320px]">
            <div className="text-xl text-[#3B82F6] font-norwester mb-6 tracking-[0.2em] uppercase">Protocol</div>
            <div className="font-poppins text-white text-xl md:text-2xl leading-relaxed font-medium">
              Bring Your Own Devices.
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Logistics;
