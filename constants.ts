import { Project, Skill, CareerItem, Metric } from './types';

// --- DYNAMIC CALCULATIONS ---
// Career Start Date: June 2016 (GAOK)
const CAREER_START = new Date('2016-06-01');
const CURRENT_DATE = new Date();
const diffTime = Math.abs(CURRENT_DATE.getTime() - CAREER_START.getTime());
const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25); 
const YEARS_OF_EXP = Math.floor(diffYears); // Automatically calculates 8 or 9 based on today's date

export const NAV_LINKS = [
  { label: 'Summary', path: '/' },
  { label: 'Project History', path: '/projects' },
  { label: 'BI Portfolio', path: '/dashboards' },
  { label: 'Technical Skills', path: '/skills' },
  { label: 'About', path: '/about' },
  { label: 'Contact', path: '/contact' },
];

export const HERO_DATA = {
  name: "Jiyeon Park",
  role: "Senior Data Analyst & Ops Specialist",
  tagline: "Translating Data into Business Certainty.",
  summary: `With ${YEARS_OF_EXP} years of experience at global organizations like NVIDIA, UNHCR, and LVMH, I specialize in bridging the gap between raw data and strategic execution. I don't just report on problems; I build automated systems and governance frameworks that solve them by optimizing processes and accelerating decision-making.`
};

export const KEY_METRICS: Metric[] = [
  {
    label: "Ops Efficiency",
    value: "+275%",
    subtext: "Weekly Throughput Lift (NVIDIA)",
    data: [{name: 'M1', value: 100}, {name: 'M2', value: 150}, {name: 'M3', value: 280}, {name: 'M4', value: 375}]
  },
  {
    label: "Time Saved",
    value: "-95%",
    subtext: "Reporting Latency Reduction (UNHCR)",
    data: [{name: 'Legacy', value: 100}, {name: 'V1', value: 40}, {name: 'Final', value: 5}]
  },
  {
    label: "Inventory Opt",
    value: "-12%",
    subtext: "Excess Stock Reduction (LVMH)",
    data: [{name: 'Q1', value: 100}, {name: 'Q2', value: 95}, {name: 'Q3', value: 90}, {name: 'Q4', value: 88}]
  }
];

export const CAREER_TIMELINE: CareerItem[] = [
  {
    id: 'c1',
    year: '2025.05 - Present',
    title: 'Business Operations Analyst',
    company: 'NVIDIA',
    description: 'Optimizing Salesforce data ecosystems and internal AI search tools. Achieved a 3.7x increase in weekly operational throughput.'
  },
  {
    id: 'c2',
    year: '2022.09 - 2024.08',
    title: 'Senior Data Analyst',
    company: 'UNHCR (The UN Refugee Agency)',
    description: 'Established CRM Data Governance frameworks and Donor Retention modeling. Reduced data extraction latency from 3 days to 1 hour.'
  },
  {
    id: 'c3',
    year: '2019.09 - 2022.05',
    title: 'Supply & Forecasting Coordinator',
    company: 'LVMH P&C',
    description: 'Managed Demand Forecasting for 5,000+ SKUs. Maintained 98% Service Level during a critical Distribution Center migration.'
  },
  {
    id: 'c4',
    year: '2018.02 - 2019.09',
    title: 'Operations Management Associate',
    company: 'MinebeaMitsumi',
    description: 'Automated Manufacturing ERP reporting using VBA, reducing manual workload by 30%.'
  },
  {
    id: 'c5',
    year: '2017.01 - 2018.01',
    title: 'Store Manager',
    company: 'CJ OLIVE YOUNG',
    description: 'Supervised 6+ staff and optimized inventory management. Reduced stock discrepancies and drove sales growth via local marketing promotions.'
  },
  {
    id: 'c6',
    year: '2016.06 - 2016.12',
    title: 'International Coordinator',
    company: 'GAOK',
    description: 'Facilitated international public relations and client communications. Provided multilingual translation (Korean-English-Japanese) for civil projects.'
  }
];

