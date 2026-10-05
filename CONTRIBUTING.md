# Cómo trabajamos en eclipse-condos-web

Este archivo es la fuente única de las definiciones del equipo. Las issues lo enlazan en vez de copiarlo.

- [Flujo de trabajo](#flujo-de-trabajo)
- [Definición de Listo (DoR)](#definición-de-listo-dor)
- [Definición de Hecho (DoD)](#definición-de-hecho-dod)
- [Criterios de rechazo generales](#criterios-de-rechazo-generales)
- [Criterios de salida por hito](#criterios-de-salida-por-hito)
- [Reglas de negocio](#reglas-de-negocio)

| Término | Aplica a | Dónde vive |
|---|---|---|
| Definición de Listo (DoR) | Toda issue, antes de empezarla | Aquí |
| Criterios de aceptación | Una issue | Sección "Terminada cuando" de cada issue |
| Definición de Hecho (DoD) | Todo PR, antes de unirlo | Aquí y en la plantilla de PR |
| Criterios de rechazo | Todo PR (generales) y algunas issues (específicos) | Aquí y en la issue cuando aplica |
| Criterios de salida | Un hito completo | Aquí |
| Reglas de negocio | El dominio de Eclipse Condos | Aquí y en la issue cuando aplica |

## Flujo de trabajo

1. Tomar la issue de mayor prioridad del hito actual que cumpla la DoR.
2. Crear una rama desde `main`: `tipo/issue-N-descripcion-corta` (por ejemplo `fix/issue-22-submenu-404`).
3. Abrir un PR en borrador con `Closes #N` en la descripción para que la issue se cierre al unir.
4. Pasar el PR a "Ready for review" cuando cumpla la DoD. Se une con merge a `main`.
5. Actualizar la tarea de Notion ligada a la issue.

## Definición de Listo (DoR)

Una issue se puede empezar cuando:

- [ ] El título dice qué cambia, no solo qué está mal.
- [ ] Tiene contexto suficiente para empezar sin preguntar (archivos, rutas, capturas).
- [ ] Tiene criterios de aceptación verificables en "Terminada cuando".
- [ ] Sus dependencias están cerradas, o no tiene la etiqueta `bloqueado`.
- [ ] Tiene hito, Priority y Effort.
- [ ] Cabe en una tarde de trabajo (unas 3 h). Si no, se divide antes de empezar.
- [ ] Si necesita contenido (fotos, textos, enlaces), el contenido ya existe.
- [ ] Si tiene bloque agendado en Notion, la tarea de Notion enlaza a la issue y la issue a la tarea.

## Definición de Hecho (DoD)

Un PR se puede unir cuando:

- [ ] Todos los criterios de aceptación de la issue están marcados.
- [ ] `npm ci && npm run build` pasa desde un clon limpio (o el chequeo de CI está en verde, cuando exista: #18).
- [ ] El build no muestra advertencias nuevas.
- [ ] Las rutas que toca el cambio se probaron con `next build && next start`, sin 404 ni errores en la consola del navegador.
- [ ] Si cambia la interfaz, se revisó también en un ancho de celular (375 px).
- [ ] El PR enlaza su issue con `Closes #N` y alguien distinto a quien lo escribió lo revisó (o, trabajando solo, se releyó el diff completo al día siguiente).
- [ ] La documentación (README, este archivo) refleja cualquier cambio en cómo se instala, corre o despliega.
- [ ] La tarea de Notion ligada quedó actualizada.

## Criterios de rechazo generales

Un PR se devuelve sin revisar a fondo si:

- El build falla.
- No enlaza ninguna issue, o mezcla varias issues sin explicar por qué.
- Agrega texto o enlaces de ejemplo en lo que toca: `placeholder`, `example.com`, `your-*-domain.com`, `lorem ipsum`.
- Deja un enlace interno que da 404.
- Versiona `node_modules`, `.DS_Store`, archivos de entorno (`.env*`) o credenciales.
- Agrega un archivo de más de 5 MB.
- Cambia versiones de dependencias a `"latest"` o a un rango amplio.

Las issues pueden agregar criterios de rechazo propios.

## Criterios de salida por hito

Un hito se da por terminado solo cuando se cumple todo lo de su lista. Si una issue del hito no se hace, se mueve de hito de forma explícita, no se deja abierta.

### Hito 1 · Reemplazo de Wix (31 oct 2026)

- [ ] Todas las issues del hito están cerradas o movidas a otro hito con una nota del porqué.
- [ ] El sitio nuevo tiene todo lo que tenía Wix: Inicio, 5 departamentos con galería, Amenidades, FAQ y enlace a Instagram.
- [ ] Los 5 botones de reserva abren su anuncio correcto de Airbnb.
- [ ] Todas las URLs del sitio de Wix responden 301 a su equivalente nuevo.
- [ ] La vista previa en un subdominio se revisó con el cliente y la aprobó antes de cambiar el DNS.
- [ ] `eclipsecondosmexico.com` abre el sitio nuevo con HTTPS.
- [ ] No hay 404 internos ni recursos faltantes en la consola.
- [ ] El plan de Wix se da de baja solo después de que el dominio ya sirve el sitio nuevo.

### Hito 2 · Disponibilidad desde Airbnb (iCal) (20 nov 2026)

- [ ] Cada uno de los 5 departamentos muestra su disponibilidad leída del calendario iCal de su anuncio.
- [ ] Si la lectura de un calendario falla, ese departamento no muestra fechas como disponibles.
- [ ] La página indica cuándo se actualizó la disponibilidad por última vez.
- [ ] El sitio sigue sin aceptar reservas: el botón lleva a Airbnb.

### Hito 3 · Reservaciones y panel de administrador (18 dic 2026)

- [ ] El cliente entra al panel con su propia cuenta; nadie más puede ver los datos de huéspedes.
- [ ] Las reservaciones del Excel actual están migradas y el cliente confirmó que coinciden.
- [ ] El cliente usó el panel en lugar del Excel durante al menos una semana sin volver al Excel.

### Hito 4 · Reserva directa con pagos (sin fecha)

No empieza hasta que el cliente lo pida y se haya decidido un channel manager para sincronizar con Airbnb en los dos sentidos. Sus criterios de salida se escriben al abrirlo.

## Reglas de negocio

Restricciones del negocio que el código tiene que respetar. Si una regla cambia, se cambia aquí primero.

| # | Regla |
|---|---|
| RN-1 | Eclipse Condos tiene exactamente 5 departamentos en Mareazul, Playa del Carmen: Arena, Sol, Luna, Mar y Tierra. Toda lista, menú o sitemap muestra los 5. |
| RN-2 | Hasta el hito 4, el sitio no toma reservas ni pagos: reservar siempre lleva al anuncio de Airbnb del departamento, en una pestaña nueva. |
| RN-3 | Cada departamento enlaza a su propio anuncio. IDs de Airbnb verificados el 1 oct 2026: Arena `1551031977485342260`, Sol `51634042`, Luna `53782006`, Mar `926939128885187909`, Tierra `938736936525125853`. |
| RN-4 | La única red social oficial es Instagram: `instagram.com/eclipsecondos/`. No se agregan íconos de redes que no existan. |
| RN-5 | El sitio está en español de México (`lang="es"`, `locale: es_MX`). |
| RN-6 | La capacidad, camas, baños y reglas de cada departamento las define el cliente. Si un dato no se tiene, no se muestra; no se inventa. |
| RN-7 | Las URLs públicas de un departamento son `/departamentos/eclipse-<nombre>`. Una URL pública que cambie necesita una redirección 301. |
| RN-8 | El hosting y el dominio quedan a nombre del cliente, no del desarrollador. |
| RN-9 | A partir del hito 2, el sitio nunca muestra como disponible una fecha que Airbnb tiene ocupada; ante la duda, se muestra como no disponible. |
