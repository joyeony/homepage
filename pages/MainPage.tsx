import React from 'react';
import { HERO_DATA, KEY_METRICS, CAREER_TIMELINE, SKILLS, EDUCATION, CERTIFICATIONS, TESTIMONIALS } from '../constants';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';
import SectionHeader from '../components/SectionHeader';

const MainPage: React.FC = () => {
  return (
    <div className="space-y-16">
      
      {/* Header Section */}
      <section className="flex flex-col gap-8 items-start mb-12">
        <div className="flex-1 space-y-4 max-w-3xl">
            <h1 className="font-serif font-black text-[#2C3E50] leading-tight">
                <span className="block text-2xl md:text-3xl mb-1 text-gray-700">
                    Senior Data Analyst <span className="whitespace-nowrap font-bold">& Ops Specialist</span>
                </span>
                <span className="block text-5xl md:text-6xl text-[#3498DB]">{HERO_DATA.name}</span>
            </h1>
            <p className="text-xl text-gray-600 font-medium leading-relaxed">
                {HERO_DATA.tagline}
            </p>
            <div className="text-gray-500 text-sm leading-7 text-justify">
                {HERO_DATA.summary}
            </div>

            {/* Concise Contact Section */}
            <div className="flex flex-wrap gap-4 mt-6 pt-4 border-t border-gray-100">
                <a href="#" className="inline-flex items-center px-4 py-2 bg-[#2C3E50] text-white text-xs font-bold uppercase rounded-sm hover:bg-[#3498DB] transition-colors">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                    Download Resume
                </a>
                <a href="https://www.linkedin.com/in/jiyeon-park-182b28135/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 bg-gray-100 text-[#2C3E50] text-xs font-bold uppercase rounded-sm hover:bg-gray-200 transition-colors border border-gray-200">
                     <svg className="w-4 h-4 mr-2 text-[#0077B5]" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                     LinkedIn
                </a>
                <a href="mailto:jiyeon.park1208@gmail.com" className="inline-flex items-center px-4 py-2 bg-gray-100 text-[#2C3E50] text-xs font-bold uppercase rounded-sm hover:bg-gray-200 transition-colors border border-gray-200">
                    <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    Email
                </a>
                <div className="inline-flex items-center px-4 py-2 bg-gray-50 text-gray-500 text-xs font-bold uppercase rounded-sm border border-gray-200 cursor-default">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                    Bay Area, CA, USA
                </div>
            </div>
        </div>
      </section>

      {/* Technical Skills Section (Compact & Consistent) */}
      <section>
        <SectionHeader title="Technical Proficiency" subtitle="Core Tools & Technologies" />
        <div className="flex flex-col gap-3 pl-2">
            {SKILLS.map((skillGroup, idx) => (
                <div key={idx} className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-6">
                    <div className="w-full md:w-48 flex-shrink-0">
                        <h3 className="text-sm font-bold text-[#2C3E50] font-sans">
                            {skillGroup.category}
                        </h3>
                    </div>
                    <div className="flex-1 flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                            <span key={skill.name} className="px-2.5 py-1 bg-gray-50 border border-gray-100 text-gray-600 text-xs font-medium rounded-sm hover:border-[#3498DB] hover:text-[#3498DB] transition-colors cursor-default">
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Metrics Grid */}
      <section>
        <SectionHeader title="Key Performance Metrics" subtitle="Proven Business Impact & ROI" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {KEY_METRICS.map((metric, idx) => (
                <div key={idx} className="bg-gray-50 border border-gray-100 p-6 rounded-sm hover:shadow-md transition-shadow duration-300">
                    <p className="text-gray-500 text-xs font-bold uppercase tracking-wider mb-1">{metric.label}</p>
                    <p className="text-3xl font-serif font-bold text-[#2C3E50] mb-2">{metric.value}</p>
                    <p className="text-xs text-gray-400 mb-4">{metric.subtext}</p>
                    <div className="h-16 w-full">
                         <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={metric.data}>
                                <defs>
                                    <linearGradient id={`color${idx}`} x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#3498DB" stopOpacity={0.3}/>
                                    <stop offset="95%" stopColor="#3498DB" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <Tooltip cursor={false} contentStyle={{ display: 'none' }} />
                                <Area type="monotone" dataKey="value" stroke="#3498DB" strokeWidth={2} fillOpacity={1} fill={`url(#color${idx})`} />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            ))}
        </div>
      </section>

      {/* Career Timeline */}
      <section>
        <SectionHeader title="Career History" subtitle="A Record of Growth & Contribution" />
        <div className="relative border-l-2 border-gray-200 ml-3 space-y-10 py-2">
            {CAREER_TIMELINE.map((item) => (
                <div key={item.id} className="relative pl-8 group">
                    <div className="absolute -left-[9px] top-1 w-4 h-4 rounded-full bg-white border-4 border-[#3498DB] group-hover:scale-125 transition-transform duration-300"></div>
                    <span className="text-sm font-bold text-[#3498DB] mb-1 block">{item.year}</span>
                    <h3 className="text-xl font-bold text-[#2C3E50]">{item.title}</h3>
                    <p className="text-md font-serif text-gray-700 mb-2">{item.company}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.description}</p>
                </div>
            ))}
        </div>
      </section>

      {/* Certifications & Education (Compact) - Swapped */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
            <SectionHeader title="Certifications" />
            <div className="bg-white p-0 rounded-sm h-full">
                <ul className="space-y-4">
                    {CERTIFICATIONS.map((cert, idx) => (
                        <li key={idx} className={`rounded-sm transition-colors ${cert.type === 'detailed' ? 'bg-gray-50 p-4 border border-gray-100' : 'flex items-center p-2 hover:bg-gray-50'}`}>
                            {cert.type === 'detailed' ? (
                                <div className="flex flex-col gap-1">
                                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline border-b border-gray-200 pb-2 mb-2">
                                        <span className="font-bold text-[#2C3E50] text-sm">{cert.name}</span>
                                        {cert.period && <span className="text-xs text-gray-400 font-mono">{cert.period}</span>}
                                    </div>
                                    <div className="flex justify-between items-center text-xs text-gray-800 font-semibold">
                                        <span>{cert.degree}</span>
                                        {cert.gpa && <span className="bg-[#3498DB]/10 text-[#3498DB] px-2 py-0.5 rounded-sm">{cert.gpa}</span>}
                                    </div>
                                    {cert.description && <p className="text-xs text-gray-500 italic mt-1 leading-relaxed">{cert.description}</p>}
                                </div>
                            ) : (
                                <>
                                    <div className="w-8 h-8 rounded-full bg-[#3498DB]/10 flex items-center justify-center mr-3 text-[#3498DB] flex-shrink-0">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    </div>
                                    <span className="text-sm font-medium text-gray-700">{cert.name}</span>
                                </>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div>
            <SectionHeader title="Education" />
            <ul className="space-y-6">
                {EDUCATION.map((edu, idx) => (
                    <li key={idx} className="bg-gray-50 p-4 rounded-sm border border-gray-100 flex flex-col gap-1">
                        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline border-b border-gray-200 pb-2 mb-2">
                             <span className="font-bold text-[#2C3E50] text-sm">{edu.school}</span>
                             <span className="text-xs text-gray-400 font-mono">{edu.period}</span>
                        </div>
                        <div className="flex justify-between items-center text-xs text-gray-800 font-semibold">
                            <span>{edu.degree}</span>
                            {edu.gpa && <span className="bg-[#3498DB]/10 text-[#3498DB] px-2 py-0.5 rounded-sm">{edu.gpa}</span>}
                        </div>
                        {edu.description && <p className="text-xs text-gray-500 italic mt-1 leading-relaxed">
                            {edu.description}
                        </p>}
                    </li>
                ))}
            </ul>
        </div>
      </section>

      {/* Recommendations */}
      <section>
        <SectionHeader title="Colleagues Say..." />
        <div className="grid grid-cols-1 gap-6">
            {TESTIMONIALS.map((t, idx) => (
                <blockquote key={idx} className="bg-gray-50 p-6 rounded-tl-xl rounded-br-xl border-l-4 border-gray-300 relative group hover:border-[#3498DB] transition-colors duration-300">
                    <p className="text-gray-600 text-sm italic mb-4 leading-relaxed">"{t.quote}"</p>
                    <footer className="text-xs font-bold text-[#2C3E50] flex items-center">
                        <span className="w-2 h-2 rounded-full mr-2" style={{ backgroundColor: t.color }}></span>
                        {t.author}, {t.role}
                    </footer>
                </blockquote>
            ))}
        </div>
      </section>

    </div>
  );
};

export default MainPage;