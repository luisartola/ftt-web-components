import {html, LitElement} from '@polymer/lit-element/';
import css from '../mystyles.scss';

export default {
  name: 'ftt-experiencia',
  element: class extends LitElement {
    static get properties() {
      return {
        experiencia: {type: Number}
      };
    }

    connectedCallback(){

      //meter el año en el id de experiencia y así no necesitarlo en la ficha de experiencia

    }

    render() {
      return html`
        
        <style>
        ${css}
        </style>
        
        <section class="section">
          <div class="container content" style="overflow: hidden;">
            <!--
            <span class="tag is-primary">Primary</span>
            <span class="tag is-link">Link</span>
            <span class="tag is-info">Info</span>
            -->
            
            <h1>${this.experiencia.title}</h1>
            <small>${this.experiencia.asistente.nombre}</small>
            <h3>Por qué</h3>
            <p>${this.experiencia.why}</p>
            <h3>Cuándo</h2>
            <p>${this.experiencia.when}</p>
            <h3>Cómo</h3>
            <p>${this.experiencia.how}</p>
            ${this.experiencia.links.length > 0 ? html`
              <h3>Links</h3>
              <ul>
                ${this.experiencia.links.map(link => html`
                  <li><a  target="_blank" href="${link}">${link}</a></li>
                `)}
              </ul>
            `: ''}
            
            <hr/>
          </div>
        </section>
		`;
    }
  }
}