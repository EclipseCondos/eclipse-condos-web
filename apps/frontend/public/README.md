# 📁 Assets Estáticos - Eclipse Condos

Esta carpeta contiene todos los archivos estáticos (imágenes, videos, iconos) que se utilizan en la aplicación web.

## 📂 Estructura de Carpetas

```
public/
├── 🖼️ images/                 # Imágenes principales
│   ├── hero/                  # Imágenes para sección hero/banner
│   ├── gallery/               # Galería de imágenes del proyecto
│   ├── condos/                # Fotos específicas de condominios
│   └── logo/                  # Logos y branding
│
├── 🎬 videos/                 # Videos promocionales y tours
│   ├── hero-video.mp4         # Video principal del hero
│   ├── tour-virtual.mp4       # Tour virtual de las instalaciones
│   └── promotional/           # Videos promocionales
│
├── 🎨 icons/                  # Iconos e ilustraciones
│   ├── favicon.ico            # Favicon del sitio
│   ├── social/                # Iconos de redes sociales
│   └── features/              # Iconos para características
│
└── 📄 documents/              # Documentos descargables
    ├── brochures/             # Brochures en PDF
    └── floor-plans/           # Planos de pisos
```

## 🔗 Cómo Usar los Assets

### En Componentes React:
```jsx
import Image from 'next/image'

// Para imágenes
<Image 
  src="/images/hero/main-building.jpg" 
  alt="Eclipse Condos Building"
  width={800}
  height={600}
/>

// Para videos
<video controls>
  <source src="/videos/tour-virtual.mp4" type="video/mp4" />
</video>
```

### En CSS:
```css
.hero-background {
  background-image: url('/images/hero/background.jpg');
}
```

## 📏 Recomendaciones de Formatos

### Imágenes:
- **Hero/Banner**: 1920x1080px (JPG/WebP)
- **Galería**: 800x600px (JPG/WebP)
- **Thumbnails**: 300x200px (JPG/WebP)
- **Logos**: SVG preferible, PNG como alternativa

### Videos:
- **Formato**: MP4 (H.264)
- **Resolución**: 1920x1080 (Full HD)
- **Duración**: Máximo 2-3 minutos para hero videos
- **Tamaño**: Optimizar para web (<50MB)

### Iconos:
- **Formato**: SVG preferible
- **Tamaño**: 24x24, 32x32, 48x48px
- **Favicon**: ICO, PNG (16x16, 32x32, 48x48)

## ⚠️ Notas Importantes

1. **Optimización**: Todas las imágenes deben estar optimizadas para web
2. **Naming**: Usar nombres descriptivos en inglés con guiones
3. **Copyright**: Asegurar que todos los assets tengan licencia apropiada
4. **Tamaño**: Mantener archivos <10MB para imágenes, <50MB para videos
5. **Alt Text**: Siempre incluir descripción alt en imágenes

## 🗂️ Assets Temporales

Para assets temporales o de prueba, crear subcarpetas:
- `images/temp/`
- `videos/temp/`
- `icons/temp/`

---

**Nota**: Esta carpeta está en el .gitignore para archivos muy grandes. 
Para assets grandes, considerar usar un CDN o servicio de almacenamiento externo.
