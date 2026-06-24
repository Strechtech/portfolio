import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './layouts/Navbar/Navbar';
import { Footer } from './layouts/Footer/Footer';
import { routeFade } from './animations';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  animations: [routeFade],
})
export class App {
  protected readonly title = signal('portfolio');

  // Clave por ruta: dispara routeFade en cada navegación.
  protected routeKey(outlet: RouterOutlet): string {
    return outlet.isActivated ? outlet.activatedRoute.snapshot.routeConfig?.path ?? '' : '';
  }
}
