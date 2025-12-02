import React, { useState } from 'react';
import SectionHeader from '../components/SectionHeader';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => setIsSubmitted(true), 500);
  };

  return (
    <div className="space-y-12">
        <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-[#2C3E50] mb-4">Let's Connect</h2>
            <p className="text-gray-600 mb-8">
                Ready to create new value through data?<br/>
                Feel free to request a coffee chat or send a job proposal.
            </p>
            
            <a 
                href="#" 
                className="inline-flex items-center justify-center px-8 py-4 bg-[#2C3E50] text-white font-bold rounded-sm hover:bg-[#3498DB] transition-colors duration-300 shadow-lg"
            >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                Download Resume (PDF)
            </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 border-t border-gray-100 pt-12">
            <div>
                <h3 className="font-serif font-bold text-lg text-[#2C3E50] mb-6">Contact Channels</h3>
                <div className="space-y-4">
                    <a href="#" className="flex items-center p-4 bg-gray-50 rounded-sm hover:bg-gray-100 transition">
                        <div className="w-10 h-10 bg-[#0077B5] text-white flex items-center justify-center rounded-sm mr-4">
                            <span className="font-bold text-lg">in</span>
                        </div>
                        <div>
                            <span className="block font-bold text-[#2C3E50]">LinkedIn</span>
                            <span className="text-xs text-gray-500">Professional Profile</span>
                        </div>
                    </a>
                    <a href="#" className="flex items-center p-4 bg-gray-50 rounded-sm hover:bg-gray-100 transition">
                        <div className="w-10 h-10 bg-[#333] text-white flex items-center justify-center rounded-sm mr-4">
                             <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                        </div>
                        <div>
                            <span className="block font-bold text-[#2C3E50]">GitHub</span>
                            <span className="text-xs text-gray-500">Code Samples & Scripts</span>
                        </div>
                    </a>
                    <a href="mailto:data@example.com" className="flex items-center p-4 bg-gray-50 rounded-sm hover:bg-gray-100 transition">
                        <div className="w-10 h-10 bg-red-500 text-white flex items-center justify-center rounded-sm mr-4">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                        </div>
                        <div>
                            <span className="block font-bold text-[#2C3E50]">Email</span>
                            <span className="text-xs text-gray-500">data@example.com</span>
                        </div>
                    </a>
                </div>
            </div>

            <div className="bg-white">
                <h3 className="font-serif font-bold text-lg text-[#2C3E50] mb-6">Send a Message</h3>
                {isSubmitted ? (
                     <div className="bg-green-50 text-green-800 p-6 rounded-sm text-center border border-green-100">
                        <h4 className="font-bold text-lg mb-2">Message Sent!</h4>
                        <p className="text-sm">I'll get back to you within 24 hours.</p>
                     </div>
                ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Name</label>
                            <input 
                                type="text" 
                                required
                                value={formState.name}
                                onChange={e => setFormState({...formState, name: e.target.value})}
                                className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 focus:outline-none focus:border-[#3498DB] transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Email</label>
                            <input 
                                type="email" 
                                required
                                value={formState.email}
                                onChange={e => setFormState({...formState, email: e.target.value})}
                                className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 focus:outline-none focus:border-[#3498DB] transition-colors"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold text-gray-500 uppercase mb-1">Message</label>
                            <textarea 
                                required
                                rows={4}
                                value={formState.message}
                                onChange={e => setFormState({...formState, message: e.target.value})}
                                className="w-full bg-gray-50 border-b-2 border-gray-200 p-3 focus:outline-none focus:border-[#3498DB] transition-colors resize-none"
                            ></textarea>
                        </div>
                        <button 
                            type="submit" 
                            className="w-full py-4 bg-[#2C3E50] text-white font-bold text-sm tracking-wider uppercase hover:bg-[#1a252f] transition-colors"
                        >
                            Send Message
                        </button>
                    </form>
                )}
            </div>
        </div>
    </div>
  );
};

export default Contact;