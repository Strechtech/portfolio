import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import { faArrowRight, faLayerGroup } from '@fortawesome/free-solid-svg-icons';
import { SKILL_GROUPS } from '../../data/portfolio';

@Component({
  selector: 'app-skills',
  imports: [RouterLink, FaIconComponent],
  templateUrl: './Skills.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Skills {
  readonly groups = SKILL_GROUPS;
  protected readonly faLayerGroup = faLayerGroup;
  protected readonly faArrowRight = faArrowRight;
}
