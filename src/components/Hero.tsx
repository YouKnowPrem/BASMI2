/** ============================================================================
 *  BASMI Defence Systems - Homepage Hero Component (Hero.tsx)
 *  ----------------------------------------------------------------------------
 *  Purpose: Premium interactive introductory screen featuring dynamic action
 *           buttons and animated entrance, optimized for minimalist clean layout.
 *  ============================================================================
 */

import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

export const Hero = () => {
  return (
    // --- HERO SECTION WRAPPER ---
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background pt-16 lg:pt-28">
      {/* BACKGROUND GRAPHIC & SHADOW LAYER */}
      <div className="absolute inset-0 z-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: 'url(/background.webp)' }}
        />
        {/* Soft edge-blending gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/45 to-transparent" />
      </div>

      {/* CORE HERO INTERACTIVE PANEL */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-16 lg:pt-24 lg:pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          style={{ willChange: 'transform, opacity' }}
          className="max-w-4xl mx-auto flex flex-col items-center text-center"
        >
          
          {/* SECURE CAPITALIZED HERO HEADING */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.15] mb-6 uppercase">
            Securing People, Protecting Assets,<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 font-extrabold">
              Enabling Operations through Self Reliance
            </span>
          </h1>
          
          {/* ACTION BUTTON CALL-TO-ACTIONS */}
          <div className="flex justify-center w-full max-w-md mx-auto sm:max-w-none mt-8">
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-md font-semibold transition-all shadow-md hover:shadow-blue-500/25 group cursor-pointer"
            >
              Request Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
