export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: string;
  isFeatured?: boolean;
  problem: string;
  solution: string;
  keyFeatures: string[];
  techStack: string[];
  myRole: string;
  architectureHighlights?: string[];
  metricsOrHighlights?: string[];
  liveUrl?: string;
  githubUrl?: string;
  caseStudyId?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  overview: string;
  problem: string;
  solution: string;
  architecture: {
    title: string;
    description: string;
    components: { name: string; role: string; tech: string }[];
  };
  keyDecisions: {
    decision: string;
    rationale: string;
    impact: string;
  }[];
  securityMeasures: string[];
  performanceOptimizations: string[];
  challenges: string[];
  outcome: string;
  techStack: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    highlight?: boolean;
    note?: string;
  }[];
}

export interface ExperienceItem {
  role: string;
  companyPlaceholder: string;
  duration: string;
  location: string;
  type: string;
  summary: string;
  responsibilities: string[];
  skillsApplied: string[];
}

export interface OpenSourceContribution {
  program: string;
  title: string;
  badge: string;
  rank: string;
  description: string;
  highlights: string[];
  skillsUsed: string[];
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  technologies: string[];
}
