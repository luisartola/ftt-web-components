import {html, LitElement} from 'lit-element';
import e2018 from '../../data/2018/experiencias.json';
import e2019 from '../../data/2019/experiencias.json';
import {repeat} from "lit-html/directives/repeat";
import css from '../mystyles.scss';

const data = {
    2018: e2018,
    2019: e2019
};

export default {
    name: 'ftt-experiencias',
    element: class extends LitElement {

        static get properties() {
            return {
                year: Number,
                experiencias: Array
            };
        }

        constructor() {
            super();
            this.experiencias = [];
        }

        connectedCallback() {
            super.connectedCallback();
            this.year = this.location.params.year;

            this.experiencias = data[this.year].slice(0, 10);

            for (let i = 1; i < (data[this.year].length - 10); i = i + 10) {
                setTimeout(() => {
                    this.experiencias = this.experiencias.concat(data[this.year].slice(i, i + 10));
                }, 0);
            }
        }

        render() {
            return html`

      <style>
      ${css}
      </style>

      <ftt-section-title title="Experiencias ${this.year}" subtitle="Algo aprendido el último año"></ftt-section-title>
      
      <section class="section">
        <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li><a href="/${this.year}/grupos">${this.year}</a></li>
              <li class="is-active"><a href="#" aria-current="page">Experiencias</a></li>
            </ul>
          </nav>
        
        </div>
        </section>
      
      
      ${this.experiencias.length === 0 ? html`
        <section class="section">
          <div class="container">
          <div class="notification is-warning">
            Todavía no se han enviado experiencias para ésta edición
          </div>
          </div>
          </section>
        ` : ``}


			${repeat(this.experiencias, experiencia => html`
          <ftt-experiencia .year="${this.year}" .experiencia="${experiencia}"></ftt-experiencia>
			`)}
		`;
        }
    }
}