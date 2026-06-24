import { DOCUMENT, inject, Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRouteSnapshot, RouterStateSnapshot, TitleStrategy } from '@angular/router';

// Config global del sitio. TODO: reemplazar baseUrl + defaultImage con el dominio real.
const SITE = {
  name: 'Strechtech',
  baseUrl: 'https://strechtech.dev',
  defaultImage: 'https://strechtech.dev/og-image.png',
  defaultDescription:
    'Strechtech — Full Stack Developer. Optimización de plataformas, técnicas avanzadas de renderizado y puente entre lo técnico y el negocio.',
  locale: 'es_ES',
  separator: '·',
};

/**
 * Estrategia de título que, en cada navegación, sincroniza:
 * <title>, meta description, canonical, Open Graph y Twitter Card.
 * Lee `title` y `data.description` (+ `data.ogImage` opcional) de la ruta activa.
 */
@Injectable({ providedIn: 'root' })
export class SeoTitleStrategy extends TitleStrategy {
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);
  private readonly doc = inject(DOCUMENT);

  override updateTitle(snapshot: RouterStateSnapshot): void {
    const routeTitle = this.buildTitle(snapshot);
    const data = this.deepestData(snapshot);

    const fullTitle = routeTitle ? `${routeTitle} ${SITE.separator} ${SITE.name}` : SITE.name;
    const description = (data['description'] as string) ?? SITE.defaultDescription;
    const image = (data['ogImage'] as string) ?? SITE.defaultImage;
    const path = snapshot.url.split(/[?#]/)[0];
    const url = `${SITE.baseUrl}${path === '/' ? '' : path}`;

    this.title.setTitle(fullTitle);
    this.setTag('name', 'description', description);
    this.setCanonical(url);

    // Open Graph
    this.setTag('property', 'og:title', fullTitle);
    this.setTag('property', 'og:description', description);
    this.setTag('property', 'og:url', url);
    this.setTag('property', 'og:image', image);
    this.setTag('property', 'og:type', 'website');
    this.setTag('property', 'og:site_name', SITE.name);
    this.setTag('property', 'og:locale', SITE.locale);

    // Twitter Card
    this.setTag('name', 'twitter:card', 'summary_large_image');
    this.setTag('name', 'twitter:title', fullTitle);
    this.setTag('name', 'twitter:description', description);
    this.setTag('name', 'twitter:image', image);
  }

  /** Data combinada de la rama de ruta más profunda (la página renderizada). */
  private deepestData(snapshot: RouterStateSnapshot): Record<string, unknown> {
    let route: ActivatedRouteSnapshot = snapshot.root;
    while (route.firstChild) route = route.firstChild;
    return route.data;
  }

  private setTag(attr: 'name' | 'property', key: string, content: string): void {
    this.meta.updateTag({ [attr]: key, content });
  }

  private setCanonical(href: string): void {
    let link = this.doc.head.querySelector<HTMLLinkElement>("link[rel='canonical']");
    if (!link) {
      link = this.doc.createElement('link');
      link.setAttribute('rel', 'canonical');
      this.doc.head.appendChild(link);
    }
    link.setAttribute('href', href);
  }
}
