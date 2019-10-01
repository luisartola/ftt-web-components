import {LitElement, html} from 'lit-element';
import css from  '../mystyles.scss';
import {doTextQuery, groupContentQuery} from './api';
import {range} from 'ramda';
import mdFactory from 'markdown-it';
import {unsafeHTML} from "../../node_modules/lit-html/directives/unsafe-html";
const md = mdFactory();


export default {
  name: 'ftt-portada',
  element: class extends LitElement {

      static get properties(){
          return {
              content: {type: Array}
          };
      }

    connectedCallback(){
      super.connectedCallback();

      this.content = [];
        let range1 = range(1, 19);

        range1
            .forEach(n => {
                doTextQuery(
                    groupContentQuery(2019, n),
                    content => {
                        const aux = [...this.content];
                        aux[n] = md.render(content);
                        this.content = aux;
                    }
                );
            });
    }


    render() {
      return html`

    <!-- idea para reutilizar css comunes a los componentes -->
    <style>
      ${css} 
    </style>
    
    
    <section class="hero is-primary">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
      From the trenches
      </h1>
      <h2 class="subtitle">
      Experiencia real + dinámica dirigida + txuleta
      </h2>
    </div>
  </div>
</section>


    
 <section class="section">
    <div class="container">
      <div class="box">
        <nav class="level">
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">nada de teorías</p>
              <p class="title">Experiencia real</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">¿autoorganización?</p>
              <p class="title">Dinámica dirigida</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Stop oyente pasivo</p>
              <p class="title">Co-creación</p>
            </div>
          </div>
        </nav>
        
        
      </div>
      
      </div>
  
    </section>
      
      ${this.content.filter((n, i)=> i !==0).map((groupContent, i) => html`

        <section class="section">
            <div class="container content">
                <h1 class="title">Output del grupo ${i + 1}</h1>
                    ${ !!groupContent ? unsafeHTML(groupContent) : 'Pendiente de subir'}
                `)}
            </div>
        </section>

		`;
    }
  }
};