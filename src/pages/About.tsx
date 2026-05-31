/** ============================================================================
 *  BASMI Defence Systems - Corporate Profile Page Component (About.tsx)
 *  ----------------------------------------------------------------------------
 *  Purpose: Displays the company profile and operational mission.
 *  ============================================================================
 */

import { GlassCard } from '../components/GlassCard';
import { Target, Compass } from 'lucide-react';

export const About = () => {
  return (
    <div className="min-h-screen bg-background pt-32 lg:pt-48 pb-24 lg:pb-36">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. CORPORATE HEADER INTRO */}
        <div className="max-w-4xl mb-16 space-y-6">
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 rounded-full px-3 py-1 text-xs font-semibold text-blue-600 uppercase tracking-wider shadow-sm">
            Enterprise Profile
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight uppercase">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-slate-600 to-green-600 font-extrabold">BASMI</span>
          </h1>
          
          <div className="space-y-6 text-slate-600 text-base md:text-lg leading-relaxed text-justify">
            <p>
              BASMI India Pvt. Ltd is an India-based aerospace, defence, military, and advanced technology enterprise engaged in the design, development, manufacturing, integration, and supply of high-performance systems for defence, aerospace, and strategic infrastructure applications. Headquartered in India, BASMI operates at the intersection of technology innovation, national security, and indigenous capability development, delivering reliable, scalable, and future-ready solutions aligned with global quality, safety, and performance standards.
            </p>
            <p>
              The company is committed to strengthening India’s self-reliance (Atmanirbhar Bharat) through indigenisation, technology absorption, and strategic collaboration with global OEMs, research institutions, and government stakeholders. BASMI supports defence and aerospace modernisation through equipment supply, systems integration, consultancy, and lifecycle sustainment services.
            </p>
            <p>
              With leadership drawn from extensive operational experience in defence and technology environments, BASMI combines real-world domain expertise with advanced engineering capabilities to deliver mission-critical solutions across defence, aerospace, and dual-use technology sectors.
            </p>
          </div>
        </div>

        {/* 2. MISSION AND VISION GRID */}
        <div id="mission" className="grid grid-cols-1 lg:grid-cols-2 lg:gap-16 gap-8 mb-24 lg:mb-32 scroll-mt-32">
          <GlassCard className="p-8 md:p-10 border border-slate-200/80 flex flex-col h-full hover:border-blue-500/30 transition-all duration-300">
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-blue-50 p-3 rounded-xl border border-blue-100 text-blue-600">
                <Compass className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-wider">Mission Statement</h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-justify text-sm md:text-base flex-grow">
              To design, develop, and deliver high-performance aerospace, defence, and security technologies aligned with global standards; to advance indigenous capability through innovation, collaboration, and technology transfer; to provide integrated solutions and lifecycle support that enhance operational readiness and mission success; to foster strong partnerships with government, defence forces, and international stakeholders in support of national and global security objectives; and to contribute meaningfully to Make in India and Atmanirbhar Bharat while maintaining global competitiveness.
            </p>
          </GlassCard>
          
          <GlassCard className="p-8 md:p-10 border border-slate-200/80 flex flex-col h-full hover:border-blue-500/30 transition-all duration-300" delay={0.1}>
            <div className="flex items-center space-x-4 mb-6">
              <div className="bg-blue-50 p-3 rounded-xl border border-blue-100 text-blue-600">
                <Target className="h-6 w-6" />
              </div>
              <h2 className="text-2xl font-bold text-slate-900 uppercase tracking-wider">Vision</h2>
            </div>
            <p className="text-slate-600 leading-relaxed text-justify text-sm md:text-base flex-grow">
              To be a globally trusted aerospace, defence, and security technology partner, advancing indigenous capability, fostering innovation and collaboration, and delivering integrated, high-performance solutions that enhance operational readiness and support national and global security objectives, while contributing to Make in India and Atmanirbhar Bharat.
            </p>
          </GlassCard>
        </div>

      </div>
    </div>
  );
};
