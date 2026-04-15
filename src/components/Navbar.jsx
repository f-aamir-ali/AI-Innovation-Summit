import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-3xl flex justify-between items-center px-6 py-3 rounded-full transition-all duration-500 bg-[#162032]/60 backdrop-blur-md border border-white/10 shadow-lg">
      <a href="#hero" className="text-xl font-norwester tracking-widest text-white hover:opacity-80 transition-opacity">SYAIS</a>
      
      <div className="hidden md:flex gap-8 items-center">
        <a href="#perks" className="text-sm uppercase tracking-[0.1em] text-white/70 hover:text-[#0058bc] transition-colors">Perks</a>
        <a href="#schedule" className="text-sm uppercase tracking-[0.1em] text-white/70 hover:text-[#0058bc] transition-colors">Schedule</a>
        <a href="#faq" className="text-sm uppercase tracking-[0.1em] text-white/70 hover:text-[#0058bc] transition-colors">FAQ</a>
      </div>

      <button className="px-8 py-4 rounded-full bg-gradient-to-br from-[#0058bc] to-[#0070eb] text-white font-medium tracking-wide hover:scale-[1.02] transition-transform duration-300 shadow-lg shadow-blue-900/20 text-sm">
        Register
      </button>
    </nav>
  );
};

export default Navbar;
