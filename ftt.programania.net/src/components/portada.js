import {LitElement, html} from '@polymer/lit-element/';
import css from  '../mystyles.scss';

export default {
  name: 'ftt-portada',
  element: class extends LitElement {
    render() {
      return html`

    <!-- idea para reutilizar css comunes a los componentes -->
    <style>
      ${css} 
    </style>
    
    
    <section class="hero is-medium is-primary">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
      From the trenches
      </h1>
      <h2 class="subtitle">
      Experiencia real + dictadura benévola + txuleta
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


		`;
    }
  }
}