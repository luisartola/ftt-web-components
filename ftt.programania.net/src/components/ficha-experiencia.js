import {html, LitElement} from 'lit-element';
import data2018 from '../../data/2018/experiencias.json';
import data2019 from '../../data/2019/experiencias.json';
import css from '../mystyles.scss';

const data = [...data2018, ...data2019];



export default {
  name: 'ftt-ficha-experiencia',
  element: class extends LitElement {


    connectedCallback(){
      super.connectedCallback();
      window.scrollTo(0,0);
    }

    render() {

      //mover aquí la asignación hace que no intente renderizar algo vacío
      this.experiencia = data.find(exp => exp.asistente.id === parseInt(this.location.params.id, 10));

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
    
              <h1>Por qué</h1>
              <p >${this.experiencia.why}</p>
    
              <h1>Cuándo</h1>
              <p>${this.experiencia.when}</p>
    
              ${!!this.experiencia.how ? html`
                        <h1>Cómo</h1>
                        <p>${this.experiencia.how}</p>
              `: ''}
              
              ${this.experiencia.links.filter(link => !!link && link.length > 0 ).length > 0 ? html`
              <h3>Links</h3>
              <ul>
                ${this.experiencia.links.filter(link => !!link && link.length > 0 ).map(link => html`
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