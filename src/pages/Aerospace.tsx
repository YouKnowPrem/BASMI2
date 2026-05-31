/** ============================================================================
 *  BASMI Defence Systems - Aerospace & Defence Page Component (Aerospace.tsx)
 *  ----------------------------------------------------------------------------
 *  Purpose: Portrays tactical maritime, aviation, port, and command integration 
 *           capabilities.
 *  Editable Parameters:
 *    - Application list: High-value locations/deployment zones.
 *    - System deployment list: Dynamic components included in solutions.
 *  ============================================================================
 */

export const Aerospace = () => {
  return (
    // --- MAIN PAGE CONTAINER ---
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PAGE INTRO HEADER */}
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase mb-4">
          Tactical & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 font-extrabold">Defence</span>
        </h1>
        <p className="text-lg text-slate-600 font-light max-w-3xl mb-16">
          High-end defence equipment display for extreme environments. Precision engineering for aviation, maritime, and land supremacy.
        </p>

        {/* TWO-COLUMN APPLICATIONS AND DEPLOYED SYSTEMS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          
          {/* PANEL 1: Military Applications */}
          <div className="h-64 md:h-96 relative rounded-2xl overflow-hidden glass-panel border border-slate-200 shadow-sm">
             <div className="absolute inset-0 bg-slate-50 flex items-center justify-center">
                <span className="text-slate-400 font-mono text-xs uppercase tracking-widest">[Air Force / Naval Integration]</span>
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent z-10" />
             <div className="absolute bottom-6 left-6 z-20">
                <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wider mb-2">Applications</h3>
                <ul className="text-sm text-slate-600 font-semibold space-y-1">
                  <li>• Defence Bases</li>
                  <li>• Naval Ports</li>
                  <li>• Air Force Installations</li>
                </ul>
             </div>
          </div>
          
          {/* PANEL 2: Active Systems */}
          <div className="h-64 md:h-96 relative rounded-2xl overflow-hidden glass-panel border border-slate-200 shadow-sm">
             <div className="absolute inset-0 bg-slate-50 flex items-center justify-center">
                <span className="text-slate-400 font-mono text-xs uppercase tracking-widest">[Integrated Command Systems]</span>
             </div>
             <div className="absolute inset-0 bg-gradient-to-t from-white/90 via-white/40 to-transparent z-10" />
             <div className="absolute bottom-6 left-6 z-20">
                <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wider mb-2">Systems Deployed</h3>
                <ul className="text-sm text-slate-600 font-semibold space-y-1">
                  <li>• High-Security Barriers</li>
                  <li>• Access Control Systems</li>
                  <li>• Integrated Surveillance</li>
                </ul>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
};
