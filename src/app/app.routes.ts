import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '**',
    data: {
      description:
        'Strechtech — Full Stack Developer. Optimizo plataformas, aplico técnicas avanzadas de renderizado y traduzco lo técnico al lenguaje de negocio.',
    },
    loadComponent: () => import('./pages/Hero/Hero').then((m) => m.Hero),
  },
  {
    path: 'about',
    title: 'Resumen',
    data: {
      description:
        'Resumen profesional de Strechtech: optimización de plataformas, técnicas de renderizado y capacitación de equipos en cada etapa del proyecto.',
    },
    loadComponent: () => import('./pages/About/About').then((m) => m.About),
  },
  {
    path: 'skills',
    title: 'Skills',
    data: {
      description:
        'Stack técnico de Strechtech: Frontend (React, Angular), Backend (Python, Node.js), bases de datos, blockchain y DevOps.',
    },
    loadComponent: () => import('./pages/Skills/Skills').then((m) => m.Skills),
  },
  {
    path: 'proyectos',
    title: 'Proyectos',
    data: {
      description:
        'Proyectos de Strechtech: plataformas de renderizado optimizado, APIs REST con autenticación y dApps con smart contracts en Ethereum.',
    },
    loadComponent: () => import('./pages/Proyectos/Proyectos').then((m) => m.Proyectos),
  },
  {
    path: 'certificaciones',
    title: 'Certificaciones',
    data: {
      description:
        'Certificaciones y credenciales que respaldan la práctica técnica de Strechtech.',
    },
    loadComponent: () =>
      import('./pages/Certificaciones/Certificaciones').then((m) => m.Certificaciones),
  },
  { path: '**', redirectTo: '' },
];
