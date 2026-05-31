/** ============================================================================
 *  BASMI Defence Systems - Security Parameters & HVM Page (SecurityParams.tsx)
 *  ----------------------------------------------------------------------------
 *  Purpose: Dynamic 4x2 expands-on-hover horizontal split image cards grid
 *           showcasing hostile vehicle mitigation (HVM) and perimeter detection.
 *  ============================================================================
 */

export const SecurityParams = () => {
  const row1 = [
    { title: "Bollards", image: "/bollards.png" },
    { title: "Crash Rated Gates", image: "/gates.png" },
    { title: "Road Blockers", image: "/road_blocker.png" },
    { title: "Boom Barriers", image: "/boom_barrier.png" }
  ];

  const row2 = [
    { title: "Crash Barriers", image: "/crash_barriers.png" },
    { title: "Tyre Killers", image: "/tyre_killer.png" },
    { title: "Access Barriers", image: "/flap_barrier.png" },
    { title: "Perimeter Security", image: "/perimeter_security.png" }
  ];

  return (
    // --- MAIN PORTFOLIO PAGE ---
    <div className="min-h-screen bg-background pt-32 pb-24 animate-fade-in">
      
      {/* SECTION HEADER BLOCK */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase mb-3">
          Security <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 font-extrabold">Solutions</span>
        </h1>
        <p className="text-lg text-slate-600 font-light max-w-2xl mx-auto">
          High-performance hostile vehicle mitigation and advanced perimeter intrusion protection systems.
        </p>
      </div>

      {/* FULL-BLEED INTERACTIVE GRID ROW 1 & 2 */}
      <div className="w-full bg-slate-950 border-y border-slate-800 relative shadow-xl flex flex-col">
        
        {/* ROW 1 */}
        <div className="group/container flex flex-col lg:flex-row w-full min-h-[45vh] bg-slate-950 border-b border-slate-900">
          {row1.map((item, idx) => (
            <div 
              key={idx}
              className="flex-1 relative overflow-hidden group/card transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] filter brightness-[0.55] contrast-[1.1] lg:group-hover/container:opacity-50 lg:group-hover/container:brightness-50 lg:hover:!opacity-100 lg:hover:!brightness-110 lg:hover:!contrast-125 lg:hover:flex-[1.5] border-b lg:border-b-0 lg:border-r border-slate-900 last:border-r-0 cursor-pointer"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.2)_0%,transparent_60%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-[800ms] pointer-events-none z-10 mix-blend-overlay" />
              <img src={item.image} alt={item.title} className="absolute w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] scale-[1.0] group-hover/card:scale-[1.08] z-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/80 z-10 opacity-60 group-hover/card:opacity-30 transition-opacity duration-[800ms]" />
              <div className="absolute inset-0 flex justify-center items-center text-center px-4 z-20">
                <h3 className="font-bold text-white text-2xl md:text-3xl uppercase tracking-[0.2em] transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] opacity-85 group-hover/card:opacity-100 group-hover/card:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] group-hover/card:scale-105">
                  {item.title}
                </h3>
              </div>
              <div className="absolute inset-x-0 bottom-10 flex justify-center z-20 opacity-0 group-hover/card:opacity-100 transition-all duration-[700ms] translate-y-6 group-hover/card:translate-y-0 delay-75">
                 <span className="border border-white/30 bg-black/40 backdrop-blur-md text-white px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white/20 hover:border-white transition-all">Explore System</span>
              </div>
            </div>
          ))}
        </div>

        {/* ROW 2 */}
        <div className="group/container2 flex flex-col lg:flex-row w-full min-h-[45vh] bg-slate-950">
          {row2.map((item, idx) => (
            <div 
              key={idx}
              className="flex-1 relative overflow-hidden group/card transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] filter brightness-[0.55] contrast-[1.1] lg:group-hover/container2:opacity-50 lg:group-hover/container2:brightness-50 lg:hover:!opacity-100 lg:hover:!brightness-110 lg:hover:!contrast-125 lg:hover:flex-[1.5] border-b lg:border-b-0 lg:border-r border-slate-900 last:border-r-0 cursor-pointer"
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.2)_0%,transparent_60%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-[800ms] pointer-events-none z-10 mix-blend-overlay" />
              <img src={item.image} alt={item.title} className="absolute w-full h-full object-cover transition-transform duration-[1200ms] ease-[cubic-bezier(0.25,1,0.5,1)] scale-[1.0] group-hover/card:scale-[1.08] z-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/80 z-10 opacity-60 group-hover/card:opacity-30 transition-opacity duration-[800ms]" />
              <div className="absolute inset-0 flex justify-center items-center text-center px-4 z-20">
                <h3 className="font-bold text-white text-2xl md:text-3xl uppercase tracking-[0.2em] transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] opacity-85 group-hover/card:opacity-100 group-hover/card:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] group-hover/card:scale-105">
                  {item.title}
                </h3>
              </div>
              <div className="absolute inset-x-0 bottom-10 flex justify-center z-20 opacity-0 group-hover/card:opacity-100 transition-all duration-[700ms] translate-y-6 group-hover/card:translate-y-0 delay-75">
                 <span className="border border-white/30 bg-black/40 backdrop-blur-md text-white px-6 py-2.5 text-xs uppercase tracking-[0.2em] font-semibold hover:bg-white/20 hover:border-white transition-all">Explore System</span>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};
