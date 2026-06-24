// Datos centrales del portafolio. Editar aquí para actualizar contenido en toda la app.
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faAward,
  faChartColumn,
  faCubes,
  faDatabase,
  faEnvelope,
  faPalette,
  faRocket,
  faServer,
} from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin, faXTwitter } from '@fortawesome/free-brands-svg-icons';

export interface SocialLink {
  label: string;
  icon: IconDefinition;
  url: string;
}

// Redes. TODO: reemplazar urls dummy (#) por las reales.
export const SOCIAL_LINKS: SocialLink[] = [
  { label: 'GitHub', icon: faGithub, url: '#' },
  { label: 'LinkedIn', icon: faLinkedin, url: '#' },
  { label: 'X', icon: faXTwitter, url: '#' },
  { label: 'Email', icon: faEnvelope, url: 'mailto:tu@email.com' },
];

// Stack destacado del hero. `icon` = clase de la fuente devicon. `color` = hex de marca (hover).
export interface StackIcon {
  label: string;
  icon: string;
  color: string;
}

export const HERO_STACK: StackIcon[] = [
  { label: 'Angular', icon: 'devicon-angular-plain', color: '#dd0031' },
  { label: 'React', icon: 'devicon-react-original', color: '#61dafb' },
  { label: 'React Native (Expo)', icon: 'devicon-expo-original', color: '#ffffff' },
  { label: 'TypeScript', icon: 'devicon-typescript-plain', color: '#3178c6' },
  { label: 'Node.js', icon: 'devicon-nodejs-plain', color: '#5fa04e' },
  { label: 'Python', icon: 'devicon-python-plain', color: '#3776ab' },
  { label: 'Solidity', icon: 'devicon-solidity-plain', color: '#7c7c7c' },
];

export interface SkillGroup {
  category: string;
  icon: IconDefinition;
  items: string[];
}

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: 'Frontend',
    icon: faPalette,
    items: ['React.js', 'Angular', 'React Native (Expo)', 'TypeScript', 'Tailwind CSS', 'DaisyUI', 'Figma'],
  },
  {
    category: 'Backend',
    icon: faServer,
    items: ['Python', 'Node.js', 'Flask', 'REST APIs', 'Authentication', 'Database Integration'],
  },
  {
    category: 'Databases',
    icon: faDatabase,
    items: ['SQL Server', 'Oracle', 'MySQL', 'Query Optimization', 'PostGIS', 'Dynamic Queries'],
  },
  {
    category: 'Blockchain',
    icon: faCubes,
    items: ['Solidity', 'Ethereum', 'Web3.js', 'Smart Contracts', 'IPFS'],
  },
  {
    category: 'Data',
    icon: faChartColumn,
    items: ['SQL Analytics', 'Python', 'Apache Spark', 'Databricks'],
  },
  {
    category: 'DevOps',
    icon: faRocket,
    items: ['Docker', 'Git', 'CI/CD', 'Firebase', 'Supabase', 'N8N'],
  },
];

export interface Project {
  name: string;
  description: string;
  tags: string[];
  url?: string; // demo / sitio
  repo?: string; // repositorio
}

// TODO: reemplazar con tus proyectos reales (nombre, descripción, tags, links).
export const PROJECTS: Project[] = [
  {
    name: 'Plataforma de Renderizado',
    description:
      'Optimización de renderizado de componentes y técnicas avanzadas para mejorar el rendimiento de la plataforma.',
    tags: ['Angular', 'TypeScript', 'Tailwind CSS'],
    url: '#',
    repo: '#',
  },
  {
    name: 'API REST + Autenticación',
    description:
      'Backend con APIs REST, autenticación y consultas dinámicas integradas a base de datos.',
    tags: ['Python', 'Flask', 'SQL Server'],
    url: '#',
    repo: '#',
  },
  {
    name: 'Smart Contract dApp',
    description: 'Contratos inteligentes y almacenamiento descentralizado para una dApp en Ethereum.',
    tags: ['Solidity', 'Web3.js', 'IPFS'],
    repo: '#',
  },
];

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  url?: string;
}

// TODO: reemplazar con tus certificaciones reales.
export const CERTIFICATIONS: Certification[] = [
  { name: 'Nombre de la certificación', issuer: 'Emisor', year: '2024', url: '#' },
  { name: 'Nombre de la certificación', issuer: 'Emisor', year: '2023', url: '#' },
  { name: 'Nombre de la certificación', issuer: 'Emisor', year: '2022', url: '#' },
];

export const CERT_ICON = faAward;

export interface SearchEntry {
  label: string;
  route: string;
  fragment?: string;
  keywords: string;
}

// Índice de búsqueda usado por el searchbar del navbar.
// Secciones + cada skill apuntando a su página.
const SECTION_ENTRIES: SearchEntry[] = [
  { label: 'Inicio', route: '/', keywords: 'inicio home hero presentacion' },
  { label: 'Resumen', route: '/about', keywords: 'resumen about sobre mi perfil que hago optimizar renderizado negocio capacitacion' },
  { label: 'Skills', route: '/skills', keywords: 'skills habilidades tecnologias stack' },
  { label: 'Proyectos', route: '/proyectos', keywords: 'proyectos projects trabajos portafolio demos' },
  { label: 'Certificaciones', route: '/certificaciones', keywords: 'certificaciones certificados cursos credenciales' },
];

const SKILL_ENTRIES: SearchEntry[] = SKILL_GROUPS.flatMap((g) =>
  g.items.map((item) => ({
    label: item,
    route: '/skills',
    fragment: g.category.toLowerCase(),
    keywords: `${item} ${g.category}`.toLowerCase(),
  }))
);

const PROJECT_ENTRIES: SearchEntry[] = PROJECTS.map((p) => ({
  label: p.name,
  route: '/proyectos',
  keywords: `${p.name} ${p.tags.join(' ')}`.toLowerCase(),
}));

export const SEARCH_INDEX: SearchEntry[] = [
  ...SECTION_ENTRIES,
  ...SKILL_ENTRIES,
  ...PROJECT_ENTRIES,
];
