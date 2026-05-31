/** ============================================================================
 *  BASMI Defence Systems - Homepage Hero Component (Hero.tsx)
 *  ----------------------------------------------------------------------------
 *  Purpose: Premium interactive introductory screen featuring a revolving 
 *           3D-like holographic logo, dynamic action buttons, and animated entrance.
 *  Editable Parameters:
 *    - To change background graphics, update the url(/background.png).
 *    - To change tags or main headings, update respective block elements below.
 *  ============================================================================
 */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    // --- HERO SECTION WRAPPER ---
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050505] pt-16">
      
      {/* BACKGROUND GRAPHIC & SHADOW LAYER */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: 'url(/background.png)' }}
        />
        {/* Soft edge-blending gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/60 to-transparent" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* CORE HERO INTERACTIVE PANEL */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl mx-auto flex flex-col items-center text-center"
        >
          {/* REVOLVING 3D HOLOGRAPHIC SVG LOGO */}
          <div className="relative mb-8 flex flex-col items-center">
            <div className="perspective-[1000px]">
              <img 
                src="/BASMI_svg.svg" 
                alt="BASMI Revolving Logo" 
                className="animate-revolve-y w-64 md:w-80 h-auto object-contain drop-shadow-[0_0_25px_rgba(59,130,246,0.5)]"
              />
            </div>
            {/* Ambient background glow mapped behind logo */}
            <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-3xl -z-10 w-64 h-64 self-center" />
          </div>

          {/* MILITARY/CORP THEMATIC TAGLINE BADGE */}
          <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-6 backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-xs font-semibold tracking-widest text-gray-300 uppercase">Defence. Innovation. Technology.</span>
          </div>
          
          {/* SECURE CAPITALIZED HERO HEADING */}
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6 uppercase">
            Securing People, Protecting Assets,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-300 to-blue-600 font-extrabold">
              Enabling Operations through Self Reliance
            </span>
          </h1>
          
          {/* THEMATIC DESCRIPTION COPY */}
          <p className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl font-light leading-relaxed">
            Delivering end-to-end hostile vehicle mitigation, perimeter security, access control, and integrated protection systems.
          </p>
          
          {/* ACTION BUTTON CALL-TO-ACTIONS */}
          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center w-full max-w-md mx-auto sm:max-w-none">
            <Link 
              to="/security"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold transition-all shadow-lg hover:shadow-blue-500/25 group cursor-pointer"
            >
              Explore Solutions
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-white hover:bg-gray-100 text-black border border-white rounded-md font-semibold transition-all shadow-lg hover:shadow-white/10 cursor-pointer"
            >
              Request Consultation
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