export const PROJECTS: Project[] = [
  // 1. Business Operations & Process Efficiency
  {
    id: 'p1',
    category: 'Business Ops',
    title: "Salesforce Data Ecosystem Optimization",
    role: "Business Operations Analyst",
    company: "NVIDIA",
    period: "2025.05 - Present",
    tags: ["Python", "Google APIs", "Salesforce", "Automation"],
    star: {
      situation: "Fragmented partner data in Salesforce caused downstream errors in internal AI search tools, capping manual processing at 40 items/week.",
      task: "Re-engineer validation workflows to ensure high-integrity inputs for internal AI systems and scale throughput.",
      action: [
        "Executed a programmatic cleanup of 3,700+ global records using Python/Google APIs.",
        "Built automated intake pipelines eliminating manual entry.",
        "Implemented validation logic with engineering to 'future-proof' database health."
      ],
      result: "Increased weekly capacity by 275% (3.7x) and delivered the roadmap 3 months early.",
      metrics: [
        { label: "Throughput Lift", value: "+275%", trend: 275 },
        { label: "Delivery Speed", value: "-3 Mos", trend: 30 }
      ]
    }
  },
  {
    id: 'p2',
    category: 'Business Ops',
    title: "CRM Data Governance Framework",
    role: "Senior Data Analyst",
    company: "UNHCR",
    period: "2022.09 - 2024.08",
    tags: ["Data Governance", "SQL", "Dashboard", "Training"],
    star: {
      situation: "Inconsistent data entry by field teams resulted in 'dirty data,' causing reporting errors and stalling cross-team projects.",
      task: "Establish a robust Data Governance framework to enforce integrity.",
      action: [
        "Defined strict data entry standards and validation rules for the CRM.",
        "Implemented automated quality checks and 'exception reporting' dashboards.",
        "Conducted training to align sales/support teams on protocols."
      ],
      result: "Achieved 95% data quality compliance and accelerated project delivery by 20%.",
      metrics: [
        { label: "Compliance", value: "95%", trend: 95 },
        { label: "Project Speed", value: "+20%", trend: 20 }
      ]
    }
  },
  {
    id: 'p3',
    category: 'Business Ops',
    title: "IT Service Request Automation",
    role: "Senior Data Analyst",
    company: "UNHCR",
    period: "2022.09 - 2024.08",
    tags: ["MS Teams", "MS Forms", "Workflow Automation"],
    star: {
      situation: "Unstructured email requests for IT assets led to lost tickets and slow resolution.",
      task: "Streamline the intake process to reduce triage time.",
      action: [
        "Developed automated workflows using Microsoft Teams and Forms.",
        "Built logic to route requests to correct personnel based on category.",
        "Enforced required info upfront to reduce back-and-forth."
      ],
      result: "Significantly shortened resolution time and standardized the intake lifecycle.",
      metrics: [
        { label: "Process Type", value: "Automated", trend: 100 },
        { label: "Resolution", value: "Faster", trend: 50 }
      ]
    },
  },
  {
    id: 'p4',
    category: 'Business Ops',
    title: "Internal AI Search Data Optimization",
    role: "Business Operations Analyst",
    company: "NVIDIA",
    period: "2025.05 - Present",
    tags: ["Data Quality", "AI/ML Support", "Metadata"],
    star: {
      situation: "Internal AI search tools were hallucinating or ranking poorly due to bad metadata.",
      task: "Refine the underlying dataset to improve tool reliability for employees.",
      action: [
        "Identified metadata fields causing ranking errors.",
        "Executed targeted remediation on high-impact records.",
        "Collaborated with system owners to implement 'bad data' blockers."
      ],
      result: "Optimized system usability and search relevance for the internal AI ecosystem.",
      metrics: [
        { label: "Accuracy", value: "Improved", trend: 80 },
        { label: "Usability", value: "Optimized", trend: 90 }
      ]
    }
  },
   {
    id: 'p5',
    category: 'Business Ops',
    title: "Manufacturing ERP Reporting Automation",
    role: "Operations Associate",
    company: "MinebeaMitsumi",
    period: "2018.02 - 2019.09",
    tags: ["VBA", "Excel", "ERP"],
    star: {
      situation: "Manual Excel entry from ERP consumed 30% of weekly capacity and caused errors.",
      task: "Digitize reporting to free up time for analysis.",
      action: [
        "Engineered VBA macros to extract and clean ERP data instantly.",
        "Standardized KPI dashboards for factory leadership.",
        "Streamlined the feedback loop between production and sales."
      ],
      result: "Reduced manual workload by 30%, saving ~1.5 days per week.",
      metrics: [
        { label: "Efficiency", value: "+30%", trend: 30 },
        { label: "Errors", value: "Eliminated", trend: 100 }
      ]
    }
  },

  // 2. Advanced Analytics & Data Science
  {
    id: 'p6',
    category: 'Advanced Analytics',
    title: "Predictive Churn Modeling",
    role: "PM & Main Analyst",
    company: "UNHCR",
    period: "2022.03 - 2022.09",
    tags: ["Python", "Machine Learning", "Random Forest", "SQL"],
    star: {
      situation: "A 40% early-stage churn rate was eroding LTV and wasting marketing spend.",
      task: "Identify 'at-risk' users early to intervene and protect revenue.",
      action: [
        "Analyzed 2TB of log data to engineer 15 predictive features.",
        "Deployed a Random Forest model (AUC 0.82) to score user risk.",
        "Led a targeted retention campaign for high-risk segments."
      ],
      result: "Improved retention by 12% points and achieved 150% ROI.",
      metrics: [
        { label: "Retention Lift", value: "+12%p", trend: 12 },
        { label: "ROI", value: "150%", trend: 150 }
      ]
    }
  },
  {
    id: 'p7',
    category: 'Advanced Analytics',
    title: "Donor Segmentation (K-Means)",
    role: "Senior Data Analyst",
    company: "UNHCR",
    period: "2022.09 - 2024.08",
    tags: ["Clustering", "Python", "CRM Marketing"],
    star: {
      situation: "'One-size-fits-all' fundraising limited engagement from 400k+ users.",
      task: "Group donors by behavior to enable personalized targeting.",
      action: [
        "Cleaned user behavior data and applied K-means clustering.",
        "Identified distinct value segments (e.g., Frequent Low vs. One-Time High).",
        "Collaborated with CRM teams to automate targeted messaging."
      ],
      result: "Achieved a 15% lift in campaign ROI.",
      metrics: [
        { label: "ROI Lift", value: "+15%", trend: 15 },
        { label: "Scale", value: "400k+", trend: 80 }
      ]
    }
  },
  {
    id: 'p8',
    category: 'Advanced Analytics',
    title: "Data Warehouse Migration & BI Setup",
    role: "Data Engineer / Analyst",
    company: "UNHCR",
    period: "2021.01 - 2021.12",
    tags: ["BigQuery", "Airflow", "dbt", "Tableau"],
    star: {
      situation: "Legacy systems caused a 3-day lag in reporting, hindering agility.",
      task: "Build a Single Source of Truth (SSOT) for real-time analytics.",
      action: [
        "Migrated legacy DB to BigQuery and redesigned ETL via Airflow.",
        "Implemented dbt for standardized data definitions.",
        "Deployed self-service Power BI/Tableau dashboards."
      ],
      result: "Reduced reporting time by 95% (3 days → 1 hour).",
      metrics: [
        { label: "Time Saved", value: "-95%", trend: 95 },
        { label: "Adoption", value: "85%", trend: 85 }
      ]
    }
  },

  // 3. Supply Chain, FP&A & Logistics
  {
    id: 'p9',
    category: 'Supply Chain & FP&A',
    title: "Demand Forecasting & Inventory Optimization",
    role: "Supply & Forecasting Coordinator",
    company: "LVMH",
    period: "2019.09 - 2022.05",
    tags: ["Forecasting", "SQL", "Tableau", "VBA"],
    star: {
      situation: "Volatility across 5,000+ SKUs led to excess stock and stockouts.",
      task: "Enhance forecast accuracy to optimize Working Capital.",
      action: [
        "Built a Variance Analysis model (SQL/Tableau) to track Forecast vs. Actuals.",
        "Automated allocation logic for Japan stores using VBA.",
        "Integrated marketing calendars into supply plans."
      ],
      result: "Improved accuracy by 8% and reduced excess stock by 12%.",
      metrics: [
        { label: "Excess Stock", value: "-12%", trend: 12 },
        { label: "Accuracy", value: "+8%", trend: 8 }
      ]
    }
  },
  {
    id: 'p10',
    category: 'Supply Chain & FP&A',
    title: "Distribution Center Migration",
    role: "Supply & Forecasting Coordinator",
    company: "LVMH",
    period: "2020",
    tags: ["Logistics", "Project Management", "Risk Mgmt"],
    star: {
      situation: "Moving the central hub from Tokyo to Chiba risked shipping blackouts.",
      task: "Execute migration with zero service interruption.",
      action: [
        "Modeled safety stock requirements to bridge the operational gap.",
        "Managed 3PL vendors to adhere to strict timelines.",
        "Reconfigured ERP logistics parameters for the new network."
      ],
      result: "Maintained 98% on-time delivery with 0% inventory shrinkage.",
      metrics: [
        { label: "Service Lvl", value: "98%", trend: 98 },
        { label: "Shrinkage", value: "0%", trend: 100 }
      ]
    }
  },
  {
    id: 'p11',
    category: 'Supply Chain & FP&A',
    title: "S&OP Alignment (Sales & Ops Planning)",
    role: "Supply & Forecasting Coordinator",
    company: "LVMH",
    period: "2019.09 - 2022.05",
    tags: ["S&OP", "Cross-functional", "Planning"],
    star: {
      situation: "Misalignment between Marketing pushes and Supply availability caused lost sales.",
      task: "Bridge the gap between Demand (Marketing) and Supply.",
      action: [
        "Facilitated S&OP meetings to align campaign calendars with production.",
        "Adjusted forecast models to account for 'marketing lift.'",
        "Ring-fenced inventory for seasonal launches."
      ],
      result: "Ensured 100% product availability for key campaigns.",
      metrics: [
        { label: "Availability", value: "100%", trend: 100 },
        { label: "Alignment", value: "Optimized", trend: 80 }
      ]
    }
  },
  {
    id: 'p12',
    category: 'Supply Chain & FP&A',
    title: "International Import Logistics Optimization",
    role: "Supply & Forecasting Coordinator",
    company: "LVMH",
    period: "2019.09 - 2022.05",
    tags: ["Logistics", "Lead Time Analysis"],
    star: {
      situation: "Delays in imports from France jeopardized Japan launches.",
      task: "Streamline the international supply chain.",
      action: [
        "Analyzed lead time data to identify customs bottlenecks.",
        "Optimized shipping schedules and communication with HQ.",
        "Established prioritized protocols for urgent items."
      ],
      result: "Achieved 98% on-time delivery for launch items.",
      metrics: [
        { label: "OTD", value: "98%", trend: 98 },
        { label: "Risk", value: "Mitigated", trend: 100 }
      ]
    }
  },

  // 4. Marketing Analytics & Growth
  {
    id: 'p13',
    category: 'Marketing Analytics',
    title: "Paid Media Funnel Optimization",
    role: "Senior Data Analyst",
    company: "UNHCR",
    period: "2022.09 - 2024.08",
    tags: ["Google Analytics", "Ad Tech", "Funnel Analysis"],
    star: {
      situation: "Rising ad spend but stagnant conversion rates increased CAC.",
      task: "Optimize the funnel to maximize budget efficiency.",
      action: [
        "Integrated GA and Ad platform data to visualize the full funnel.",
        "Identified drop-off points and underperforming creatives.",
        "Reallocated budget to high-conversion segments."
      ],
      result: "Increased lead conversion by 15% and cut CAC by 10%.",
      metrics: [
        { label: "Conv. Rate", value: "+15%", trend: 15 },
        { label: "CAC", value: "-10%", trend: 10 }
      ]
    }
  },
  {
    id: 'p14',
    category: 'Marketing Analytics',
    title: "E-commerce CRO (Conversion Rate Optimization)",
    role: "Supply & Forecasting Coordinator",
    company: "LVMH",
    period: "2019.09 - 2022.05",
    tags: ["Web Analytics", "UX/UI", "CRO"],
    star: {
      situation: "High bounce rates on key product pages led to lost revenue.",
      task: "Identify friction points and improve UX.",
      action: [
        "Conducted deep-dive funnel analysis using web analytics.",
        "Identified bottlenecks (checkout steps, stock status clarity).",
        "Implemented quick-win UX improvements."
      ],
      result: "Increased conversion rate by ~10%.",
      metrics: [
        { label: "Conversion", value: "+10%", trend: 10 },
        { label: "Bounce", value: "Reduced", trend: 50 }
      ]
    }
  },
  {
    id: 'p15',
    category: 'Marketing Analytics',
    title: "Landing Page A/B Testing",
    role: "Senior Data Analyst",
    company: "UNHCR",
    period: "2022.09 - 2024.08",
    tags: ["A/B Testing", "Experimentation", "Statistics"],
    star: {
      situation: "Key landing pages had stagnant engagement.",
      task: "Validate design changes to maximize user action.",
      action: [
        "Designed A/B tests for layouts and CTAs.",
        "Monitored real-time interaction data for statistical significance.",
        "Implemented winning variations."
      ],
      result: "Achieved a 2% lift in engagement metrics.",
      metrics: [
        { label: "Engagement", value: "+2%", trend: 20 },
        { label: "Method", value: "A/B Test", trend: 100 }
      ]
    }
  },
  // 5. Management
  {
    id: 'p16',
    category: 'Management',
    title: "Retail Sales & Team Operations",
    role: "Store Manager",
    company: "CJ OLIVE YOUNG",
    period: "2017.01 - 2018.01",
    tags: ["People Mgmt", "Sales Ops", "Inventory"],
    star: {
      situation: "Managing a high-traffic location required balancing stock, staff, and service.",
      task: "Maximize revenue and efficiency while minimizing loss.",
      action: [
        "Supervised and scheduled a team of 6+ staff.",
        "Managed end-to-end inventory to reduce discrepancies.",
        "Executed local promotions to drive foot traffic."
      ],
      result: "High product availability and sales growth during peak seasons.",
      metrics: [
        { label: "Team Size", value: "6+", trend: 60 },
        { label: "Loss", value: "Reduced", trend: 80 }
      ]
    }
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Languages & Core Analytics",
    items: [
      { name: "SQL (Advanced)", level: 95 },
      { name: "Python (Pandas, Scikit-learn)", level: 90 },
      { name: "Excel (VBA, Macros)", level: 95 }
    ]
  },
  {
    category: "Business Ops & Tools",
    items: [
      { name: "Salesforce CRM", level: 85 },
      { name: "MS Teams/Forms Automation", level: 90 },
      { name: "SAP / ERP Systems", level: 80 }
    ]
  },
  {
    category: "Visualization & BI",
    items: [
      { name: "Tableau", level: 90 },
      { name: "Power BI", level: 85 },
      { name: "Google Analytics / Looker", level: 80 }
    ]
  },
  {
    category: "Data Engineering",
    items: [
      { name: "BigQuery / SQL", level: 85 },
      { name: "Airflow (ETL)", level: 75 },
      { name: "dbt", level: 70 }
    ]
  }
];

