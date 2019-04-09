import css from  '../mystyles.scss';
import {html, LitElement} from 'lit-element';

export default {
  name: 'ftt-section-title',
  element: class extends LitElement {

    static get properties() {
      return {
        title: {type: String},
        subtitle: {type: String}
      };
    }

    constructor() {
      super();
      this.title = '';
      this.subtitle = '';
    }

    render() {
      return html`
        <style>
          ${css}
        </style>
      
      <section class="hero is-primary">
        <div class="hero-body">
          <div class="container">
            <h1 class="title">
              ${this.title}
            </h1>
            <h2 class="subtitle">
              ${this.subtitle}  
            </h2>
          </div>
        </div>
      </section>
		`;
    }
  }
}