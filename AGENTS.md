# Reglas del proyecto

## Contexto

Sitio de portfolio en Astro, sin backend ni monorepo, cuyo único objetivo es mostrar los
repositorios del usuario. No hay sistema de tracking de tareas (TC) ni skills de
`.opencode/skills/` — ese flujo pertenece a otro proyecto y no aplica acá.

## Skills al escribir o modificar código

Al tocar UI, aplicar las skills relevantes documentadas en `CLAUDE.md` (sección "UI skills":
`/a11y`, `/tokens`, `/uicolor`, `/uiux`, `/animate`, `/copy`, etc. según corresponda al cambio).

Al finalizar cada cambio con código, correr verificación: `npm run build` (o `astro check`) y
dejar constancia del resultado.

## Registro de trabajo en MD (control de avance)

El control del trabajo se mantiene en **2 archivos en la raíz del proyecto**:

- **`TODO.md`** — pendientes por resolver (checklist `- [ ]`). Al resolver un ítem, tildarlo
  (`- [x]`) y trasladar la entrada a `CHANGELOG.md`.
- **`CHANGELOG.md`** — historial de cambios realizados, agrupado por fecha (más reciente
  primero). Cada entrada registra: qué se hizo, archivos involucrados, y resultado de
  verificación (`npm run build`).

Regla de mantenimiento: cada vez que se cierre una tarea de código (o se decida una nueva), se
actualizan estos archivos en la misma sesión. La fecha se toma de la fecha real de la máquina.

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
