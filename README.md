# Eclipse Condos Web

Estado actual del proyecto: **frontend-first**.

## Estado del repositorio

- Frontend implementado con Next.js en `apps/frontend`.
- Backend Laravel pendiente de inicializacion (por ahora solo existe `apps/backend/composer.json`).
- No existe carpeta `libs/` en este momento.

## Estructura actual

```text
eclipse-condos-web/
|-- apps/
|   |-- frontend/   # Next.js (App Router)
|   `-- backend/    # Base para Laravel (sin proyecto inicializado aun)
|-- infra/
|   `-- nginx/
|-- Docs/
|-- package.json
`-- next.config.js
```

## Comandos (raiz)

```bash
npm run dev          # Frontend only (temporal P0)
npm run dev:frontend # Next.js en apps/frontend
npm run dev:backend  # Mensaje informativo (backend no iniciado)
npm run build        # Build de produccion del frontend
npm run start        # Servidor de produccion del frontend
npm run lint         # Placeholder temporal hasta configurar ESLint
```

## URLs locales

- Frontend: `http://localhost:3000`
- Backend API: pendiente de inicializacion

## Notas P0

- Se removieron referencias invalidas para Next.js 16.
- Se corrigio navegacion para evitar rutas internas inexistentes.
- Se agrego `apps/frontend/public/manifest.json` minimo para metadata.

