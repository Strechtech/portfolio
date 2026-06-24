import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import {
  faArrowRight,
  faBolt,
  faChalkboardUser,
  faComments,
  faUser,
} from '@fortawesome/free-solid-svg-icons';

interface Highlight {
  icon: IconDefinition;
  title: string;
  text: string;
}

@Component({
  selector: 'app-about',
  imports: [RouterLink, FaIconComponent],
  templateUrl: './About.html',
})
export class About {
  protected readonly faUser = faUser;
  protected readonly faArrowRight = faArrowRight;

  readonly highlights: Highlight[] = [
    {
      icon: faBolt,
      title: 'Optimización',
      text: 'Adoro optimizar plataformas y diseñar técnicas avanzadas de renderizado de componentes para llegar a la mejor solución.',
    },
    {
      icon: faComments,
      title: 'Técnico → Negocio',
      text: 'Mi experiencia pedagógica me permite interpretar el lenguaje técnico al lenguaje de negocio.',
    },
    {
      icon: faChalkboardUser,
      title: 'Liderazgo',
      text: 'Guío y capacito al equipo de desarrollo en cada actividad dentro del proyecto.',
    },
  ];
}
