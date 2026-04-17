import React from 'react';
import { Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full pb-8 md:pb-12 pt-16 bg-[#162032] flex justify-center px-4 md:px-8">
      {/* The Island Container */}
      <div className="w-full max-w-7xl rounded-[2.5rem] bg-[#1a1c19] glass-3d-intensified text-[#fafaf5] px-8 py-12 md:px-16 md:py-16 flex flex-col gap-16">

        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8">
          <div className="flex flex-col gap-4">
            <div className="font-poppins font-semibold text-2xl md:text-3xl tracking-wide text-white">
              Surrey Youth AI Summit © 2026
            </div>

            <div className="flex flex-col gap-3 font-poppins text-sm text-white/60 mt-2">
              <span className="font-medium text-white/80">For questions contact us at:</span>
              <div className="flex flex-row gap-4">
                <a 
                  href="mailto:fpssaiclub@gmail.com" 
                  className="flex items-center justify-center w-11 h-11 rounded-full bg-white/5 backdrop-blur-md hover:bg-white/15 hover:text-white transition-all duration-300"
                  style={{ 
                    boxShadow: 'inset 1px 1px 1px rgba(255, 255, 255, 0.15), inset -1px -1px 1px rgba(0, 0, 0, 0.3), 0px 8px 32px rgba(0, 0, 0, 0.4)'
                  }}
                  aria-label="Email Us"
                >
                  <Mail className="w-5 h-5" strokeWidth={1.5} />
                </a>
                <a 
                  href="https://www.instagram.com/fpss_ai.club/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center justify-center w-11 h-11 rounded-full bg-white/5 backdrop-blur-md hover:bg-white/15 hover:text-white transition-all duration-300"
                  style={{ 
                    boxShadow: 'inset 1px 1px 1px rgba(255, 255, 255, 0.15), inset -1px -1px 1px rgba(0, 0, 0, 0.3), 0px 8px 32px rgba(0, 0, 0, 0.4)'
                  }}
                  aria-label="Instagram"
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="1.5" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    className="w-5 h-5"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
            <button className="px-8 py-3 rounded-full glass-3d-primary text-white font-fredoka tracking-wider text-sm hover:scale-105 transition-all">
              Register
            </button>
            <a
              href="/details.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3 rounded-full glass-3d-card text-white font-fredoka font-medium text-center hover:bg-white/20 transition-all text-sm"
            >
              More Details
            </a>
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
