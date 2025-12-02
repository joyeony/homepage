import { Project, Skill, CareerItem, Metric, EducationItem, CertificationItem } from './types';

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

export const EDUCATION: EducationItem[] = [
  {
    school: "Korea University",
    period: "2012 - 2016",
    degree: "B.A., English Language and Literature",
    gpa: "GPA 4.05/4.5",
    description: "Completed coursework in Media Studies with focus on media analysis and audience behavior."
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    name: "MITx",
    period: "Jan 2024 - Mar 2026",
    degree: "Micromaster, Statistics and Data Science",
    gpa: "GPA 3.5/4.0",
    description: "Completed coursework in probability, statistics, statistical modeling, and machine learning with Python.",
    type: 'detailed'
  }
];

export const TESTIMONIALS = [
  {
    quote: "Jiyeon consistently operated far above expectations. She not only executed her responsibilities with accuracy but also proactively identified operational gaps and automated critical workflows without being asked. She brings a rare combination of technical ability, strong problem-solving skills, and an ownership mindset.",
    author: "K",
    role: "Former Business Operations Team Leader, NVIDIA",
    color: "#76b900"
  },
  {
    quote: "Jiyeon played a key role in the Digital Warehouse project, a foundational component of our Digital Transformation. She was proactive in addressing data quality issues and meticulous with sensitive information. Her clear, respectful, and well-organized communication made her a highly valued team member.",
    author: "S",
    role: "Tech Lead, UNHCR (The UN Refugee Agency)",
    color: "#0072BC"
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
        "Identified 'Add to Cart' button visibility issues on mobile.",
        "Ran A/B tests on button placement and color."
      ],
      result: "Reduced bounce rate by 8% and increased conversion by 5%.",
      metrics: [
        { label: "Bounce Rate", value: "-8%", trend: 8 },
        { label: "Conversion", value: "+5%", trend: 5 }
      ]
    }
  },
  {
    id: 'p15',
    category: 'Management',
    title: "Team Mentorship & Training",
    role: "Senior Data Analyst",
    company: "UNHCR",
    period: "2022 - 2024",
    tags: ["Leadership", "Training", "Mentorship"],
    star: {
      situation: "Junior analysts lacked SQL proficiency, creating a bottleneck for senior staff.",
      task: "Upskill the team to enable self-sufficiency.",
      action: [
        "Created a structured SQL & Tableau curriculum.",
        "Held weekly 'Data Doctor' office hours for troubleshooting.",
        "Established a peer-review code standard."
      ],
      result: "Junior team handled 80% of ad-hoc requests within 6 months.",
      metrics: [
        { label: "Ad-hoc Requests", value: "80%", trend: 80 },
        { label: "Time Saved", value: "10 hrs/wk", trend: 20 }
      ]
    }
   }
];

export const SKILLS: Skill[] = [
  {
    category: "Data Analysis & Science",
    items: [
      { name: "Python (Pandas, Scikit-Learn)", level: 90 },
      { name: "SQL (BigQuery, PostgreSQL)", level: 95 },
      { name: "R", level: 80 },
      { name: "Excel (VBA, Advanced Macros)", level: 95 }
    ]
  },
  {
    category: "BI & Visualization",
    items: [
      { name: "Tableau", level: 90 },
      { name: "Power BI", level: 85 },
      { name: "Looker Studio", level: 85 },
      { name: "Salesforce Reports", level: 80 }
    ]
  },
  {
    category: "Data Engineering & Ops",
    items: [
      { name: "Airflow", level: 75 },
      { name: "dbt", level: 70 },
      { name: "Google Cloud Platform", level: 80 },
      { name: "Salesforce Admin", level: 75 }
    ]
  },
  {
    category: "Business & Soft Skills",
    items: [
      { name: "Stakeholder Management", level: 95 },
      { name: "Project Management", level: 90 },
      { name: "Technical Writing", level: 85 },
      { name: "Training & Mentorship", level: 90 }
    ]
  }
];

