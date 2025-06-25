# 🏢 Eclipse Condos Web

[🇪🇸 Español](#español) | [🇺🇸 English](#english)

---

## 🇪🇸 Español

**Plataforma web moderna para gestión de condominios** construida con arquitectura de monorepo, MVVM + DDD, usando Next.js y Laravel.

### 🏗️ Arquitectura del Proyecto

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

### 🚀 Comandos de Desarrollo

#### 🎯 Comandos Principales (desde la raíz)

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

#### 📦 Instalación Inicial

```bash
# Clonar el repositorio
git clone https://github.com/EclipseCondos/eclipse-condos-web.git
cd eclipse-condos-web

# Instalar todas las dependencias
npm install

# Ejecutar aplicación completa
npm run dev
```

### 🛠️ Stack Tecnológico

#### Frontend
- **Framework**: Next.js 15.3.4
- **UI Library**: React 18+
- **Styling**: Tailwind CSS 3.3+
- **Arquitectura**: Patrón MVVM

#### Backend
- **Framework**: Laravel 10+
- **Arquitectura**: Domain Driven Design (DDD)
- **API**: API RESTful con Laravel Sanctum

#### DevOps & Herramientas
- **Monorepo**: npm workspaces
- **Servidor Web**: Nginx
- **Gestor de Paquetes**: npm
- **Control de Versiones**: Git con .gitignore optimizado

### 🌐 URLs de Desarrollo

- **Frontend**: http://localhost:3000 (o 3001 si el puerto está ocupado)
- **Backend API**: http://localhost:8000 (cuando se ejecuta Laravel)

### 📋 Estructura de Scripts

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Ejecuta frontend + backend simultáneamente |
| `npm run dev:frontend` | Solo servidor de desarrollo de Next.js |
| `npm run dev:backend` | Solo servidor de desarrollo de Laravel |
| `npm run build` | Construye la aplicación para producción |
| `npm run start` | Inicia servidor de producción |
| `npm run lint` | Ejecuta linting en el frontend |
| `npm run setup` | Instala todas las dependencias |

### 🔧 Configuración

#### Configuraciones Principales
- **Next.js**: `apps/frontend/next.config.js`
- **Tailwind**: `apps/frontend/tailwind.config.js`
- **PostCSS**: `apps/frontend/postcss.config.js`
- **Laravel**: `apps/backend/composer.json`
- **Nginx**: `infra/nginx/default.conf`

#### Variables de Entorno
- Frontend: Crear `.env.local` en `apps/frontend/`
- Backend: Crear `.env` en `apps/backend/`

### 🤝 Contribución

1. Fork el proyecto
2. Crea una branch para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la branch (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 🇺🇸 English

**Modern web platform for condominium management** built with monorepo architecture, MVVM + DDD, using Next.js and Laravel.

### 🏗️ Project Architecture

```
eclipse-condos-web/
├── 📦 package.json              # Centralized monorepo configuration
├── 🔧 .gitignore               # Optimized configuration to avoid large files
│
├── 📁 apps/                    # Main applications
│   ├── 🎨 frontend/            # Next.js + React + Tailwind CSS
│   │   ├── pages/              # Next.js pages
│   │   ├── src/                # Source code organized in layers
│   │   │   ├── models/         # Data models
│   │   │   ├── services/       # API services
│   │   │   ├── utils/          # Shared utilities
│   │   │   ├── viewmodels/     # View logic (MVVM)
│   │   │   └── views/          # UI components
│   │   └── styles/             # Global styles
│   │
│   └── ⚙️ backend/             # Laravel API (DDD)
│       ├── app/
│       │   ├── Application/    # Application layer
│       │   ├── Domain/         # Domain layer
│       │   └── Infrastructure/ # Infrastructure layer
│       └── composer.json       # PHP dependencies
│
├── 📚 libs/                    # Shared libraries
│   ├── data/                   # Types and shared HTTP clients
│   └── ui/                     # Reusable React components
│
├── 🚀 infra/                   # Infrastructure and deployment
│   └── nginx/                  # Server configuration
│
└── 📖 Docs/                    # Project documentation
```

### 🚀 Development Commands

#### 🎯 Main Commands (from root)

```bash
# Complete development (Frontend + Backend)
npm run dev

# Frontend only (Next.js)
npm run dev:frontend

# Backend only (Laravel)
npm run dev:backend

# Production build
npm run build

# Production server
npm run start

# Linting
npm run lint
```

#### 📦 Initial Setup

```bash
# Clone repository
git clone https://github.com/EclipseCondos/eclipse-condos-web.git
cd eclipse-condos-web

# Install all dependencies
npm install

# Run complete application
npm run dev
```

### 🛠️ Technology Stack

#### Frontend
- **Framework**: Next.js 15.3.4
- **UI Library**: React 18+
- **Styling**: Tailwind CSS 3.3+
- **Architecture**: MVVM Pattern

#### Backend
- **Framework**: Laravel 10+
- **Architecture**: Domain Driven Design (DDD)
- **API**: RESTful API with Laravel Sanctum

#### DevOps & Tools
- **Monorepo**: npm workspaces
- **Web Server**: Nginx
- **Package Manager**: npm
- **Version Control**: Git with optimized .gitignore

### 🌐 Development URLs

- **Frontend**: http://localhost:3000 (or 3001 if port is occupied)
- **Backend API**: http://localhost:8000 (when Laravel is running)

### 📋 Scripts Structure

| Command | Description |
|---------|-------------|
| `npm run dev` | Runs frontend + backend simultaneously |
| `npm run dev:frontend` | Next.js development server only |
| `npm run dev:backend` | Laravel development server only |
| `npm run build` | Builds application for production |
| `npm run start` | Starts production server |
| `npm run lint` | Runs linting on frontend |
| `npm run setup` | Installs all dependencies |

### 🔧 Configuration

#### Main Configurations
- **Next.js**: `apps/frontend/next.config.js`
- **Tailwind**: `apps/frontend/tailwind.config.js`
- **PostCSS**: `apps/frontend/postcss.config.js`
- **Laravel**: `apps/backend/composer.json`
- **Nginx**: `infra/nginx/default.conf`

#### Environment Variables
- Frontend: Create `.env.local` in `apps/frontend/`
- Backend: Create `.env` in `apps/backend/`

### 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📄 Licencia / License

Este proyecto está bajo la licencia MIT. Ver el archivo `LICENSE` para más detalles.

This project is licensed under the MIT License. See the `LICENSE` file for details.

## 👥 Equipo Eclipse Condos / Eclipse Condos Team

Desarrollado con ❤️ por el equipo de Eclipse Condos para modernizar la gestión de condominios.

Developed with ❤️ by the Eclipse Condos team to modernize condominium management.

---

**🏢 Eclipse Condos** - Tu hogar ideal te está esperando / Your ideal home is waiting for you
