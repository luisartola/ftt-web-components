import {html, LitElement} from 'lit-element';
import data from '../../data/2018/experiencias.json';
import css from '../mystyles.scss';

export default {
  name: 'ftt-ficha-experiencia',
  element: class extends LitElement {
    render() {

      //mover aquí la asignación hace que no intente renderizar algo vacío
      this.experiencia = data.find(exp => exp.asistente.id === this.location.params.id);

      return html`
        <style>
        ${css}
        </style>
        
        <ftt-section-title 
            title="${this.experiencia.title}" 
            subtitle="${this.experiencia.asistente.nombre}">
        </ftt-section-title>
        <section class="section">
          <div class="container content" style="overflow: hidden;">
             <!--
               <span class="tag is-primary">Primary</span>
              <span class="tag is-link">Link</span>
              <span class="tag is-info">Info</span>
              --> 
    
              <h1>Por qué</h1>
              <p >${this.experiencia.why}</p>
    
              <h1>Cuándo</h1>
              <p>${this.experiencia.when}</p>
    
              <h1>Cómo</h1>
              <p>${this.experiencia.how}</p>
              
              ${this.experiencia.links.length > 0 ? html`
              <h3>Links</h3>
              <ul>
                ${this.experiencia.links.map(link => html`
                  <li><a target="_blank" href="${link}">${link}</a></li>
                `)}
              </ul>
            `: ''}
            
    
            </div>       
        </section>

		`;
    }
  }
}