/** ============================================================================
 *  BASMI Defence Systems - Navigation Bar Component (Navbar.tsx)
 *  ----------------------------------------------------------------------------
 *  Purpose: Responsive glassmorphic navigation bar with mega solutions dropdown.
 *  Editable Sections: 
 *    - To change dropdown links, modify the Link and NavLink URLs/labels.
 *    - To change logo assets, update the img src="/BASMI_svg.svg".
 *  ============================================================================
 */

import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

export const Navbar = () => {
  // --- STATE MANAGEMENT ---
  // isOpen: Controls the mobile drawer menu expand state.
  const [isOpen, setIsOpen] = useState(false);
  // isSolutionsOpen: Controls the hover state of the desktop Solutions mega dropdown.
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  return (
    // --- MAIN NAVIGATION CONTAINER ---
    <nav className="fixed w-full z-50 glass-panel border-b border-white/10 rounded-none shadow-none bg-[#050505]/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          
          {/* BRAND LOGO */}
          <NavLink to="/" className="flex items-center space-x-3 py-2">
            <img 
              src="/BASMI_svg.svg" 
              alt="BASMI Logo" 
              className="h-20 w-auto object-contain transition-transform duration-300 hover:scale-105 drop-shadow-[0_0_10px_rgba(59,130,246,0.3)]" 
              onError={(e) => { e.currentTarget.style.display = 'none'; }} 
            />
          </NavLink>
          
          {/* DESKTOP NAV MENU */}
          <div className="hidden lg:flex items-center space-x-6">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
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
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors flex items-center space-x-1 ${
                  isSolutionsOpen ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>Integrated Solutions</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Mega Dropdown Panel */}
              {isSolutionsOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full pt-2 w-[850px] z-50">
                  <div className="glass-panel p-6 grid grid-cols-3 gap-6 rounded-xl animate-fade-in">
                    
                    {/* COLUMN 1: Capabilities & Solutions */}
                    <div>
                      <ul className="space-y-3.5 text-sm">
                        <li>
                          <Link to="/about" className="text-gray-300 hover:text-white block font-medium transition-colors">1. Core Capabilities</Link>
                          <span className="text-xs text-gray-500 block mt-0.5">Strategic aerospace, defence & military systems</span>
                        </li>
                        <li>
                          <Link to="/tactical" className="text-gray-300 hover:text-white block font-medium transition-colors">2. Defence Equipment & Technology Solutions</Link>
                          <span className="text-xs text-gray-500 block mt-0.5">Strategic systems integration & equipment supply</span>
                        </li>
                        <li>
                          <Link to="/uas" className="text-gray-300 hover:text-white block font-medium transition-colors">3. Aerospace Systems</Link>
                          <span className="text-xs text-gray-500 block mt-0.5">Unmanned aircraft and counter UAS systems</span>
                        </li>
                      </ul>
                    </div>

                    {/* COLUMN 2: Tactical & Protection Systems */}
                    <div>
                      <ul className="space-y-3.5 text-sm">
                        <li>
                          <Link to="/aerospace" className="text-gray-300 hover:text-white block font-medium transition-colors">4. Surface and Sub-Surface Systems</Link>
                          <span className="text-xs text-gray-500 block mt-0.5">Unmanned vessels & autonomous underwater vehicles</span>
                        </li>
                        <li>
                          <Link to="/tactical" className="text-gray-300 hover:text-white block font-medium transition-colors">5. Tactical & Mission Support</Link>
                          <span className="text-xs text-gray-500 block mt-0.5">Tactical gear & specialized support systems</span>
                        </li>
                        <li>
                          <Link to="/security" className="text-gray-300 hover:text-white block font-medium transition-colors">6. Security & Force Protection Systems</Link>
                          <span className="text-xs text-gray-500 block mt-0.5">Hostile vehicle mitigation, perimeter security & integrated access</span>
                        </li>
                      </ul>
                    </div>

                    {/* COLUMN 3: Advanced Tech & Lifecycle Management */}
                    <div>
                      <ul className="space-y-3.5 text-sm">
                        <li>
                          <Link to="/about" className="text-gray-300 hover:text-white block font-medium transition-colors">7. Advanced & Dual-Use Technologies</Link>
                          <span className="text-xs text-gray-500 block mt-0.5">Next-generation tech & dual-use applications</span>
                        </li>
                        <li>
                          <Link to="/indigenization" className="text-gray-300 hover:text-white block font-medium transition-colors">8. Indigenisation & Self-reliance</Link>
                          <span className="text-xs text-gray-500 block mt-0.5">Aviation, marine, and sub-marine indigenised systems</span>
                        </li>
                        <li>
                          <Link to="/contact" className="text-gray-300 hover:text-white block font-medium transition-colors">9. Project & Lifecycle Management</Link>
                          <span className="text-xs text-gray-500 block mt-0.5">Sustainment support & program consulting</span>
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
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`
              }
            >
              Indigenisation
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`
              }
            >
              Contact Us
            </NavLink>
          </div>

          {/* MOBILE MENU TOGGLE BUTTON */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* MOBILE NAV DRAWER PANEL */}
      {isOpen && (
        <div className="lg:hidden glass-panel rounded-none border-t border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`
              }
            >
              About BASMI
            </NavLink>

            {/* Mobile Dropdown Header for Solutions */}
            <div className="px-3 py-2 text-base font-medium text-gray-400 border-t border-white/5 mt-2">
              Integrated Solutions
            </div>
            
            <div className="pl-4 space-y-1 text-sm border-l-2 border-white/10 ml-3">
              <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-1.5 text-gray-400 hover:text-white font-semibold">• 1. Core Capabilities</Link>
              <Link to="/tactical" onClick={() => setIsOpen(false)} className="block px-3 py-1.5 text-gray-400 hover:text-white font-semibold">• 2. Defence Equipment & Technology Solutions</Link>
              <Link to="/uas" onClick={() => setIsOpen(false)} className="block px-3 py-1.5 text-gray-400 hover:text-white font-semibold">• 3. Aerospace Systems</Link>
              <Link to="/aerospace" onClick={() => setIsOpen(false)} className="block px-3 py-1.5 text-gray-400 hover:text-white font-semibold">• 4. Surface and Sub-Surface Systems</Link>
              <Link to="/tactical" onClick={() => setIsOpen(false)} className="block px-3 py-1.5 text-gray-400 hover:text-white font-semibold">• 5. Tactical & Mission Support</Link>
              <Link to="/security" onClick={() => setIsOpen(false)} className="block px-3 py-1.5 text-gray-400 hover:text-white font-semibold">• 6. Security & Force Protection Systems</Link>
              <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-1.5 text-gray-400 hover:text-white font-semibold">• 7. Advanced & Dual-Use Technologies</Link>
              <Link to="/indigenization" onClick={() => setIsOpen(false)} className="block px-3 py-1.5 text-gray-400 hover:text-white font-semibold">• 8. Indigenisation & Self-reliance</Link>
              <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-1.5 text-gray-400 hover:text-white font-semibold">• 9. Project & Lifecycle Management</Link>
            </div>

            <NavLink
              to="/indigenization"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium border-t border-white/5 mt-2 ${
                  isActive ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`
              }
            >
              Indigenisation
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block px-3 py-2 rounded-md text-base font-medium ${
                  isActive ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white hover:bg-white/5'
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
