/** ============================================================================
 *  BASMI Defence Systems - Core App Configuration & Router (App.tsx)
 *  ----------------------------------------------------------------------------
 *  Purpose: Configures browser routing, exit entrance page animations, 
 *           scroll-to-top helpers, and global loading animations.
 *  Editable Parameters:
 *    - To add new pages or layouts, import the component and define a <Route />.
 *  ============================================================================
 */

import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { LoadingScreen } from './components/LoadingScreen';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { UAS } from './pages/UAS';
import { SecurityParams } from './pages/SecurityParams';
import { Tactical } from './pages/Tactical';
import { Aerospace } from './pages/Aerospace';
import { Indigenization } from './pages/Indigenization';
import { Contact } from './pages/Contact';

// ScrollToTop: Forces viewport coordinates to (0,0) on page route changes
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  // isLoading: Controls the interactive opening loading splash screen
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Router>
      {/* Route listener to handle scroll resets */}
      <ScrollToTop />
      
      {/* Animated landing splash screen trigger */}
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      
      {/* GLOBAL LAYOUT VIEWPORT WRAPPER */}
      <div className={`flex flex-col min-h-screen text-gray-200 transition-opacity duration-1000 ${isLoading ? 'opacity-0 overflow-hidden h-screen' : 'opacity-100'}`}>
        
        {/* Core Global Components */}
        <Navbar />
        
        {/* Main Routed Render Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/uas" element={<UAS />} />
            <Route path="/security" element={<SecurityParams />} />
            <Route path="/tactical" element={<Tactical />} />
            <Route path="/aerospace" element={<Aerospace />} />
            <Route path="/indigenization" element={<Indigenization />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        {/* Universal Footer Component */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
