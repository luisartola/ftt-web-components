import css from '../mystyles.scss';
import a2018 from '../../data/2018/asistentes.json';
import a2019 from '../../data/2019/asistentes.json';
import {html, LitElement} from 'lit-element';
import {repeat} from 'lit-html/directives/repeat';

const data = {
    2018: a2018,
    2019: a2019
};

export default {
    name: 'ftt-asistentes',
    element: class extends LitElement {

        static get properties() {
            return {
                year: {type: Number},
                asistentes: {type: Array},
            };
        }

        constructor() {
            super();
            this.asistentes = [];
        }

        connectedCallback() {
            super.connectedCallback();
            this.year = this.location.params.year;
            this.asistentes = data[this.year];
        }

        disconnectedCallback() {
            super.disconnectedCallback();
        }

        render() {
            return html`
        
        <style>
          ${css}
        </style>
        
        <ftt-section-title 
            title="Asistentes" 
            subtitle="${this.asistentes.length === 0 ? 'Todavía no hay asistentes para ésta edición' :
                `Ésta edición cuenta con ${data[this.year].length} deslumbrantes asistentes`}">
        </ftt-section-title>
        
        
        <section class="section">
          <div class="container">
          

        ${repeat(this.asistentes, asistente => html`
            <pre>
                ${JSON.stringify(asistente)}
            </pre>
        `)}
      
      </div>
      </section>
    `;
        }
    }
};