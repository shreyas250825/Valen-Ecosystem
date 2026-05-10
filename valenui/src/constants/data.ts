import { Feature, ProductStatus } from '../types';



export const FEATURES: Feature[] = [
  {
    id: 'hybrid-routing',
    title: 'Hybrid AI Routing',
    description: 'Intelligent routing between local and cloud AI models for optimal performance',
    icon: ''
  },
  {
    id: 'local-cloud',
    title: 'Local + Cloud Intelligence',
    description: 'Seamless integration of on-device and cloud-based AI capabilities',
    icon: ''
  },
  {
    id: 'privacy-first',
    title: 'Privacy-First Architecture',
    description: 'Your data stays secure with local processing and encrypted cloud sync',
    icon: ''
  },
  {
    id: 'structured-eval',
    title: 'Structured Evaluation Systems',
    description: 'Comprehensive assessment framework for accurate career intelligence',
    icon: ''
  }
];

const STATUS_THEME: Record<ProductStatus, { labelClass: string; dotClass: string; glowClass: string }> = {
  'Active Beta': {
    labelClass: 'bg-primary-purple/15 border-primary-purple/30 text-primary-purple',
    dotClass: 'bg-primary-purple',
    glowClass: 'shadow-[0_0_30px_rgba(139,92,246,0.35)]'
  },
  'Institutional Beta': {
    labelClass: 'bg-emerald-500/15 border-emerald-500/30 text-emerald-300',
    dotClass: 'bg-emerald-500',
    glowClass: 'shadow-[0_0_30px_rgba(16,185,129,0.35)]'
  },
  Beta: {
    labelClass: 'bg-cyan-500/15 border-cyan-500/30 text-cyan-300',
    dotClass: 'bg-cyan-500',
    glowClass: 'shadow-[0_0_30px_rgba(6,182,212,0.35)]'
  },
  'Under Development': {
    labelClass: 'bg-orange-500/15 border-orange-500/30 text-orange-300',
    dotClass: 'bg-orange-500',
    glowClass: 'shadow-[0_0_30px_rgba(249,115,22,0.35)]'
  },
  'Research & Development': {
    labelClass: 'bg-violet-500/15 border-violet-500/30 text-violet-300',
    dotClass: 'bg-violet-500',
    glowClass: 'shadow-[0_0_30px_rgba(139,92,246,0.25)]'
  }
};

export { STATUS_THEME };

export const PRODUCTS: Array<{
  id: string;
  tag: string;
  status: ProductStatus;
  title: string;
  description: string;
  featureBullets: string[];
  ctaLabel: string;
  ctaHref: string;
  icon?: string;
}> = [

  {
    id: 'valen-live',
    title: 'Valen.live',
    tag: 'Flagship Platform',
    status: 'Active Beta',
    description:
      'An AI-powered career intelligence ecosystem designed to enhance interview preparation, coding performance, resume optimization, and hiring readiness through intelligent workflows and AI-driven systems.',
    featureBullets: [
      'AI Mock Interviews',
      'Technical Interview Simulations',
      'Live Coding Interviews',
      'Resume Intelligence',
      'ATS Optimization',
      'Career Analytics',
      'AI Feedback Systems',
      'Hiring Readiness Tracking'
    ],
    ctaLabel: 'Visit Platform',
    ctaHref: '#',
    icon: ''
  },
  {
    id: 'time-table-automation',
    title: 'Time Table Automation System',
    tag: 'Institutional Platform',
    status: 'Institutional Beta',
    description:
      'An intelligent academic scheduling and timetable automation platform designed for colleges and educational institutions to streamline scheduling workflows, faculty allocation, and timetable generation.',
    featureBullets: [
      'Automated Timetable Generation',
      'Faculty Scheduling Management',
      'Conflict Detection Engine',
      'Subject Allocation System',
      'Department-Level Administration',
      'Academic Workflow Automation',
      'Dynamic Timetable Adjustments',
      'Institution-Oriented Scheduling Infrastructure'
    ],
    ctaLabel: 'View System',
    ctaHref: '#',
    icon: ''
  },
  {
    id: 'resume-intelligence',
    title: 'Resume Intelligence',
    tag: 'AI Infrastructure',
    status: 'Beta',
    description:
      'An AI-powered resume evaluation and optimization infrastructure focused on ATS scoring, recruiter-style analysis, enhancement recommendations, and hiring intelligence.',
    featureBullets: [
      'Resume Grading',
      'ATS Compatibility Analysis',
      'Resume Enhancement',
      'AI Suggestions',
      'Industry-Based Scoring',
      'Resume Tracking',
      'Smart Formatting Insights',
      'Recruiter-Style Evaluation'
    ],
    ctaLabel: 'Explore Features',
    ctaHref: '#',
    icon: ''
  },
  {
    id: 'code-arena',
    title: 'Code Arena',
    tag: 'In Development',
    status: 'Under Development',
    description:
      'A real-time intelligent coding ecosystem designed for technical interview preparation, compiler-based evaluation, and AI-assisted coding workflows.',
    featureBullets: [
      'Live Code Editor',
      'Multi-language Compiler',
      'Timed Coding Challenges',
      'DSA Practice Environment',
      'AI Code Review',
      'Interview Simulations',
      'Performance Analytics',
      'Intelligent Debugging Assistance'
    ],
    ctaLabel: 'Coming Soon',
    ctaHref: '#',
    icon: ''
  },
  {
    id: 'generative-ai-studio',
    title: 'Generative AI Studio',
    tag: 'Research Division',
    status: 'Research & Development',
    description:
      'A future-focused generative AI infrastructure initiative exploring multimodal AI systems, intelligent media workflows, and scalable content generation platforms.',
    featureBullets: [
      'Text-to-Video Generation',
      'AI Media Systems',
      'Intelligent Visual Workflows',
      'Multimodal AI Pipelines',
      'Automated Content Infrastructure',
      'Creative AI Systems'
    ],
    ctaLabel: 'Research Initiative',
    ctaHref: '#',
    icon: ''
  }
];

