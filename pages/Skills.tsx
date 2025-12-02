import React from 'react';
import { SKILLS } from '../constants';
import SectionHeader from '../components/SectionHeader';

const Skills: React.FC = () => {
  return (
    <div>
        <SectionHeader title="Technical Proficiency" subtitle="Tools are just the means; Mastery makes the impossible possible." />

        <div className="grid grid-cols-1 gap-12">
            {SKILLS.map((skillGroup, idx) => (
                <div key={idx} className="bg-white">
                    <h3 className="text-xl font-bold text-[#2C3E50] mb-6 flex items-center">
                        <span className="w-2 h-2 bg-[#3498DB] rounded-full mr-3"></span>
                        {skillGroup.category}
                    </h3>
                    <div className="space-y-6">
                        {skillGroup.items.map((skill) => (
                            <div key={skill.name}>
                                <div className="flex justify-between mb-2">
                                    <span className="text-sm font-medium text-gray-700">{skill.name}</span>
                                    <span className="text-xs text-gray-400 font-mono">{skill.level}%</span>
                                </div>
                                <div className="w-full bg-gray-100 rounded-full h-2.5 overflow-hidden">
                                    <div 
                                        className="bg-[#2C3E50] h-2.5 rounded-full transition-all duration-1000 ease-out" 
                                        style={{ width: `${skill.level}%`, opacity: skill.level / 100 + 0.2 }}
                                    ></div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>

        <div className="mt-16 p-8 bg-gray-50 border border-gray-200 rounded-sm">
            <h3 className="text-lg font-serif font-bold text-[#2C3E50] mb-4">Why This Stack?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 text-sm text-gray-600 leading-relaxed">
                <div>
                    <strong className="block text-[#3498DB] mb-2">Python & SQL</strong>
                    My core languages for End-to-End data handling, from extraction to complex analysis and Machine Learning (Random Forest, K-Means).
                </div>
                 <div>
                    <strong className="block text-[#3498DB] mb-2">Process Automation</strong>
                    Using VBA, Power Automate, and Python Scripts to eliminate manual repetition, allowing teams to focus on high-value tasks.
                </div>
                <div>
                    <strong className="block text-[#3498DB] mb-2">Tableau & Looker</strong>
                    Experience pitching to executives at LVMH/UNHCR has taught me that clarity beats complexity. I build visualizations that deliver immediate insights.
                </div>
                <div>
                    <strong className="block text-[#3498DB] mb-2">Business Ops (CRM)</strong>
                    Deep understanding of Salesforce & ERP data structures, acting as a translator between Engineering and Business stakeholders.
                </div>
            </div>
        </div>
    </div>
  );
};

export default Skills;