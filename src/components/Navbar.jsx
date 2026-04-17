import React, { useState, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const trigger = ScrollTrigger.create({
      trigger: 'body',
      start: 'top -50',
      onEnter: () => setIsScrolled(true),
      onLeaveBack: () => setIsScrolled(false),
    });

    return () => trigger.kill();
  }, []);

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl flex justify-between items-center px-8 py-3 rounded-full transition-all duration-500 ease-out ${isScrolled
        ? 'glass-3d-card py-3'
        : 'bg-transparent border border-transparent py-5'
        }`}
    >
      <div className="flex items-center gap-6">
        <a
          href="#hero"
          className={`text-2xl font-norwester tracking-widest transition-colors duration-500 ${isScrolled ? 'text-primary' : 'text-white'
            } hover:opacity-80`}
        >
          SYAIS
        </a>

        {/* Vertical Divider */}
        <div className={`h-8 w-[2px] ${isScrolled ? 'bg-primary/50' : 'bg-white'}`}></div>
      </div>

      <div className="hidden md:flex gap-10 items-center">
        {[
          { name: 'Perks', id: 'perks' },
          { name: 'Clubs', id: 'network' },
          { name: 'Schedule', id: 'schedule' },
          { name: 'FAQ', id: 'faq' }
        ].map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`text-sm uppercase tracking-[0.2em] font-bold transition-all duration-500 hover:scale-110 ${isScrolled ? 'text-primary/80 hover:text-primary' : 'text-white/70 hover:text-white'
              }`}
          >
            {item.name}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-4">
        <button className="relative group overflow-hidden px-8 py-3 rounded-full font-fredoka tracking-wider text-sm transition-all duration-500 glass-3d-primary text-white hover:scale-105 active:scale-95">
          <span className="relative z-10">Register</span>
        </button>

        <a
          href="/details.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block px-6 py-2.5 rounded-full text-sm font-fredoka font-medium transition-all duration-500 glass-3d-card text-white hover:bg-white/10"
        >
          More Details
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
