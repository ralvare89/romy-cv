# Romy Alvarez — CV Digital

CV digital interactivo construido con **Vite + React + SCSS Modules**.

## Stack

| Tecnología | Uso |
|---|---|
| Vite | Bundler y dev server |
| React 18 | UI components |
| SCSS Modules | Estilos encapsulados por componente |
| `cv.json` | Única fuente de datos del CV |

## Estructura

```
romy-cv/
├── index.html                  # Entry HTML
├── vite.config.js
├── package.json
└── src/
    ├── main.jsx                # React entry point
    ├── App.jsx                 # Root: importa JSON y pasa props
    ├── data/
    │   └── cv.json             # ← Edita aquí tu información
    ├── styles/
    │   ├── main.scss           # Importa todos los partials
    │   ├── _variables.scss     # Colores, fuentes, radios
    │   ├── _mixins.scss        # Helpers reutilizables
    │   └── _global.scss        # Reset y estilos base
    └── components/
        ├── Cursor.jsx / .module.scss
        ├── NavDots.jsx / .module.scss
        ├── Hero.jsx / .module.scss
        ├── About.jsx / .module.scss
        ├── Skills.jsx / .module.scss
        ├── Experience.jsx / .module.scss
        ├── Education.jsx / .module.scss
        ├── References.jsx / .module.scss
        ├── Footer.jsx / .module.scss
        └── useReveal.js        # Hook: scroll-reveal animations
```

## Cómo correrlo localmente

```bash
# 1. Instalar dependencias
npm install

# 2. Arrancar el dev server
npm run dev

# 3. Abrir en el navegador
# http://localhost:5173
```

## Actualizar el CV

Todo el contenido viene de **`src/data/cv.json`**. Solo edita ese archivo:

- `meta` → nombre, rol, subtítulo
- `contact` → ubicación, teléfono, email
- `profile.paragraphs` → texto del perfil (acepta `<strong>`)
- `profile.stats` → tarjetas de estadísticas
- `skills` → grupos de skills con sus tags
- `experience` → trabajos con bullets, fechas y badges
- `education` → títulos e instituciones
- `references` → referencias con iniciales, rol y teléfono

## Build para producción

```bash
npm run build
# Output en /dist — listo para subir a Netlify, Vercel o GitHub Pages
```
