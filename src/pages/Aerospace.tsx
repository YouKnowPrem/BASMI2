/** ============================================================================
 *  BASMI Defence Systems - Aerospace Systems Page Component (Aerospace.tsx)
 *  ----------------------------------------------------------------------------
 *  Purpose: Portrays tactical aviation systems, autonomous platforms, and 
 *           aerospace integration capabilities, showcasing clean full-bleed
 *           interactive dynamic splits for Drones, Motors, and Flight Controllers.
 *  ============================================================================
 */

export const Aerospace = () => {
  return (
    // --- MAIN AEROSPACE LAYOUT CONTAINER ---
    <div className="min-h-screen bg-background pt-32 lg:pt-48 pb-24 lg:pb-36 animate-fade-in">
      
      {/* SECTION HEADER BLOCK */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 lg:mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase mb-3">
          Aerospace <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 font-extrabold">Systems</span>
        </h1>
      </div>

      {/* FULL-BLEED INTERACTIVE SECTION: Dynamic Horizontal Splits */}
      <div className="w-full bg-slate-950 border-y border-slate-800 relative shadow-xl">
        <div className="group/container flex flex-col lg:flex-row w-full min-h-[90vh] bg-slate-950">
          
          {/* Card 1: Drones */}
          <div 
            className="flex-1 relative overflow-hidden group/card transition-[flex-grow,opacity] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] lg:group-hover/container:opacity-60 lg:hover:!opacity-100 lg:hover:flex-[1.25] cursor-pointer"
            style={{ willChange: 'flex-grow, opacity' }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,transparent_60%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-[600ms] pointer-events-none z-10 mix-blend-overlay" />
            <img 
              src="/aerospace_drones.webp" 
              alt="Drones" 
              loading="lazy" 
              decoding="async" 
              className="absolute w-full h-full object-cover object-center transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] scale-[1.0] group-hover/card:scale-[1.05] z-0 opacity-60 group-hover/card:opacity-90" 
              style={{ willChange: 'transform, opacity' }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/90 z-10 opacity-70 group-hover/card:opacity-40 transition-opacity duration-[600ms]" style={{ willChange: 'opacity' }} />
            <div className="absolute inset-0 flex justify-center items-center text-center px-4 z-20">
              <h3 className="font-bold text-white text-3xl md:text-5xl uppercase tracking-[0.2em] md:leading-tight transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] opacity-80 group-hover/card:opacity-100 group-hover/card:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] group-hover/card:scale-105" style={{ willChange: 'transform, opacity' }}>
                Drones
              </h3>
            </div>
          </div>

          {/* Card 2: Motors */}
          <div 
            className="flex-1 relative overflow-hidden group/card transition-[flex-grow,opacity] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] border-y lg:border-y-0 lg:border-x border-slate-800 lg:group-hover/container:opacity-60 lg:hover:!opacity-100 lg:hover:flex-[1.25] cursor-pointer"
            style={{ willChange: 'flex-grow, opacity' }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,transparent_60%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-[600ms] pointer-events-none z-10 mix-blend-overlay" />
            <img 
              src="/aerospace_motors.webp" 
              alt="Motors" 
              loading="lazy" 
              decoding="async" 
              className="absolute w-full h-full object-cover object-center transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] scale-[1.0] group-hover/card:scale-[1.05] z-0 opacity-60 group-hover/card:opacity-90" 
              style={{ willChange: 'transform, opacity' }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/90 z-10 opacity-70 group-hover/card:opacity-40 transition-opacity duration-[600ms]" style={{ willChange: 'opacity' }} />
            <div className="absolute inset-0 flex justify-center items-center text-center px-4 z-20">
              <h3 className="font-bold text-white text-3xl md:text-5xl uppercase tracking-[0.2em] md:leading-tight transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] opacity-80 group-hover/card:opacity-100 group-hover/card:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] group-hover/card:scale-105" style={{ willChange: 'transform, opacity' }}>
                Motors
              </h3>
            </div>
          </div>

          {/* Card 3: Flight Controllers */}
          <div 
            className="flex-1 relative overflow-hidden group/card transition-[flex-grow,opacity] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] lg:group-hover/container:opacity-60 lg:hover:!opacity-100 lg:hover:flex-[1.25] cursor-pointer"
            style={{ willChange: 'flex-grow, opacity' }}
          >
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,transparent_60%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-[600ms] pointer-events-none z-10 mix-blend-overlay" />
            <img 
              src="/aerospace_controllers.webp" 
              alt="Flight Controllers" 
              loading="lazy" 
              decoding="async" 
              className="absolute w-full h-full object-cover object-center transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] scale-[1.0] group-hover/card:scale-[1.05] z-0 opacity-60 group-hover/card:opacity-90" 
              style={{ willChange: 'transform, opacity' }} 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/90 z-10 opacity-70 group-hover/card:opacity-40 transition-opacity duration-[600ms]" style={{ willChange: 'opacity' }} />
            <div className="absolute inset-0 flex justify-center items-center text-center px-4 z-20">
              <h3 className="font-bold text-white text-3xl md:text-5xl uppercase tracking-[0.2em] md:leading-tight transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] opacity-80 group-hover/card:opacity-100 group-hover/card:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] group-hover/card:scale-105" style={{ willChange: 'transform, opacity' }}>
                Flight<br/>Controllers
              </h3>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
};
