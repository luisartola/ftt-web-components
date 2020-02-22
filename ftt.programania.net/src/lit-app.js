import css from './mystyles.scss';
import {html, LitElement} from 'lit-element';
import {Router} from '@vaadin/router';
import collapse from './components/collapse.js';
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
// import { Workbox } from 'workbox-window';

[
  sectionTitle,
  collapse,
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
        
<!--        <ftt-nav-bar></ftt-nav-bar>-->
        
        <div id="outlet"></div>
        
        <ftt-footer></ftt-footer>

      `;
    }
  }

);
/*

if ('serviceWorker' in navigator) {
    const wb = new Workbox('/sw.js');

//https://medium.com/@webmaxru/workbox-4-implementing-refresh-to-update-version-flow-using-the-workbox-window-module-41284967e79c
    wb.addEventListener('installed', event => {
        if (event.isUpdate) {
            if (confirm('New content is available!. Click OK to refresh')) {
                window.location.reload();
            }
        }
    });

//https://developers.google.com/web/tools/workbox/guides/advanced-recipes#offer_a_page_reload_for_users

    // Add an event listener to detect when the registered
    // service worker has installed but is waiting to activate.
    wb.addEventListener('waiting', (event) => {
        // `event.wasWaitingBeforeRegister` will be false if this is
        // the first time the updated service worker is waiting.
        // When `event.wasWaitingBeforeRegister` is true, a previously
        // updated same service worker is still waiting.
        // You may want to customize the UI prompt accordingly.

        // Assumes your app has some sort of prompt UI element
        // that a user can either accept or reject.

        if (confirm('New content is available!. Click OK to refresh')) {
            // Assuming the user accepted the update, set up a listener
            // that will reload the page as soon as the previously waiting
            // service worker has taken control.
            wb.addEventListener('controlling', (event) => {
                window.location.reload();
            });

            // Send a message telling the service worker to skip waiting.
            // This will trigger the `controlling` event handler above.
            // Note: for this to work, you have to add a message
            // listener in your service worker. See below.
            wb.messageSW({type: 'SKIP_WAITING'});
        }

    });

    wb.register();
}
*/
