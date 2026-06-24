import { animate, query, style, transition, trigger } from '@angular/animations';

// Fade + slide-up al entrar a cada ruta. transition('* <=> *') => corre en cada navegación.
export const routeFade = trigger('routeFade', [
  transition('* <=> *', [
    query(
      ':enter',
      [
        style({ opacity: 0, transform: 'translateY(16px)' }),
        animate('400ms ease-out', style({ opacity: 1, transform: 'none' })),
      ],
      { optional: true }
    ),
  ]),
]);
