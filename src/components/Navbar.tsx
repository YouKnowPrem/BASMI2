/** ============================================================================
 *  BASMI Defence Systems - Navigation Bar Component (Navbar.tsx)
 *  ----------------------------------------------------------------------------
 *  Purpose: Responsive scroll-adaptive transparent navbar with centered menu,
 *           larger logo on the left, and boxed contact CTA on the right.
 *  ============================================================================
 */

import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown, Building2, Compass, Plane, Shield, ShieldAlert } from 'lucide-react';

export const Navbar = () => {
  // --- STATE & EFFETS ---
  const [isOpen, setIsOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);
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
        <div className="flex items-center justify-between h-24 lg:h-28">
          
          {/* 1. BRAND LOGO (LEFT) - SLIGHTLY BIGGER */}
          <div className="flex-1 flex justify-start items-center">
            <NavLink to="/" className="flex items-center py-2 shrink-0">
              <img 
                src="/BASMI_svg.svg" 
                alt="BASMI Logo" 
                className="h-18 md:h-20 lg:h-24 w-auto object-contain transition-transform duration-300 hover:scale-105" 
                onError={(e) => { e.currentTarget.style.display = 'none'; }} 
              />
            </NavLink>
          </div>
          
          {/* 2. TEXT MENU LINKS (CENTER) */}
          <div className="hidden lg:flex items-center justify-center space-x-2 xl:space-x-4">
            {/* Company Dropdown Trigger */}
            <div 
              onMouseEnter={() => setIsCompanyOpen(true)}
              onMouseLeave={() => setIsCompanyOpen(false)}
            >
              <button
                className={`px-4 py-2 rounded-md text-sm font-semibold transition-all flex items-center space-x-1 ${
                  isCompanyOpen 
                    ? 'text-blue-600 bg-blue-50/60' 
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                }`}
              >
                <span>Company</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isCompanyOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Company Dropdown Panel */}
              {isCompanyOpen && (
                <div className="absolute left-0 right-0 top-full w-full bg-white/95 backdrop-blur-2xl border-y border-slate-200/80 shadow-lg py-10 z-50 animate-fade-in">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center space-x-20">
                    <Link 
                      to="/about" 
                      className="group flex flex-col items-center p-4 rounded-xl hover:bg-slate-50 transition-all duration-300 w-48 text-center"
                    >
                      <div className="p-3 bg-slate-50 group-hover:bg-blue-50 rounded-xl transition-all duration-300 mb-3 shadow-sm border border-slate-100 group-hover:border-blue-100">
                        <Building2 className="h-8 w-8 text-slate-500 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300" />
                      </div>
                      <span className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">About BASMI</span>
                    </Link>

                    <Link 
                      to="/about#mission" 
                      className="group flex flex-col items-center p-4 rounded-xl hover:bg-slate-50 transition-all duration-300 w-48 text-center"
                    >
                      <div className="p-3 bg-slate-50 group-hover:bg-blue-50 rounded-xl transition-all duration-300 mb-3 shadow-sm border border-slate-100 group-hover:border-blue-100">
                        <Compass className="h-8 w-8 text-slate-500 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300" />
                      </div>
                      <span className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Mission & Vision</span>
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Integrated Solutions Dropdown Trigger */}
            <div 
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
                <span>Solutions</span>
                <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isSolutionsOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Panel */}
              {isSolutionsOpen && (
                <div className="absolute left-0 right-0 top-full w-full bg-white/95 backdrop-blur-2xl border-y border-slate-200/80 shadow-lg py-10 z-50 animate-fade-in">
                  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center space-x-16">
                    <Link 
                      to="/aerospace" 
                      className="group flex flex-col items-center p-4 rounded-xl hover:bg-slate-50 transition-all duration-300 w-56 text-center"
                    >
                      <div className="p-3 bg-slate-50 group-hover:bg-blue-50 rounded-xl transition-all duration-300 mb-3 shadow-sm border border-slate-100 group-hover:border-blue-100">
                        <Plane className="h-8 w-8 text-slate-500 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300" />
                      </div>
                      <span className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Aerospace Systems</span>
                    </Link>

                    <Link 
                      to="/tactical" 
                      className="group flex flex-col items-center p-4 rounded-xl hover:bg-slate-50 transition-all duration-300 w-56 text-center"
                    >
                      <div className="p-3 bg-slate-50 group-hover:bg-blue-50 rounded-xl transition-all duration-300 mb-3 shadow-sm border border-slate-100 group-hover:border-blue-100">
                        <Shield className="h-8 w-8 text-slate-500 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300" />
                      </div>
                      <span className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Defence Equipments</span>
                    </Link>

                    <Link 
                      to="/security" 
                      className="group flex flex-col items-center p-4 rounded-xl hover:bg-slate-50 transition-all duration-300 w-56 text-center"
                    >
                      <div className="p-3 bg-slate-50 group-hover:bg-blue-50 rounded-xl transition-all duration-300 mb-3 shadow-sm border border-slate-100 group-hover:border-blue-100">
                        <ShieldAlert className="h-8 w-8 text-slate-500 group-hover:text-blue-600 group-hover:scale-110 transition-all duration-300" />
                      </div>
                      <span className="text-sm font-bold text-slate-800 group-hover:text-blue-600 transition-colors">Hostile Vehicle Mitigation</span>
                    </Link>
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
            {/* Mobile Dropdown Header for Company */}
            <div className="px-4 pt-2 pb-1 text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
              Company
            </div>
            
            <div className="pl-4 space-y-1 text-sm border-l-2 border-slate-200 ml-4 mb-2">
              <Link to="/about" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:text-blue-600 font-semibold">• About BASMI</Link>
              <Link to="/about#mission" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:text-blue-600 font-semibold">• Mission statement & Vision</Link>
            </div>

            {/* Mobile Dropdown Header for Solutions */}
            <div className="px-4 pt-4 pb-2 text-xs font-bold text-slate-400 uppercase tracking-widest border-t border-slate-100 mt-2">
              Solutions
            </div>
            
            <div className="pl-4 space-y-1 text-sm border-l-2 border-slate-200 ml-4 mb-2">
              <Link to="/aerospace" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:text-blue-600 font-semibold">• 1. Aerospace Systems</Link>
              <Link to="/tactical" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:text-blue-600 font-semibold">• 2. Defence Equipments</Link>
              <Link to="/security" onClick={() => setIsOpen(false)} className="block px-3 py-2 text-slate-600 hover:text-blue-600 font-semibold">• 3. Hostile Vehicle Mitigation Solutions</Link>
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
