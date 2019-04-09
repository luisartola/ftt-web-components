import {html, LitElement} from '@polymer/lit-element/';
import g2018 from "../../data/2018/grupos.json";
import g2019 from "../../data/2019/grupos.json";
import a2018 from "../../data/2018/audio.js";
import a2019 from "../../data/2019/audio.js";

import {repeat} from "../../node_modules/lit-html/directives/repeat";
import css from '../mystyles.scss';
import {doTextQuery, groupContentQuery} from "./api";
import mdFactory from 'markdown-it';

const grupos = {
  2018: g2018,
  2019: g2019
};

const audios = {
  2018: a2018,
  2019: a2019
};


const md = mdFactory();

export default {
  name: 'ftt-grupos',
  element: class extends LitElement {

    static get properties() {
      return {
        content: Array,
        grupos: Array,
        year: Number
      }
    }

    constructor() {
      super();
      this.content = [];
      this.grupos = [];

    }

    connectedCallback() {
      this.year = this.location.params.year;
      this.grupos = grupos[this.year];
      this.audios = audios[this.year];

      [1, 2, /*3*/, 4, 5, 6, 7, 8, 9, 10]
        .forEach(n => {
          doTextQuery(
            groupContentQuery(this.year,n),
            content => {
              const aux = [...this.content];
              aux[n] = md.render(content);
              this.content = aux;
            }
          );
        })
    }

    render() {
      return html`

      <style>
      ${css}
      </style>

      <ftt-section-title 
            title="Grupos de trabajo ${this.year}" 
            subtitle="Agrupados por experiencias comunes">
            </ftt-section-title>

        <section class="section" style="padding: 1rem 1.5rem">
          <div class="container">
            <a href="/${this.year}/experiencias">Todas las experiencias</a> | 
            <a href="/${this.year}/asistentes">Todos los asistentes</a> |
            <a href="/${this.year}/links">Todos los links</a>
          </div>      
        </section>
        
        ${this.grupos.length === 0 ? html`
        <section class="section">
          <div class="container">
          <div class="notification is-warning">
            Todavía no se han creado los grupos para ésta edición. 
            Puedes ver cómo quedó la <a href="/2018/grupos">edición anterior</a>.
          </div>
          </div>
          </section>
        `: ``}
        
          ${repeat(this.grupos, grupo => html`
            <ftt-grupo-section id="grupo-${grupo.id}" .year="${this.year}" .grupo="${grupo}" .content="${this.content[grupo.id]}" .audio="/assets/audio/${this.audios[grupo.id]}"></ftt-grupo-section>
          `)}
		  `;
    }
  }
}