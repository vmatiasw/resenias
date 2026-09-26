# Reseñas

MVP en Astro + TypeScript para publicar reseñas y recomendaciones.

## Stack

- Astro
- TypeScript
- Content Collections
- Tailwind CSS
- GitHub Pages + GitHub Actions
- Decap CMS (admin en `/admin`)

## Desarrollo local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Contenido

- Reseñas: `src/content/resenias`
- Publicaciones: `src/content/publicaciones`

## Administración desde celular

Se usa Decap CMS en `/admin` con backend `turbo-github` (Decap Turbo).

1. Crear organización/sitio en Decap Turbo y conectar GitHub.
2. Configurar `turbo_site_id` en `public/admin/config.yml`.
3. Desde `/admin` crear/editar entradas y subir imágenes.

## Deploy

Workflow: `.github/workflows/deploy.yml`

- Deploy automático en push a `main`
- Deploy manual (`workflow_dispatch`)
- Deploy diario programado (`cron`)
