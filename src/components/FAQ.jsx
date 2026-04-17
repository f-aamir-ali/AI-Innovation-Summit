import React, { useState, useRef, useLayoutEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const faqs = [
  { q: "Do I need to know how to code?", a: "Absolutely not. We focus on idea generation, presentation, and easy no-code tools like ChatGPT and Zapier." },
  { q: "Is prior experience required?", a: "Recommended but not strictly required. We provide a 1-hour tool training session at the start of the event." },
  { q: "How are teams formed?", a: "Sign up individually! You can choose your team on the morning of the event, or we will match you with a great group." },
  { q: "What do I need to bring?", a: "This is a Bring Your Own Device event. You are highly encouraged to bring a laptop to actively build your prototype." },
  { q: "Is there a cost to attend?", a: "No, the event is completely free. Local businesses have sponsored the event, which covers your entry, lunch, and snacks." },
  { q: "How do the volunteer hours work?", a: "By dedicating your Saturday to building tech solutions for local organizations, you earn 8 officially authorized volunteer hours, signed off by our sponsor teacher." },
  { q: "What exactly are we building?", a: "An AI prototype, like a customer service bot, an automated email sorter, or a website for a real local business or non-profit organization." },
  { q: "What are the prizes?", a: "The top 3 teams win cash gift cards ($100 for 1st, $80 for 2nd, $60 for 3rd, split evenly among the 4 members)." },
  { q: "Will I receive proof of participation?", a: "Yes. Every participant receives a digital certificate, and the members of the top 3 teams receive both physical and digital awards." }
];

const FAQ = () => {
  const [openIdx, setOpenIdx] = useState(null);
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".faq-item", {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 75%"
        }
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" ref={containerRef} className="py-32 md:py-48 px-6 md:px-12 w-full max-w-4xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-norwester text-white mb-16 text-center tracking-wide">
        Common Questions
      </h2>

      <div className="flex flex-col border-t border-white/10">
        {faqs.map((faq, idx) => (
          <div key={idx} className="faq-item border-b border-white/10 py-2">
            <button
              onClick={() => toggle(idx)}
              className="w-full py-6 flex justify-between items-center text-left transition-all duration-300 hover:bg-white/5 hover:rounded-[2rem] px-6 group"
            >
              <h3 className="font-poppins text-lg text-white/90 group-hover:text-white transition-colors pr-8">
                {faq.q}
              </h3>
              <ChevronDown
                className={`w-5 h-5 text-white/50 transition-all duration-300 ${openIdx === idx ? 'rotate-180 text-primary' : 'group-hover:text-white'}`}
              />
            </button>
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out px-6 ${openIdx === idx ? 'max-h-60 pb-8 opacity-100' : 'max-h-0 opacity-0'
                }`}
            >
              <p className="font-poppins text-white/60 text-base leading-relaxed">
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
