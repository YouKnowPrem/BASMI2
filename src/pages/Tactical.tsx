/** ============================================================================
 *  BASMI Defence Systems - Tactical & Mission Support (Tactical.tsx)
 *  ----------------------------------------------------------------------------
 *  Purpose: Displays the full-bleed interactive dynamic image splits for body
 *           armours, carry systems, and load-bearing configurations.
 *  ============================================================================
 */

export const Tactical = () => {
  return (
    // --- MAIN TACTICAL LAYOUT CONTAINER ---
    <div className="min-h-screen bg-background pt-32 pb-24">
      
      {/* FULL-BLEED INTERACTIVE SECTION: Dynamic Horizontal Splits */}
      <div className="w-full bg-slate-950 border-y border-slate-800 relative shadow-xl">
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

    </div>
  );
};
