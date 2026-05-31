/** ============================================================================
 *  BASMI Defence Systems - Homepage Component (Home.tsx)
 *  ----------------------------------------------------------------------------
 *  Purpose: Displays the primary landing experience, showing the hero section
 *           for a sleek, clean visual layout.
 *  ============================================================================
 */

import { Hero } from '../components/Hero';

export const Home = () => {
  return (
    <div className="w-full animate-fade-in">
      {/* 1. HERO MAIN VIEWPORT */}
      <Hero />
    </div>
  );
};
