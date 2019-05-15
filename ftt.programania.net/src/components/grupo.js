import {html, LitElement} from 'lit-element';
import g2018 from "../../data/2018/grupos.json";
import g2019 from "../../data/2019/grupos.json";
import a2018 from "../../data/2018/audio.js";
import a2019 from "../../data/2019/audio.js";

import css from '../mystyles.scss';
import mdFactory from 'markdown-it';
import {doTextQuery, groupContentQuery} from "./api";

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
  name: 'ftt-grupo',
  element: class extends LitElement {

    //https://babeljs.io/docs/en/next/babel-plugin-proposal-class-properties.html
    open = false;


    static get properties() {
      return {
        year: Number,
        open: Boolean,
        content: Object,
        grupo: Object,
        audio: String,
      }
    }

    constructor() {
      super();
      this.open = false;
      this.year = null;
      this.content = null;
      this.grupo = {};
      this.audio = '';
    }

    connectedCallback() {
      super.connectedCallback();
      this.year = this.location.params.year;
      this.grupo = grupos[this.year]
        .filter(grupo => grupo.id === this.location.params.id)[0];
      this.grupoAudio = audios[this.year][this.grupo.id];

      doTextQuery(
        groupContentQuery(this.year, this.grupo.id),
        content => {
          this.content = md.render(content);
        }
      );
    }

    toggle() {
      this.open = !this.open;
    }

    render() {
      return html`

          <style>
          ${css}
          </style>
          
          ${this.content ? html`
          <ftt-grupo-section  
                .year="${this.year}" 
                .grupo="${this.grupo}" 
                .content="${this.content}" 
                .audio="https://github.com/Programania/ftt/blob/master/${this.year}/audio/${this.grupo.id}.mp3?raw=true">
          </ftt-grupo-section>
          `: ''}
          
          
		  `;
    }
  }
}