// --- DASHBOARD MOCK DATA ---
export const DASHBOARD_SCENARIOS = {
  pmo: {
    kpi: [
      { label: 'Total Projects', value: '94', change: 'Active', isPositive: true },
      { label: 'Critical Path', value: '15', change: 'High Priority', isPositive: false },
      { label: 'Completed', value: '12', change: 'This Qtr', isPositive: true },
    ],
    priorityVsEffort: [
      { priority: 'Critical', XL: 5, L: 2, M: 3, S: 5 },
      { priority: 'High', XL: 3, L: 4, M: 5, S: 2 },
      { priority: 'Medium', XL: 1, L: 5, M: 8, S: 6 },
      { priority: 'Low', XL: 0, L: 2, M: 6, S: 10 },
    ],
    orgRequest: [
      { name: 'DevZone', value: 14 },
      { name: 'BI Team', value: 10 },
      { name: 'Marketing', value: 8 },
      { name: 'Sales', value: 6 },
      { name: 'HR', value: 4 },
    ]
  },
  ops: {
    kpi: [
      { label: 'Throughput Lift', value: '+275%', change: 'Capacity', isPositive: true },
      { label: 'Data Quality', value: '95%', change: 'Compliance', isPositive: true },
      { label: 'Manual Work', value: '-30%', change: 'Hrs Saved', isPositive: true },
    ],
    throughputTrend: [
      { month: 'Jan', manual: 100, auto: 20 },
      { month: 'Feb', manual: 90, auto: 50 },
      { month: 'Mar', manual: 80, auto: 120 },
      { month: 'Apr', manual: 60, auto: 180 },
      { month: 'May', manual: 40, auto: 240 },
    ],
    quality: [
      { name: 'Clean Records', value: 95 },
      { name: 'Flagged', value: 3 },
      { name: 'Error', value: 2 },
    ]
  },
  retention: {
    kpi: [
      { label: 'Retention Lift', value: '+12%p', change: 'YoY', isPositive: true },
      { label: 'Campaign ROI', value: '150%', change: 'Target 120%', isPositive: true },
      { label: 'Model AUC', value: '0.82', change: 'Accuracy', isPositive: true },
    ],
    churnTrend: [
      { segment: 'High Value', rate: 2.5, prediction: 2.1 },
      { segment: 'Mid Value', rate: 5.8, prediction: 4.5 },
      { segment: 'Low Value', rate: 12.0, prediction: 9.8 },
      { segment: 'New User', rate: 15.5, prediction: 11.2 },
    ],
    segments: [
      { name: 'Loyal Champions', value: 20 },
      { name: 'At-Risk High Value', value: 15 },
      { name: 'Hibernating', value: 30 },
      { name: 'New Potential', value: 35 },
    ]
  },
  scm: {
    kpi: [
      { label: 'Excess Stock', value: '-12%', change: 'Optimized', isPositive: true },
      { label: 'Forecast Acc.', value: '+8%', change: 'Model V2', isPositive: true },
      { label: 'On-Time Delivery', value: '98%', change: 'Logistics', isPositive: true },
    ],
    inventory: [
      { month: 'W1', stock: 4000, forecast: 3800 },
      { month: 'W2', stock: 3500, forecast: 3600 },
      { month: 'W3', stock: 3200, forecast: 3300 },
      { month: 'W4', stock: 3100, forecast: 3150 },
    ],
    leadTime: [
      { lane: 'CN-KR', days: 5 },
      { lane: 'US-KR', days: 12 },
      { lane: 'EU-KR', days: 14 },
      { lane: 'JP-KR', days: 3 },
    ]
  },
  marketing: {
    kpi: [
      { label: 'Conversion Rate', value: '3.8%', change: '+15%', isPositive: true },
      { label: 'CAC', value: '$14.2', change: '-10%', isPositive: true },
      { label: 'ROAS', value: '350%', change: 'Paid Ads', isPositive: true },
    ],
    funnel: [
      { stage: 'Impressions', count: 10000 },
      { stage: 'Clicks', count: 4500 },
      { stage: 'View Item', count: 2800 },
      { stage: 'Add to Cart', count: 900 },
      { stage: 'Purchase', count: 342 },
    ],
    abTest: [
      { variant: 'A (Control)', conv: 3.1 },
      { variant: 'B (New UI)', conv: 3.9 },
    ]
  }
};