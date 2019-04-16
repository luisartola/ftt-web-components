import {html, LitElement} from 'lit-element';
import css from '../mystyles.scss';
import a2018 from "../../data/2018/asistentes.json";
import a2019 from "../../data/2019/asistentes.json";

const data = {
  2018: a2018,
  2019: a2019
};

export default {
  name: 'ftt-links',
  element: class extends LitElement {

    render() {

      this.year = this.location.params.year;
      this.asistentes = data[this.year]
          .filter(entry => !!entry.experiencia.links)
          .map(entry => {
            return {
              nombre: entry.nombre,
              links: entry.experiencia.links
            };
          });

      return html`

        <style>
        ${css}
        </style>
        
      <ftt-section-title title="Links ${this.year}" subtitle="Links compartidos por los asistentes"></ftt-section-title>
      
      <section class="section">
        <div class="container">
          <nav class="breadcrumb" aria-label="breadcrumbs">
            <ul>
              <li><a href="/${this.year}/grupos">${this.year}</a></li>
              <li class="is-active"><a href="#" aria-current="page">Links</a></li>
            </ul>
          </nav>
        
        </div>
        </section>
        
             
        ${this.asistentes.length === 0 ? html`
        <section class="section">
          <div class="container">
          <div class="notification is-warning">
            Todavía no se han enviado experiencias para ésta edición.
            Puedes ver cómo quedó la <a href="/2018/grupos">edición anterior</a>.
          </div>
          </div>
          </section>
        ` : ``}

        
        <section class="section is-paddingless">
          <div class="container content "  style="overflow: hidden;">
             ${this.asistentes.map(asistente => html`
                 <p class="is-5">${asistente.nombre}</p>
                 <ul>
                 ${asistente.links.filter(link => !!link).map(link => html`
                    <li><a target="_blank" href="${link}">${link}</a></li>
                  `)}
                 </ul>
             `)}
          </div>
        </section>
			
		`;
    }
  }
}