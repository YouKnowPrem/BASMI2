/** ============================================================================
 *  BASMI Defence Systems - Glassmorphic Container Component (GlassCard.tsx)
 *  ----------------------------------------------------------------------------
 *  Purpose: Premium card component featuring a futuristic glassmorphic aesthetic 
 *           complete with interactive mouse-tracking radial glow lighting.
 *  Editable Parameters:
 *    - Hover boundary/border glow colors are defined in index.css (.glass-panel-hover).
 *    - To change transition behaviors, adjust motion.div props.
 *  ============================================================================
 */

import React from 'react';
import { motion, type HTMLMotionProps } from 'framer-motion';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

// Helper utility for merging Tailwind CSS classnames dynamically
function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: React.ReactNode;
  delay?: number;       // Animations entrance delay (in seconds)
  hoverEffect?: boolean; // Toggles interactive scale and border brightness on hover
}

export const GlassCard: React.FC<GlassCardProps> = ({ 
  children, 
  className, 
  delay = 0,
  hoverEffect = true,
  ...props 
}) => {
  // Track relative x & y coordinates of the cursor within the card limits
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });

  // Update hover glow coordinates during movement
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePosition({ x, y });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      className={cn(
        "relative overflow-hidden glass-panel",
        hoverEffect && "glass-panel-hover",
        className
      )}
      onMouseMove={handleMouseMove}
      {...props}
    >
      {/* Interactive Liquid Lighting Layer (CSS custom variables used in radial background) */}
      <div 
        className="liquid-glow" 
        style={{
          '--x': `${mousePosition.x}px`,
          '--y': `${mousePosition.y}px`,
        } as React.CSSProperties}
      />
      {/* Card Content Layer */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
