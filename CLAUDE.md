# Project Instructions

## General

- Understand before modifying.
- Prefer minimal changes.
- Do not rewrite working code unnecessarily.
- Follow existing architecture unless there is a strong reason not to.

## Security

- Treat authentication, authorization, payments and user-owned resources as sensitive.
- Never expose secrets.
- Never disable security controls just to make tests pass.

## Testing

- Run relevant tests after modifications.
- Do not claim a change works without verification.

## Git

- Inspect git status before modifying.
- Review git diff after modifying.
- Stage only changes belonging to the current task.
- Never stage secrets or unrelated user changes.
- Generate a Conventional Commit message.
- Never execute git commit without explicit approval.

## Agents

- Use subagents only when parallel investigation provides meaningful benefit.
- Do not use subagents for trivial tasks.
- Prefer specialized agents for independent investigations.

## Communication

- Explain important architectural/security decisions.
- Report uncertainty.
- Do not hide failed tests or errors.

## Stack

Astro (sin monorepo, sin backend). Proyecto de un solo propósito: sitio estático que muestra los repositorios del usuario. El usuario no tiene experiencia previa en frontend — explicar decisiones de UI/CSS/Astro en términos simples cuando sea relevante.

## Desarrollo (Astro)

Para levantar el dev server, usar modo background:

```
astro dev --background
```

Gestionar el server en background con `astro dev stop`, `astro dev status` y `astro dev logs`.

Documentación completa: https://docs.astro.build. Consultar estas guías antes de tareas
relacionadas:

- [Páginas, rutas dinámicas y middleware](https://docs.astro.build/en/guides/routing/)
- [Componentes de Astro](https://docs.astro.build/en/basics/astro-components/)
- [Usar React, Vue, Svelte u otros frameworks](https://docs.astro.build/en/guides/framework-components/)
- [Content collections](https://docs.astro.build/en/guides/content-collections/)
- [Estilos y Tailwind](https://docs.astro.build/en/guides/styling/)
- [Internacionalización](https://docs.astro.build/en/guides/internationalization/)

## UI skills

### Visual verification
Playwright se instala como devDependency en la raíz del proyecto (no hay carpeta `frontend/` separada) para verificación de screenshots y animaciones. Chromium debe estar disponible.
Dev server corre en `http://localhost:4321` (default de Astro) — **no** el `localhost:3000` que algunos scripts de skills asumen por defecto; pasar el puerto real explícitamente cuando un script de skill necesite un baseURL.
Ejecutar `npx playwright install chromium` (desde la raíz) si fallan los screenshots.

### Accessibility scanning
axe-core se instala como devDependency en la raíz. /a11y lo usa para escaneo programático WCAG 2.1 AA.

### Token home
Los design tokens viven en `src/styles/global.css`, en un bloque `:root { }` (CSS custom properties, compatible con `@theme` de Tailwind v4). /tokens lee y escribe ahí. (Asume Tailwind agregado vía `astro add tailwind`; si el proyecto no usa Tailwind, ajustar esta sección.)

### Internationalisation
No hay librería de i18n. /copy edita strings directamente en los componentes/páginas bajo `src/components` y `src/pages`.

### Design brief
La dirección visual se documenta en `DESIGN-BRIEF.md` (raíz del proyecto). Todas las skills de UI deben leerlo antes de arrancar.

### Skills available
| Skill | When to use |
|-------|------------|
| /design-grill | Before any UI work — establishes visual direction and writes DESIGN-BRIEF.md |
| /uiux | Redesign any screen — pixel-perfect, recursive |
| /uicolor | Color correction master — balance, temperature, shadows, hierarchy, 60-30-10 |
| /animate | Add or fix animations and micro-interactions |
| /copy | Audit and rewrite all user-facing strings |
| /a11y | Fix accessibility violations — WCAG 2.1 AA |
| /tokens | Find hardcoded design values and replace with tokens |
| /landing | Optimise a marketing or product landing page for conversion |
| /shadcn-ui | Scaffold, add, and compose shadcn/ui components; theming and registries (requiere integración de React en Astro si se usa) |
| /frontend-ui | Aesthetic/typography guidance to avoid generic "AI slop" UIs |
| /frontend-design | Project-specific design preferences for portfolio, updated as decisions are made |
