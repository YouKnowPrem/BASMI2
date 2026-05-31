/** ============================================================================
 *  BASMI Defence Systems - Aerospace Systems Page Component (Aerospace.tsx)
 *  ----------------------------------------------------------------------------
 *  Purpose: Portrays tactical aviation systems, autonomous platforms, and 
 *           aerospace integration capabilities.
 *  ============================================================================
 */

export const Aerospace = () => {
  return (
    // --- MAIN PAGE CONTAINER ---
    <div className="min-h-screen bg-background pt-32 pb-24 animate-fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PAGE INTRO HEADER */}
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase mb-4">
          Aerospace <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 font-extrabold">Systems</span>
        </h1>
        <p className="text-lg text-slate-600 font-light max-w-3xl mb-12">
          Precision-engineered tactical aviation platforms, autonomous flight systems, and secure datalink integrations designed for military supremacy in extreme conditions.
        </p>

        {/* HIGH-TECH IMAGE CARD BANNERS */}
        <div className="relative overflow-hidden rounded-2xl glass-panel border border-slate-200/80 shadow-md group mb-16 h-96 md:h-[450px]">
          <img 
            src="/aerospace_systems.png" 
            alt="Advanced Tactical Drone Flying" 
            className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent z-10" />
          <div className="absolute bottom-8 left-8 md:left-12 z-20 max-w-2xl text-white">
            <span className="text-xs font-bold text-blue-400 uppercase tracking-widest block mb-2 font-mono">Tactical Autonomous Platform</span>
            <h2 className="text-2xl md:text-4xl font-extrabold uppercase tracking-tight mb-3">Unmanned Flight Technologies</h2>
            <p className="text-sm md:text-base text-slate-300 font-light leading-relaxed">
              Designed with state-of-the-art military avionics, intelligent auto-navigation telemetry arrays, and secure jam-resistant payload packages for tactical defense and surveillance.
            </p>
          </div>
        </div>

        {/* TWO-COLUMN APPLICATIONS AND DEPLOYED SYSTEMS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* PANEL 1: Military Applications */}
          <div className="h-64 relative rounded-2xl overflow-hidden glass-panel border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
             <div className="absolute inset-0 bg-slate-50 flex items-center justify-center">
                <span className="text-slate-400 font-mono text-xs uppercase tracking-widest">[Air Force / Naval Integration]</span>
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 to-transparent z-10" />
             <div className="absolute bottom-6 left-6 z-20">
                <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wider mb-2">Applications</h3>
                <ul className="text-sm text-slate-600 font-semibold space-y-1.5">
                  <li>• Air Force Bases & Command Hubs</li>
                  <li>• Autonomous Border & Perimeter Patrols</li>
                  <li>• Maritime Airborne Reconnaissance</li>
                </ul>
             </div>
          </div>
          
          {/* PANEL 2: Active Systems */}
          <div className="h-64 relative rounded-2xl overflow-hidden glass-panel border border-slate-200/80 shadow-sm hover:shadow-md transition-shadow">
             <div className="absolute inset-0 bg-slate-50 flex items-center justify-center">
                <span className="text-slate-400 font-mono text-xs uppercase tracking-widest">[Integrated Command Systems]</span>
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/40 to-transparent z-10" />
             <div className="absolute bottom-6 left-6 z-20">
                <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wider mb-2">Integrated Technologies</h3>
                <ul className="text-sm text-slate-600 font-semibold space-y-1.5">
                  <li>• Secured Military-Grade Datalinks</li>
                  <li>• High-Payload Tactical Unmanned Aircraft</li>
                  <li>• Counter-UAS Perimeter Defense Units</li>
                </ul>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};
