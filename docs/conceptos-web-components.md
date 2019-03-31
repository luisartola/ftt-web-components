
## Web components

- [implementaciones de las que aprender](https://github.com/wiredjs/wired-elements/tree/master/packages) 
- https://www.webcomponents.org/collections
- https://github.com/topics/webcomponents
- https://github.com/obetomuniz/awesome-webcomponents
- https://github.com/LarsDenBakker/lit-html-examples
- https://belen-albeza.github.io/webcomponents-examples/index.html
- https://custom-elements-everywhere.com/

### Slot

- ...

### Shadow Dom

- https://developers.google.com/web/fundamentals/web-components/shadowdom
- [Listado de propiedades CSS que atraviesan el shadow dom (porque se heredan por defecto)](https://stackoverflow.com/questions/5612302/which-css-properties-are-inherited)


### Snipets

```
const counter = document.querySelector('x-counter'); 
counter.value = 10; // will trigger the re-render

```

### lit-element / lit-html

Probar:

- https://lit-element.polymer-project.org/try
- https://stackblitz.com/edit/lit-element-demo?file=src%2Fmy-element.js
- [Starter supersencillo](https://gist.githubusercontent.com/sorvell/48f4b7be35c8748e8f6db5c66d36ee29/raw/67346e4e8bc4c81d5a7968d18f0a6a8bc00d792e/index.html)


Aprender: 

- https://github.com/web-padawan/awesome-lit-html
- Aplicación de ejemplo: https://medium.com/@westbrook/litelement-to-do-app-1e08a31707a4
- [slot](https://lit-element.polymer-project.org/guide/templates#render-light-dom-children-with-the-slot-element)
- https://lit-html.polymer-project.org/guide
- https://lit-element.polymer-project.org/guide/

### Global state (Repatch)

- repatch (global state, component communication)
- repatch select, y alternativa a thunk
- repatch.dispatch(navigateTo(url, data))
- connect(element) <-- para declarar subscribe/unsubscribe
- initialState  <-- from localstorage

Middlewares:

- localStorage
- objectSeal/Freeze 
- logger
