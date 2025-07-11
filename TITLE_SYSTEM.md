# Sistema de Títulos Dinámicos - Eclipse Condos

## Descripción
Sistema centralizado para manejar títulos de páginas de forma automática e inteligente, integrado con la lógica de navegación.

## Características
- ✅ **Títulos automáticos** basados en la ruta actual
- ✅ **Centralizado** en `navigation-data.js`
- ✅ **Fácil mantenimiento** - un solo lugar para cambios
- ✅ **Inteligente** - detecta patrones de rutas
- ✅ **Consistente** - todos los departamentos usan "Departamentos"

## Estructura

### 1. Configuración Central (`navigation-data.js`)
```javascript
export const pageTitles = {
  "/": "Eclipse Condos - Condominios de Lujo en Playa del Carmen",
  "/actividades": "Actividades",
  "/FAQ": "Preguntas Frecuentes",
  "/departamentos": "Departamentos",
  // Todos los departamentos usan el mismo título
  "/departamentos/eclipse-luna": "Departamentos",
  "/departamentos/eclipse-mar": "Departamentos",
  // etc...
};
```

### 2. Hook Personalizado (`usePageTitle.js`)
```javascript
import { usePageTitle } from '@/hooks/usePageTitle';

// Uso automático (basado en ruta)
usePageTitle();

// Uso con título personalizado
usePageTitle("Mi Título Personalizado");
```

### 3. Componente Global (`TitleUpdater`)
Se incluye automáticamente en el layout principal para manejar títulos en toda la aplicación.

## Cómo Usar

### Para páginas Client Components:
```javascript
"use client";
import { usePageTitle } from '@/hooks/usePageTitle';

const MiComponente = () => {
  usePageTitle(); // Título automático
  
  return <div>Mi contenido</div>;
};
```

### Para páginas Server Components:
Los títulos se manejan automáticamente por el TitleUpdater global.

### Para títulos personalizados:
```javascript
usePageTitle("Mi Título Especial");
```

## Títulos Resultantes

| Ruta | Título en Pestaña |
|------|-------------------|
| `/` | Eclipse Condos - Condominios de Lujo en Playa del Carmen |
| `/actividades` | Actividades \| Eclipse Condos |
| `/FAQ` | Preguntas Frecuentes \| Eclipse Condos |
| `/departamentos` | Departamentos \| Eclipse Condos |
| `/departamentos/eclipse-luna` | Departamentos \| Eclipse Condos |
| `/departamentos/eclipse-mar` | Departamentos \| Eclipse Condos |
| `/departamentos/eclipse-sol` | Departamentos \| Eclipse Condos |
| `/departamentos/eclipse-tierra` | Departamentos \| Eclipse Condos |
| `/departamentos/eclipse-arena` | Departamentos \| Eclipse Condos |

## Agregar Nueva Página

### Opción 1: Página en el navbar
1. Agregar en `navLinks` con `pageTitle`
2. Usar `usePageTitle()` en componentes client

### Opción 2: Página fuera del navbar
1. Agregar en `pageTitles` object
2. Usar `usePageTitle()` en la página

### Opción 3: Título completamente personalizado
```javascript
usePageTitle("Mi Título Único | Eclipse Condos");
```

## Beneficios

1. **Mantenimiento sencillo**: Un solo archivo para cambiar títulos
2. **Consistencia**: Todos los departamentos tienen el mismo título
3. **Flexibilidad**: Permite títulos personalizados cuando sea necesario
4. **Automático**: Las rutas nuevas que siguen patrones funcionan automáticamente
5. **Integrado**: Conectado con la lógica de navegación existente

## Archivos Modificados
- `src/components/Navbar/navigation-data.js` - Configuración central
- `src/hooks/usePageTitle.js` - Hook personalizado
- `src/components/TitleUpdater/TitleUpdater.jsx` - Componente global
- Todas las páginas client components - Implementación del hook
