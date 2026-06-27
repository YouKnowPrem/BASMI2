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
import { useForm, ValidationError } from '@formspree/react';

export const Contact = () => {
  const [state, handleSubmit] = useForm('maqgokoz');
  return (
    <div className="min-h-screen bg-background pt-32 lg:pt-48 pb-24 lg:pb-36 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* PAGE HEADER INTRODUCTION */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 lg:mb-24"
        >
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-widest uppercase mb-4">
            Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-slate-600 to-green-600 font-extrabold">Us</span>
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Get in touch with us for inquiries about integrated security solutions, tactical defense equipment, and aerospace innovations.
          </p>
        </motion.div>

        {/* TWO-COLUMN CONTACT OVERVIEW */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
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
            {state.succeeded ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center py-12 space-y-6"
              >
                <div className="mx-auto w-16 h-16 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center text-emerald-600 shadow-sm">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div className="space-y-2">
                  <h3 className="text-slate-850 font-black tracking-widest uppercase text-lg">Message Received</h3>
                  <p className="text-slate-600 text-sm max-w-sm mx-auto leading-relaxed">
                    Thank you. Your message has been securely routed to the appropriate department. Our team will review and respond shortly.
                  </p>
                </div>
              </motion.div>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="firstName" className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      required
                      className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 transition-all shadow-sm text-sm"
                      placeholder="Enter first name"
                    />
                    <ValidationError prefix="First Name" field="firstName" errors={state.errors} className="text-red-500 text-xs mt-1.5 block font-medium" />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      required
                      className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 transition-all shadow-sm text-sm"
                      placeholder="Enter last name"
                    />
                    <ValidationError prefix="Last Name" field="lastName" errors={state.errors} className="text-red-500 text-xs mt-1.5 block font-medium" />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Official Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 transition-all shadow-sm text-sm"
                    placeholder="name@organization.com"
                  />
                  <ValidationError prefix="Email" field="email" errors={state.errors} className="text-red-500 text-xs mt-1.5 block font-medium" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 transition-all shadow-sm text-sm"
                    placeholder="Inquiry Topic"
                  />
                  <ValidationError prefix="Subject" field="subject" errors={state.errors} className="text-red-500 text-xs mt-1.5 block font-medium" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-bold text-slate-600 mb-2 uppercase tracking-wide">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    className="w-full bg-white border border-slate-200 rounded-md px-4 py-3 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-500 transition-all shadow-sm text-sm resize-none"
                    placeholder="Specify detail inquiries here..."
                  ></textarea>
                  <ValidationError prefix="Message" field="message" errors={state.errors} className="text-red-500 text-xs mt-1.5 block font-medium" />
                </div>

                <button
                  type="submit"
                  disabled={state.submitting}
                  className="w-full bg-blue-600 text-white font-bold rounded-md px-4 py-3.5 uppercase tracking-widest hover:bg-blue-700 transition-colors shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {state.submitting ? 'Sending...' : 'Send'}
                </button>
              </form>
            )}
          </GlassCard>

        </div>
      </div>
    </div>
  );
};
