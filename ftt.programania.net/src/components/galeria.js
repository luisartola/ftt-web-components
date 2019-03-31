import {html, LitElement} from '@polymer/lit-element/';
import {bulmaCarousel} from '../../node_modules/bulma-extensions/dist/js/bulma-extensions.min.js';
import {repeat} from "lit-html/directives/repeat";
import css from '../mystyles.scss';


const paths = [

  { name: 'compartir.jpg',description: 'Reflexionar'},
  { name: 'compartir-2.jpg',description: 'Estar a gusto entre amigos'},
  { name: 'compartir-3.jpg',description: 'Conocerse'},
  { name: 'compartir-4.jpg',description: 'Compartir sin parar'},

  { name: 'amar.jpg',description: 'Abrazar y besar'},
  { name: 'bacalao.jpg',description: 'Comerse un buen bacalao'},
  { name: 'comer-txuleta.jpg',description: 'Diseccionar'},
  { name: 'txuleta-jugosa.jpg',description: 'Txuleteaaaaar'},

  { name: 'compartir-circulo-conclusiones.jpg',description: 'Llegar a conclusiones'},
  { name: 'compartir-circulo-conclusiones-2.jpg',description: 'Crear narrativas ^_^'},
  { name: 'copas-1.jpg',description: 'Echarse una copa'},
  { name: 'copas-2.jpg',description: 'Echarse otra copa'},
  { name: 'obedecer-nunca-rebelarse.jpg',description: 'Obedecer (nunca rebelarse)'},

  { name: 'sidra-networking.jpg',description: 'Hacer networking (del bueno)'},
  { name: 'sidra-networking-2.jpg',description: 'Del bueno bueno...'},

  { name: 'todo-tipo-de-individuos.jpg',description: 'Aceptar a todo tipo de individuos :-D'},
  { name: 'vacilar.png' ,description: 'Vacilar'},
  { name: 'turismo.png',description: 'Hacer turismo'},
].map(entry => ({name: `/assets/img/${entry.name}`, description: entry.description}));

export default {
  name: 'ftt-galeria',
  element: class extends LitElement {

    firstUpdated() {
      const querySelectorAll = this.shadowRoot.querySelectorAll('.carousel, .hero-carousel');
      const ignorado = new bulmaCarousel(querySelectorAll[0], {});
    }

    render() {
      // language=HTML
      return html`

        <style>
          ${css}
        </style>
        
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,400,700" rel="stylesheet">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css">
        
        <section class="section ">
        
        
          <div style="max-width:800px" class="container">
          <h3 class="title is-3">
          El ftt es un lugar donde...
          </h3>
          <div class='carousel carousel-animated carousel-animate-slide'>
            <div class='carousel-container'>
        
              ${repeat(paths, path => html`
              <div class='carousel-item has-background is-active'>
                <img class="is-background" src="${path.name}" alt="" width="640" height="310" />
                <div class="title">${path.description}</div>
              </div>
              `)}
              
            </div>
            
             <div class="carousel-navigation is-overlay">
                <div class="carousel-nav-left">
                  <i class="fa fa-chevron-left" aria-hidden="true"></i>
                </div>
                <div class="carousel-nav-right">
                  <i class="fa fa-chevron-right" aria-hidden="true"></i>
                </div>
             </div>
          </div>
          </div>
        </section>
      `;
    }
  }
}