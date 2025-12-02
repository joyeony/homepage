export interface Project {
  id: string;
  category: string; // Added for filtering
  title: string;
  role: string;
  company?: string; // Added context
  period: string;
  tags: string[];
  star: {
    situation: string;
    task: string;
    action: string[];
    result: string;
    metrics: { label: string; value: string; trend?: number }[];
  };
}

export interface Skill {
  category: string;
  items: { name: string; level: number }[]; // Level 0-100
}

export interface CareerItem {
  id: string;
  year: string;
  title: string;
  company: string;
  description: string;
}

export interface Metric {
  label: string;
  value: string;
  subtext: string;
  data: { name: string; value: number }[]; // For mini charts
}