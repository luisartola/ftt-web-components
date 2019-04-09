import css from './mystyles.scss';
import {html, LitElement} from 'lit-element';
import {Router} from '@vaadin/router';
import experienciasComponent from './components/experiencias.js';
import linksComponent from './components/links.js';
import experienciaComponent from './components/experiencia.js';
import gruposComponent from './components/grupos.js';
import grupoSectionComponent from './components/grupo-section.js';
import grupoComponent from './components/grupo.js';
import notFoundComponent from './components/not-found.js';
import fttNavBar from './components/nav-bar.js';
import fttFooter from './components/ftt-footer.js';
import portadaComponent from './components/portada.js';
import conceptoComponent from './components/concepto.js';
import fichaComponent from './components/ficha-experiencia.js';
import asistentesComponent from './components/asistentes.js';
import galeriaComponent from './components/galeria.js';
import horarioComponent from './components/horario.js';
import sectionTitle from './components/ftt-section-title.js';

[
  sectionTitle,
  fttFooter,
  gruposComponent,
  grupoComponent,
  grupoSectionComponent,
  conceptoComponent,
  portadaComponent,
  fichaComponent,
  linksComponent,
  asistentesComponent,
  galeriaComponent,
  horarioComponent,
  experienciasComponent,
  experienciaComponent,
  notFoundComponent,
  fttNavBar
].forEach(component => {
  customElements.define(component.name, component.element);
});

customElements.define('lit-app', class extends LitElement {

    firstUpdated() {
      const router = new Router(this.shadowRoot.querySelector('#outlet'));
      router.setRoutes([

        {path: '/', component: portadaComponent.name},
        {path: '/concepto', component: conceptoComponent.name},
        {path: '/horario', component: horarioComponent.name},

        {path: '/:year/grupos', component: gruposComponent.name},
        {path: '/:year/grupo/:id', component: grupoComponent.name},
        {path: '/:year/experiencias', component: experienciasComponent.name},
        {path: '/:year/experiencia/:id', component: fichaComponent.name},
        {path: '/:year/asistentes', component: asistentesComponent.name},
        {path: '/:year/links', component: linksComponent.name},

        {path: '(.*)', component: notFoundComponent.name}
      ]);
    }

    render() {
      // language=HTML
      return html`
        
        <style>
          ${css}
        </style>
        
        <ftt-nav-bar></ftt-nav-bar>
        
        <div id="outlet"></div>
        
        <ftt-footer></ftt-footer>

      `;
    }
  }
);