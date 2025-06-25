# 🏢 Eclipse Condos Web

**Plataforma web moderna para gestión de condominios** construida con arquitectura de monorepo, MVVM + DDD, usando Next.js y Laravel.

## 🏗️ Arquitectura del Proyecto

```
eclipse-condos-web/
├── 📦 package.json              # Configuración centralizada del monorepo
├── 🔧 .gitignore               # Configuración optimizada para evitar archivos grandes
│
├── 📁 apps/                    # Aplicaciones principales
│   ├── 🎨 frontend/            # Next.js + React + Tailwind CSS
│   │   ├── pages/              # Páginas de Next.js
│   │   ├── src/                # Código fuente organizado en capas
│   │   │   ├── models/         # Modelos de datos
│   │   │   ├── services/       # Servicios de API
│   │   │   ├── utils/          # Utilidades compartidas
│   │   │   ├── viewmodels/     # Lógica de vista (MVVM)
│   │   │   └── views/          # Componentes de UI
│   │   └── styles/             # Estilos globales
│   │
│   └── ⚙️ backend/             # Laravel API (DDD)
│       ├── app/
│       │   ├── Application/    # Capa de aplicación
│       │   ├── Domain/         # Capa de dominio
│       │   └── Infrastructure/ # Capa de infraestructura
│       └── composer.json       # Dependencias PHP
│
├── 📚 libs/                    # Librerías compartidas
│   ├── data/                   # Tipos y clientes HTTP compartidos
│   └── ui/                     # Componentes React reutilizables
│
├── 🚀 infra/                   # Infraestructura y despliegue
│   └── nginx/                  # Configuración del servidor
│
└── 📖 Docs/                    # Documentación del proyecto
```

## 🚀 Comandos de Desarrollo

### 🎯 Comandos Principales (desde la raíz)

```bash
# Desarrollo completo (Frontend + Backend)
npm run dev

# Solo frontend (Next.js)
npm run dev:frontend

# Solo backend (Laravel)
npm run dev:backend

# Build de producción
npm run build

# Servidor de producción
npm run start

# Linting
npm run lint
```

### 📦 Instalación Inicial

```bash
# Clonar el repositorio
git clone https://github.com/EclipseCondos/eclipse-condos-web.git
cd eclipse-condos-web

# Instalar todas las dependencias
npm install

# Ejecutar aplicación completa
npm run dev
```

## 🛠️ Stack Tecnológico

### Frontend
- **Framework**: Next.js 15.3.4
- **UI Library**: React 18+
- **Styling**: Tailwind CSS 3.3+
- **Architecture**: MVVM Pattern

### Backend
- **Framework**: Laravel 10+
- **Architecture**: Domain Driven Design (DDD)
- **API**: RESTful API con Laravel Sanctum

### DevOps & Tools
- **Monorepo**: npm workspaces
- **Web Server**: Nginx
- **Package Manager**: npm
- **Version Control**: Git con .gitignore optimizado

## 🌐 URLs de Desarrollo

- **Frontend**: http://localhost:3000 (o 3001 si el puerto está ocupado)
- **Backend API**: http://localhost:8000 (cuando se ejecuta Laravel)

## 📋 Estructura de Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Ejecuta frontend + backend simultáneamente |
| `npm run dev:frontend` | Solo servidor de desarrollo de Next.js |
| `npm run dev:backend` | Solo servidor de desarrollo de Laravel |
| `npm run build` | Construye la aplicación para producción |
| `npm run start` | Inicia servidor de producción |
| `npm run lint` | Ejecuta linting en el frontend |
| `npm run setup` | Instala todas las dependencias |

## 🔧 Configuración

### Configuraciones Principales
- **Next.js**: `apps/frontend/next.config.js`
- **Tailwind**: `apps/frontend/tailwind.config.js`
- **PostCSS**: `apps/frontend/postcss.config.js`
- **Laravel**: `apps/backend/composer.json`
- **Nginx**: `infra/nginx/default.conf`

### Variables de Entorno
- Frontend: Crear `.env.local` en `apps/frontend/`
- Backend: Crear `.env` en `apps/backend/`

## 🤝 Contribución

1. Fork el proyecto
2. Crea una branch para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 👥 Equipo Eclipse Condos

Desarrollado con ❤️ por el equipo de Eclipse Condos para modernizar la gestión de condominios.

---

**🏢 Eclipse Condos** - Tu hogar ideal te está esperando
