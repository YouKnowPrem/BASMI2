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
    <div className="min-h-screen bg-background pt-32 lg:pt-48 pb-24 lg:pb-36 animate-fade-in">
      
      {/* SECTION HEADER BLOCK */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 lg:mb-16">
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase mb-3">
          Hostile Vehicle Mitigation <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 font-extrabold">Solutions</span>
        </h1>
      </div>

      {/* FULL-BLEED INTERACTIVE GRID ROW 1 & 2 */}
      <div className="w-full bg-slate-950 border-y border-slate-800 relative shadow-xl flex flex-col">
        
        {/* ROW 1 */}
        <div className="group/container flex flex-col lg:flex-row w-full min-h-[45vh] bg-slate-950 border-b border-slate-900">
          {row1.map((item, idx) => (
            <div 
              key={idx}
              className="flex-1 relative overflow-hidden group/card transition-[flex-grow,opacity] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] lg:group-hover/container:opacity-60 lg:hover:!opacity-100 lg:hover:flex-[1.5] border-b lg:border-b-0 lg:border-r border-slate-900 last:border-r-0 cursor-pointer"
              style={{ willChange: 'flex-grow, opacity' }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,transparent_60%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-[600ms] pointer-events-none z-10 mix-blend-overlay" />
              <img 
                src={item.image} 
                alt={item.title} 
                loading="lazy" 
                decoding="async" 
                className="absolute w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] scale-[1.0] group-hover/card:scale-[1.05] z-0 opacity-60 group-hover/card:opacity-90" 
                style={{ willChange: 'transform, opacity' }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/90 z-10 opacity-70 group-hover/card:opacity-40 transition-opacity duration-[600ms]" style={{ willChange: 'opacity' }} />
              <div className="absolute inset-0 flex justify-center items-center text-center px-4 z-20">
                <h3 className="font-bold text-white text-2xl md:text-3xl uppercase tracking-[0.2em] transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] opacity-85 group-hover/card:opacity-100 group-hover/card:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] group-hover/card:scale-105" style={{ willChange: 'transform, opacity' }}>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* ROW 2 */}
        <div className="group/container2 flex flex-col lg:flex-row w-full min-h-[45vh] bg-slate-950">
          {row2.map((item, idx) => (
            <div 
              key={idx}
              className="flex-1 relative overflow-hidden group/card transition-[flex-grow,opacity] duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] lg:group-hover/container2:opacity-60 lg:hover:!opacity-100 lg:hover:flex-[1.5] border-b lg:border-b-0 lg:border-r border-slate-900 last:border-r-0 cursor-pointer"
              style={{ willChange: 'flex-grow, opacity' }}
            >
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.15)_0%,transparent_60%)] opacity-0 group-hover/card:opacity-100 transition-opacity duration-[600ms] pointer-events-none z-10 mix-blend-overlay" />
              <img 
                src={item.image} 
                alt={item.title} 
                loading="lazy" 
                decoding="async" 
                className="absolute w-full h-full object-cover transition-transform duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] scale-[1.0] group-hover/card:scale-[1.05] z-0 opacity-60 group-hover/card:opacity-90" 
                style={{ willChange: 'transform, opacity' }} 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/90 z-10 opacity-70 group-hover/card:opacity-40 transition-opacity duration-[600ms]" style={{ willChange: 'opacity' }} />
              <div className="absolute inset-0 flex justify-center items-center text-center px-4 z-20">
                <h3 className="font-bold text-white text-2xl md:text-3xl uppercase tracking-[0.2em] transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)] opacity-85 group-hover/card:opacity-100 group-hover/card:drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] group-hover/card:scale-105" style={{ willChange: 'transform, opacity' }}>
                  {item.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

      </div>

    </div>
  );
};