export const DASHBOARD_SCENARIOS = {
  pmo: {
    kpi: [
      { label: "Total Requests", value: "142", change: "+12%", isPositive: true },
      { label: "Avg Resolution", value: "3.5 Days", change: "-15%", isPositive: true },
      { label: "Backlog", value: "28", change: "-5%", isPositive: true }
    ],
    priorityVsEffort: [
      { priority: 'Critical', XL: 5, L: 2, M: 1, S: 0 },
      { priority: 'High', XL: 2, L: 8, M: 4, S: 2 },
      { priority: 'Medium', XL: 1, L: 3, M: 15, S: 8 },
      { priority: 'Low', XL: 0, L: 1, M: 5, S: 20 }
    ],
    orgRequest: [
      { name: 'Group A', value: 45 },
      { name: 'Group B', value: 30 },
      { name: 'Group C', value: 20 },
      { name: 'Group D', value: 15 },
      { name: 'Group E', value: 10 }
    ],
    projectStatus: [
        { name: 'Completed', value: 65 },
        { name: 'In Progress', value: 45 },
        { name: 'Blocked', value: 12 },
        { name: 'Not Started', value: 20 }
    ],
    effortImpact: [
        { x: 10, y: 30, z: 200, name: 'Project A' },
        { x: 50, y: 80, z: 400, name: 'Project B' },
        { x: 80, y: 90, z: 800, name: 'Project C' },
        { x: 20, y: 50, z: 150, name: 'Project D' },
        { x: 90, y: 20, z: 100, name: 'Project E' }
    ]
  },
  ops: {
    kpi: [
        { label: "Weekly Throughput", value: "375", change: "+275%", isPositive: true },
        { label: "Error Rate", value: "1.2%", change: "-3.8%", isPositive: true },
        { label: "Auto-Coverage", value: "85%", change: "+40%", isPositive: true }
    ],
    throughputTrend: [
        { month: 'M1', manual: 100, auto: 0 },
        { month: 'M2', manual: 90, auto: 60 },
        { month: 'M3', manual: 50, auto: 230 },
        { month: 'M4', manual: 20, auto: 355 }
    ],
    quality: [
        { name: 'Compliant', value: 950 },
        { name: 'Minor Issue', value: 40 },
        { name: 'Critical Error', value: 10 }
    ],
    processingDist: [
        { bucket: '0-2 hrs', count: 450 },
        { bucket: '2-4 hrs', count: 200 },
        { bucket: '4-8 hrs', count: 80 },
        { bucket: '8-24 hrs', count: 40 },
        { bucket: '24+ hrs', count: 15 }
    ],
    regionalCompliance: [
        { region: 'North America', compliance: 98 },
        { region: 'EMEA', compliance: 96 },
        { region: 'APAC', compliance: 92 },
        { region: 'LATAM', compliance: 94 }
    ]
  },
  retention: {
    kpi: [
        { label: "Churn Rate", value: "4.2%", change: "-1.5%", isPositive: true },
        { label: "Retention LTV", value: "$850", change: "+12%", isPositive: true },
        { label: "At-Risk Saved", value: "1,240", change: "+150%", isPositive: true }
    ],
    churnTrend: [
        { segment: 'New Users', rate: 12, prediction: 11.5 },
        { segment: 'Active', rate: 2.5, prediction: 2.8 },
        { segment: 'Power Users', rate: 0.5, prediction: 0.4 },
        { segment: 'Dormant', rate: 25, prediction: 24 }
    ],
    segments: [
        { name: 'Champions', value: 400 },
        { name: 'Loyal', value: 300 },
        { name: 'Potential', value: 300 },
        { name: 'At-Risk', value: 200 },
        { name: 'Hibernating', value: 100 }
    ],
    cohorts: [
        { month: 'Month 0', retention: 100 },
        { month: 'Month 1', retention: 85 },
        { month: 'Month 2', retention: 70 },
        { month: 'Month 3', retention: 65 },
        { month: 'Month 4', retention: 60 },
        { month: 'Month 5', retention: 58 },
        { month: 'Month 6', retention: 55 }
    ],
    ltvSource: [
        { source: 'Organic', ltv: 900 },
        { source: 'Paid Search', ltv: 650 },
        { source: 'Social', ltv: 500 },
        { source: 'Referral', ltv: 800 }
    ]
  },
  scm: {
    kpi: [
        { label: "Forecast Accuracy", value: "92%", change: "+8%", isPositive: true },
        { label: "Excess Stock", value: "$1.2M", change: "-12%", isPositive: true },
        { label: "On-Time Delivery", value: "98.5%", change: "+3.5%", isPositive: true }
    ],
    inventory: [
        { month: 'Jan', stock: 5000, forecast: 5100 },
        { month: 'Feb', stock: 4800, forecast: 4900 },
        { month: 'Mar', stock: 4500, forecast: 4600 },
        { month: 'Apr', stock: 4200, forecast: 4250 }
    ],
    leadTime: [
        { lane: 'Route A', days: 12 },
        { lane: 'Route B', days: 14 },
        { lane: 'Route C', days: 25 },
        { lane: 'Route D', days: 10 }
    ],
    supplierScore: [
        { supplier: 'Sup A', score: 95 },
        { supplier: 'Sup B', score: 88 },
        { supplier: 'Sup C', score: 92 },
        { supplier: 'Sup D', score: 78 }
    ],
    stockoutRisk: [
        { week: 'W1', risk: 5, safety: 20 },
        { week: 'W2', risk: 8, safety: 20 },
        { week: 'W3', risk: 15, safety: 20 },
        { week: 'W4', risk: 25, safety: 25 }, // Spike handled
        { week: 'W5', risk: 10, safety: 25 }
    ]
  },
  marketing: {
    kpi: [
        { label: "Conversion Rate", value: "3.2%", change: "+0.5%", isPositive: true },
        { label: "CAC", value: "$14.5", change: "-10%", isPositive: true },
        { label: "ROAS", value: "4.2x", change: "+0.8x", isPositive: true }
    ],
    funnel: [
        { stage: 'Impressions', count: 10000 },
        { stage: 'Clicks', count: 4000 },
        { stage: 'Add to Cart', count: 800 },
        { stage: 'Checkout', count: 400 },
        { stage: 'Purchase', count: 320 }
    ],
    abTest: [
        { variant: 'A (Control)', conv: 2.4 },
        { variant: 'B (New UI)', conv: 3.2 }
    ],
    channelRoi: [
        { channel: 'Google Ads', roi: 4.5 },
        { channel: 'Facebook', roi: 3.2 },
        { channel: 'LinkedIn', roi: 5.1 },
        { channel: 'Email', roi: 12.0 }
    ],
    touchpoints: [
        { step: 'Ad View', users: 5000 },
        { step: 'Blog Read', users: 3000 },
        { step: 'Webinar', users: 1000 },
        { step: 'Demo', users: 200 }
    ]
  }
};