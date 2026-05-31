/** ============================================================================
 *  BASMI Defence Systems - Aerospace Systems Page Component (Aerospace.tsx)
 *  ----------------------------------------------------------------------------
 *  Purpose: Portrays tactical aviation systems, autonomous platforms, and 
 *           aerospace integration capabilities in a minimalist visual format.
 *  ============================================================================
 */

export const Aerospace = () => {
  return (
    // --- MAIN PAGE CONTAINER ---
    <div className="min-h-screen bg-background pt-32 pb-24 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PAGE INTRO HEADER (CENTERED) */}
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase mb-12 text-center">
          Aerospace <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 font-extrabold">Systems</span>
        </h1>

        {/* HIGH-TECH IMAGE CARD BANNER */}
        <div className="relative overflow-hidden rounded-2xl glass-panel border border-slate-200/80 shadow-md group h-96 md:h-[450px]">
          <img 
            src="/drone_swarm.png" 
            alt="Drone Swarm Coordinated Operation" 
            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />
          <div className="absolute bottom-8 left-8 md:left-12 z-20 max-w-2xl text-white">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-2 font-mono">Tactical Autonomous Platform</span>
            <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight">Unmanned Flight Technologies</h2>
          </div>
        </div>

      </div>
    </div>
  );
};
