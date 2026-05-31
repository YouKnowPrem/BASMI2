/** ============================================================================
 *  BASMI Defence Systems - Contact Page Component (Contact.tsx)
 *  ----------------------------------------------------------------------------
 *  Purpose: Displays official corporate headquarters addresses, email, secure 
 *           phone request information, and a contact inquiry form.
 *  Editable Parameters:
 *    - To change headquarters address, edit standard text inside under MapPin.
 *    - Contact email can be updated in a and href mailto properties.
 *  ============================================================================
 */

import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';

export const Contact = () => {
  return (
    <div className="min-h-screen bg-[#050505] pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* PAGE HEADER INTRODUCTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-widest uppercase mb-4">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-600">Us</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get in touch with us for inquiries about integrated security solutions, tactical defense equipment, and aerospace innovations.
          </p>
        </motion.div>

        {/* TWO-COLUMN CONTACT OVERVIEW */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* COLUMN 1: Corporate Details */}
          <div className="space-y-8">
            <GlassCard className="p-8">
              <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Corporate Headquarters</h2>
              <div className="space-y-6">
                
                {/* Physical HQ Address */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 glass-panel rounded-lg shrink-0">
                    <MapPin className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 uppercase tracking-wider text-sm">Address</h3>
                    <p className="text-gray-400 leading-relaxed text-sm">
                      RZ B1/132A, Mahavir Enclave,
                      <br />
                      Dabri, South West Delhi,
                      <br />
                      New Delhi - 110045, India
                    </p>
                  </div>
                </div>

                {/* Secure Primary Email */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 glass-panel rounded-lg shrink-0">
                    <Mail className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 uppercase tracking-wider text-sm">Email</h3>
                    <a href="mailto:sales@basmi-india.com" className="text-blue-400 hover:text-blue-300 transition-colors text-sm">
                      sales@basmi-india.com
                    </a>
                  </div>
                </div>

                {/* Telephone Request (Secure Protocol) */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 glass-panel rounded-lg shrink-0">
                    <Phone className="text-white h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1 uppercase tracking-wider text-sm">Phone</h3>
                    <p className="text-gray-400 text-sm">
                      Available for secure communications upon request.
                    </p>
                  </div>
                </div>

              </div>
            </GlassCard>

            {/* Thematic Footer Subtext */}
            <div className="p-8 border border-white/5 bg-white/[0.02] rounded-xl flex items-center justify-center">
              <span className="text-gray-500 font-mono text-xs tracking-widest uppercase">DEFENCE. INNOVATION. TECHNOLOGY.</span>
            </div>
          </div>

          {/* COLUMN 2: Secure Contact Form */}
          <GlassCard className="p-8">
            <h2 className="text-2xl font-bold text-white mb-6 uppercase tracking-wider">Secure Transmission</h2>
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2 uppercase tracking-wide">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full bg-[#111] border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2 uppercase tracking-wide">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full bg-[#111] border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all"
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2 uppercase tracking-wide">Official Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-[#111] border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all"
                  placeholder="name@organization.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2 uppercase tracking-wide">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-[#111] border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all"
                  placeholder="Inquiry Topic"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2 uppercase tracking-wide">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-[#111] border border-white/10 rounded-md px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-white/20 focus:border-transparent transition-all resize-none"
                  placeholder="Specify detail inquiries here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-white text-black font-semibold rounded-md px-4 py-3 uppercase tracking-widest hover:bg-gray-200 transition-colors"
              >
                Transmit Message
              </button>
            </form>
          </GlassCard>

        </div>
      </div>
    </div>
  );
};
