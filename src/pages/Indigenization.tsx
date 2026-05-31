/** ============================================================================
 *  BASMI Defence Systems - Indigenisation Page Component (Indigenization.tsx)
 *  ----------------------------------------------------------------------------
 *  Purpose: Portrays corporate programs aligned with Make in India and 
 *           Atmanirbhar Bharat self-reliance objectives.
 *  Editable Parameters:
 *    - LOCAL MANUFACTURING: local credentials and standards definitions.
 *    - DEPENDENCY REDUCTION: details about domestic supply chain optimizations.
 *    - TECH TRANSFER: joint framework models.
 *    - PARTNERSHIPS: global tech integrations list.
 *  ============================================================================
 */

import { GlassCard } from '../components/GlassCard';
import { Flag, ShieldAlert, Cpu, Globe } from 'lucide-react';

export const Indigenization = () => {
  return (
    // --- MAIN INDIGENISATION PAGE ---
    <div className="min-h-screen bg-background pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* PAGE HEADING */}
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight uppercase mb-4">
          Make in <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-slate-600 to-green-600 font-extrabold">India</span>
        </h1>
        <p className="text-lg text-slate-600 font-light max-w-3xl mb-16">
          BASMI proudly supports India’s indigenous defence manufacturing ecosystem, committing to complete self-reliance in strategic technologies.
        </p>

        {/* FOUR-COLUMN CORE INDIGENOUS STRATEGY */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          
          {/* Card 1: Local Manufacturing */}
          <GlassCard className="p-8 text-center bg-gradient-to-br from-slate-50 to-transparent">
            <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 border border-blue-100 text-blue-600">
              <Flag className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Local Manufacturing</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Produced dynamically within India while strictly adhering to rigorous global standards and certifications.
            </p>
          </GlassCard>

          {/* Card 2: Dependency Reduction */}
          <GlassCard className="p-8 text-center bg-gradient-to-br from-slate-50 to-transparent" delay={0.1}>
            <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 border border-blue-100 text-blue-600">
              <ShieldAlert className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Reduced Dependency</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Drastically minimizing reliance on imports to secure sensitive technology supply chains during critical geopolitical shifts.
            </p>
          </GlassCard>

          {/* Card 3: Tech Transfer Frameworks */}
          <GlassCard className="p-8 text-center bg-gradient-to-br from-slate-50 to-transparent" delay={0.2}>
            <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 border border-blue-100 text-blue-600">
              <Cpu className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Tech Transfer</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Fostering true technology transfer and robust innovation ecosystems alongside defence organizations.
            </p>
          </GlassCard>
          
          {/* Card 4: Global Collaborative Tech */}
          <GlassCard className="p-8 text-center bg-gradient-to-br from-slate-50 to-transparent" delay={0.3}>
            <div className="mx-auto w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 border border-blue-100 text-blue-600">
              <Globe className="w-8 h-8" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-3">Global Partnerships</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Collaborating with international industry leaders (e.g. HORIBA MIRA, Southwest Microwave) to manufacture world-class systems locally.
            </p>
          </GlassCard>
        </div>

      </div>
    </div>
  );
};
