# Portafolio Astro

Código fuente del sitio personal de Alexis Palacio construido con Astro y Tailwind.

## Requisitos
- Node.js 20+
- npm 9+

## Desarrollo local
1. npm install
2. npm run dev
3. Abre http://localhost:4321/

## Build de producción
- npm run build
- npm run preview

## Despliegue
- GitHub Pages: el workflow `.github/workflows/deploy.yml` construye `dist/`, crea `.nojekyll` y publica el sitio.
- Vercel: conecta este repositorio y habilita los deploys automáticos (build `npm run build`, output `dist`).
