
## Problema: styles vs web components

- En TODOS los casos, renderizas los css repetidos en CADA componente...
- [no necesitas BEM, Css modules o CSS in JS](https://noti.st/ladybenko/LQunyI/web-components-api-this-is-for-real#srEAPAH)
- https://belen-albeza.github.io/webcomponents-examples/wc-styles.html

### Opciones

### Directivas lit-html

- https://lit-html.polymer-project.org/guide/template-reference#stylemap
- https://lit-html.polymer-project.org/guide/template-reference#classmap


### Lo que dice Lit-element

> We recommend using static styles for optimal performance. LitElement uses Constructable Stylesheets in browsers that support it, with a fallback for browsers that don’t. Constructable Stylesheets allow the browser to parse styles exactly once and reuse the resulting Stylesheet object for maximum efficiency.

[lo dice aquí](https://lit-element.polymer-project.org/guide/styles)

#### Css lit-element

- usar import {css} from lit-element para importar css comunes actualizar a litle-ement 2 y  usar esto: https://github.com/Polymer/pwa-starter-kit/blob/master/src/components/button-shared-styles.js

#### Webpack css-to-string

-  usar webpack css-to-string para cargar las css

#### usar css-in-js

- https://blog.bitsrc.io/9-css-in-js-libraries-you-should-know-in-2018-25afb4025b9b

#### Constructable stylesheets

- https://wicg.github.io/construct-stylesheets/
- https://developers.google.com/web/updates/2019/02/constructable-stylesheets

### Webpack

Entender cada loader: 

- https://www.npmjs.com/package/style-loader
- https://github.com/webpack-contrib/css-loader
- https://github.com/webpack-contrib/sass-loader
- https://www.npmjs.com/package/css-to-string-loader <-- la clave!

### Ionic a pelo

- [pasar el ionic pwa toolkit a lit-element](https://github.com/ionic-team/ionic-pwa-toolkit)
- [hacer este tutorial](https://www.techiediaries.com/ionic-angularjs/)

### Varios

- poner esto en tu web component <style> @import url( '/common-style.css' ); </style>
- https://lit-element.polymer-project.org/guide/styles
- https://github.com/Polymer/pwa-starter-kit/blob/master/src/components/button-shared-styles.js
- https://github.com/praveenpuglia/shadow-dom-in-depth#styles-inside-shadow-dom
- https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables#Custom_Property_fallback_values
- https://github.com/styled-components/styled-components
- https://www.smashingmagazine.com/2016/12/styling-web-components-using-a-shared-style-sheet/
- https://blog.revillweb.com/web-component-challenges-a09ebc598d65


### Librerías de webcomponents con buena pinta

- https://blog.ionicframework.com/introducing-ionic-4-ionic-for-everyone/
- https://github.com/material-components/material-components-web-components
- https://vaadin.com/components/vaadin-grid/install

