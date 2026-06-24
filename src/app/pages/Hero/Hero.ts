import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import {
  faArrowRight,
  faCircle,
  faEnvelope,
  faLayerGroup,
} from '@fortawesome/free-solid-svg-icons';
import { HERO_STACK, SOCIAL_LINKS } from '../../data/portfolio';

@Component({
  selector: 'app-hero',
  imports: [RouterLink, FaIconComponent],
  templateUrl: './Hero.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {
  // Solo redes (sin email) para la fila social del hero.
  protected readonly socials = SOCIAL_LINKS.filter((s) => s.label !== 'Email');
  protected readonly email = SOCIAL_LINKS.find((s) => s.label === 'Email');

  protected readonly faArrowRight = faArrowRight;
  protected readonly faCircle = faCircle;
  protected readonly faEnvelope = faEnvelope;
  protected readonly faLayerGroup = faLayerGroup;

  // Stack mostrado sobre el avatar: iconos devicon, label visible al hover.
  protected readonly stack = HERO_STACK;

  // Metricas de cabecera (placeholder — editar con datos reales).
  protected readonly stats = [
    { value: '2+', label: 'Años exp.' },
    { value: '4', label: 'Proyectos' },
    { value: '3', label: 'Áreas de stack' },
  ];
}
