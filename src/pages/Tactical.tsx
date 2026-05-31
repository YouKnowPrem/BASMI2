/** ============================================================================
 *  BASMI Defence Systems - Tactical & Mission Support (Tactical.tsx)
 *  ----------------------------------------------------------------------------
 *  Purpose: Portrays premium body armours, helmet assemblies, carry systems, 
 *           and load-bearing configurations.
 *  Editable Parameters:
 *    - Mehler-inspired main landing banners text/headings.
 *    - FULL BLEED IMAGES: solders and equipment links and graphics config.
 *    - PRODUCT CARD CATEGORIES: vest, helmet, or belt configurations descriptions.
 *  ============================================================================
 */

import { GlassCard } from '../components/GlassCard';
import { motion } from 'framer-motion';

export const Tactical = () => {
  return (
    // --- MAIN TACTICAL LAYOUT CONTAINER ---
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. HERO GRAPHIC COVER SECTION */}
        <section className="relative mb-24 overflow-hidden rounded-2xl glass-panel group border-slate-200/60 shadow-md">
          <div className="absolute inset-0 z-0">
            <img 
              src="/tactical_gear.png" 
              alt="Elite Tactical Personnel" 
              className="w-full h-full object-cover opacity-80 group-hover:opacity-90 transition-opacity duration-700" 
            />
            {/* Thematic background blur/shade blends */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-white/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-transparent" />
          </div>
          
          <div className="relative z-10 px-8 py-20 md:py-32 md:px-16 flex flex-col justify-end h-full min-h-[70vh]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-2xl"
            >
              <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight uppercase mb-4">
                Unyielding <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 font-extrabold">Performance</span>
              </h1>
              <p className="text-lg text-slate-700 font-light max-w-lg mb-8 leading-relaxed">
                Engineered for specialized mission profiles. Total modularity for plate carriers, helmets, and biomechanically optimized tactical suits.
              </p>
              
              <button className="bg-slate-900 hover:bg-slate-800 text-white px-8 py-3.5 rounded-md uppercase tracking-widest text-xs font-bold transition-all shadow-md">
                Configure Loadout
              </button>
            </motion.div>
          </div>
        </section>
      </div>

      {/* 2. FULL-BLEED INTERACTIVE SECTION: Dynamic Horizontal Splits */}
      <div className="w-full bg-slate-950 border-y border-slate-800 relative shadow-xl mb-24">
        <div className="group/container flex flex-col lg:flex-row w-full min-h-[90vh] bg-slate-950">
          
          {/* Card 1: Ballistic Protection */}
          <div className="flex-1 relative overflow-hidden group/card transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] filter brightness-[0.55] contrast-[1.1] lg:group-hover/container:opacity-50 lg:group-hover/container:brightness-50 lg:hover:!opacity-100 lg:hover:!brightness-110 lg:hover:!contrast-125 lg:hover:flex-[1.25] cursor-pointer">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.25)_0%,transparent_60%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-[800ms] pointer-events-none z-10 mix-blend-overlay" />
            <img src="/soldier_ballistic.png" alt="Ballistic Protection" className="absolute w-full h-full object-cover object-top transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] scale-[1.0] group-hover/card:scale-[1.08] z-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/80 z-10 opacity-60 group-hover/card:opacity-30 transition-opacity duration-[800ms]" />
            <div className="absolute inset-0 flex justify-center items-center text-center px-4 z-20">
              <h3 className="font-bold text-white text-3xl md:text-5xl uppercase tracking-[0.2em] md:leading-tight transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] opacity-80 group-hover/card:opacity-100 group-hover/card:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] group-hover/card:scale-105">
                Ballistic<br/>Protection
              </h3>
            </div>
            <div className="absolute inset-x-0 bottom-16 md:bottom-24 flex justify-center z-20 opacity-0 group-hover/card:opacity-100 transition-all duration-[700ms] translate-y-6 group-hover/card:translate-y-0 delay-75">
               <span className="border border-white/30 bg-black/40 backdrop-blur-md text-white px-8 py-3 text-xs md:text-sm uppercase tracking-[0.25em] font-semibold hover:bg-white/20 hover:border-white transition-all">Explore Category</span>
            </div>
          </div>

          {/* Card 2: Carry Systems */}
          <div className="flex-1 relative overflow-hidden group/card transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] filter brightness-[0.55] contrast-[1.1] border-y lg:border-y-0 lg:border-x border-slate-800 lg:group-hover/container:opacity-50 lg:group-hover/container:brightness-50 lg:hover:!opacity-100 lg:hover:!brightness-110 lg:hover:!contrast-125 lg:hover:flex-[1.25] cursor-pointer">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.25)_0%,transparent_60%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-[800ms] pointer-events-none z-10 mix-blend-overlay" />
            <img src="/soldier_carrying.png" alt="Carrying Systems" className="absolute w-full h-full object-cover object-top transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] scale-[1.0] group-hover/card:scale-[1.08] z-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/80 z-10 opacity-60 group-hover/card:opacity-30 transition-opacity duration-[800ms]" />
            <div className="absolute inset-0 flex justify-center items-center text-center px-4 z-20">
              <h3 className="font-bold text-white text-3xl md:text-5xl uppercase tracking-[0.2em] md:leading-tight transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] opacity-80 group-hover/card:opacity-100 group-hover/card:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] group-hover/card:scale-105">
                Carrying<br/>Systems
              </h3>
            </div>
            <div className="absolute inset-x-0 bottom-16 md:bottom-24 flex justify-center z-20 opacity-0 group-hover/card:opacity-100 transition-all duration-[700ms] translate-y-6 group-hover/card:translate-y-0 delay-75">
               <span className="border border-white/30 bg-black/40 backdrop-blur-md text-white px-8 py-3 text-xs md:text-sm uppercase tracking-[0.25em] font-semibold hover:bg-white/20 hover:border-white transition-all">Explore Category</span>
            </div>
          </div>

          {/* Card 3: Apparel and Tactical Clothing */}
          <div className="flex-1 relative overflow-hidden group/card transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] filter brightness-[0.55] contrast-[1.1] lg:group-hover/container:opacity-50 lg:group-hover/container:brightness-50 lg:hover:!opacity-100 lg:hover:!brightness-110 lg:hover:!contrast-125 lg:hover:flex-[1.25] cursor-pointer">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.25)_0%,transparent_60%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-[800ms] pointer-events-none z-10 mix-blend-overlay" />
            <img src="/soldier_clothing.png" alt="Tactical Clothing" className="absolute w-full h-full object-cover object-top transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] scale-[1.0] group-hover/card:scale-[1.08] z-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/80 z-10 opacity-60 group-hover/card:opacity-30 transition-opacity duration-[800ms]" />
            <div className="absolute inset-0 flex justify-center items-center text-center px-4 z-20">
              <h3 className="font-bold text-white text-3xl md:text-5xl uppercase tracking-[0.2em] md:leading-tight transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] opacity-80 group-hover/card:opacity-100 group-hover/card:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] group-hover/card:scale-105">
                Tactical<br/>Clothing
              </h3>
            </div>
            <div className="absolute inset-x-0 bottom-16 md:bottom-24 flex justify-center z-20 opacity-0 group-hover/card:opacity-100 transition-all duration-[700ms] translate-y-6 group-hover/card:translate-y-0 delay-75">
               <span className="border border-white/30 bg-black/40 backdrop-blur-md text-white px-8 py-3 text-xs md:text-sm uppercase tracking-[0.25em] font-semibold hover:bg-white/20 hover:border-white transition-all">Explore Category</span>
            </div>
          </div>

        </div>
      </div>

      {/* 3. HARDWARE SPECIFIC GRID SYSTEM */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 tracking-wider uppercase border-l-4 border-slate-300 pl-4">Equipment Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            {/* Category: Vests */}
            <GlassCard className="h-80 flex flex-col justify-end p-6 relative group overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/80 to-transparent z-10" />
               <div className="absolute inset-0 bg-slate-100 z-0 flex items-center justify-center">
                  <span className="text-slate-400 font-mono text-xs">[VISUAL REDACTED]</span>
               </div>
               <div className="relative z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                 <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wider mb-2">Ballistic Vests</h3>
                 <p className="text-sm text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">Lightweight composite armor offering maximum mobility without compromising Level IV rating.</p>
               </div>
            </GlassCard>
            
            {/* Category: Helmets */}
            <GlassCard delay={0.1} className="h-80 flex flex-col justify-end p-6 relative group overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/80 to-transparent z-10" />
               <div className="absolute inset-0 bg-slate-100 z-0 flex items-center justify-center">
                  <span className="text-slate-400 font-mono text-xs">[VISUAL REDACTED]</span>
               </div>
               <div className="relative z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                 <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wider mb-2">Combat Helmets</h3>
                 <p className="text-sm text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">Integrated rail systems, NVG mounts, and impact-absorbing inner geometries.</p>
               </div>
            </GlassCard>

            {/* Category: Load Carrying */}
            <GlassCard delay={0.2} className="h-80 flex flex-col justify-end p-6 relative group overflow-hidden">
               <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/80 to-transparent z-10" />
               <div className="absolute inset-0 bg-slate-100 z-0 flex items-center justify-center">
                  <span className="text-slate-400 font-mono text-xs">[VISUAL REDACTED]</span>
               </div>
               <div className="relative z-20 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                 <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wider mb-2">Load Bearing</h3>
                 <p className="text-sm text-slate-600 opacity-0 group-hover:opacity-100 transition-opacity">Modular chest rigs and belts for agile ammunition distribution and critical med-kits.</p>
               </div>
            </GlassCard>
          </div>
        </div>

      </div>
    </div>
  );
};
