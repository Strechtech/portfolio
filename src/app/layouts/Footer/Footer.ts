import { Component, OnInit, signal, computed } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { SOCIAL_LINKS } from '../../data/portfolio';

interface ContactEmail {
  label: string;
  url: string;
}

@Component({
  selector: 'app-footer',
  imports: [RouterLink, FaIconComponent],
  templateUrl: './Footer.html',
})
export class Footer implements OnInit {
  protected readonly faCode = faCode;
  protected readonly socials = SOCIAL_LINKS;
  protected readonly year = new Date().getFullYear();

  protected readonly links = [
    { label: 'Inicio', route: '/' },
    { label: 'Resumen', route: '/about' },
    { label: 'Skills', route: '/skills' },
    { label: 'Proyectos', route: '/proyectos' },
    { label: 'Certificaciones', route: '/certificaciones' },
  ];

  protected email = signal<ContactEmail | null>(null);

  // Computed para evitar replace() en template
  protected emailDisplay = computed(() => {
    return this.email()?.url.replace('mailto:', '') ?? '';
  });

  protected footerVisible = signal(false);

  ngOnInit(): void {
    this.email.set({
      label: 'Email',
      url: 'mailto:tu-email@example.com',
    });
  }

  ngAfterViewInit(): void {
    // Footer se carga cuando es visible
    setTimeout(() => this.footerVisible.set(true), 100);
  }
}