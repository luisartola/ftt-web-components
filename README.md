# ftt-web-components

- ftt.programania.net basada en web components estandar
- proyecto para aprender web components
- todo puede estar mal. Feedback welcome
- código base para el curso [Exprime Javascript](https://training.buntplanet.com/cursos/exprime-javascript.html)

# Credits

- [Empezando a seguir las recomendaciones de Open Wc](https://open-wc.org/)
- [basado en create-lit-app-advanced](https://github.com/thepassle/create-lit-app-advanced)
- [project Evergreen](https://github.com/ProjectEvergreen/project-evergreen)
- https://pwa-starter-kit.polymer-project.org/
- https://github.com/PolymerLabs/start-lit-element

# Cheatsheets

- [Template synxtax cheatsheet](https://lit-element.polymer-project.org/guide/templates#template-syntax-cheat-sheet)
- [Template synxtax reference](https://lit-html.polymer-project.org/guide/template-reference)


# Presentaciones clave

- **minicharlas**

- https://css-tricks.com/an-introduction-to-web-components/
- https://developers.google.com/web/fundamentals/web-components/
- https://css-tricks.com/modular-future-web-components/
- https://www.dannymoerkerke.com/blog/web-components-will-replace-your-frontend-framework

# Tutoriales completos

- https://medium.com/@westbrook/not-another-to-do-app-762ea0bb960

# Práctica deliberada

| Ejercicio concreto  | Conceptos a entender (temario) |
| ------------- | ------------- |
| Content Cell  | Content Cell  |
| Content Cell  | Content Cell  |

# Descripción del stack

- tecnologías y por qué cada una

# Conceptos clave 

- **flash cards, SQ3R (test), y group mindmapping**
- clave invertida
- https://developer.mozilla.org/en-US/docs/Web/Web_Components

# Mindmap

- ...

## Web components

- [Apuntes de conceptos web components](./docs/conceptos-web-components.md)

- greenfield browsers (postcss + babel) : verlo funcionar en iexplorer 11
- web component
- custom element
- shadow dom, light dom
- selector.attachShadow <-- shadow a cosas que no sean un componente
- mode = open, mode =...
- html template (no solo html, también puede tener script y style)
- document.importNode(
- html modules <-- por ahora pasando
- <#shadow-root>
- <slot> <-- es algo propio del shadowdom, no tiene por qué ser un custom element
-- extends HTMLElement, connectedCallback(), disconnectedCallback(), attributeChangedCallback() <-- lifecycle
- customElements.define
  
## Js

- [Novedades del lenguaje] (https://medium.freecodecamp.org/es5-to-esnext-heres-every-feature-added-to-javascript-since-2015-d0c255e13c6e)


## CSS y web components

- [Apuntes sobre css](./docs/web-components-and-css.md)
- https://open-wc.org/faq/component-libraries.html

- CSS ::slotted()
- CSS custom properties
- :host, :host-context
- <link>? :-(
- Constructible stylesheets
- css modules
- ::part, ::theme
- tagged template literals

# Lit-element / Lit-html

- [lit-element, connected callback](https://github.com/Polymer/lit-element/blob/master/docs/_guide/events.md)
- https://github.com/open-wc/lit-demos
- https://open-wc.org/developing/#examples

# Javascript antifrágil (aburrido)

- https://training.buntplanet.com/recursos/js/
- https://github.com/nefe/You-Dont-Need-jQuery

# Puntuación lighthouse

- ...

# Crosscutting concerns

- [Error handling](./docs/misc-others.md#errors)
- [Form reacting and validation](https://github.com/luisartola/ftt-web-components/blob/master/docs/misc-others.md#form-validation)
- [Spa and routing](./docs/misc-others.md#spa-routing)
- [Command line](./docs/misc-others.md#command-line)
- [i18n](./docs/misc-others.md#i18n)
- [Security](./docs/misc-others.md#security)
- [http](./docs/misc-others.md#https)
- [Monitoring and alerting](./docs/misc-others.md#monitoring-and-alerting)

# Walking skeleton (build/test/deploy)

- [Deploying](./docs/delivery-netlify.md)
- [Testing](./docs/misc-others.md#test)
- [Building](./docs/misc-others.md#build)

# Stack

- [Css only frameworks](./docs/misc-others.md#css-only-bulma)
- [Libraries](./docs/misc-others.md#libraries)

# Misc

- [Fulltext search](./docs/misc-others.md#fulltext-search)
- [PWA](./docs/pwa.md)
- [Mobile](./docs/misc-others.md#cordoba)
- [IDE](./docs/misc-others.md#ide)

# Ideas diver

## Usar un Google Spreadsheet como backend para protitpar

- https://sheety.co/
- https://sheetlabs.com/#/
- https://sheetdb.io/
- https://airtable.com/
 
