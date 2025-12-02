import React from 'react';
import { HERO_DATA, KEY_METRICS, CAREER_TIMELINE } from '../constants';
import { AreaChart, Area, ResponsiveContainer, Tooltip } from 'recharts';
import SectionHeader from '../components/SectionHeader';

const MainPage: React.FC = () => {
  return (
    <div className="space-y-12">
      
      {/* Header Section */}
      <section className="flex flex-col md:flex-row gap-8 items-start md:items-center mb-12">
        <div className="flex-1 space-y-4">
            <h1 className="font-serif font-black text-[#2C3E50] leading-tight">
                <span className="block text-2xl md:text-3xl mb-1 text-gray-700">
                    Senior Data Analyst <span className="whitespace-nowrap">& Ops Specialist</span>
                </span>
                <span className="block text-5xl md:text-6xl text-[#3498DB]">{HERO_DATA.name}</span>
            </h1>
            <p className="text-xl text-gray-600 font-medium leading-relaxed">
                {HERO_DATA.tagline}
            </p>
            <div className="text-gray-500 text-sm leading-7 text-justify">
                {HERO_DATA.summary}
            </div>
        </div>
        <div className="w-full md:w-1/3 aspect-[3/4] md:aspect-square bg-gray-200 rounded-sm overflow-hidden shadow-inner relative group">
            {/* 
              UPDATED: Pointing to local file 'profile.jpg'. 
              Please ensure you place your specific photo (with the UN flag) in the public folder and name it 'profile.jpg'.
            */}
            <img 
                src="/profile.jpg" 
                alt="Jiyeon Park Profile" 
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
            />
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
    </div>
  );
};

export default MainPage;