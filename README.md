# Jornadas de Artesania - PEC 3

Revision del sitio "Jornadas de Artesania" reescrito con la metodologia **utility-first CSS** usando **Tailwind CSS v4** sobre UOC Boilerplate (Parcel + Sass). Es la version PEC 3 de la asignatura **Herramientas HTML y CSS II** de la Universitat Oberta de Catalunya (UOC).

Esta entrega recrea dos paginas de la PEC 2 reescribiendo su HTML y CSS con utilidades de Tailwind, anade una pagina generada con ayuda de una IA generativa a partir de un diseno de Figma, y sustituye Bootstrap y Stylelint por la configuracion CSS-first de Tailwind.

## Enlaces

| Recurso | URL |
| --- | --- |
| Repositorio PEC 3 | <https://github.com/Federicojaviermartino/jornadas-artesania-pec3> |
| Despliegue PEC 3 (Netlify) | <https://jornadas-artesania-pec3.netlify.app/> |
| Despliegue PEC 2 (referencia) | <https://jornadas-artesania-uoc.netlify.app/> |

## Paginas

| Pagina | Descripcion |
| --- | --- |
| `index.html` | Portada en formato cartel: hero, banda de informacion, tarjetas destacadas con container queries y galeria. Reescrita a utility-first. |
| `ponentes.html` | Listado de ponentes con filtros por disciplina (JS), fichas reutilizables y programa por dia con acordeon nativo `<details>`. Reescrita a utility-first. |
| `concurso.html` | Pagina del concurso maquetada a partir de un diseno de Figma. HTML con CSS propio (sin Tailwind), autocontenida. |

## Tecnologias y dependencias

| Tecnologia | Uso |
| --- | --- |
| [Parcel](https://parceljs.org/) | Empaquetador (bundler) |
| [Sass/SCSS](https://sass-lang.com/) | Tema, capa base y componentes con `@apply` |
| [Tailwind CSS v4](https://tailwindcss.com/) | Libreria de utilidades (configuracion CSS-first con `@theme`) |
| [@tailwindcss/postcss](https://tailwindcss.com/docs/installation/using-postcss) | Plugin PostCSS de Tailwind v4 |
| [posthtml-include](https://github.com/posthtml/posthtml-include) | Componentes/parciales HTML con `locals` |
| [FontAwesome](https://fontawesome.com/) | Iconografia |
| [Fontsource](https://fontsource.org/) | Fuentes locales (Playfair Display, Source Sans Pro) |

No se usan ni Bootstrap ni Stylelint.

## Configuracion de Tailwind (CSS-first)

El tema se define con `@theme` en `src/assets/styles/_variables.scss` (tipografias, paleta de marca, breakpoints, radios y sombras). Tailwind se importa en `_dependencies.scss` y se procesa con `@tailwindcss/postcss` (ver `.postcssrc`).

### Clases extraidas con `@apply`

En `src/assets/styles/modules/_components.scss` (capa `components`):

- `.btn`, `.btn-clay`, `.btn-cream-outline` - botones reutilizados en cabecera y hero.
- `.btn-filter` - boton-pildora de los filtros de ponentes (el estado `.active` lo gestiona el JS).
- `.pill` - etiqueta tipo pildora para badges y tags.
- `.card` - tarjeta blanca con borde (destacados, ponentes, actividades).
- `.section-heading` - titular de seccion en tipografia serif.

### Componentes con posthtml-include

En `src/views/` (ademas de `header.html` y `footer.html`):

- `info-item.html` - tarjeta de informacion practica (portada).
- `highlight-card.html` - tarjeta destacada con container query (portada).
- `speaker-card.html` - ficha de ponente parametrizada (pagina de ponentes).
- `activity.html` - actividad del programa (pagina de ponentes).

Cada uno recibe sus datos con el atributo `locals` de posthtml-include.

## Instalacion y uso

Requisitos: Node.js 20 LTS.

```bash
git clone https://github.com/Federicojaviermartino/jornadas-artesania-pec3.git
cd jornadas-artesania-pec3
npm install
```

### Servidor de desarrollo

```bash
npm run dev
```

Levanta Parcel en `http://localhost:8123` con recarga en caliente.

### Compilacion para produccion

```bash
npm run build
```

Encadena `clean -> parcel:build` y deja la salida lista en `dist/`.

## Estructura del proyecto

```text
PEC3-Federico-Javier-Martino/
|-- src/
|   |-- index.html              (Portada - utility-first)
|   |-- ponentes.html           (Ponentes - utility-first)
|   |-- concurso.html           (Pagina del diseno de Figma - CSS propio)
|   |-- views/
|   |   |-- header.html
|   |   |-- footer.html
|   |   |-- info-item.html
|   |   |-- highlight-card.html
|   |   |-- speaker-card.html
|   |   |-- activity.html
|   |-- assets/
|       |-- images/
|       |-- scripts/main.js
|       |-- styles/
|           |-- main.scss
|           |-- _variables.scss        (@theme de Tailwind + paleta)
|           |-- _dependencies.scss      (Tailwind, FontAwesome, Fontsource)
|           |-- modules/
|               |-- _base.scss          (capa base)
|               |-- _components.scss     (clases @apply, capa components)
|-- dist/                       (salida de produccion)
|-- .postcssrc                  (plugin @tailwindcss/postcss)
|-- .posthtmlrc                 (posthtml-include)
|-- package.json
|-- netlify.toml
|-- README.md
```

## Despliegue en Netlify

- **Build command**: `npm run build`
- **Publish directory**: `dist`
- **Node version**: 20 LTS (`.nvmrc`)

## Autoria

Federico Javier Martino - PEC 3, Herramientas HTML y CSS II - Universitat Oberta de Catalunya, 2026. Licencia MIT.
