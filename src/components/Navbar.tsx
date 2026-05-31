/** ============================================================================
 *  BASMI Defence Systems - Redesigned Navigation Bar Component (Navbar.tsx)
 *  ----------------------------------------------------------------------------
 *  Purpose: Premium responsive scroll-adaptive floating glassmorphism pill navbar
 *           with micro-animations, centered menu, and boxed contact CTA.
 *  ============================================================================
 */

import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  // --- STATE & EFFECTS ---
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
    // --- MAIN NAVIGATION CONTAINER (FLOATING & CENTERED WRAPPER) ---
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center w-full transition-all duration-500 pointer-events-none">
      <nav 
        className={`pointer-events-auto transition-all duration-500 w-full ${
          isScrolled 
            ? 'w-[92%] max-w-6xl mt-4 rounded-full bg-white/85 backdrop-blur-lg border border-slate-200/60 shadow-[0_12px_40px_-12px_rgba(0,0,0,0.08)] py-2 px-6 lg:px-8' 
            : 'bg-transparent border-b border-transparent py-4 px-4 sm:px-6 lg:px-8'
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between transition-all duration-500 h-16 md:h-18 lg:h-20">
            
            {/* 1. BRAND LOGO (LEFT) - SCALES DYNAMICALLY */}
            <div className="flex-1 flex justify-start items-center">
              <NavLink to="/" className="flex items-center py-1 shrink-0">
                <img 
                  src="/basmi_logo.png" 
                  alt="BASMI Logo" 
                  className={`w-auto object-contain transition-all duration-500 hover:scale-105 ${
                    isScrolled ? 'h-10 md:h-11 lg:h-13' : 'h-16 md:h-18 lg:h-22'
                  }`}
                  onError={(e) => { e.currentTarget.style.display = 'none'; }} 
                />
              </NavLink>
            </div>
            
            {/* 2. TEXT MENU LINKS (CENTER) */}
            <div className="hidden lg:flex items-center justify-center space-x-2 xl:space-x-4">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative group ${
                    isActive 
                      ? 'text-blue-600 bg-blue-50/80 shadow-[inset_0_1px_2px_rgba(37,99,235,0.05)]' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`
                }
              >
                Company
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-1/3 rounded-full opacity-0 group-hover:opacity-100"></span>
              </NavLink>

              {/* Solutions Dropdown Trigger */}
              <div 
                className="relative"
                onMouseEnter={() => setIsSolutionsOpen(true)}
                onMouseLeave={() => setIsSolutionsOpen(false)}
              >
                <button
                  className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 flex items-center space-x-1 hover:bg-slate-50 text-slate-600 hover:text-slate-900 ${
                    isSolutionsOpen ? 'text-blue-600 bg-blue-50/80' : ''
                  }`}
                >
                  <span>Solutions</span>
                  <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
                </button>

                {/* Animated Mega Dropdown Panel */}
                <AnimatePresence>
                  {isSolutionsOpen && (
                    <motion.div 
                      initial={{ opacity: 0, y: 12, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 12, scale: 0.96 }}
                      transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
                      className="absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[850px] z-50 pointer-events-auto"
                    >
                      <div className="glass-panel p-6 grid grid-cols-3 gap-6 rounded-2xl border border-slate-200/70 bg-white/95 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.12)]">
                        
                        {/* COLUMN 1: Aerospace & Defence */}
                        <div className="space-y-3">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1 px-2">Aerospace & Defence</h4>
                          <ul className="space-y-1">
                            <li>
                              <Link to="/about" className="group block p-2 rounded-xl hover:bg-slate-50 transition-all duration-200">
                                <span className="text-slate-800 group-hover:text-blue-600 block font-semibold text-sm transition-colors">1. Core Capabilities</span>
                                <span className="text-[11px] text-slate-500 block mt-0.5 leading-normal">Strategic aerospace, defence & military systems</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/tactical" className="group block p-2 rounded-xl hover:bg-slate-50 transition-all duration-200">
                                <span className="text-slate-800 group-hover:text-blue-600 block font-semibold text-sm transition-colors">2. Defence Equipment</span>
                                <span className="text-[11px] text-slate-500 block mt-0.5 leading-normal">Strategic systems integration & supply</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/uas" className="group block p-2 rounded-xl hover:bg-slate-50 transition-all duration-200">
                                <span className="text-slate-800 group-hover:text-blue-600 block font-semibold text-sm transition-colors">3. Aerospace Systems</span>
                                <span className="text-[11px] text-slate-500 block mt-0.5 leading-normal">Unmanned aircraft and counter UAS systems</span>
                              </Link>
                            </li>
                          </ul>
                        </div>

                        {/* COLUMN 2: Tactical & Protection */}
                        <div className="space-y-3">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1 px-2">Tactical & Protection</h4>
                          <ul className="space-y-1">
                            <li>
                              <Link to="/aerospace" className="group block p-2 rounded-xl hover:bg-slate-50 transition-all duration-200">
                                <span className="text-slate-800 group-hover:text-blue-600 block font-semibold text-sm transition-colors">4. Surface & Sub-Surface</span>
                                <span className="text-[11px] text-slate-500 block mt-0.5 leading-normal">Unmanned vessels & underwater vehicles</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/tactical" className="group block p-2 rounded-xl hover:bg-slate-50 transition-all duration-200">
                                <span className="text-slate-800 group-hover:text-blue-600 block font-semibold text-sm transition-colors">5. Tactical & Mission Support</span>
                                <span className="text-[11px] text-slate-500 block mt-0.5 leading-normal">Tactical gear & specialized support systems</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/security" className="group block p-2 rounded-xl hover:bg-slate-50 transition-all duration-200">
                                <span className="text-slate-800 group-hover:text-blue-600 block font-semibold text-sm transition-colors">6. Security & Force Protection</span>
                                <span className="text-[11px] text-slate-500 block mt-0.5 leading-normal">Hostile vehicle mitigation & perimeter security</span>
                              </Link>
                            </li>
                          </ul>
                        </div>

                        {/* COLUMN 3: Support & Integration */}
                        <div className="space-y-3">
                          <h4 className="text-xs font-bold uppercase tracking-wider text-blue-600 mb-1 px-2">Support & Integration</h4>
                          <ul className="space-y-1">
                            <li>
                              <Link to="/about" className="group block p-2 rounded-xl hover:bg-slate-50 transition-all duration-200">
                                <span className="text-slate-800 group-hover:text-blue-600 block font-semibold text-sm transition-colors">7. Advanced & Dual-Use Tech</span>
                                <span className="text-[11px] text-slate-500 block mt-0.5 leading-normal">Next-generation tech & dual-use applications</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/indigenization" className="group block p-2 rounded-xl hover:bg-slate-50 transition-all duration-200">
                                <span className="text-slate-800 group-hover:text-blue-600 block font-semibold text-sm transition-colors">8. Indigenisation</span>
                                <span className="text-[11px] text-slate-500 block mt-0.5 leading-normal">Aviation, marine, and sub-marine systems</span>
                              </Link>
                            </li>
                            <li>
                              <Link to="/contact" className="group block p-2 rounded-xl hover:bg-slate-50 transition-all duration-200">
                                <span className="text-slate-800 group-hover:text-blue-600 block font-semibold text-sm transition-colors">9. Project Lifecycle</span>
                                <span className="text-[11px] text-slate-500 block mt-0.5 leading-normal">Sustainment support & program consulting</span>
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <NavLink
                to="/indigenization"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 relative group ${
                    isActive 
                      ? 'text-blue-600 bg-blue-50/80 shadow-[inset_0_1px_2px_rgba(37,99,235,0.05)]' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`
                }
              >
                Indigenisation
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-1/3 rounded-full opacity-0 group-hover:opacity-100"></span>
              </NavLink>
            </div>

            {/* 3. CONTACT US IN A TEXT BOX CTA (RIGHT) - SHIMMER ANIMATION */}
            <div className="flex-1 hidden lg:flex justify-end">
              <Link
                to="/contact"
                className="relative inline-flex items-center justify-center px-6 py-2.5 overflow-hidden font-bold text-xs tracking-wider uppercase rounded-full text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 shadow-md hover:shadow-lg hover:shadow-blue-500/20 active:scale-95 transition-all duration-300 shrink-0 group"
              >
                <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></span>
                Contact Us
              </Link>
            </div>

            {/* MOBILE MENU TOGGLE BUTTON */}
            <div className="flex lg:hidden items-center justify-end flex-1">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-full text-slate-600 hover:text-slate-950 hover:bg-slate-100 focus:outline-none transition-colors"
              >
                {isOpen ? <X className="block h-5 w-5" /> : <Menu className="block h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* MOBILE NAV DRAWER PANEL (SLIDE DOWN ANIMATION) */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
              className="lg:hidden overflow-hidden w-full"
            >
              <div className="mt-2 mx-auto w-full rounded-2xl border border-slate-200/80 bg-white/95 backdrop-blur-xl shadow-lg p-4 space-y-2">
                <NavLink
                  to="/about"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 rounded-xl text-base font-semibold transition-all ${
                      isActive 
                        ? 'text-blue-600 bg-blue-50/60 shadow-[inset_0_1px_2px_rgba(37,99,235,0.02)]' 
                        : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
                    }`
                  }
                >
                  Company
                </NavLink>

                {/* Mobile Dropdown Header for Solutions */}
                <div className="px-4 pt-4 pb-2 text-xs font-bold text-slate-400 uppercase tracking-widest border-t border-slate-100 mt-2">
                  Solutions
                </div>
                
                <div className="pl-4 space-y-1 text-sm border-l-2 border-slate-100 ml-4 mb-2">
                  <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:text-blue-600 font-semibold transition-colors">• 1. Core Capabilities</Link>
                  <Link to="/tactical" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:text-blue-600 font-semibold transition-colors">• 2. Defence Equipment</Link>
                  <Link to="/uas" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:text-blue-600 font-semibold transition-colors">• 3. Aerospace Systems</Link>
                  <Link to="/aerospace" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:text-blue-600 font-semibold transition-colors">• 4. Surface and Sub-Surface</Link>
                  <Link to="/tactical" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:text-blue-600 font-semibold transition-colors">• 5. Tactical & Mission Support</Link>
                  <Link to="/security" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:text-blue-600 font-semibold transition-colors">• 6. Security & Force Protection</Link>
                  <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:text-blue-600 font-semibold transition-colors">• 7. Advanced & Dual-Use Tech</Link>
                  <Link to="/indigenization" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:text-blue-600 font-semibold transition-colors">• 8. Indigenisation</Link>
                  <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:text-blue-600 font-semibold transition-colors">• 9. Project Lifecycle</Link>
                </div>

                <NavLink
                  to="/indigenization"
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2.5 rounded-xl text-base font-semibold border-t border-slate-100 mt-2 transition-all ${
                      isActive 
                        ? 'text-blue-600 bg-blue-50/60 shadow-[inset_0_1px_2px_rgba(37,99,235,0.02)]' 
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
                    `block px-4 py-2.5 rounded-xl text-base font-semibold transition-all ${
                      isActive 
                        ? 'text-blue-600 bg-blue-50/60 shadow-[inset_0_1px_2px_rgba(37,99,235,0.02)]' 
                        : 'text-slate-700 hover:text-slate-950 hover:bg-slate-50'
                    }`
                  }
                >
                  Contact Us
                </NavLink>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </div>
  );
};
