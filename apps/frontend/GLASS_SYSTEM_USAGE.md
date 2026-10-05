# Sistema Glass - Guía de Uso

## Variables CSS Disponibles

```css
:root {
  /* Glass Base */
  --glass-base-bg: rgba(255, 255, 255, 0.15);
  --glass-base-blur: blur(20px) saturate(180%) brightness(1.2);
  --glass-base-border: 1px solid rgba(255, 255, 255, 0.3);
  --glass-base-shadow: ...;

  /* Glass Hover */
  --glass-hover-bg: rgba(255, 255, 255, 0.25);
  --glass-hover-blur: blur(25px) saturate(200%) brightness(1.3);
  --glass-hover-border: 1px solid rgba(255, 255, 255, 0.4);
  --glass-hover-shadow: ...;

  /* Glass Active */
  --glass-active-bg: rgba(255, 255, 255, 0.2);
  --glass-active-blur: blur(22px) saturate(190%) brightness(1.25);
  --glass-active-border: 1px solid rgba(255, 255, 255, 0.35);
  --glass-active-shadow: ...;
}
```

## Clases Glass Predefinidas

### 1. `.glass` - Efecto base
```html
<div className="glass">Contenido con efecto glass</div>
```

### 2. `.glassButton` - Botón con efecto glass
```html
<button className="glassButton">Click me</button>
```

### 3. `.glassButtonLarge` - Botón grande
```html
<button className="glassButtonLarge">Botón Grande</button>
```

### 4. `.glassButtonSmall` - Botón pequeño
```html
<button className="glassButtonSmall">Pequeño</button>
```

### 5. `.glassNav` - Para elementos de navegación
```html
<a href="#" className="glassNav">Navegación</a>
```

### 6. `.glassCard` - Para tarjetas
```html
<div className="glassCard">
  <h3>Título de tarjeta</h3>
  <p>Contenido...</p>
</div>
```

## Uso en Módulos CSS

### Opción 1: Usar variables CSS directamente
```css
.miBoton {
  background: var(--glass-base-bg);
  -webkit-backdrop-filter: var(--glass-base-blur);
  backdrop-filter: var(--glass-base-blur);
  border: var(--glass-base-border);
  box-shadow: var(--glass-base-shadow);
  border-radius: 12px;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.miBoton:hover {
  background: var(--glass-hover-bg);
  -webkit-backdrop-filter: var(--glass-hover-blur);
  backdrop-filter: var(--glass-hover-blur);
  border: var(--glass-hover-border);
  box-shadow: var(--glass-hover-shadow);
}
```

### Opción 2: Combinar clases en JSX
```jsx
import styles from './MiComponente.module.css'

function MiComponente() {
  return (
    <div>
      {/* Botón usando clase global */}
      <button className="glassButton">
        Botón Global
      </button>
      
      {/* Botón usando clase local + glass */}
      <button className={`glassButton ${styles.miBotonPersonalizado}`}>
        Botón Personalizado
      </button>
      
      {/* Card usando clase global */}
      <div className="glassCard">
        <h3>Mi Tarjeta</h3>
        <p>Contenido...</p>
      </div>
    </div>
  )
}
```

### Opción 3: Extender con CSS personalizado
```css
/* En tu .module.css */
.heroButton {
  /* Usar las variables glass */
  background: var(--glass-base-bg);
  -webkit-backdrop-filter: var(--glass-base-blur);
  backdrop-filter: var(--glass-base-blur);
  border: var(--glass-base-border);
  box-shadow: var(--glass-base-shadow);
  border-radius: 15px;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  
  /* Estilos específicos */
  padding: 1.5rem 3rem;
  font-size: 1.3rem;
  font-weight: 600;
  color: white;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.heroButton:hover {
  background: var(--glass-hover-bg);
  -webkit-backdrop-filter: var(--glass-hover-blur);
  backdrop-filter: var(--glass-hover-blur);
  border: var(--glass-hover-border);
  box-shadow: var(--glass-hover-shadow);
  transform: translateY(-3px) scale(1.02);
}
```

## Ejemplos de Implementación

### FAQ Page
```css
/* FAQ.module.css */
.faqItem {
  background: var(--glass-base-bg);
  -webkit-backdrop-filter: var(--glass-base-blur);
  backdrop-filter: var(--glass-base-blur);
  border: var(--glass-base-border);
  border-radius: 16px;
  box-shadow: var(--glass-base-shadow);
  margin-bottom: 1rem;
  padding: 1.5rem;
}

.faqItem:hover {
  background: var(--glass-hover-bg);
  border: var(--glass-hover-border);
  box-shadow: var(--glass-hover-shadow);
}
```

### Departamentos Page
```css
/* Departamentos.module.css */
.departamentoCard {
  background: var(--glass-base-bg);
  -webkit-backdrop-filter: var(--glass-base-blur);
  backdrop-filter: var(--glass-base-blur);
  border: var(--glass-base-border);
  border-radius: 20px;
  box-shadow: var(--glass-base-shadow);
  padding: 2rem;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.departamentoCard:hover {
  background: var(--glass-hover-bg);
  -webkit-backdrop-filter: var(--glass-hover-blur);
  backdrop-filter: var(--glass-hover-blur);
  border: var(--glass-hover-border);
  box-shadow: var(--glass-hover-shadow);
  transform: translateY(-8px);
}

.verMasButton {
  background: var(--glass-base-bg);
  -webkit-backdrop-filter: var(--glass-base-blur);
  backdrop-filter: var(--glass-base-blur);
  border: var(--glass-base-border);
  border-radius: 25px;
  box-shadow: var(--glass-base-shadow);
  padding: 0.75rem 2rem;
  color: white;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.verMasButton:hover {
  background: var(--glass-hover-bg);
  -webkit-backdrop-filter: var(--glass-hover-blur);
  backdrop-filter: var(--glass-hover-blur);
  border: var(--glass-hover-border);
  box-shadow: var(--glass-hover-shadow);
  transform: translateY(-2px);
}
```

## Ventajas del Sistema

1. **Consistencia**: Todos los elementos glass se ven igual
2. **Mantenimiento**: Un solo lugar para cambiar todos los efectos glass
3. **Performance**: Variables CSS compiladas optimizadas
4. **Flexibilidad**: Puedes usar las variables para crear variaciones personalizadas
5. **Escalabilidad**: Fácil agregar nuevos tipos de glass (dark, colored, etc.)

## Estados Disponibles

- **Base**: Estado por defecto
- **Hover**: Al pasar el mouse
- **Active**: Al hacer click o cuando está seleccionado
- **Focus**: Para accesibilidad (automático con :focus)

Todos los estados tienen transiciones suaves de 0.3s con easing personalizado.
