import React, { useState, useMemo } from 'react';
import SectionHeader from '../components/SectionHeader';
import { DASHBOARD_SCENARIOS } from '../constants';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar, Cell, PieChart, Pie, Legend, LineChart, Line, ComposedChart } from 'recharts';

type DashboardType = 'pmo' | 'ops' | 'retention' | 'scm' | 'marketing';

const Dashboards: React.FC = () => {
  const [activeTab, setActiveTab] = useState<DashboardType>('pmo');
  const [dateRange, setDateRange] = useState('Last 30 Days');
  const [region, setRegion] = useState('Global');

  const TABS: { id: DashboardType; label: string }[] = [
    { id: 'pmo', label: 'Project Portfolio' },
    { id: 'ops', label: 'Ops & Process' },
    { id: 'retention', label: 'Retention Model' },
    { id: 'scm', label: 'Supply Chain' },
    { id: 'marketing', label: 'Marketing Funnel' },
  ];

  const COLORS = ['#2C3E50', '#3498DB', '#1ABC9C', '#E74C3C', '#F1C40F'];

  // --- DATA SIMULATION LOGIC ---
  // This useMemo dynamically adjusts the mock data based on the selected filters (Date Range & Region).
  // It gives the "feel" of a real dashboard without needing a backend.
  const currentScenario = useMemo(() => {
    // 1. Create a deep copy of the base data to avoid mutating the constants
    const baseData = JSON.parse(JSON.stringify(DASHBOARD_SCENARIOS[activeTab]));

    // 2. Define Multipliers based on selection
    let volumeMultiplier = 1;
    let rateModifier = 1.0; // Multiplier for rates (e.g., APAC might have slightly different conversion)

    // Date Logic (Counts accumulate over time)
    if (dateRange === 'Last 30 Days') volumeMultiplier *= 1;
    else if (dateRange === 'Last Quarter') volumeMultiplier *= 3.2; // Approx 3 months + growth
    else if (dateRange === 'YTD') volumeMultiplier *= 9.5; // Approx 9-10 months

    // Region Logic (Splitting the global pie)
    if (region === 'Global') {
        volumeMultiplier *= 1;
        rateModifier = 1.0;
    } else if (region === 'North America') {
        volumeMultiplier *= 0.45; // 45% of vol
        rateModifier = 1.02; // Slightly higher efficiency
    } else if (region === 'APAC') {
        volumeMultiplier *= 0.30; // 30% of vol
        rateModifier = 0.98; // Slightly lower
    } else if (region === 'EMEA') {
        volumeMultiplier *= 0.25; // 25% of vol
        rateModifier = 1.01;
    }

    // 3. Helper function to adjust specific numbers
    const adjustNumber = (val: number, isRate: boolean) => {
        if (isRate) return Number((val * rateModifier).toFixed(1)); // Rates change slightly by region
        return Math.round(val * volumeMultiplier); // Counts scale heavily by date/region
    };

    // 4. Adjust KPIs (Parsing strings like "+275%" or "$14.2")
    baseData.kpi = baseData.kpi.map((k: any) => {
        const rawString = k.value.replace(/[$,%]/g, ''); // Remove symbols
        const val = parseFloat(rawString);
        
        if (!isNaN(val)) {
            // Check if it's a rate (Percentage, Avg, Score) or Volume (Count, Total)
            // Heuristic: If label has "Rate", "Score", "Accuracy", "Compliance" OR value has "%" -> It's a Rate.
            const isRate = k.label.includes('Rate') || k.label.includes('Score') || k.label.includes('Compliance') || k.label.includes('Acc') || k.value.includes('%');
            const isCurrency = k.value.includes('$');
            const isPercent = k.value.includes('%');

            let newVal = adjustNumber(val, isRate);

            // Special case: Time reduction (e.g. -95%) shouldn't change much
            if (k.label.includes('Time') || k.label.includes('Reduction')) newVal = val; 

            k.value = `${isCurrency ? '$' : ''}${newVal}${isPercent ? '%' : ''}`;
        }
        return k;
    });

    // 5. Adjust Chart Data (Recursively find numbers and scale them)
    // We explicitly target the specific arrays known for each scenario to be safe
    const arraysToScale = ['priorityVsEffort', 'orgRequest', 'throughputTrend', 'churnTrend', 'inventory', 'leadTime', 'funnel', 'abTest'];
    
    arraysToScale.forEach(key => {
        if (baseData[key]) {
             baseData[key] = baseData[key].map((item: any) => {
                 Object.keys(item).forEach(prop => {
                     if (typeof item[prop] === 'number') {
                         // Heuristic for Chart Properties
                         // Rates: 'rate', 'conv', 'compliance', 'score', 'percent', 'prediction'
                         const lowerProp = prop.toLowerCase();
                         const isRate = lowerProp.includes('rate') || lowerProp.includes('conv') || lowerProp.includes('score') || lowerProp.includes('prediction') || lowerProp.includes('days');
                         
                         // Special case: 'days' (Lead Time) usually doesn't scale with DateRange, only Region
                         if (lowerProp.includes('days')) {
                            item[prop] = Math.round(item[prop] * (region === 'Global' ? 1 : rateModifier)); 
                         } else {
                            item[prop] = adjustNumber(item[prop], isRate);
                         }
                     }
                 });
                 return item;
             });
        }
    });

    return baseData;
  }, [activeTab, dateRange, region]);


  const renderControls = () => (
      <div className="flex flex-wrap items-center gap-4 bg-gray-100 p-3 rounded-sm mb-4 border border-gray-200 text-xs">
          <div className="flex items-center gap-2">
              <span className="font-bold text-gray-600">Date Range:</span>
              <select 
                value={dateRange}
                onChange={(e) => setDateRange(e.target.value)}
                className="bg-white border border-gray-300 rounded px-2 py-1 cursor-pointer hover:border-[#3498DB] focus:outline-none focus:border-[#3498DB] transition-colors"
              >
                  <option>Last 30 Days</option>
                  <option>Last Quarter</option>
                  <option>YTD</option>
              </select>
          </div>
           <div className="flex items-center gap-2">
              <span className="font-bold text-gray-600">Region:</span>
              <select 
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="bg-white border border-gray-300 rounded px-2 py-1 cursor-pointer hover:border-[#3498DB] focus:outline-none focus:border-[#3498DB] transition-colors"
              >
                  <option>Global</option>
                  <option>North America</option>
                  <option>APAC</option>
                  <option>EMEA</option>
              </select>
          </div>
          <div className="ml-auto flex items-center gap-2 text-gray-400 italic">
             Demo Mode Active
          </div>
      </div>
  );

  const renderContent = () => {
    switch (activeTab) {
      case 'pmo': {
        const data = currentScenario;
        return (
          <>
            {renderControls()}
            {/* PMO Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-sm border border-gray-100 shadow-sm">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-md font-bold text-[#2C3E50]">Priority vs. Effort Analysis</h3>
                    <button className="text-xs text-[#3498DB] font-bold">Download CSV</button>
                </div>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data.priorityVsEffort} layout="vertical" margin={{top:5, right:30, left:20, bottom:5}}>
                      <XAxis type="number" hide />
                      <YAxis dataKey="priority" type="category" width={80} tick={{fontSize: 12}} />
                      <Tooltip contentStyle={{fontSize: '12px'}} />
                      <Legend iconType="circle" wrapperStyle={{fontSize:'12px'}} />
                      <Bar dataKey="XL" stackId="a" fill="#2C3E50" />
                      <Bar dataKey="L" stackId="a" fill="#3498DB" />
                      <Bar dataKey="M" stackId="a" fill="#BDC3C7" />
                      <Bar dataKey="S" stackId="a" fill="#ECF0F1" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
              <div className="bg-white p-6 rounded-sm border border-gray-100 shadow-sm">
                 <div className="flex justify-between items-center mb-6">
                    <h3 className="text-md font-bold text-[#2C3E50]">Resource Demand by Org</h3>
                    <button className="text-xs text-[#3498DB] font-bold">View Details</button>
                </div>
                <div className="h-64">
                   <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data.orgRequest}>
                      <CartesianGrid strokeDasharray="3 3" vertical={false} />
                      <XAxis dataKey="name" tick={{fontSize: 10}} />
                      <YAxis tick={{fontSize: 10}} />
                      <Tooltip cursor={{fill: 'transparent'}} contentStyle={{fontSize: '12px'}} />
                      <Bar dataKey="value" fill="#3498DB" radius={[4, 4, 0, 0]} barSize={40} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 p-4 rounded-sm border-l-4 border-[#2C3E50] mt-6">
                <h4 className="font-bold text-sm text-[#2C3E50] mb-1">Analyst Insight</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                    A visualization of the IT Service Request landscape managed at UNHCR. 
                    Requests from DevZone and the BI Team constitute 40% of the total volume. Notably, 50% of Critical projects require XL-sized resources, prompting a strategic recommendation to leadership for resource reallocation and process automation to alleviate bottlenecks.
                </p>
            </div>
          </>
        );
      }
      
      case 'ops': {
        const data = currentScenario;
        return (
          <>
             {renderControls()}
             <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 bg-white p-6 rounded-sm border border-gray-100 shadow-sm">
                    <h3 className="text-md font-bold text-[#2C3E50] mb-6">Automation Impact (Throughput)</h3>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={data.throughputTrend}>
                                <defs>
                                    <linearGradient id="colorAuto" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#2ECC71" stopOpacity={0.8}/>
                                        <stop offset="95%" stopColor="#2ECC71" stopOpacity={0}/>
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip contentStyle={{fontSize: '12px'}} />
                                <Area type="monotone" dataKey="manual" stackId="1" stroke="#95A5A6" fill="#95A5A6" />
                                <Area type="monotone" dataKey="auto" stackId="1" stroke="#2ECC71" fill="url(#colorAuto)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-sm border border-gray-100 shadow-sm">
                    <h3 className="text-md font-bold text-[#2C3E50] mb-6">Data Quality Compliance</h3>
                    <div className="h-64">
                         <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={data.quality} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                                    <Cell fill="#2C3E50" />
                                    <Cell fill="#E74C3C" />
                                    <Cell fill="#F1C40F" />
                                </Pie>
                                <Legend verticalAlign="bottom" height={36} />
                                <Tooltip />
                            </PieChart>
                         </ResponsiveContainer>
                    </div>
                </div>
             </div>
             <div className="bg-gray-50 p-4 rounded-sm border-l-4 border-[#2ECC71] mt-6">
                <h4 className="font-bold text-sm text-[#2C3E50] mb-1">Analyst Insight</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                    Reflecting process improvements at NVIDIA and MinebeaMitsumi.
                    The introduction of automation (Green Area) drove a 3.7x (275%) surge in throughput. Simultaneously, the Data Governance Framework maintained data integrity errors below 5%, proving that speed does not have to compromise quality.
                </p>
            </div>
          </>
        );
      }

      case 'retention': {
        const data = currentScenario;
        return (
             <>
             {renderControls()}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-sm border border-gray-100 shadow-sm">
                    <h3 className="text-md font-bold text-[#2C3E50] mb-6">Churn Rate (Actual vs Predicted)</h3>
                    <div className="h-64">
                         <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data.churnTrend}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                <XAxis dataKey="segment" tick={{fontSize: 10}} />
                                <YAxis />
                                <Tooltip cursor={{fill: 'transparent'}} />
                                <Legend />
                                <Bar dataKey="rate" name="Actual Churn" fill="#E74C3C" radius={[4,4,0,0]} />
                                <Bar dataKey="prediction" name="Predicted Risk" fill="#3498DB" radius={[4,4,0,0]} />
                            </BarChart>
                         </ResponsiveContainer>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-sm border border-gray-100 shadow-sm">
                    <h3 className="text-md font-bold text-[#2C3E50] mb-6">Donor Segmentation (K-Means)</h3>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie data={data.segments} outerRadius={80} dataKey="value" label={({name, percent}) => `${name} ${(percent * 100).toFixed(0)}%`}>
                                    {data.segments.map((entry: any, index: number) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                </div>
             </div>
             <div className="bg-gray-50 p-4 rounded-sm border-l-4 border-[#E74C3C] mt-6">
                <h4 className="font-bold text-sm text-[#2C3E50] mb-1">Analyst Insight</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                    Results from Donor Churn Prediction & Segmentation at UNHCR.
                    The Random Forest model's predictions (Blue) accurately tracked actual churn (Red). Targeted marketing campaigns focused on the 'Hibernating' and 'At-Risk' clusters identified via K-Means achieved a 150% ROI, validating the predictive approach.
                </p>
            </div>
          </>
        );
      }

      case 'scm': {
        const data = currentScenario;
        return (
          <>
             {renderControls()}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-sm border border-gray-100 shadow-sm">
                    <h3 className="text-md font-bold text-[#2C3E50] mb-6">Inventory: Stock vs Forecast</h3>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <ComposedChart data={data.inventory}>
                                <CartesianGrid stroke="#f5f5f5" />
                                <XAxis dataKey="month" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="stock" barSize={20} fill="#95A5A6" />
                                <Line type="monotone" dataKey="forecast" stroke="#E67E22" strokeWidth={3} />
                            </ComposedChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-sm border border-gray-100 shadow-sm">
                    <h3 className="text-md font-bold text-[#2C3E50] mb-6">Logistics Lead Time (Import)</h3>
                    <div className="h-64">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data.leadTime} layout="vertical">
                                <XAxis type="number" hide />
                                <YAxis dataKey="lane" type="category" width={50} tick={{fontSize: 12}} />
                                <Tooltip cursor={{fill: 'transparent'}} />
                                <Bar dataKey="days" fill="#2C3E50" radius={[0, 4, 4, 0]} barSize={20}>
                                    {data.leadTime.map((entry:any, index:number) => (
                                        <Cell key={`cell-${index}`} fill={entry.days > 10 ? '#E74C3C' : '#2C3E50'} />
                                    ))}
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
             </div>
             <div className="bg-gray-50 p-4 rounded-sm border-l-4 border-[#E67E22] mt-6">
                <h4 className="font-bold text-sm text-[#2C3E50] mb-1">Analyst Insight</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                    Demand Forecasting & Logistics Optimization dashboard used at LVMH.
                    By Week 4, the Variance Analysis model narrowed the gap between Forecast (Orange Line) and Actual Stock, reducing excess inventory by 12%. The visualization of EU-KR route delays (Red Bar) was instrumental in prioritizing supply chain process improvements.
                </p>
            </div>
          </>
        );
      }

      case 'marketing': {
        const data = currentScenario;
        return (
           <>
             {renderControls()}
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-sm border border-gray-100 shadow-sm">
                    <h3 className="text-md font-bold text-[#2C3E50] mb-6">Conversion Funnel</h3>
                    <div className="h-64">
                         <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={data.funnel} layout="vertical" margin={{left: 20}}>
                                <XAxis type="number" hide />
                                <YAxis dataKey="stage" type="category" width={80} tick={{fontSize: 11}} />
                                <Tooltip cursor={{fill: 'transparent'}} />
                                <Bar dataKey="count" fill="#3498DB" radius={[0, 4, 4, 0]} barSize={30}>
                                    <Cell fill="#3498DB" fillOpacity={1} />
                                    <Cell fill="#3498DB" fillOpacity={0.8} />
                                    <Cell fill="#3498DB" fillOpacity={0.6} />
                                    <Cell fill="#3498DB" fillOpacity={0.4} />
                                    <Cell fill="#2C3E50" fillOpacity={1} /> {/* Purchase highlight */}
                                </Bar>
                            </BarChart>
                         </ResponsiveContainer>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-sm border border-gray-100 shadow-sm">
                    <h3 className="text-md font-bold text-[#2C3E50] mb-6">Landing Page A/B Test</h3>
                    <div className="h-64 flex items-center justify-center">
                        <div className="w-full h-full">
                            <ResponsiveContainer width="100%" height="100%">
                                <BarChart data={data.abTest}>
                                    <CartesianGrid strokeDasharray="3 3" vertical={false} />
                                    <XAxis dataKey="variant" />
                                    <YAxis domain={[0, 5]} />
                                    <Tooltip />
                                    <Bar dataKey="conv" fill="#8884d8" barSize={50}>
                                        <Cell fill="#95A5A6" />
                                        <Cell fill="#2ECC71" /> 
                                    </Bar>
                                </BarChart>
                            </ResponsiveContainer>
                        </div>
                    </div>
                </div>
             </div>
             <div className="bg-gray-50 p-4 rounded-sm border-l-4 border-[#3498DB] mt-6">
                <h4 className="font-bold text-sm text-[#2C3E50] mb-1">Analyst Insight</h4>
                <p className="text-xs text-gray-600 leading-relaxed">
                    Outcomes from CRO projects at UNHCR and LVMH.
                    The 'New UI' (Variant B) demonstrated a 0.8%p lift in conversion over Control (Variant A), achieving statistical significance. Improvements in the 'Add to Cart' stage significantly reduced drop-off, leading to a 10% reduction in Customer Acquisition Cost (CAC).
                </p>
            </div>
           </> 
        );
      }
      
      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <SectionHeader title="BI Portfolio Gallery" subtitle="Strategic Visualizations & Operations Monitoring" />
        
        {/* Data Masking Disclaimer Banner */}
        <div className="bg-blue-50 border-l-4 border-[#3498DB] p-4 mb-8 -mt-4 rounded-r-sm flex items-start shadow-sm">
             <svg className="w-5 h-5 text-[#3498DB] mr-3 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
             <div>
                 <h4 className="text-sm font-bold text-[#2C3E50]">Why Re-created Dashboards?</h4>
                 <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                     To strictly adhere to <strong>Non-Disclosure Agreements (NDAs)</strong> with previous employers (NVIDIA, UNHCR, LVMH), I have re-engineered these dashboards from scratch.
                     <br className="mb-1"/>
                     While the <strong>data is randomized</strong>, the layout, business logic, and metric selection faithfully represent the production-grade tools I built to drive executive decision-making. This demonstrates my ability to structure complex information without compromising confidentiality.
                 </p>
             </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-2 border-b border-gray-200 pb-1">
        {TABS.map((tab) => (
            <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-3 text-sm font-bold rounded-t-md transition-all border-b-2 ${
                    activeTab === tab.id 
                    ? 'bg-white text-[#2C3E50] border-[#2C3E50] shadow-sm' 
                    : 'text-gray-500 border-transparent hover:text-gray-700 hover:bg-gray-50'
                }`}
            >
                {tab.label}
            </button>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="min-h-[500px] animate-fade-in">
        
        {/* Common KPIs Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {currentScenario.kpi.map((kpi: any, idx: number) => (
                <div key={idx} className="bg-white p-5 rounded-sm border border-gray-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-shadow">
                    <div className="relative z-10">
                        <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider mb-1">{kpi.label}</p>
                        <div className="flex items-end gap-2">
                            <span className="text-2xl font-serif font-bold text-[#2C3E50]">{kpi.value}</span>
                            <span className={`text-xs font-bold px-1.5 py-0.5 rounded-sm mb-1 ${kpi.isPositive ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'}`}>
                                {kpi.change}
                            </span>
                        </div>
                    </div>
                </div>
            ))}
        </div>

        {/* Dynamic Charts Area */}
        {renderContent()}

      </div>
    </div>
  );
};

export default Dashboards;