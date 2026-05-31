/** ============================================================================
 *  BASMI Defence Systems - Homepage Component (Home.tsx)
 *  ----------------------------------------------------------------------------
 *  Purpose: Aggregates introductory, highlights, and divisional features for 
 *           the primary site landing experience.
 *  Editable Parameters:
 *    - highlights array: Strategic company focus bullet items.
 *    - solutions array: Key highlights of company capability areas.
 *  ============================================================================
 */

import { Hero } from '../components/Hero';
import { GlassCard } from '../components/GlassCard';
import { Shield, Settings, Server, Radar, CheckCircle } from 'lucide-react';

export const Home = () => {
  // --- COMPONENT STATIC CONTENT CONFIGURATION ---
  
  // highlights: Key corporate credentials displayed in grid cards
  const highlights = [
    { title: "Strategic Operational Leadership from Indian Armed Forces" },
    { title: "Partners with ISO 9001 & ISO 45001 Certified Facilities" },
    { title: "Deploying Systems Tested to Global Benchmarks (IWA 14-1, PAS 68)" },
    { title: "Committed to Atmanirbhar Bharat (Indigenous Self-Reliance)" }
  ];

  // solutions: High-level overview features rendered in division blocks
  const solutions = [
    {
      icon: <Shield className="h-8 w-8 text-blue-500" />,
      title: "HVM Systems",
      description: "Hostile vehicle mitigation systems designed to stop massive kinetic impacts."
    },
    {
      icon: <Settings className="h-8 w-8 text-blue-500" />,
      title: "Access Control Systems",
      description: "Secure, high-throughput systems for pedestrian and vehicular access."
    },
    {
      icon: <Radar className="h-8 w-8 text-blue-500" />,
      title: "Perimeter Intrusion Detection",
      description: "Advanced sensory and radar solutions to monitor boundary perimeters."
    },
    {
      icon: <Server className="h-8 w-8 text-blue-500" />,
      title: "Tactical & Defence Equipment",
      description: "Highly specialized modular gear and integrated command hardware."
    }
  ];

  return (
    <div className="w-full">
      {/* 1. HERO REJECTING SCREEN */}
      <Hero />
      
      {/* 2. CORPORATE INTRODUCTORY SECTION */}
      <section className="py-24 bg-slate-100/50 border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
             
             {/* Text Description Block */}
             <div>
                <h2 className="text-xs font-bold mb-3 tracking-widest uppercase">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-slate-600 to-green-600 font-extrabold">About BASMI</span>
                </h2>
                <h3 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">Built To Protect</h3>
                <p className="text-slate-600 text-lg mb-6 leading-relaxed text-justify">
                  BASMI is a technology-driven security solutions provider based in New Delhi. We specialize in Hostile Vehicle Mitigation (HVM), Perimeter security, Access control systems, and Integrated protection solutions.
                </p>
                <div className="mb-8">
                   <h4 className="text-slate-800 font-bold uppercase tracking-wider mb-4 border-b border-slate-200 pb-2 inline-block">Serving Global Sectors:</h4>
                   <ul className="text-slate-600 space-y-2.5 font-medium">
                     <li>• Defence & Government</li>
                     <li>• Airports & Critical Infrastructure</li>
                     <li>• Industrial Complexes</li>
                     <li>• Smart Cities & Commercial Spaces</li>
                   </ul>
                </div>
             </div>
             
             {/* Key Highlights Grid */}
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {highlights.map((h, i) => (
                   <GlassCard key={i} className="p-6 flex flex-col justify-center items-center text-center h-40">
                       <CheckCircle className="text-blue-600 w-8 h-8 mb-3" />
                       <p className="text-slate-800 font-semibold text-sm">{h.title}</p>
                   </GlassCard>
                ))}
             </div>
          </div>
        </div>
      </section>

      {/* 3. SOLUTIONS DETAILS OVERVIEW SYSTEM */}
      <section className="py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 tracking-tight">Solutions</h2>
          </div>
          
          {/* Glass-panel features block */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutions.map((feature, idx) => (
              <GlassCard key={idx} delay={idx * 0.1} className="p-8">
                <div className="bg-blue-50 inline-block p-4 rounded-xl mb-6 border border-blue-100">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {feature.description}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
