import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full pb-8 md:pb-12 pt-16 bg-[#162032] flex justify-center px-4 md:px-8">
      {/* The Island Container */}
      <div className="w-full max-w-7xl rounded-[2.5rem] bg-[#1a1c19]/95 backdrop-blur-2xl text-[#fafaf5] px-8 py-12 md:px-16 md:py-16 shadow-2xl flex flex-col gap-16 border border-white/10">
        
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div className="font-norwester text-2xl tracking-wide text-white">
            Surrey Youth AI Summit © 2026
          </div>
          
          <div className="flex flex-row gap-6 font-poppins text-sm text-white/60">
            <a href="mailto:fpssaiclub@gmail.com" className="hover:text-white transition-colors">fpssaiclub@gmail.com</a>
            <a href="https://www.instagram.com/fpss_ai.club/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Instagram</a>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-poppins text-white/50">
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            <span className="tracking-widest uppercase">System Operational</span>
          </div>
          <div>
            Built with No-Code Logic.
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
