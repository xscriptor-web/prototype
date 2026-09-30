# Poemas y Reflexiones — Portfolio literario de Carolina Massa

Sitio web estático construido con **Next.js 16 (App Router)** siguiendo el
sistema de diseño y la arquitectura documentados en la skill `xscriptor`:
tipografía EB Garamond, chips marcador, temas claro/oscuro, animaciones de
descifrado y export estático completo.

## Contenido

- **12 artículos** (`src/app/content/articulos/es/*.md`) extraídos del sitio
  original de Carolina Massa (Wix) con su pipeline de markdown (remark/rehype,
  GFM, KaTeX, highlight).
- **2 libros** (`src/app/lib/books.ts`): *Ambedo, Místico y Subliminal* e
  *Insondable Despertar*.
- Contacto, Sobre mí, Términos y Condiciones y página 404.

## Rutas

| Ruta | Descripción |
|------|-------------|
| `/` | Hero con frases descifrables sobre fondos a sangre completa |
| `/blog` | Listado con búsqueda, filtros por categoría y tarjetas con desenfoque central |
| `/blog/[slug]` | Artículo con descifrado carácter a carácter |
| `/libros` | Galería de libros |
| `/libros/[slug]` | Ficha de libro |
| `/sobre-mi` | Biografía, retrato y recorrido |
| `/contacto` | Correo, Instagram y boletín |
| `/terminos-y-condiciones` | Términos legales |

## Desarrollo

```bash
npm install
npm run dev            # http://localhost:3000
npx tsc --noEmit       # validación de tipos
npm run build          # next build → out/ + sitemap (postbuild)
```

- **Export estático** (`output: "export"`, `trailingSlash: true`): no hay
  runtime de servidor ni variables de entorno.
- `robots.txt` y `sitemap.xml` se generan con `next-sitemap` en `postbuild`.
- Cabeceras de seguridad en `public/.htaccess` (Apache) y `public/_headers`.

## Recursos npm usados

- `@xscriptor/xcomponents@0.2.3` (navbar, zigzag, separadores, footer, lectores)
- `@xscriptor/xbackgrounds@0.1.0`
- `framer-motion`, `lenis`, `gray-matter`, `remark`/`rehype` (+ GFM, KaTeX,
  highlight), `next-sitemap`, Tailwind CSS 4.

## Créditos

Contenido de **Carolina Massa** — Poemas y Reflexiones
(autovigilantes@gmail.com · Instagram @cagimass).
