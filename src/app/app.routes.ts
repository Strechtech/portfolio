import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/Hero/Hero').then(m => m.Hero),
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/About/About').then(m => m.About),
  },
  {
    path: 'skills',
    loadComponent: () => import('./pages/Skills/Skills').then(m => m.Skills),
  },
  {
    path: 'proyectos',
    loadComponent: () => import('./pages/Proyectos/Proyectos').then(m => m.Proyectos),
  },
  {
    path: 'certificaciones',
    loadComponent: () => import('./pages/Certificaciones/Certificaciones').then(m => m.Certificaciones),
  },
  {
    path: '**',
    redirectTo: '/',
  },
];