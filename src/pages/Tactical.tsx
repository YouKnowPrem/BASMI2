/** ============================================================================
 *  BASMI Defence Systems - Tactical & Mission Support (Tactical.tsx)
 *  ----------------------------------------------------------------------------
 *  Purpose: Displays the centered Defence Equipment title and full-bleed
 *           interactive dynamic image splits for body armours and carry systems.
 *  ============================================================================
 */

export const Tactical = () => {
  return (
    // --- MAIN TACTICAL LAYOUT CONTAINER ---
    <div className="min-h-screen bg-background pt-32 lg:pt-48 pb-24 lg:pb-36 animate-fade-in">
      
      {/* SECTION HEADER BLOCK */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 lg:mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase mb-3">
          Defence <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 font-extrabold">Equipment</span>
        </h1>
      </div>

      {/* FULL-BLEED INTERACTIVE SECTION: Dynamic Horizontal Splits */}
      <div className="w-full bg-slate-950 border-y border-slate-800 relative shadow-xl">
        <div className="group/container flex flex-col lg:flex-row w-full min-h-[90vh] bg-slate-950">
          
          {/* Card 1: Ballistic Protection */}
          <div className="flex-1 relative overflow-hidden group/card transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] filter brightness-[0.55] contrast-[1.1] lg:group-hover/container:opacity-50 lg:group-hover/container:brightness-50 lg:hover:!opacity-100 lg:hover:!brightness-110 lg:hover:!contrast-125 lg:hover:flex-[1.25] cursor-pointer">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.25)_0%,transparent_60%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-[800ms] pointer-events-none z-10 mix-blend-overlay" />
            <img src="/soldier_ballistic.png" alt="Ballistic Protection" loading="lazy" decoding="async" className="absolute w-full h-full object-cover object-top transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] scale-[1.0] group-hover/card:scale-[1.08] z-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/80 z-10 opacity-60 group-hover/card:opacity-30 transition-opacity duration-[800ms]" />
            <div className="absolute inset-0 flex justify-center items-center text-center px-4 z-20">
              <h3 className="font-bold text-white text-3xl md:text-5xl uppercase tracking-[0.2em] md:leading-tight transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] opacity-80 group-hover/card:opacity-100 group-hover/card:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] group-hover/card:scale-105">
                Ballistic<br/>Protection
              </h3>
            </div>
          </div>

          {/* Card 2: Carry Systems */}
          <div className="flex-1 relative overflow-hidden group/card transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] filter brightness-[0.55] contrast-[1.1] border-y lg:border-y-0 lg:border-x border-slate-800 lg:group-hover/container:opacity-50 lg:group-hover/container:brightness-50 lg:hover:!opacity-100 lg:hover:!brightness-110 lg:hover:!contrast-125 lg:hover:flex-[1.25] cursor-pointer">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.25)_0%,transparent_60%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-[800ms] pointer-events-none z-10 mix-blend-overlay" />
            <img src="/soldier_carrying.png" alt="Carrying Systems" loading="lazy" decoding="async" className="absolute w-full h-full object-cover object-top transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] scale-[1.0] group-hover/card:scale-[1.08] z-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/80 z-10 opacity-60 group-hover/card:opacity-30 transition-opacity duration-[800ms]" />
            <div className="absolute inset-0 flex justify-center items-center text-center px-4 z-20">
              <h3 className="font-bold text-white text-3xl md:text-5xl uppercase tracking-[0.2em] md:leading-tight transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] opacity-80 group-hover/card:opacity-100 group-hover/card:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] group-hover/card:scale-105">
                Carrying<br/>Systems
              </h3>
            </div>
          </div>

          {/* Card 3: Apparel and Tactical Clothing */}
          <div className="flex-1 relative overflow-hidden group/card transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] filter brightness-[0.55] contrast-[1.1] lg:group-hover/container:opacity-50 lg:group-hover/container:brightness-50 lg:hover:!opacity-100 lg:hover:!brightness-110 lg:hover:!contrast-125 lg:hover:flex-[1.25] cursor-pointer">
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.25)_0%,transparent_60%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-[800ms] pointer-events-none z-10 mix-blend-overlay" />
            <img src="/soldier_clothing.png" alt="Tactical Clothing" loading="lazy" decoding="async" className="absolute w-full h-full object-cover object-top transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] scale-[1.0] group-hover/card:scale-[1.08] z-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/80 z-10 opacity-60 group-hover/card:opacity-30 transition-opacity duration-[800ms]" />
            <div className="absolute inset-0 flex justify-center items-center text-center px-4 z-20">
              <h3 className="font-bold text-white text-3xl md:text-5xl uppercase tracking-[0.2em] md:leading-tight transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] opacity-80 group-hover/card:opacity-100 group-hover/card:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] group-hover/card:scale-105">
                Tactical<br/>Clothing
              </h3>
            </div>
          </div>

        </div>
      </div>

      {/* FULL-WIDTH CARD SECTION BELOW THE 3-WAY SPLIT */}
      <div className="w-full bg-slate-950 border-t border-slate-900 relative shadow-xl">
        <div className="relative overflow-hidden h-[45vh] lg:h-[60vh] group/card filter brightness-[0.55] contrast-[1.1] hover:!brightness-110 hover:!contrast-125 transition-all duration-[800ms] cursor-pointer">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.25)_0%,transparent_60%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-[800ms] pointer-events-none z-10 mix-blend-overlay" />
          <img src="/tactical_naval.png" alt="Naval Equipment & Accessories" loading="lazy" decoding="async" className="absolute w-full h-full object-cover object-center transition-transform duration-[1200ms] scale-[1.0] group-hover/card:scale-[1.05] z-0" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/80 z-10 opacity-60 group-hover/card:opacity-30 transition-opacity duration-[800ms]" />
          <div className="absolute inset-0 flex justify-center items-center text-center px-4 z-20">
            <h3 className="font-bold text-white text-3xl md:text-5xl uppercase tracking-[0.2em] md:leading-tight transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] opacity-80 group-hover/card:opacity-100 group-hover/card:drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] group-hover/card:scale-105">
              Naval Equipment<br/>& Accessories
            </h3>
          </div>
        </div>
      </div>

    </div>
  );
};
