import React from 'react';
import SectionHeader from '../components/SectionHeader';

const About: React.FC = () => {
  return (
    <div className="space-y-12">
        <section>
            <SectionHeader title="About & Philosophy" />
            <div className="prose prose-slate max-w-none text-gray-600 leading-8">
                <p className="font-serif text-xl text-[#2C3E50] italic mb-6">
                    "The best analysis isn't the most complex algorithm,<br/>
                    but the one that actually changes a business decision."
                </p>
                <p className="mb-4">
                    Hello, I am Jiyeon Park. I am not just someone who extracts numbers. 
                    I act as a translator who converts ambiguous organizational problems into the <strong>Language of Data (Metrics)</strong> 
                    and translates insights back into the <strong>Language of Business (Action)</strong>.
                </p>
                <p className="mb-4">
                    Over 8 years across diverse domains, I've learned that a dashboard used daily by the team creates far more value than a model with 95% accuracy that sits on a shelf. 
                    This is why I prioritize <strong>clarity of communication</strong> just as much as technical depth.
                </p>
                <p>
                    My goal is to build organizations where 'Data-Driven' is a culture, not just a slogan. 
                    I empower teams to form hypotheses, validate them through data, and learn from the results—even if they fail.
                </p>
            </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#2C3E50] text-white p-8 rounded-sm shadow-lg">
                <h3 className="font-serif font-bold text-xl mb-6 text-[#3498DB]">Education</h3>
                <ul className="space-y-4">
                    <li className="border-b border-gray-600 pb-2">
                        <div className="flex justify-between font-bold mb-1">
                            <span>Korea University</span>
                            <span className="text-gray-400 text-sm">2010 - 2016</span>
                        </div>
                        <div className="text-sm text-gray-300">B.S. in Statistics (GPA 4.0/4.5)</div>
                    </li>
                    <li>
                         <div className="flex justify-between font-bold mb-1">
                            <span>Data Science School</span>
                            <span className="text-gray-400 text-sm">2017</span>
                        </div>
                        <div className="text-sm text-gray-300">Machine Learning Bootcamp Completed</div>
                    </li>
                </ul>
            </div>

            <div className="bg-white border border-gray-200 p-8 rounded-sm">
                <h3 className="font-serif font-bold text-xl mb-6 text-[#2C3E50]">Certifications</h3>
                <ul className="space-y-4 text-sm text-gray-600">
                    <li className="flex items-center">
                        <svg className="w-5 h-5 text-[#3498DB] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        SQLD (National SQL Developer)
                    </li>
                    <li className="flex items-center">
                        <svg className="w-5 h-5 text-[#3498DB] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        ADsP (Advanced Data Analytics Professional)
                    </li>
                    <li className="flex items-center">
                        <svg className="w-5 h-5 text-[#3498DB] mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        Tableau Desktop Specialist
                    </li>
                </ul>
            </div>
        </section>

        <section>
            <h3 className="font-serif font-bold text-2xl text-[#2C3E50] mb-6">Colleagues Say...</h3>
            <div className="grid grid-cols-1 gap-6">
                <blockquote className="bg-gray-50 p-6 rounded-tl-xl rounded-br-xl border-l-4 border-gray-300 relative group hover:border-[#3498DB] transition-colors duration-300">
                    <p className="text-gray-600 text-sm italic mb-4 leading-relaxed">
                        "Jiyeon consistently operated far above expectations. She not only executed her responsibilities with accuracy but also <strong>proactively identified operational gaps and automated critical workflows</strong> without being asked. She brings a rare combination of technical ability, strong problem-solving skills, and an ownership mindset."
                    </p>
                    <footer className="text-xs font-bold text-[#2C3E50] flex items-center">
                        <span className="w-2 h-2 bg-[#76b900] rounded-full mr-2"></span> {/* NVIDIA Green hint */}
                        Former Business Operations Team Leader, NVIDIA
                    </footer>
                </blockquote>
                
                <blockquote className="bg-gray-50 p-6 rounded-tl-xl rounded-br-xl border-l-4 border-gray-300 relative group hover:border-[#3498DB] transition-colors duration-300">
                    <p className="text-gray-600 text-sm italic mb-4 leading-relaxed">
                        "Jiyeon played a key role in the <strong>Digital Warehouse project</strong>, a foundational component of our Digital Transformation. She was proactive in addressing data quality issues and meticulous with sensitive information. Her clear, respectful, and well-organized communication made her a highly valued team member."
                    </p>
                    <footer className="text-xs font-bold text-[#2C3E50] flex items-center">
                        <span className="w-2 h-2 bg-[#0072BC] rounded-full mr-2"></span> {/* UNHCR Blue hint */}
                        Myungwook Shim, Tech Lead (Digital Transformation), UNHCR
                    </footer>
                </blockquote>
            </div>
        </section>
    </div>
  );
};

export default About;