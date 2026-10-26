import tictactoe from './assets/tictactoe.jpg';
import volleyball from './assets/volleyball.jpg';
import ragapp from './assets/ragapp.jpg';
import rag from './assets/rag.jpg';

// All site copy lives here so it can be updated without touching components.

export const profile = {
  name: 'Ahkeem Lang',
  email: 'langahkeem@gmail.com',
  location: 'Based in Asia · working remotely',
  github: 'https://github.com/Langster2323',
  linkedin: 'https://www.linkedin.com/in/ahkeem-lang-03667510b/',
};

export const stats = [
  { value: '9 yrs', label: 'shipping web & AI products' },
  { value: '$9M', label: 'revenue from acquisition UI in 3 months' },
  { value: '2M+', label: 'users on systems I helped build' },
];

export const currentWork = [
  {
    role: 'Co-founder & Founding Engineer',
    company: 'Dorothy',
    href: 'https://douladorothy.com',
    linkLabel: 'douladorothy.com',
    tagline: 'Practice platform for birth, postpartum & end-of-life doulas.',
    points: [
      'Voice-first AI, live with paying users: doulas record sessions hands-free and get automatic transcripts and AI summaries.',
      'An AI coach built with RAG over doula-curated content, running on OpenAI and Anthropic Claude models.',
      'The full mobile-first platform: client records, scheduling, invoicing and a community board on Next.js and Supabase.',
    ],
    tags: ['Next.js', 'Supabase', 'RAG', 'Speech-to-text', 'Claude', 'OpenAI'],
    featured: true,
  },
  {
    role: 'AI Engineer (Contract)',
    company: 'Real Estate Law Firm',
    tagline: 'Legal document intelligence.',
    points: [
      'An AI document-parsing product that reads construction and commercial real estate loan documents and CAMs for attorney review.',
      "Extracts and classifies loan types, lenders and key terms, then fills in the firm's review documents, so nobody has to enter or look them up by hand.",
    ],
    tags: ['Document parsing', 'Structured extraction', 'LLMs'],
  },
];

export const experience = [
  {
    period: 'Nov 2025 — Now',
    role: 'Applied AI Engineer',
    company: 'Independent',
    summary:
      'I build production AI products end to end for clients, covering architecture, infrastructure, deployment and support.',
  },
  {
    period: '2023 — 2025',
    role: 'Co-founder',
    company: 'Spike It LLC',
    summary:
      'Took a volleyball community app from user interviews to a working MVP on Next.js and Supabase, then iterated with design partners.',
  },
  {
    period: '2022 — 2024',
    role: 'Frontend Team Lead, Acquisition',
    company: 'inKind',
    summary:
      'Built acquisition UI that brought in $9M in 3 months and helped the platform grow to 2M+ users. Architected the UI platform and a shared design system (Storybook, Chromatic), and mentored the frontend team.',
  },
  {
    period: '2017 — 2022',
    role: 'Frontend & Full-Stack Engineer',
    company: 'Earlier roles',
    summary:
      'Led UI architecture, component libraries and performance work across healthcare, AR/VR, edtech, public sector and enterprise teams.',
    companies: ['Goodside Health', 'Enduvo', 'Accenture', 'Raba Kistner', 'City of Austin', 'AmChart', 'Eduphoria'],
  },
];

export const projects = [
  {
    title: 'AI Chat Assistant',
    description:
      'End-to-end RAG chat assistant with agentic retrieval over a document store.',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'LangGraph', 'OpenAI'],
    image: ragapp,
    href: 'https://github.com/Langster2323/AI-Agent-LangGraph',
  },
  {
    title: 'AI Agent Document Retrieval',
    description:
      'An agent that processes structured and unstructured data and answers questions about the documents.',
    tags: ['Next.js', 'TypeScript', 'LangChain', 'OpenAI'],
    image: rag,
    href: 'https://github.com/Langster2323/AI-Agent-LangChain',
  },
  {
    title: 'Spike It Volleyball',
    description:
      'A web app for finding local volleyball events and building communities around them.',
    tags: ['Next.js', 'Supabase', '0→1'],
    image: volleyball,
    href: 'https://www.spikeitvolleyball.com/',
  },
  {
    title: 'Tic-Tac-Toe Minimax',
    description:
      "Play against an AI driven by the minimax algorithm. You'll almost always lose.",
    tags: ['JavaScript', 'Algorithms'],
    image: tictactoe,
    href: 'https://github.com/Langster2323/Tic-Tac-Toe-Minimax',
  },
];

export const skills = [
  {
    group: 'AI',
    items: ['OpenAI', 'Anthropic Claude', 'LangChain', 'LangGraph', 'LangFlow', 'RAG', 'Embeddings', 'Vector search', 'Structured extraction', 'Tool calling', 'Speech-to-text', 'Prompt engineering'],
  },
  {
    group: 'Frontend',
    items: ['React', 'Next.js', 'TypeScript', 'TanStack Query', 'Tailwind CSS', 'Storybook', 'Chromatic', 'Figma'],
  },
  {
    group: 'Backend & Cloud',
    items: ['Node.js', 'GraphQL', 'Ruby on Rails', 'Supabase', 'PostgreSQL', 'AWS', 'Azure', 'Google Cloud', 'Vercel', 'Netlify'],
  },
  {
    group: 'Practice',
    items: ['Growth engineering', 'Design systems', '0→1 product discovery', 'Technical leadership', 'Mentoring'],
  },
];
