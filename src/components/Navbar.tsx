/** ============================================================================
 *  BASMI Defence Systems - Navigation Bar Component (Navbar.tsx)
 *  ----------------------------------------------------------------------------
 *  Purpose: Responsive scroll-adaptive transparent navbar with centered menu,
 *           larger logo on the left, and boxed contact CTA on the right.
 *  ============================================================================
 */

import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export const Navbar = () => {
  // --- STATE & EFFETS ---
  const [isOpen, setIsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    // --- MAIN NAVIGATION CONTAINER ---
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm py-3' 
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* 1. BRAND LOGO (LEFT) - SLIGHTLY BIGGER */}
          <div className="flex-1 flex justify-start items-center">
            <NavLink to="/" className="flex items-center py-2 shrink-0">
              <img 
                src="/basmi_logo.png" 
                alt="BASMI Logo" 
                className="h-14 md:h-16 w-auto object-contain transition-transform duration-300 hover:scale-105" 
                onError={(e) => { e.currentTarget.style.display = 'none'; }} 
              />
            </NavLink>
          </div>
          
          {/* 2. TEXT MENU LINKS (CENTER) */}
          <div className="hidden lg:flex items-center justify-center space-x-2 xl:space-x-4">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-sm font-semibold transition-all ${
                  isActive 
                    ? 'text-blue-600 bg-blue-50/60' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`
              }
            >
              About BASMI
            </NavLink>

            {/* Integrated Solutions Dropdown Trigger */}
            <div 
              className="relative"
              onMouseEnter={() => setIsSolutionsOpen(true)}
              onMouseLeave={() => setIsSolutionsOpen(false)}
            >
              <button
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all flex items-center space-x-1 ${
                  isSolutionsOpen 
                    ? 'text-blue-600 bg-blue-50/60' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span>Integrated Solutions</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Dropdown Panel */}
              {isSolutionsOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[850px] z-50">
                  <div className="glass-panel p-6 grid grid-cols-3 gap-6 rounded-xl border border-slate-200/80 bg-white/95 backdrop-blur-2xl shadow-xl animate-fade-in">
                    
                    {/* COLUMN 1: Capabilities & Solutions */}
                    <div>
                      <ul className="space-y-4 text-sm">
                        <li>
                          <Link to="/about" className="text-slate-800 hover:text-blue-600 block font-semibold transition-colors">1. Core Capabilities</Link>
                          <span className="text-xs text-slate-500 block mt-0.5">Strategic aerospace, defence & military systems</span>
                        </li>
                        <li>
                          <Link to="/tactical" className="text-slate-800 hover:text-blue-600 block font-semibold transition-colors">2. Defence Equipment & Solutions</Link>
                          <span className="text-xs text-slate-500 block mt-0.5">Strategic systems integration & supply</span>
                        </li>
                        <li>
                          <Link to="/uas" className="text-slate-800 hover:text-blue-600 block font-semibold transition-colors">3. Aerospace Systems</Link>
                          <span className="text-xs text-slate-500 block mt-0.5">Unmanned aircraft and counter UAS systems</span>
                        </li>
                      </ul>
                    </div>

                    {/* COLUMN 2: Tactical & Protection Systems */}
                    <div>
                      <ul className="space-y-4 text-sm">
                        <li>
                          <Link to="/aerospace" className="text-slate-800 hover:text-blue-600 block font-semibold transition-colors">4. Surface & Sub-Surface Systems</Link>
                          <span className="text-xs text-slate-500 block mt-0.5">Unmanned vessels & underwater vehicles</span>
                        </li>
                        <li>
                          <Link to="/tactical" className="text-slate-800 hover:text-blue-600 block font-semibold transition-colors">5. Tactical & Mission Support</Link>
                          <span className="text-xs text-slate-500 block mt-0.5">Tactical gear & specialized support systems</span>
                        </li>
                        <li>
                          <Link to="/security" className="text-slate-800 hover:text-blue-600 block font-semibold transition-colors">6. Security & Force Protection</Link>
                          <span className="text-xs text-slate-500 block mt-0.5">Hostile vehicle mitigation, perimeter security & gates</span>
                        </li>
                      </ul>
                    </div>

                    {/* COLUMN 3: Advanced Tech & Lifecycle Management */}
                    <div>
                      <ul className="space-y-4 text-sm">
                        <li>
                          <Link to="/about" className="text-slate-800 hover:text-blue-600 block font-semibold transition-colors">7. Advanced & Dual-Use Tech</Link>
                          <span className="text-xs text-slate-500 block mt-0.5">Next-generation tech & dual-use applications</span>
                        </li>
                        <li>
                          <Link to="/indigenization" className="text-slate-800 hover:text-blue-600 block font-semibold transition-colors">8. Indigenisation & Self-reliance</Link>
                          <span className="text-xs text-slate-500 block mt-0.5">Aviation, marine, and sub-marine indigenised systems</span>
                        </li>
                        <li>
                          <Link to="/contact" className="text-slate-800 hover:text-blue-600 block font-semibold transition-colors">9. Project & Lifecycle Management</Link>
                          <span className="text-xs text-slate-500 block mt-0.5">Sustainment support & program consulting</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <NavLink
              to="/indigenization"
              className={({ isActive }) =>
                `px-4 py-2 rounded-md text-sm font-semibold transition-all ${
                  isActive 
                    ? 'text-blue-600 bg-blue-50/60' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`
              }
            >
              Indigenisation
            </NavLink>
          </div>

          {/* 3. CONTACT US IN A TEXT BOX CTA (RIGHT) */}
          <div className="flex-1 hidden lg:flex justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-5 py-2.5 border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white rounded-md font-bold text-xs tracking-wider uppercase transition-all duration-300 shadow-sm shrink-0"
            >
              Contact Us
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <div className="flex lg:hidden items-center justify-end flex-1">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-950 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE NAV DRAWER PANEL */}
      {isOpen && (
        <div className="lg:hidden glass-panel rounded-none border-t border-slate-200 bg-white/95 backdrop-blur-xl shadow-lg">
          <div className="px-3 pt-2 pb-5 space-y-1">
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-md text-base font-semibold ${
                  isActive 
                    ? 'text-blue-600 bg-blue-50/60' 
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
                }`
              }
            >
              About BASMI
            </NavLink>

            {/* Mobile Dropdown Header for Solutions */}
            <div className="px-4 pt-4 pb-2 text-xs font-bold text-slate-400 uppercase tracking-widest border-t border-slate-100 mt-2">
              Integrated Solutions
            </div>
            
            <div className="pl-4 space-y-1 text-sm border-l-2 border-slate-200 ml-4 mb-2">
              <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:text-blue-600 font-semibold">• 1. Core Capabilities</Link>
              <Link to="/tactical" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:text-blue-600 font-semibold">• 2. Defence Equipment & Solutions</Link>
              <Link to="/uas" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:text-blue-600 font-semibold">• 3. Aerospace Systems</Link>
              <Link to="/aerospace" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:text-blue-600 font-semibold">• 4. Surface and Sub-Surface Systems</Link>
              <Link to="/tactical" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:text-blue-600 font-semibold">• 5. Tactical & Mission Support</Link>
              <Link to="/security" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:text-blue-600 font-semibold">• 6. Security & Force Protection Systems</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:text-blue-600 font-semibold">• 7. Advanced & Dual-Use Tech</Link>
              <Link to="/indigenization" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:text-blue-600 font-semibold">• 8. Indigenisation & Self-reliance</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:text-blue-600 font-semibold">• 9. Project & Lifecycle Management</Link>
            </div>

            <NavLink
              to="/indigenization"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-md text-base font-semibold border-t border-slate-100 mt-2 ${
                  isActive 
                    ? 'text-blue-600 bg-blue-50/60' 
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
                }`
              }
            >
              Indigenisation
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-4 py-2.5 rounded-md text-base font-semibold ${
                  isActive 
                    ? 'text-blue-600 bg-blue-50/60' 
                    : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
                }`
              }
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </nav>
  );
};
