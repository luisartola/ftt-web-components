<!-- footer: web components concepts -->

# Conceptos clave

- Template literals
- Template tags
- Custom Elements
- HTML Templates
- Shadow DOM
- Light DOM
- Polyfill
- Lit-element / Lit-html

---

# Template literals

-----

# Template literals

Multiline strings | Interpolation | Template tags

----

# Template tags

---

# Template tags

```
const interpolated = interpolate`I paid ${10}€`

function interpolate(literals, ...expressions) {
  let string = ``
  for (const [i, val] of expressions.entries()) {
    string += literals[i] + val
  }
  string += literals[literals.length - 1]
  return string
}
```

--- 

# Custom Elements

---

# Custom elements

Extender HTML(HTMLElement) con tus propios tags

```
<my-component datos="datos"></my-component>

class MyComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<h1>Hello world</h1>`;
  }
}
    
customElements.define('my-component', MyComponent);

```

-----

# HTML Templates

---

# HTML Templates

```
<template id="template">
  <script>
    const button = document.getElementById('click-me');
    button.addEventListener('click', event => alert(event));
  </script>
  <style>
    #click-me {
      background: tomato;
      .....
      padding: .5rem 1rem;
    }
  </style>
  <button id="click-me">Log click event</button>
</template>
```

---

# Shadow dom

-----

# Shadow dom

- Versión encapsulada del DOM.
- Simplifica CSS: el DOM dentro del ámbito significa que puedes usar simples selectores de CSS, nombres de id/clase más genéricos, y no preocuparte por conflictos de nombres.
- https://developers.google.com/web/fundamentals/web-components/shadowdom
- shadowRoot, attachShadow({ mode: 'open' })

-----

# Light Dom

---

# Light Dom

Para diferenciar del "shadow DOM", llamamos "light DOM" al DOM normal (en el árbol DOM principal)

```
<my-element>
  <p>I won't render</p>
</my-element>
```
---

# Slots

---

# Slots

La manera de componer unos web components con otros

-----

# Polyfill

----

# Polyfill

A polyfill, or polyfiller, is a piece of code (or plugin) that provides the technology that you, the developer, expect the browser to provide natively. Flattening the API landscape if you will.Oct 8, 2010

-----

# Lit-element
- [Try lit-element](https://stackblitz.com/run?file=my-element.js)
- [Lit-element](https://lit-element.polymer-project.org/)
- [El coñazo de hacerlo desde cero](https://css-tricks.com/creating-a-custom-element-from-scratch/)
- [Ejemplo completo de hacerlo desde cero](https://css-tricks.com/encapsulating-style-and-structure-with-shadow-dom/)
- Sin lit-element, no hay bindings.... @click, etc..
- Lit-element sigue las [best practices](
https://developers.google.com/web/fundamentals/web-components/best-practices)

---

# Lit-html

---

# Lit-html

- [Lit-html concepts](https://lit-html.polymer-project.org/guide/concepts)

----

# Extra: el problema con las CSS

- CSS custom properties
- Constructible stylesheets
- CSS Modules
- :host
- *With the exception of **inherited CSS properties**, shadow roots are also isolated from styles defined outside the shadow root, whether in the main page or an outer shadow root.*
- [CSS Inheritance and shadow dom](https://lit-element.polymer-project.org/guide/styles#CSS-Inheritance-and-shadow-DOM)

------

# Extra: Life-cycle callbacks

- connectedCallback
- lit-element lifecycle versus estandar web components
- [First updated](https://lit-element.polymer-project.org/guide/lifecycle#firstupdated)
- [Mozilla, custom elements lifecycle]( https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements#Using_the_lifecycle_callbacks)

