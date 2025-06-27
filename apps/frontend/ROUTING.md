# 🧭 Documentación de Routing - Eclipse Condos Web

## 📋 Requisitos de Navegación SPA

### 🎯 Objetivo Principal
Implementar una **Single Page Application (SPA)** que garantice una experiencia de usuario fluida, especialmente para el manejo del video de fondo.

### 🎥 Requisitos Específicos del Video

#### Comportamiento Requerido
- **Carga Única**: El video debe cargarse solo una vez al inicio de la aplicación
- **Persistencia Durante Navegación**: Al cambiar entre secciones/pestañas, el video debe:
  - ✅ Continuar reproduciéndose sin interrupciones
  - ✅ Mantener su posición de reproducción
  - ✅ Conservar el estado de reproducción/pausa
  - ❌ NO debe pausarse automáticamente
  - ❌ NO debe reiniciarse o recargarse
  - ❌ NO debe desaparecer

#### Implementación Técnica

##### 1. Estructura de Componentes
```
App Layout
├── VideoBackground (persistente)
├── NavigationBar
└── Content Router
    ├── Home
    ├── Apartamentos
    ├── Amenidades
    ├── Ubicación
    └── Contacto
```

##### 2. Estrategia de Routing
- **Next.js App Router** o **React Router** para navegación client-side
- **NO utilizar** navegación tradicional con recarga de página
- Implementar **Lazy Loading** para contenido, pero mantener video cargado

##### 3. Gestión del Estado del Video
```javascript
// Ejemplo de implementación
const VideoContext = createContext();

const VideoProvider = ({ children }) => {
  const [videoState, setVideoState] = useState({
    loaded: false,
    playing: true,
    currentTime: 0,
    muted: true
  });
  
  // Video persiste a través de todas las rutas
  return (
    <VideoContext.Provider value={{ videoState, setVideoState }}>
      <VideoBackground />
      {children}
    </VideoContext.Provider>
  );
};
```

### 🗺️ Estructura de Rutas Propuesta

```
/ (Root - Layout con Video)
├── /home (Página principal)
├── /apartamentos (Catálogo de apartamentos)
├── /amenidades (Servicios y amenidades)
├── /ubicacion (Localización y mapas)
├── /contacto (Formulario de contacto)
└── /admin (Panel administrativo - opcional)
```

### 🛠️ Consideraciones de Implementación

#### Performance
- **Preload del video** en el componente raíz
- **Optimización de formatos** (WebM, MP4) para diferentes navegadores
- **Lazy loading** para componentes de contenido (no para video)

#### UX/UI
- **Indicador de carga** mientras el video se carga inicialmente
- **Controles de video** opcionales (mute/unmute)
- **Fallback image** mientras carga el video

#### SEO
- **Meta tags dinámicos** por ruta
- **Open Graph tags** para compartir en redes sociales
- **Structured data** para mejor indexación

### 📱 Responsividad

#### Desktop
- Video de fondo a pantalla completa
- Navegación horizontal superior

#### Mobile
- Video optimizado para móviles
- Navegación tipo hamburger menu
- Considerar autoplay policies de navegadores móviles

### 🧪 Testing

#### Pruebas Requeridas
1. **Navegación entre rutas**: Verificar que el video no se interrumpe
2. **Recarga de página**: Verificar que el video se carga correctamente
3. **Performance**: Medir tiempos de carga inicial
4. **Compatibilidad**: Probar en diferentes navegadores

### 🔧 Configuración de Next.js

```javascript
// next.config.js - Configuración para SPA
module.exports = {
  trailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' },
      '/home': { page: '/home' },
      '/apartamentos': { page: '/apartamentos' },
      '/amenidades': { page: '/amenidades' },
      '/ubicacion': { page: '/ubicacion' },
      '/contacto': { page: '/contacto' }
    };
  }
};
```

---

## 📝 Notas de Desarrollo

- **Prioridad Alta**: Implementación del video persistente
- **Prioridad Media**: Optimización de carga y performance
- **Prioridad Baja**: Funcionalidades adicionales de video

### 🔄 Estado Actual
- [ ] Implementación del layout base con video
- [ ] Configuración del router SPA
- [ ] Pruebas de navegación sin interrupciones
- [ ] Optimización de performance del video

---

**Fecha de última actualización**: 26 de Junio, 2025