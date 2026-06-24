import { Component, computed, signal } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faBars,
  faCode,
  faMagnifyingGlass,
  faMoon,
  faSun,
} from '@fortawesome/free-solid-svg-icons';
import { SEARCH_INDEX, SearchEntry, SOCIAL_LINKS } from '../../data/portfolio';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive, FaIconComponent],
  templateUrl: './Navbar.html',
})
export class Navbar {
  protected readonly faBars = faBars;
  protected readonly faCode = faCode;
  protected readonly faMagnifyingGlass = faMagnifyingGlass;
  protected readonly faSun = faSun;
  protected readonly faMoon = faMoon;
  
  protected readonly socials = SOCIAL_LINKS.slice(0, 2);

  protected readonly links = [
    { label: 'Inicio', route: '/' },
    { label: 'Resumen', route: '/about' },
    { label: 'Skills', route: '/skills' },
    { label: 'Proyectos', route: '/proyectos' },
    { label: 'Certificaciones', route: '/certificaciones' },
  ];

  protected readonly query = signal('');

  protected readonly results = computed<SearchEntry[]>(() => {
    const q = this.query().trim().toLowerCase();
    if (!q) return [];
    return SEARCH_INDEX.filter(
      (e) => e.label.toLowerCase().includes(q) || e.keywords.includes(q)
    ).slice(0, 8);
  });

  constructor(private readonly router: Router) {}

  protected onInput(value: string): void {
    this.query.set(value);
  }

  protected go(entry: SearchEntry): void {
    this.query.set('');
    this.router.navigate([entry.route], entry.fragment ? { fragment: entry.fragment } : {});
    (document.activeElement as HTMLElement | null)?.blur();
  }
}