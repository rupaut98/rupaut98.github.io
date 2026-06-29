// All site content lives here — edit this file to update the portfolio.
// DECISIONS baked in (override freely):
//  - Clinical client softened to "a multi-location ophthalmology practice" (HIPAA confidentiality)
//  - OmniSynkAI titled "Founding Engineer (YC W24)" per resumes
//  - USM Research Club + USM undergrad roles dropped (not on current resumes)
//  - Blog dropped
//  - Public email rupakraut78@gmail.com
//  - Links marked TODO need real URLs

export const profile = {
  name: 'Rupak Raut',
  role: 'Software Engineer · Agentic AI & Full-Stack', // mirrors LinkedIn; broad noun + applied-AI edge
  pitch:
    "I'd rather sit with the people using the software than wait for a spec. I find the real problems myself and own the fix end to end — from the first customer conversation to production.",
  email: 'rupakraut78@gmail.com',
  resumeUrl: '/Rupak_Raut_Resume.pdf', // lives in /public — swap the file to update
  socials: {
    github: 'https://github.com/rupaut98',
    linkedin: 'https://www.linkedin.com/in/rupak-raut/',
  },
  openToWork: 'Open to collaborations & new opportunities',
};

export const about = [
  'I shipped a staff-facing clinical platform that connects to their EHR, now running across 7 practice locations. No one handed me requirements. I went on-site, talked to the staff, found where their day actually broke down, and built the system, just me and my agents.',
  "Same playbook on consumer products: I built a multi-timeline video editor from scratch that's now in users' hands, generated thousands in revenue, and anchored a key company partnership.",
  "Before that, I was a founding engineer at OmniSynkAI, an early-stage e-commerce startup, and I contribute to open source like ByteDance's trae-agent.",
  "On the side, I love tinkering with LLMs, and I'm currently exploring mechanistic interpretability.",
];

export const skills = [
  'TypeScript',
  'React / Next.js',
  'Node.js / Fastify',
  'Python',
  'PostgreSQL / Supabase',
  'Rust',
  'Flutter / Dart',
  'LLM fine-tuning (QLoRA)',
  'PyTorch / Transformers',
  'RAG / agentic pipelines',
  'FastAPI',
  'Docker / CI-CD',
];

type Job = {
  company: string;
  title: string;
  range: string;
  url?: string;
  bullets: string[];
};

export const experience: Job[] = [
  {
    company: 'Arroyodev',
    title: 'Software Engineer · Forward Deployed',
    range: 'Nov 2025 — Present',
    url: 'https://arroyodev.com',
    bullets: [
      'Sole engineer on a HIPAA-compliant full-stack platform (TypeScript, Next.js App Router) for a multi-location ophthalmology practice — live in production across 7 locations, owned end-to-end from requirements to deploy.',
      'Engineered a type-safe PostgreSQL/Supabase data layer (Drizzle, Zod) with 100+ row-level-security policies, AES-256-GCM PHI encryption, immutable audit logging, and atomic inventory transactions.',
      'Integrated Athena and Nextech EHRs over OAuth 2.0; built patient intake with QR-code sessions, dynamic forms, e-signatures, and client-side PDF generation. Safeguarded releases with Vitest + Playwright + CI.',
    ],
  },
  {
    company: 'IllumibotAI',
    title: 'Software Engineer',
    range: 'May 2025 — Present',
    url: 'https://illumibot.ai',
    bullets: [
      'Shipped the IllumibotAI consumer app in Flutter (iOS / Android / web), including a self-built multi-timeline video editor with FFmpeg export and hardware-accelerated encoding (VideoToolbox / MediaCodec) that drove thousands in revenue and anchored a key partnership.',
      'Developed 40+ Firebase/Node.js (TypeScript) Cloud Functions orchestrating 10+ AI providers (Gemini, Runway, Veo) through Firestore-triggered pipelines with atomic token-economy transactions.',
      'Built a FastAPI + OpenCV homography microservice for real-time perspective warp, plus native thermal-monitoring plugins and adaptive thread management to prevent throttling on long exports.',
    ],
  },
  {
    company: 'OmniSynkAI',
    title: 'Founding Engineer · YC W24',
    range: 'Feb 2024 — Dec 2024',
    url: 'https://www.omnisynkai.com/',
    bullets: [
      'Led a team of 5 building a B2B e-commerce marketplace 0→1 — automating listings, order fulfillment, and inventory sync across marketplaces via REST APIs and decision-making LLMs.',
      'Owned the backend and data layer (Node.js / Fastify, PostgreSQL, Prisma) on GCP with GitHub Actions CI/CD.',
      'Fine-tuned a BERT model on 100K+ product entries to 95% accuracy for listing categorization, and cut backend response time 30% with Redis caching.',
    ],
  },
];

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  url?: string; // live / repo link; omit if none yet
};

export const projects: Project[] = [
  {
    title: 'FreeFEM-CodeGen',
    blurb:
      'Two-stage QLoRA fine-tune of a 7B code model for finite-element code generation — lifted execution pass rate 0% → 79.7%, matching Gemini 3 Pro and beating 123B Mistral Large, trained on a single A100 in 67 minutes. Paper in preparation.',
    tags: ['QLoRA', 'PyTorch', 'PEFT', 'FreeFEM++'],
  },
  {
    title: 'Neuro-Symbolic LLM Validator',
    blurb:
      'A hallucination-detection pipeline that extracts atomic claims with FActScore-style voting, plans a provably complete verification order with a Fast Downward PDDL planner, and runs 15 evidence-gathering agents over a ChromaDB RAG corpus — grading 97 claims at 84% cross-validator agreement in under 5 minutes. Radiance Technologies Innovation Bowl finalist.',
    tags: ['PDDL planner', 'ChromaDB', 'RAG', 'Multi-agent'],
  },
  {
    title: 'Sprig',
    blurb:
      'A sparse n-gram indexed code-search engine in Rust delivering sub-millisecond regex search across large codebases.',
    tags: ['Rust', 'Search', 'Systems'],
  },
];

export const openSource = [
  {
    name: 'ByteDance / trae-agent',
    stars: '11k★',
    blurb:
      'Merged 12 PRs adding Gemini + OpenAI provider integrations with provider-aware tool-schema generation, and a JSONPath-based edit tool with 17 unit tests.',
    url: 'https://github.com/bytedance/trae-agent',
  },
  {
    name: 'unslothai / unsloth',
    stars: '28k★',
    blurb:
      'Fixed a mixed-precision continued-pretraining crash (FP16→FP32 embedding upcast, GradScaler patch for T4/V100) and a Gemma 3 vision processor fix.',
    url: 'https://github.com/unslothai/unsloth',
  },
];

export const education = {
  school: 'University of Southern Mississippi',
  degree: 'B.S. Computer Science & Mathematics',
  range: 'Graduated May 2026',
};
