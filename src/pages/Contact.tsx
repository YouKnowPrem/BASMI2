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
import { Mail, MapPin } from 'lucide-react';
import { GlassCard } from '../components/GlassCard';

export const Contact = () => {
  return (
    <div className="min-h-screen bg-background pt-32 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* PAGE HEADER INTRODUCTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-widest uppercase mb-4">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-slate-600 to-green-600 font-extrabold">Us</span>
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Get in touch with us for inquiries about integrated security solutions, tactical defense equipment, and aerospace innovations.
          </p>
        </motion.div>

        {/* TWO-COLUMN CONTACT OVERVIEW */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* COLUMN 1: Corporate Details */}
          <div className="space-y-8">
            <GlassCard className="p-8">
              <div className="space-y-6">
                
                {/* Physical HQ Address */}
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg shrink-0 text-blue-600">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-slate-800 font-bold mb-1 uppercase tracking-wider text-sm">Address</h3>
                    <p className="text-slate-600 leading-relaxed text-sm">
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
                  <div className="p-3 bg-blue-50 border border-blue-100 rounded-lg shrink-0 text-blue-600">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-slate-800 font-bold mb-1 uppercase tracking-wider text-sm">Email</h3>
                    <a href="mailto:sales@basmi-india.com" className="text-blue-600 hover:text-blue-500 transition-colors text-sm font-medium">
                      sales@basmi-india.com
                    </a>
                  </div>
                </div>

              </div>
            </GlassCard>

            {/* Thematic Footer Subtext */}
            <div className="p-8 border border-slate-200 bg-slate-50 rounded-xl flex items-center justify-center">
              <span className="text-slate-400 font-mono text-xs tracking-widest uppercase font-semibold">DEFENCE. INNOVATION. TECHNOLOGY.</span>
            </div>
          </div>

          {/* COLUMN 2: Secure Contact Form */}
          <GlassCard className="p-8">
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="firstName" className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 transition-all shadow-sm text-sm"
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 transition-all shadow-sm text-sm"
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Official Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 transition-all shadow-sm text-sm"
                  placeholder="name@organization.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Subject</label>
                <input
                  type="text"
                  id="subject"
                  className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 transition-all shadow-sm text-sm"
                  placeholder="Inquiry Topic"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Message</label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 transition-all shadow-sm text-sm resize-none"
                  placeholder="Specify detail inquiries here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-bold rounded-md px-4 py-3.5 uppercase tracking-widest hover:bg-blue-700 transition-colors shadow-sm"
              >
                Send
              </button>
            </form>
          </GlassCard>

        </div>
      </div>
    </div>
  );
};
