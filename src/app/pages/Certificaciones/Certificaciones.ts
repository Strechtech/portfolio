import { Component } from '@angular/core';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { CERT_ICON, CERTIFICATIONS, SOCIAL_LINKS } from '../../data/portfolio';

@Component({
  selector: 'app-certificaciones',
  imports: [FaIconComponent],
  templateUrl: './Certificaciones.html',
})
export class Certificaciones {
  readonly certs = CERTIFICATIONS;
  protected readonly certIcon = CERT_ICON;
  protected readonly faArrowUpRightFromSquare = faArrowUpRightFromSquare;
  protected readonly faEnvelope = faEnvelope;
  // Email para el CTA de contacto (cierre del flujo).
  protected readonly contactUrl = SOCIAL_LINKS.find((s) => s.label === 'Email')?.url ?? '#';
}
