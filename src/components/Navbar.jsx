import React, { useState, useEffect } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { DETAILS_PDF_URL, REGISTER_URL } from '../constants/links';

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

  const handleSectionClick = (event, id) => {
    event.preventDefault();
    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });

    window.history.replaceState(null, '', `#${id}`);
  };

  return (
    <nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[94%] max-w-6xl flex justify-between items-center gap-3 px-4 sm:px-5 lg:px-7 py-3 rounded-full transition-all duration-500 ease-out ${isScrolled
        ? 'glass-3d-card py-3'
        : 'bg-transparent border border-transparent py-5'
        }`}
    >
      <div className="flex w-[92px] shrink-0 items-center gap-3 sm:w-[120px] sm:gap-5 lg:w-auto lg:gap-6">
        <a
          href="#hero"
          onClick={(event) => handleSectionClick(event, 'hero')}
          className={`nav-link-polish text-2xl font-norwester tracking-widest transition-colors duration-500 ${isScrolled ? 'text-primary' : 'text-white'
            } hover:opacity-80`}
          aria-label="Scroll to top"
        >
          SYAIS
        </a>

        {/* Vertical Divider */}
        <div className={`hidden h-8 w-[2px] min-[760px]:block ${isScrolled ? 'bg-primary/50' : 'bg-white'}`}></div>
      </div>

      <div className="hidden min-w-0 flex-1 items-center justify-evenly px-3 min-[520px]:flex min-[760px]:px-5 min-[900px]:px-6 xl:px-8">
        {[
          { name: 'Perks', id: 'perks', visibility: 'inline-flex' },
          { name: 'Mission', id: 'mission', visibility: 'hidden min-[590px]:inline-flex' },
          { name: 'Schedule', id: 'schedule', visibility: 'hidden min-[720px]:inline-flex' },
          { name: 'Speaker', id: 'roster', visibility: 'hidden min-[860px]:inline-flex' },
          { name: 'Clubs', id: 'network', visibility: 'hidden min-[980px]:inline-flex' },
          { name: 'FAQ', id: 'faq', visibility: 'hidden min-[1080px]:inline-flex' }
        ].map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(event) => handleSectionClick(event, item.id)}
            className={`${item.visibility} nav-link-polish whitespace-nowrap text-sm uppercase tracking-[0.08em] font-bold transition-all duration-500 hover:-translate-y-0.5 hover:scale-105 ${isScrolled ? 'text-primary/80 hover:text-primary' : 'text-white/70 hover:text-white'
              }`}
          >
            {item.name}
          </a>
        ))}
      </div>

      <div className="flex w-[112px] shrink-0 items-center justify-end gap-2 sm:w-[128px] min-[760px]:w-auto sm:gap-3 lg:gap-4">
        <a
          href={REGISTER_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="button-lift relative group overflow-hidden px-5 py-2.5 sm:px-7 sm:py-3 rounded-full font-fredoka tracking-wider text-sm glass-3d-primary text-white"
        >
          <span className="relative z-10">Register</span>
        </a>

        <a
          href={DETAILS_PDF_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="button-lift hidden min-[760px]:block px-5 py-2.5 lg:px-6 rounded-full text-sm font-fredoka font-medium glass-3d-card text-white hover:bg-white/10"
        >
          More Details
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
