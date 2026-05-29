import { motion } from 'motion/react';
import { Mail, MapPin, Phone, Clock, Send, Globe } from 'lucide-react';
import React, { useState, FormEvent } from 'react';

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const mailtoUrl = `mailto:swan@agro.au.dk?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`)}`;
    window.location.href = mailtoUrl;
    setIsSubmitted(true);
  };

  return (
    <div className="pt-24 md:pt-32 pb-24 space-y-12 md:space-y-16 mt-10 md:mt-0">
      {/* Header */}
      <section className="px-6 md:px-12 pt-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-lg md:text-xl text-slate-600 max-w-3xl leading-relaxed font-light">
            Our research group welcomes inquiries regarding collaborative projects, and academic postings. We are actively seeking applications from highly motivated PhD candidates and postdoctoral researchers with backgrounds in remote sensing, machine learning, process models, and agriculture.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="px-6 md:px-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
         {/* Form Section */}
         <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           className="lg:col-span-7 space-y-12"
         >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-900">Send a Message</h3>
              <p className="text-slate-500 font-light italic text-sm">Communication will be directed to the corresponding lab members.</p>
            </div>

            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-8 bg-slate-50 border border-slate-200 rounded-xl space-y-4"
              >
                <h4 className="font-bold text-slate-800">Message Dispatch Initialized</h4>
                <p className="text-sm text-slate-600 leading-relaxed font-light">
                  Your message has been formatted. A mail client reference has been requested for <span className="font-bold text-primary font-mono select-all">swan@agro.au.dk</span>.
                </p>
                <p className="text-xs text-slate-400 leading-relaxed font-light font-mono">
                  If your default mail client did not launch, please click the button below or email us directly at swan@agro.au.dk:
                </p>
                <div className="pt-2 flex flex-wrap gap-4 items-center">
                  <a 
                    href={`mailto:swan@agro.au.dk?subject=${encodeURIComponent(formState.subject)}&body=${encodeURIComponent(`Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`)}`}
                    className="inline-flex items-center gap-2 px-6 py-3 bg-slate-900 text-white font-bold hover:bg-primary transition-all text-xs uppercase tracking-widest font-mono"
                  >
                    Send Direct Email
                  </a>
                  <button 
                    onClick={() => {
                      setFormState({ name: '', email: '', subject: '', message: '' });
                      setIsSubmitted(false);
                    }}
                    className="text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-slate-900 transition-colors font-mono"
                  >
                    / New Message
                  </button>
                </div>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-10">
                 <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
                    <div className="space-y-2">
                      <label className="section-label">Full Name</label>
                      <input 
                        type="text" 
                        className="w-full px-0 py-3 bg-white border-b border-slate-200 focus:border-primary transition-all outline-none rounded-none"
                        placeholder="Jane Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="section-label">Email Address</label>
                      <input 
                        type="email" 
                        className="w-full px-0 py-3 bg-white border-b border-slate-200 focus:border-primary transition-all outline-none rounded-none"
                        placeholder="jane@university.edu"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        required
                      />
                    </div>
                 </div>
                 <div className="space-y-2">
                    <label className="section-label">Subject</label>
                    <input 
                      type="text" 
                      className="w-full px-0 py-3 bg-white border-b border-slate-200 focus:border-primary transition-all outline-none rounded-none"
                      placeholder="Research inquiry"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      required
                    />
                 </div>
                 <div className="space-y-2">
                    <label className="section-label">Message</label>
                    <textarea 
                      rows={4}
                      className="w-full px-0 py-3 bg-white border-b border-slate-200 focus:border-primary transition-all outline-none resize-none rounded-none"
                      placeholder="Describe your request..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      required
                    ></textarea>
                 </div>
                 <button 
                  type="submit"
                  className="w-full sm:w-auto px-10 py-4 bg-slate-900 text-white font-bold hover:bg-primary transition-all flex items-center justify-center gap-3"
                 >
                   Send Message <Send size={16} />
                 </button>
              </form>
            )}
         </motion.div>

         {/* Info Section */}
         <motion.div
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           className="lg:col-span-5 space-y-16"
         >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
               <div className="space-y-4">
                  <span className="section-label">Location</span>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Office</h4>
                    <p className="text-slate-500 text-[10px] leading-relaxed uppercase tracking-widest font-mono">
                      Dept. Agroecology<br />
                      Aarhus University<br />
                      Land-CRAFT<br />
                      Building 1171<br />
                      Ole Worms Allé 3, 8000 Aarhus, Denmark
                    </p>
                  </div>
               </div>
               <div className="space-y-4">
                  <span className="section-label">Admin</span>
                  <div>
                    <h4 className="font-bold text-slate-900 mb-1">Email</h4>
                    <p className="text-slate-500 text-[10px] leading-relaxed uppercase tracking-widest font-mono">
                      swan@agro.au.dk
                    </p>
                  </div>
               </div>
            </div>

            {/* Map Embed */}
            <div className="space-y-6">
               <span className="section-label">Directions</span>
               <div className="aspect-square w-full bg-slate-50 border border-slate-100 overflow-hidden relative">
                  <iframe 
                    title="Aarhus University Location Map"
                    src="https://maps.google.com/maps?q=Ole%20Worms%20All%C3%A9%203%208000%20Aarhus%20Denmark&t=&z=14&ie=UTF8&iwloc=&output=embed&hl=en"
                    className="w-full h-full border-0 grayscale hover:grayscale-0 transition-all duration-700"
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                  <div className="absolute bottom-6 right-6">
                     <a 
                      href="https://www.google.com/maps/search/?api=1&query=Ole+Worms+All%C3%A9+3,+8000+Aarhus,+Denmark" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-white text-slate-900 text-[10px] font-bold uppercase tracking-widest rounded-none shadow-sm border border-slate-100 hover:bg-slate-50 transition-colors flex items-center gap-2"
                     >
                       Google Maps <Globe size={12} />
                     </a>
                  </div>
               </div>
            </div>
         </motion.div>
      </section>
    </div>
  );
}
