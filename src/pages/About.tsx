/** ============================================================================
 *  BASMI Defence Systems - Corporate Profile Page Component (About.tsx)
 *  ----------------------------------------------------------------------------
 *  Purpose: Displays the company profile, operational mission, corporate values, 
 *           operational frameworks (e.g. SWARAJ), and leadership credentials.
 *  Editable Parameters:
 *    - values array: Key pillars of business operations.
 *    - leadership array: Operational areas and backgrounds of company leadership.
 *  ============================================================================
 */

import { GlassCard } from '../components/GlassCard';
import { Target, Compass, Award, Users, Handshake, ChevronRight, TrendingUp } from 'lucide-react';

export const About = () => {
  // --- STATIC VALUES & PRINCIPLES CONFIGURATION ---
  const values = [
    {
      title: "Innovation & Excellence",
      description: "Driving continuous advancement in aerospace and defence technologies."
    },
    {
      title: "Integrity & Responsibility",
      description: "Upholding the highest standards of ethics, safety, and operational accountability."
    },
    {
      title: "Quality & Reliability",
      description: "Ensuring performance, extreme security standards, and mission readiness in all deliverables."
    },
    {
      title: "Collaboration & Partnership",
      description: "Building resilient, long-term strategic relationships with stakeholders across strategic sectors."
    },
    {
      title: "National Commitment & Global Outlook",
      description: "Supporting national indigenisation priorities (Atmanirbhar Bharat) while engaging in global standard innovations."
    }
  ];

  // --- STATIC LEADERSHIP & OPERATIONAL EXPERTISES ---
  const leadership = [
    {
      role: "Strategic Operational Leadership",
      background: "Defence & National Security",
      desc: "Drawn from extensive operational experience in the Indian Armed Forces, bringing real-world tactical knowledge, strategic planning, and security domain expertise."
    },
    {
      role: "Advanced Systems Engineering R&D",
      background: "Aerospace & Technology Integration",
      desc: "Led by engineers with strong research backgrounds in unmanned systems, aerospace mechanical systems, and secure communications protocols."
    },
    {
      role: "Strategic Global Program Management",
      background: "Lifecycle & Joint Ventures",
      desc: "Focused on technology transfer, co-development frameworks, and international regulatory compliance to support strategic global partners."
    }
  ];

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

        {/* 3. CORE VALUES SECTION */}
        <div className="mb-24">
          <div className="flex items-center space-x-3 mb-10">
            <div className="bg-blue-50 p-2.5 rounded-lg text-blue-600 border border-blue-100">
              <Award className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 uppercase tracking-wider">Core Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {values.map((v, i) => (
              <GlassCard key={i} className="p-6 flex flex-col hover:border-blue-500/25 transition-all duration-300" delay={i * 0.05}>
                <span className="text-blue-600 text-xs font-bold uppercase tracking-wider mb-2 font-mono">0{i+1}</span>
                <h3 className="text-base font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed text-justify">{v.description}</p>
              </GlassCard>
            ))}
          </div>
        </div>

        {/* 4. ENGAGEMENT AND PARTNERSHIP FRAMEWORKS */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-24">
          {/* Partnership Engagement Model */}
          <GlassCard className="p-8 hover:border-blue-500/25 transition-all duration-300">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-50 p-2 rounded-lg text-blue-600 border border-blue-100">
                <Users className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider">Engagement Model</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed text-justify mb-6">
              BASMI actively collaborates with: Government and defence organisations, Aerospace and defence OEMs, Research institutions and technology partners, Public Sector Undertakings (PSUs) and Defence Public Sector Undertakings (DPSUs).
            </p>
            <div className="text-xs text-slate-500 border-t border-slate-100 pt-4 space-y-2">
              <div className="flex items-center"><ChevronRight className="h-3.5 w-3.5 text-blue-600 mr-1" /> Joint Ventures & Partnerships</div>
              <div className="flex items-center"><ChevronRight className="h-3.5 w-3.5 text-blue-600 mr-1" /> Technology Transfer (ToT)</div>
              <div className="flex items-center"><ChevronRight className="h-3.5 w-3.5 text-blue-600 mr-1" /> Indigenisation co-developments</div>
            </div>
          </GlassCard>

          {/* Strategic Outlook */}
          <GlassCard className="p-8 hover:border-blue-500/25 transition-all duration-300" delay={0.1}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-50 p-2 rounded-lg text-blue-600 border border-blue-100">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider">Strategic Outlook</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed text-justify mb-6">
              With strong capabilities across aerospace, defence, security, and advanced technologies, BASMI is positioned to emerge as a trusted partner for governments and industry worldwide. The company continues to expand its role in delivering mission-critical solutions that address evolving security, technological, and operational challenges.
            </p>
            <div className="text-xs text-blue-700 font-semibold bg-blue-50 border border-blue-100 rounded px-3 py-2">
              Positioned to drive next-generation strategic indigenisation programs worldwide.
            </div>
          </GlassCard>

          {/* Strategic Partnerships & Integrations */}
          <GlassCard className="p-8 hover:border-blue-500/25 transition-all duration-300" delay={0.2}>
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-blue-50 p-2 rounded-lg text-blue-600 border border-blue-100">
                <Handshake className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wider">Partnerships</h3>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed text-justify mb-6">
              To drive self-reliance (Atmanirbhar Bharat), BASMI develops strategic ties and incorporates technologies from industry-leading indigenisation frameworks and specialized advanced technology manufacturers.
            </p>
            <div className="space-y-3">
              <div className="border border-slate-200 bg-slate-50 rounded-lg p-3">
                <span className="text-xs font-bold text-slate-800 block">SWARAJ Framework</span>
                <span className="text-[10px] text-slate-500 block">Indigenised tactical defense architectures</span>
              </div>
              <div className="border border-slate-200 bg-slate-50 rounded-lg p-3">
                <span className="text-xs font-bold text-slate-800 block">FPV MOTOR Integration</span>
                <span className="text-[10px] text-slate-500 block">High-power tactical unmanned systems</span>
              </div>
            </div>
          </GlassCard>
        </div>

        {/* 5. LEADERSHIP PROFILE SECTION */}
        <div className="border-t border-slate-200 pt-16">
          <div className="flex items-center space-x-3 mb-10">
            <div className="bg-blue-50 p-2.5 rounded-lg text-blue-600 border border-blue-100">
              <Users className="h-5 w-5" />
            </div>
            <h2 className="text-2xl font-extrabold text-slate-900 uppercase tracking-wider">Operational Leadership</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {leadership.map((leader, i) => (
              <GlassCard key={i} className="p-8 hover:border-blue-500/30 transition-all duration-300 flex flex-col" delay={i * 0.1}>
                <div className="border-b border-slate-200 pb-4 mb-4">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">{leader.background}</span>
                  <h3 className="text-lg font-extrabold text-slate-900 mt-1 uppercase leading-tight">{leader.role}</h3>
                </div>
                <p className="text-sm text-slate-600 leading-relaxed text-justify flex-grow">
                  {leader.desc}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
