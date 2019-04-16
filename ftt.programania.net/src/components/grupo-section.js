import {html, LitElement} from 'lit-element';
import {unsafeHTML} from "../../node_modules/lit-html/directives/unsafe-html";
import {repeat} from "lit-html/directives/repeat";

import css from '../mystyles.scss';
import mdFactory from 'markdown-it';

const md = mdFactory();

export default {
  name: 'ftt-grupo-section',
  element: class extends LitElement {

    static get properties() {
      return {
        year: Number,
        open: Boolean,
        content: Object,
        grupo: Object,
        audio: String,
      }
    }

    toggle() {
      this.open = !this.open;
    }

    render() {
      return html`

          <style>
          ${css}
          </style>
          
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet">
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">

          <section class="section">
          <div class="container">

              <h1 class="title">Grupo ${this.grupo.id}: ${this.grupo.name}</h1>

              <table class="table is-fullwidth">
                <thead>
                <tr>
                <th></th>
                  <th>Nombre </th>
                  <th>Experiencia</th>
                </tr>
                </thead>
                <tbody>
                
                ${repeat(this.grupo.asistentes, asistente => html`
                  <tr>
                  <td>
                  

                  <a target="_blank" href="https://twitter.com/${asistente.twitter}"><i class="fa fa-twitter"></i></a>
                  </td>
                    <td>
                      ${asistente.nombre}
                      </td>
                    <td><a href="/${this.year}/experiencia/${asistente.id}">${asistente.experiencia.title}</a></td>
                  </tr>
                `)}
                
                </tbody>
              </table>
              
              <button class="button" @click="${() => this.toggle()}">Ver contenido generado</button>
              
              <div class="modal ${this.open ? 'is-active' : ''}">
                <div class="modal-background"></div>
                
                <div style="max-width:96%" class="modal-card">
                  <header class="modal-card-head">
                    <p class="modal-card-title">Contenido grupo ${this.grupo.id}</p>

                    <button @click="${() => this.toggle()}"  class="delete" aria-label="close"></button>
                  </header>
                  <section class="modal-card-body">
                  
                  <h1 class="title">Audio grabado</h1>
                  
                  <section class="section">
                    <div class="container">
                        <audio controls preload="none" style="height:54px">
                          <source src="${this.audio}" type="audio/mp3">
                        </audio>
                    </div>
                  </section>
                            
                  <h1 class="title">Apuntes / Transcripción</h1>
                  <p class="content" style="overflow: hidden;">
                    ${unsafeHTML(this.content)}
                  </p>
              
                  </section>
                </div>
              </div>
            </div>
          </section>
		  `;
    }
  }
}