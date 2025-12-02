import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const Projects: React.FC = () => {
  const categories = ["All", "Business Ops", "Advanced Analytics", "Supply Chain & FP&A", "Marketing Analytics", "Management"];
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects = activeCategory === "All" 
    ? PROJECTS 
    : PROJECTS.filter(p => p.category === activeCategory);

  return (
    <div className="space-y-8">
        <div className="text-center mb-8">
            <h2 className="text-3xl font-serif font-bold text-[#2C3E50] mb-4">Master Project Portfolio</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
                15 Core Projects categorized by functional domain. <br/>
                Demonstrating impact across Operations, Supply Chain, and Data Science.
            </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 sticky top-16 z-20 bg-[#F5F7FA]/90 p-2 backdrop-blur-sm rounded-lg">
            {categories.map(cat => (
                <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 text-xs md:text-sm font-bold rounded-full transition-all border ${
                        activeCategory === cat 
                        ? 'bg-[#2C3E50] text-white border-[#2C3E50]' 
                        : 'bg-white text-gray-500 border-gray-200 hover:border-[#3498DB] hover:text-[#3498DB]'
                    }`}
                >
                    {cat}
                </button>
            ))}
        </div>

        <div className="space-y-12">
            {filteredProjects.map((project) => (
                <div key={project.id} className="bg-white border border-gray-100 rounded-sm p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                        <div>
                            <div className="flex flex-wrap gap-2 mb-3">
                                <span className="px-2 py-1 bg-[#3498DB]/10 text-[#3498DB] text-[10px] font-bold uppercase tracking-wider rounded-sm">
                                    {project.category}
                                </span>
                                {project.tags.map(tag => (
                                    <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 text-[10px] uppercase font-bold tracking-wider rounded-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <h3 className="text-2xl font-bold text-[#2C3E50] mb-1">{project.title}</h3>
                            <div className="flex items-center text-gray-500 text-sm font-medium">
                                <span className="text-[#3498DB]">{project.company}</span>
                                <span className="mx-2">•</span>
                                <span>{project.role}</span>
                                <span className="mx-2">•</span>
                                <span>{project.period}</span>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-gray-100 pt-6">
                        <div className="space-y-6">
                            <div>
                                <h4 className="font-serif font-bold text-gray-800 mb-2 border-b border-gray-200 inline-block pb-1">Situation & Task</h4>
                                <p className="text-gray-600 text-sm leading-relaxed mb-3">
                                    <span className="font-bold text-gray-800 block text-xs uppercase mb-1">Context</span>
                                    {project.star.situation}
                                </p>
                                <p className="text-gray-600 text-sm leading-relaxed">
                                    <span className="font-bold text-gray-800 block text-xs uppercase mb-1">Goal</span>
                                    {project.star.task}
                                </p>
                            </div>
                            <div>
                                <h4 className="font-serif font-bold text-gray-800 mb-2 border-b border-gray-200 inline-block pb-1">Action</h4>
                                <ul className="list-disc list-outside ml-4 space-y-1.5 text-sm text-gray-600">
                                    {project.star.action.map((act, i) => (
                                        <li key={i}>{act}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-sm border border-gray-200 flex flex-col justify-between">
                            <div>
                                <h4 className="font-serif font-bold text-[#2C3E50] mb-4">Result & Impact</h4>
                                <p className="text-[#2C3E50] font-medium mb-6 text-sm italic">"{project.star.result}"</p>
                            </div>
                            
                            {/* Comparison Chart */}
                            <div className="h-40 w-full mb-2">
                                <ResponsiveContainer width="100%" height="100%">
                                    <BarChart data={project.star.metrics} layout="vertical" margin={{ top: 5, right: 30, left: 10, bottom: 5 }}>
                                        <XAxis type="number" hide />
                                        <YAxis dataKey="label" type="category" width={80} tick={{fontSize: 10, fill: '#666', fontWeight: 600}} />
                                        <Tooltip 
                                            cursor={{fill: 'transparent'}}
                                            contentStyle={{backgroundColor: '#2C3E50', color: '#fff', borderRadius: '4px', border: 'none', fontSize: '12px'}}
                                        />
                                        <Bar dataKey="trend" barSize={18} radius={[0, 4, 4, 0]}>
                                            {project.star.metrics.map((entry, index) => (
                                                <Cell key={`cell-${index}`} fill={index === 0 ? '#3498DB' : '#2C3E50'} />
                                            ))}
                                        </Bar>
                                    </BarChart>
                                </ResponsiveContainer>
                            </div>
                            <div className="flex justify-around border-t border-gray-200 pt-3">
                                {project.star.metrics.map((m, i) => (
                                    <div key={i} className="text-center">
                                        <span className="block text-[10px] text-gray-500 uppercase font-bold tracking-wider">{m.label}</span>
                                        <span className="block text-lg font-bold text-[#2C3E50]">{m.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    </div>
  );
};

export default Projects;