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

Se usa Decap CMS en `/admin` con backend GitHub.

1. Crear GitHub OAuth App para el dominio de GitHub Pages.
2. Configurar autenticación de Decap CMS según la guía oficial.
3. Desde `/admin` crear/editar entradas y subir imágenes.

## Formularios

Configurar endpoints de Formspree en `src/config/site.ts`.

## Deploy

Workflow: `.github/workflows/deploy.yml`

- Deploy automático en push a `main`
- Deploy manual (`workflow_dispatch`)
- Deploy diario programado (`cron`)
