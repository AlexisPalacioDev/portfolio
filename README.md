# Portafolio Astro

Repositorio listo para publicarse en https://alexispalaciodev.github.io/portfolio/ usando GitHub Pages.

## Requisitos
- Node.js 20 o superior
- npm 9 o superior

## Desarrollo local
1. Ejecuta npm install
2. Ejecuta npm run dev
3. Abre http://localhost:4321/ (el base cambia a / en modo desarrollo).

## Build de produccion
- npm run build
- npm run preview

## Despliegue en GitHub Pages
1. En GitHub ve a Settings -> Pages y deja "GitHub Actions" como Source.
2. Haz push a la rama principal (master o main).
3. El workflow .github/workflows/deploy.yml instala dependencias, ejecuta npm run build, crea .nojekyll y publica dist/.
4. Tras el primer despliegue, Pages servira el sitio desde https://alexispalaciodev.github.io/portfolio/.

