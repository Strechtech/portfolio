import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faArrowUpRightFromSquare, faCode, faFolderOpen } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { PROJECTS } from '../../data/portfolio';

@Component({
  selector: 'app-proyectos',
  imports: [RouterLink, FaIconComponent],
  templateUrl: './Proyectos.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Proyectos {
  readonly projects = PROJECTS;
  protected readonly faArrowUpRightFromSquare = faArrowUpRightFromSquare;
  protected readonly faGithub = faGithub;
  protected readonly faCode = faCode;
  protected readonly faFolderOpen = faFolderOpen;
}
