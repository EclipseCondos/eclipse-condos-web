# Instrucciones para agentes

Fuente única de instrucciones para cualquier agente que trabaje en este repo (Claude Code, Codex, Gemini CLI, GitHub Copilot). `CLAUDE.md`, `GEMINI.md` y `.github/copilot-instructions.md` solo apuntan a este archivo: si una regla cambia, se cambia aquí.

## Proyecto
Sitio de Eclipse Condos: cinco departamentos (Arena, Sol, Luna, Mar y Tierra) en Mareazul, Playa del Carmen. Reemplaza el sitio de Wix. Está en español de México.

- `apps/frontend/`: Next.js (App Router). Es lo único que se publica.
- `apps/backend/`: Laravel vacío, sin uso por ahora (#15).
- Datos de las casas: `apps/frontend/src/data/departamentos.js`. Fotos: `apps/frontend/public/images/departamentos/<casa>/`.
- La versión de Next de este repo puede diferir de lo que conoces: lee `apps/frontend/AGENTS.md` antes de escribir código de Next.

## Comandos
Desde la raíz, con la versión de Node de `.nvmrc`:

```bash
npm ci
npm run dev     # http://localhost:3000
npm run build   # lo mismo que corre CI en cada PR
npm start       # sirve el build
```

## Cómo se trabaja
Todo el detalle está en [`CONTRIBUTING.md`](CONTRIBUTING.md); no lo copies aquí. Lo mínimo:

- Ramas: `main` ← `dev` ← una rama por issue. Los PR van hacia `dev`, nunca a `main`.
- Commits con Conventional Commits (`feat:`, `fix:`, `refactor:`, `docs:`, `chore:`).
- Un PR enlaza su issue con `Closes #N` y sigue la plantilla de `.github/pull_request_template.md`.
- Antes de empezar una issue, revisa la Definición de Listo; antes de unir, la Definición de Hecho.
- Las reglas de negocio (RN-1 a RN-9) están en `CONTRIBUTING.md` y mandan sobre el código. Por ejemplo, reservar siempre lleva a Airbnb en una pestaña nueva (RN-2) y no se inventan datos de las casas (RN-6).

## Estilo visual
- Lenguaje de referencia: `/departamentos/[slug]` (`apps/frontend/src/components/Casa/`, `apps/frontend/styles/Casa.module.css`). Vidrio (Liquid Glass), tipografía Switzer y botones en cápsula.
- Tokens y componentes compartidos: issues #65, #66 y #67. Movimiento: #68 (solo `transform` y `opacity`, respetar `prefers-reduced-motion`).
- `.taste-skill/direction.json` es la dirección de diseño elegida. No la vuelvas a sortear con `draw.mjs` sin que lo pida el equipo.

## Skills
Las skills compartidas viven en `.agents/skills/<nombre>/SKILL.md` y se versionan. `skills-lock.json` registra de dónde viene cada una.

- `design-taste-frontend`: diseño y revisión de vistas. Sus scripts (`lint.mjs`, `inspect.mjs`) escriben en `.taste-skill/`, que está ignorado salvo `direction.json`.

Si tu herramienta no carga skills desde `.agents/skills/` por sí sola, lee el `SKILL.md` correspondiente cuando la tarea lo pida.

## Lo que no se sube
`node_modules/`, `.next/`, `.env*`, `.claude/` (configuración local), `graphify-out/` (caché de graphify con rutas locales) y la salida del inspector en `.taste-skill/`. Ningún archivo de más de 5 MB.
