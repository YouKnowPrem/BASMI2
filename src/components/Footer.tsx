/** ============================================================================
 *  BASMI Defence Systems - Footer Component (Footer.tsx)
 *  ----------------------------------------------------------------------------
 *  Purpose: Responsive website footer with maps details, business links, and a
 *           mock newsletter consultation submission form.
 *  Editable Sections:
 *    - To change division links or pages, modify Link components under Divisions.
 *    - To change company pages, modify Link components under Company.
 *    - To change address or contact mail, edit plain text fields.
 *  ============================================================================
 */

import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    // --- MAIN FOOTER CONTAINER ---
    <footer className="border-t border-white/10 bg-[#050505] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* FOUR COLUMN GRID SYSTEM */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          {/* COLUMN 1: Company Logo, Address & Primary Secure Email */}
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex flex-col items-start mb-6">
              <img 
                src="/BASMI_svg.svg" 
                alt="BASMI Logo" 
                className="h-16 w-auto object-contain mb-3 drop-shadow-[0_0_8px_rgba(59,130,246,0.2)]" 
                onError={(e) => { e.currentTarget.style.display = 'none'; }} 
              />
              <span className="text-xs text-blue-500 tracking-widest uppercase mt-1 font-semibold">Defence. Innovation. Technology.</span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-4">
              Address: RZ B1/132A, Mahavir Enclave, Dabri, South West Delhi, New Delhi - 110045
            </p>
            <p className="text-sm text-gray-400">
              Email: <a href="mailto:sales@basmi-india.com" className="text-blue-400 hover:text-blue-300">sales@basmi-india.com</a>
            </p>
          </div>

          {/* COLUMN 2: Divisions / Integrated Solutions Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Divisions</h3>
            <ul className="space-y-2.5 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">1. Core Capabilities</Link></li>
              <li><Link to="/tactical" className="hover:text-white transition-colors">2. Defence Equipment & Technology Solutions</Link></li>
              <li><Link to="/uas" className="hover:text-white transition-colors">3. Aerospace Systems</Link></li>
              <li><Link to="/aerospace" className="hover:text-white transition-colors">4. Surface and Sub-Surface Systems</Link></li>
              <li><Link to="/tactical" className="hover:text-white transition-colors">5. Tactical & Mission Support</Link></li>
              <li><Link to="/security" className="hover:text-white transition-colors">6. Security & Force Protection Systems</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">7. Advanced & Dual-Use Technologies</Link></li>
              <li><Link to="/indigenization" className="hover:text-white transition-colors">8. Indigenisation & Self-reliance</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">9. Project & Lifecycle Management</Link></li>
            </ul>
          </div>

          {/* COLUMN 3: Corporate Directory & Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Company</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-white transition-colors">About BASMI</Link></li>
              <li><Link to="/indigenization" className="hover:text-white transition-colors">Indigenisation</Link></li>
              <li><Link to="/aerospace" className="hover:text-white transition-colors">Aerospace & Naval</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* COLUMN 4: Business Consultation Form Area */}
          <div>
            <h3 className="text-sm font-semibold text-white tracking-wider uppercase mb-4">Request Consultation</h3>
            <p className="text-sm text-gray-400 mb-4">Reach out to our experts for end-to-end integrated protection systems.</p>
            <form className="flex space-x-2">
              <input 
                type="email" 
                placeholder="Business email" 
                className="bg-white/5 border border-white/10 rounded-md px-3 py-2 w-full text-sm text-white placeholder-gray-500 focus:outline-none focus:border-white/30 transition-colors"
                autoComplete="off"
              />
              <button 
                type="button" 
                className="bg-white/10 hover:bg-white/20 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors border border-white/10"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* BOTTOM METADATA & COPYRIGHT */}
        <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-center text-center">
          <p className="text-sm text-gray-500">
            © 2026 All rights reserved. | Made with 💖 | By{' '}
            <a 
              href="https://webitup24.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-gray-400 hover:text-white transition-colors duration-200"
            >
              WebItUp24
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};
