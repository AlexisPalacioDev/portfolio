# Portafolio Astro

Repositorio preparado para que el proyecto se use como repositorio independiente y se despliegue en GitHub Pages en https://alexispalaciodev.github.io/portfolio/.

## Requisitos
- Node.js 20 o superior
- npm 9 o superior

## Desarrollo local
1. `npm install`
2. `npm run dev`
3. Abre http://localhost:4321/ (el `base` se ajusta automaticamente en modo desarrollo).

## Build de produccion
- `npm run build`
- `npm run preview`

## Despliegue en GitHub Pages
1. Crea un nuevo repositorio en GitHub (por ejemplo `portfolio`).
2. Añade este repo como origen: `git remote add origin git@github.com:USER/REPO.git`.
3. Sube la rama principal (`master` o `main`).
4. GitHub Pages debe apuntar a la rama `gh-pages` que genera el workflow incluido.

El workflow `.github/workflows/deploy.yml` construye el sitio con Astro y publica el contenido de `dist/` en GitHub Pages cada vez que se hace push a la rama principal.
