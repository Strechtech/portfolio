import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  imports: [],
  templateUrl: './Hero.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Hero {}
