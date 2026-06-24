import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { SOCIAL_LINKS } from '../../data/portfolio';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, FaIconComponent],
  templateUrl: './Footer.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {
  protected readonly socials = SOCIAL_LINKS;
  protected readonly email = SOCIAL_LINKS.find((s) => s.label === 'Email');
  protected readonly faCode = faCode;
  protected readonly year = new Date().getFullYear();

  protected readonly links = [
    { label: 'Inicio', route: '/' },
    { label: 'Resumen', route: '/about' },
    { label: 'Skills', route: '/skills' },
    { label: 'Proyectos', route: '/proyectos' },
    { label: 'Certificaciones', route: '/certificaciones' },
  ];
}
