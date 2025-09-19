# Portafolio Astro

Sitio desplegado en Vercel. GitHub Pages solo redirige a la versi�n activa.

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

## Despliegue
- Vercel: se despliega autom�ticamente al hacer push a master.
- GitHub Pages: el workflow .github/workflows/deploy.yml publica un redirect hacia https://alexispalacio.vercel.app/.

La URL https://alexispalaciodev.github.io/portfolio/ redirige autom�ticamente a la versi�n alojada en Vercel, preservando rutas, queries y anchors.
