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
  "I'm a forward-deployed engineer who likes being close to the problem. Recently I shipped a staff-facing clinical platform — connected to the EHR and running across 7 practice locations. No one handed me requirements; I went on-site, found where the day actually broke down, and built the system end to end, just me and my agents.",
  'Same playbook on consumer products: I built a multi-timeline video editor from scratch that\'s now in users\' hands, generated thousands in revenue, and anchored a key company partnership. Before that I was a founding engineer at OmniSynkAI (YC W24), an early-stage e-commerce startup.',
  "On the side I contribute to open source — like ByteDance's trae-agent and Unsloth — love tinkering with LLMs, and I'm currently exploring mechanistic interpretability. CS + Math, 4.0 GPA.",
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
    // url: TODO (paper/repo when public)
  },
  {
    title: 'Sprig',
    blurb:
      'A sparse n-gram indexed code-search engine in Rust delivering sub-millisecond regex search across large codebases.',
    tags: ['Rust', 'Search', 'Systems'],
    // url: 'https://github.com/rupaut98/sprig', // TODO confirm
  },
  {
    title: 'RAG Knowledge Assistant',
    blurb:
      'Retrieval-augmented pipeline that chunks and embeds documents into a pgvector store, with reranking, prompt templating, and source citations feeding OpenAI + Claude to reduce hallucination.',
    tags: ['LangChain', 'pgvector', 'OpenAI', 'Claude'],
    // url: TODO
  },
  {
    title: 'Drag-and-Drop Website Builder',
    blurb:
      'A visual website builder with customizable components, multi-page routing, and one-click publishing for non-technical users.',
    tags: ['Next.js', 'GrapesJS', 'Tailwind'],
    url: 'https://github.com/rupaut98/drag-and-drop-webbuilder',
  },
  {
    title: 'Topic Modeling with BERTopic',
    blurb:
      'Topic modeling over academic abstracts using sentence embeddings + UMAP/HDBSCAN, clustering into interpretable topics visualized on reduced embeddings.',
    tags: ['BERTopic', 'Python', 'UMAP'],
    url: 'https://github.com/rupaut98/topic_modeling_BERT',
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
  detail: '4.0 GPA · Top 10% YC Applicant (W24) · Techstars Interview Finalist',
};
