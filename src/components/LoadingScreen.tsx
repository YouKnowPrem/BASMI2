/** ============================================================================
 *  BASMI Defence Systems - Interactive Loading Screen Component (LoadingScreen.tsx)
 *  ----------------------------------------------------------------------------
 *  Purpose: High-fidelity loading animation sequence featuring simulated progress 
 *           loading bar and a glowing brand logo entry reveal.
 *  Editable Parameters:
 *    - To change simulation durations, modify the duration constant (in ms).
 *    - To swap background glowing parameters, edit inline radial blur classes.
 *  ============================================================================
 */

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void; // Triggered when progress reaches 100% and exit delay completes
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  // progress: Tracks the loading percentage from 0 to 100
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // --- SIMULATED LOADING TIMELINE ---
    const duration = 2500; // 2.5 seconds total loading duration
    const intervalTime = 30; // Milliseconds per tick update
    const steps = duration / intervalTime;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep++;
      const newProgress = Math.min(Math.round((currentStep / steps) * 100), 100);
      setProgress(newProgress);

      if (currentStep >= steps) {
        clearInterval(interval);
        // Wait 500ms before removing the loading page to ensure clean visual transition
        setTimeout(onComplete, 500); 
      }
    }, intervalTime);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    // --- MAIN LOADING LAYER ---
    <motion.div
      key="loading-screen"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }}
      style={{ willChange: 'transform, opacity' }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0a0f16] overflow-hidden"
    >
      {/* GLOWING AMBIENT RADIAL LIGHT IN BACKDROP */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 blur-[100px] rounded-full" />
      </div>

      {/* CORE PROGRESS CONTENTS */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        
        {/* BRAND LOGO GRAPHIC */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative mb-12"
        >
          <img 
            src="/basmi_logo.png" 
            alt="BASMI Logo" 
            className="w-64 lg:w-96 h-auto object-contain drop-shadow-2xl brightness-125"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          {/* Breathing glow backing behind brand logo */}
          <motion.div 
            className="absolute inset-0 bg-blue-500/10 rounded-full blur-xl -z-10"
            style={{ willChange: 'transform' }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

        {/* METRICS & LINEAR TRACK CONTAINER */}
        <div className="relative w-64 h-24 flex flex-col items-center justify-center">
          
          {/* LOADING PERCENTAGE DIGITAL METER */}
          <motion.div 
            className="text-5xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300 font-mono"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            {progress}%
          </motion.div>

          {/* PROGRESS BAR TRACK SYSTEM */}
          <div className="w-full h-1 bg-white/10 mt-6 rounded-full overflow-hidden relative">
            <motion.div 
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-blue-600 via-cyan-400 to-blue-400"
              style={{ width: `${progress}%` }}
              transition={{ ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
