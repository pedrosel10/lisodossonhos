import React, { useState, useEffect } from 'react';
import { Instagram, MessageCircle, ShoppingBag, Store, ChevronRight } from 'lucide-react';

import logo from './assets/logo.svg';
import LogoExtensa from './components/LogoExtensa';

const App = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Tira isso depois do teste!

    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const links = [
    {
      title: "Agende seu Horário",
      subtitle: "Fale conosco pelo WhatsApp",
      url: "https://wa.me/5562984186010",
      icon: <MessageCircle size={24} className="text-amber-300" />,
      primary: true
    },
    {
      title: "Nosso Instagram",
      subtitle: "@lisodossonhossalao",
      url: "https://www.instagram.com/lisodossonhossalao/",
      icon: <Instagram size={24} className="text-amber-300" />
    },
    {
      title: "Loja Impacto Profissional",
      subtitle: "Os produtos que usamos e amamos",
      url: "https://loja.impactoprofissional.com/",
      icon: <ShoppingBag size={24} className="text-amber-300" />
    },
    {
      title: "Instagram da Loja",
      subtitle: "@impactoprofissionall",
      url: "https://www.instagram.com/impactoprofissionall/",
      icon: <Store size={24} className="text-amber-300" />
    }
  ];

  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden font-sans selection:bg-amber-500/30">

      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700&family=Montserrat:wght@300;400;500;600&display=swap');

        .font-serif { font-family: 'Cinzel', serif; }
        .font-sans { font-family: 'Montserrat', sans-serif; }

        .text-gradient-gold {
          background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728, #FBF5B7, #AA771C);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .gold-border-gradient {
          background: linear-gradient(to right, #BF953F, #FCF6BA, #B38728);
        }

        .glass-panel {
          background: rgba(15, 15, 15, 0.4);
          backdrop-filter: blur(16px);
          -webkit-backdrop-filter: blur(16px);
          border: 1px solid rgba(212, 175, 55, 0.15);
          box-shadow: 0 4px 30px rgba(0, 0, 0, 0.5);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .glass-panel:hover {
          border-color: rgba(212, 175, 55, 0.6);
          background: rgba(25, 25, 25, 0.6);
          transform: translateY(-4px) scale(1.02);
          box-shadow: 0 10px 40px rgba(212, 175, 55, 0.15);
        }

        @media (hover: hover) and (pointer: fine) {
          body { cursor: none; }
          a, button { cursor: none; }
        }

        .fade-up {
          animation: fadeUp 0.8s ease-out forwards;
          opacity: 0;
          transform: translateY(20px);
        }

        @keyframes fadeUp {
          to { opacity: 1; transform: translateY(0); }
        }

        .hair-wave {
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
          animation: drawLine 4s ease-in-out infinite alternate;
        }

        @keyframes drawLine {
          to { stroke-dashoffset: 0; }
        }

        .floating-logo {
          animation: floatLogo 5s ease-in-out infinite;
        }

        @keyframes floatLogo {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }

        .slow-spin {
          animation: spinLogo 25s linear infinite;
        }

        @keyframes spinLogo {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />

      {/* Iluminação dinâmica */}
      <div
        className="pointer-events-none fixed inset-0 z-0 transition-opacity duration-300"
        style={{
          background: `radial-gradient(circle 600px at ${mousePos.x}px ${mousePos.y}px, rgba(212, 175, 55, 0.1), transparent 80%)`
        }}
      />

      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-5%] left-[-5%] w-[30%] h-[30%] bg-amber-600/5 rounded-full blur-[100px]"></div>
        <svg className="absolute inset-0 w-full h-full opacity-10" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M20,-10 C30,40 10,60 20,110" fill="none" stroke="#D4AF37" strokeWidth="0.1" className="hair-wave" />
          <path d="M80,-10 C90,40 70,60 80,110" fill="none" stroke="#D4AF37" strokeWidth="0.1" className="hair-wave" style={{ animationDelay: '1s' }} />
        </svg>
      </div>

      {/* Cursor Customizado */}
      <div
        className="fixed top-0 left-0 pointer-events-none z-50 mix-blend-screen hidden md:block"
        style={{ transform: `translate(${mousePos.x}px, ${mousePos.y}px)` }}
      >
        <div className={`absolute -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-amber-400 rounded-full blur-[1px] transition-transform duration-200 ${isHovering ? 'scale-150' : 'scale-100'}`}></div>
        <div className={`absolute -translate-x-1/2 -translate-y-1/2 w-10 h-10 border border-amber-500/40 rounded-full transition-all duration-300 ease-out ${isHovering ? 'scale-50 opacity-0' : 'scale-100 opacity-100'}`}></div>
      </div>

      <main className="relative z-10 max-w-lg mx-auto px-6 flex flex-col items-center justify-center min-h-screen">

        {/* Logo Section */}
        <div className="text-center mb-8 fade-up" style={{ animationDelay: '0.1s' }}>
          <div className="relative w-14 h-14 mx-auto mb-4 flex items-center justify-center cursor-pointer group floating-logo">
            <img
              src={logo}
              alt="Liso dos Sonhos Logo"
              className="w-full h-full object-contain slow-spin transition-transform duration-700 ease-in-out group-hover:scale-125 drop-shadow-[0_0_25px_rgba(212,175,55,0.3)]"
            />
          </div>

          <h1 className="mb-3">
            <LogoExtensa className="w-64 md:w-80 h-auto mx-auto drop-shadow-[0_0_15px_rgba(212,175,55,0.2)]" />
          </h1>
          <p className="text-amber-100/60 font-light tracking-[0.3em] text-[10px] uppercase mb-1">Por Regilane Caetano</p>
          <div className="w-16 h-[1px] mx-auto gold-border-gradient mt-4 opacity-40"></div>
        </div>

        <p className="text-center text-gray-400 mb-10 text-sm font-light leading-relaxed fade-up max-w-xs" style={{ animationDelay: '0.2s' }}>
          O liso dos sonhos que você sempre procurou, compatível com qualquer cabelo e química.
        </p>

        {/* Links */}
        <div className="w-full flex flex-col gap-4">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`group glass-panel rounded-2xl p-4 flex items-center gap-4 text-left relative overflow-hidden fade-up ${link.primary ? 'border-amber-500/40' : ''}`}
              style={{ animationDelay: `${0.3 + (index * 0.1)}s` }}
              onMouseEnter={() => setIsHovering(true)}
              onMouseLeave={() => setIsHovering(false)}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/5 to-amber-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

              <div className="flex-shrink-0 w-11 h-11 rounded-xl bg-black/60 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 group-hover:border-amber-400/50 transition-all duration-300">
                {link.icon}
              </div>

              <div className="flex-grow">
                <h2 className="text-sm font-semibold text-gray-100 group-hover:text-amber-300 transition-colors">
                  {link.title}
                </h2>
                <p className="text-[10px] text-gray-500 group-hover:text-gray-300 transition-colors mt-0.5">
                  {link.subtitle}
                </p>
              </div>

              <ChevronRight className="text-amber-500/30 group-hover:text-amber-400 transform group-hover:translate-x-1 transition-all" size={18} />
            </a>
          ))}
        </div>

      </main>
    </div>
  );
};

export default App;
