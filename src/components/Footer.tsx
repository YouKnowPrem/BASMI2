/** ============================================================================
 *  BASMI Defence Systems - Footer Component (Footer.tsx)
 *  ----------------------------------------------------------------------------
 *  Purpose: Responsive website footer with contact details, company links, and
 *           consultation request form, designed for a light theme.
 *  ============================================================================
 */

import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    // --- MAIN FOOTER CONTAINER ---
    <footer className="border-t border-slate-200 bg-slate-50 pt-16 pb-8 text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* TWO COLUMN GRID SYSTEM */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* COLUMN 1: Company Logo, Address & Primary Secure Email */}
          <div className="flex flex-col items-start">
            <Link to="/" className="flex flex-col items-start mb-6 shrink-0">
              <img 
                src="/BASMI_svg.svg" 
                alt="BASMI Logo" 
                className="h-18 md:h-20 lg:h-24 w-auto object-contain mb-3" 
                onError={(e) => { e.currentTarget.style.display = 'none'; }} 
              />
            </Link>
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Address: RZ B1/132A, Mahavir Enclave, Dabri, South West Delhi, New Delhi - 110045
            </p>
            <p className="text-sm text-slate-600">
              Email: <a href="mailto:sales@basmi-india.com" className="text-blue-600 hover:text-blue-500 font-medium">sales@basmi-india.com</a>
            </p>
          </div>

          {/* COLUMN 2: Corporate Directory & Quick Links */}
          <div className="md:text-right md:justify-self-end">
            <h3 className="text-sm font-bold text-slate-900 tracking-wider uppercase mb-4">Solutions</h3>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><Link to="/aerospace" className="hover:text-blue-600 transition-colors font-medium">Aerospace Systems</Link></li>
              <li><Link to="/tactical" className="hover:text-blue-600 transition-colors font-medium">Defence Equipment</Link></li>
              <li><Link to="/security" className="hover:text-blue-600 transition-colors font-medium">Hostile Vehicle Mitigation Solutions</Link></li>
            </ul>
          </div>
        </div>

        {/* BOTTOM METADATA & COPYRIGHT */}
        <div className="mt-16 pt-8 border-t border-slate-200 flex items-center justify-center text-center">
          <p className="text-sm text-slate-400 font-medium">
            © 2026 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
