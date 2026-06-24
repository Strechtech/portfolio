import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Inicio · [Juan P]',
    loadComponent: () => import('./pages/Hero/Hero').then((m) => m.Hero),
  },
  {
    path: 'about',
    title: 'Resumen · [Juan P]',
    loadComponent: () => import('./pages/About/About').then((m) => m.About),
  },
  {
    path: 'skills',
    title: 'Skills · [Juan P]',
    loadComponent: () => import('./pages/Skills/Skills').then((m) => m.Skills),
  },
  {
    path: 'proyectos',
    title: 'Proyectos · [Juan P]',
    loadComponent: () => import('./pages/Proyectos/Proyectos').then((m) => m.Proyectos),
  },
  {
    path: 'certificaciones',
    title: 'Certificaciones · [Juan P]',
    loadComponent: () =>
      import('./pages/Certificaciones/Certificaciones').then((m) => m.Certificaciones),
  },
  { path: '**', redirectTo: '' },
];
