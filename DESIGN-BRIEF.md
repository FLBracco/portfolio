# Design Brief — Portfolio Fabricio Bracco

_Generado por /design-grill el 2026-09-17. Actualizar este archivo cuando cambien decisiones de diseño._

## Product Context
- **Categoría:** Marketing site personal / portfolio de un solo propósito — muestra los repositorios del usuario, sin backend ni monorepo (Astro estático).
- **Target user:** Reclutadores técnicos y potenciales clientes que llegan desde un link (LinkedIn, CV, GitHub) y en 10-15 segundos deciden si vale la pena seguir mirando. Mayormente desktop, pero debe funcionar bien en mobile.
- **Primary device/context:** Desktop-first, mobile debe verse igual de pulido (probablemente el primer click viene de LinkedIn en el celular).
- **Defining screen:** El Hero (sección de inicio) — es la primera impresión y define si el visitante sigue scrolleando.

## Brand Personality
**5 adjetivos:** preciso, directo, técnico, confiado, tranquilo
**Emotional goal:** confianza técnica ("este dev sabe lo que hace y no necesita gritarlo")
**Tono:** Minimalista y seguro de sí mismo — pocas palabras, mucho espacio en blanco, un solo color de acento que se usa con intención (nunca decorativo). Nada de relleno ni frases genéricas de "apasionado por la tecnología".

## Visual References
- **Imagen de referencia del usuario ("Pravir Raghu")** — tipografía bold gigante en el nombre, subtítulo en verde con separadores "•", cita en itálica gris, botón sólido + botón outline, fondo oscuro con captura de código semi-oscurecida a la derecha. Se toma la estructura y el nivel de pulido, pero se adapta a soportar modo claro también (la referencia es solo dark).

## What to Avoid
- Portfolios genéricos de IA: gradientes violeta/rosa, glassmorphism excesivo, blobs animados, iconos 3D — no encajan con "minimalista y técnico".
- Exceso de animación (parallax, scroll-jacking) — contradice "tranquilo" y "directo".

## Color System
- **Default mode:** Ambos (toggle manual + respeta `prefers-color-scheme` en la primera visita).
- **Temperature:** Fría/neutra (grises tipo slate) con un único acento verde.
- **Primary color direction:** Verde, igual que la referencia — pero con dos variantes de brillo para que funcione en ambos fondos.
- **Palette approach:** Un solo acento + escala de grises neutros.
- **Saturation:** Acento saturado y vivo; el resto (fondo/texto) neutro y desaturado.
- **Specific starting point:**
  - Light: `background: #FFFFFF` (superficie `#F8FAFC`), `text: #0F172A`, `accent: #16A34A` (verde algo más oscuro para contraste AA sobre blanco)
  - Dark: `background: #0A0A0A` (superficie `#171717`), `text: #F8FAFC`, `accent: #4ADE80` (verde brillante, igual que la referencia)

## Typography
- **Typeface:** Inter (variable, pesos 400–800) — geométrica, neutra, técnica, excelente soporte de tildes/ñ, gratis vía Google Fonts/Fontsource.
- **Scale approach:** Balanceada — espaciosa en el hero, más compacta en la lista de proyectos.
- **Heading/body:** Un solo font (Inter), variando peso: 800 para el nombre/headings grandes, 600 para subheads, 400/500 para texto de cuerpo.
- **Suggested pair:** Inter 800 (headings) + Inter 400/500 (body).

## Component Style
- **Corner radius:** Recto/casi recto (0–4px).
- **Elevation:** Plano — sin sombras, solo bordes finos de 1px.
- **Density:** Balanceada (ni muy densa tipo dashboard, ni excesivamente espaciosa tipo landing de marketing).
- **Borders:** Livianos, 1px, color neutro sutil (se aclaran/oscurecen según el tema).
- **Overall:** Recto, plano, bordes livianos — mismo registro técnico que la referencia, sin sombras ni curvas pronunciadas.

## Animation
- **Level:** Sutil (150–200ms en transiciones de hover, fade-in al hacer scroll, transición de color al cambiar de tema).
- **Key interaction to make feel great:** El toggle de tema claro/oscuro — debe sentirse instantáneo y suave, sin parpadeo (flash) al cargar la página.
- **Easing preference:** ease-out en entradas, sin bounce.

## Dark Mode
- Requerido desde el día uno. Toggle manual persistido en `localStorage`, con fallback a `prefers-color-scheme` en la primera visita (sin flash de tema incorrecto al cargar).

## Decisions Made
| Decision | What was decided | Why |
|----------|-----------------|-----|
| Secciones | Hero + Proyectos + Contacto, una sola página | Portfolio simple, sin backend; evita mantener contenido de "About/Experience" que requiere redacción extra |
| Color de acento | Verde (`#16A34A` light / `#4ADE80` dark) | El usuario pidió mantener el estilo de la imagen de referencia |
| Estilo de componentes | Recto y plano, sin sombras | Alineado con "minimalista" pedido por el usuario |
| Animación | Sutil | Pulido sin distraer, coherente con personalidad "tranquilo" |
| Tipografía | Inter, un solo font | Minimalista, gratis, gran soporte de español |

## Ruled Out
| Direction | Why it was rejected |
|-----------|-------------------|
| Nav completa tipo CV (About/Technologies/Experience/Articles) | El usuario eligió la opción simple de 3 secciones — evita contenido adicional a mantener |
| Componentes redondeados con sombra | El usuario prefirió el estilo recto/plano de la referencia |
| Animación mínima (estática) | El usuario prefirió "sutil" para que el toggle de tema y el scroll se sientan pulidos |

## Open Questions
- Ninguna pendiente — brief completo para arrancar implementación.
