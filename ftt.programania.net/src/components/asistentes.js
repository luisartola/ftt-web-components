import css from  '../mystyles.scss';
import a2018 from "../../data/2018/asistentes.json";
import a2019 from "../../data/2019/asistentes.json";
import {html, LitElement} from '@polymer/lit-element/';
import {repeat} from "../../node_modules/lit-html/directives/repeat";
import {capturar, dispatch, subscribe} from "./state";

const data = {
  2018: a2018,
  2019: a2019
};

export default {
  name: 'ftt-asistentes',
  element: class extends LitElement {

    static get properties() {
      return {
        capturados: {type: Array},
        year: {type: Number},
        asistentes: {type: Array},
      };
    }

    constructor() {
      super();
      this.unsubscribe = null;
      this.asistentes = [];
      this.capturados = [];
    }

    firstUpdated() {
      this.year = this.location.params.year;
      this.asistentes = data[this.year];
      this.unsubscribe = subscribe(state => {
        this.capturados = state.capturados;
      });
    }

    disconnectedCallback() {
      this.unsubscribe();
    }

    shortVersion(title = ""){
      if(title.length < 30)
        return title.replace('"', '');
      return title.replace(/"/g, '').substring(0, 30) + "...";
    }

    render() {
      // language=HTML
      return html`
        
        <style>
          ${css}
        </style>
        
        <ftt-section-title 
            title="Asistentes" 
            subtitle="${this.asistentes.length ===0 ? 'Todavía no hay asistentes para ésta edición' : `Ésta edición cuenta con ${this.asistentes.length} deslumbrantes asistentes`}">
        </ftt-section-title>
        
        <section class="section">
        <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li><a href="/${this.year}/grupos">${this.year}</a></li>
              <li class="is-active"><a href="#" aria-current="page">Asistentes</a></li>
            </ul>
          </nav>
        
        </div>
        </section>
      
        
        <!--section class="section">
          <h1 class="title">Asistentes capturados</h1>
          
          ${this.capturados.length >= 10 ? html`
          <div class="notification is-warning">
            <button class="delete"></button>
            Máximo puedes añadir diez personas.
          </div>
          ` : ``}
          
          <ul>
            ${repeat(this.capturados, capturado => html` 
              <li>${capturado.nombre}</li>
            `)}
          </ul>
          </section-->
          
          ${this.asistentes.length === 0 ? html`
          <section class="section">
            <div class="container">
            <div class="notification is-warning">
              Todavía no hay asistentes para ésta edición.
              Puedes ver a los <a href="/2018/asistentes">asistentes del año pasado</a>.
            </div>
            </div>
          </section>
        `: ``}
          
          
          
          <section class="section is-paddingless">
          <div class="container">
          
          <!--
            <nav class="level">
              <div class="level-left">
                <div class="level-item">
                  <p class="subtitle is-5">
                    <strong></strong> asistentes
                  </p>
                </div>
                <div class="level-item">
                  <div class="field has-addons">
                    <p class="control">
                      <input class="input" type="text" placeholder="Encuentra un asistente">
                    </p>
                    <p class="control">
                      <button class="button">
                        Buscar
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            
            </nav>
            -->

      <div class="columns is-multiline">
          
        ${repeat(this.asistentes, asistente => html`
          <div class="column is-one-third">
            <div class="card">
              <div class="card-content">

                <div class="media">
                  <div class="media-left">
                    <figure class="image is-48x48">
                      <img src="${asistente.foto}" alt="No disponible">
                    </figure>
                  </div>
                  <div class="media-content">
                    <p class="title is-5">${asistente.nombre}</p>
                    <p class="subtitle is-6">@${asistente.twitter}</p>
                  </div>
                </div>
                <div class="content">
                
                  <a href="/${this.year}/experiencia/${asistente.id}">
                      ${this.shortVersion(asistente.experiencia.title)}
                  </a> 
                  <br/>
                  Grupo: <a href="/${this.year}/grupo/${asistente.grupo.id}">${asistente.grupo.name}</a>
                </div>
                <!--
                <button class="button is-small" @click="${ () => { dispatch(capturar(asistente))} }">Capturarlo</button>
                -->
              </div>
            </div>
        </div>
        `)}
      </div>
  </div>
  </section>
    `;
    }
  }
}