/** ============================================================================
 *  BASMI Defence Systems - UAS & Counter-UAS Page Component (UAS.tsx)
 *  ----------------------------------------------------------------------------
 *  Purpose: Displays drone detection, RF jamming, real-time threat analysis, 
 *           and kinetic interception capabilities.
 *  Editable Parameters:
 *    - cards array: Configures capability titles and respective lucide icons.
 *    - primary use cases list: Key sectors where counter-UAS systems are deployed.
 *  ============================================================================
 */

import { GlassCard } from '../components/GlassCard';
import { Crosshair, Wind, Wifi, BoxSelect, Cpu } from 'lucide-react';

export const UAS = () => {
  // --- COUNTER-UAS FEATURES & ICONS CONFIGURATION ---
  const cards = [
    { title: "Drone Detection & Tracking", icon: <Wifi className="w-6 h-6" /> },
    { title: "RF Jamming Systems", icon: <Crosshair className="w-6 h-6" /> },
    { title: "Integrated Command Systems", icon: <Cpu className="w-6 h-6" /> },
    { title: "Real-time Threat Monitoring", icon: <BoxSelect className="w-6 h-6" /> },
    { title: "Kinetic Interception", icon: <Wind className="w-6 h-6" /> },
  ];

  return (
    // --- MAIN PORTFOLIO PAGE ---
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HEADING TITLE */}
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase mb-4">
          UAS & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-blue-800 font-extrabold">Counter-UAS</span>
        </h1>
        <p className="text-lg text-slate-600 font-light max-w-3xl mb-16">
          Advanced systems to detect, track, and neutralize unmanned aerial threats for military bases, airports, border security, and critical infrastructure.
        </p>

        {/* SECTION: Core UAS Capabilities */}
        <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-wider">Our Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {cards.map((card, idx) => (
            <GlassCard key={idx} delay={idx * 0.15} className="p-8 border-t-2 border-t-blue-500/50 text-center">
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center text-blue-600 mb-6 border border-blue-100 mx-auto">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide mb-2">{card.title}</h3>
            </GlassCard>
          ))}
        </div>
        
        {/* SECTION: Primary Use Cases / Deployments */}
        <GlassCard className="p-8 border border-slate-200 bg-gradient-to-r from-slate-50 to-slate-100/30">
           <h2 className="text-2xl font-bold text-slate-900 mb-6 uppercase tracking-wider">Primary Use Cases</h2>
           <div className="flex flex-wrap gap-4">
             {['Military Bases', 'Airports', 'Border Security', 'Critical Infrastructure'].map((c, i) => (
               <span key={i} className="px-4 py-2 rounded-full border border-blue-200 text-blue-700 bg-blue-50 text-sm font-semibold tracking-wider uppercase shadow-sm">
                  {c}
               </span>
             ))}
           </div>
        </GlassCard>

      </div>
    </div>
  );
};
