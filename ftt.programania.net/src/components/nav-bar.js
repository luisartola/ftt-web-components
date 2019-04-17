import css from  '../mystyles.scss';
import {html, LitElement} from 'lit-element';
import {subscribe} from "./state";

const pages = [
  {name: 'Horario', path: '/horario'},
  {name: 'Grupos', path: '/2019/grupos'},
  {name: 'Qué es', path: '/concepto'},
  {name: '2018', path: '/2018/grupos'}
];

export default {
  name: 'ftt-nav-bar',
  element: class extends LitElement {

    static get properties() {
      return {
        isActive: {type: Boolean},
        capturados: {type: Array}

      };
    }

    constructor(){
      super();
      this.capturados = [];
      this.isActive = false;
    }

    connectedCallback() {
      super.connectedCallback()
      subscribe(state => {
        this.capturados = state.capturados;
      });
    }

    toggleMenu() {
      this.isActive = !this.isActive;
    }

    closeMenu() {
      this.isActive = false;
    }

    render() {
      return html`
        <style>
          ${css}
        </style>
        
        <nav class="navbar is-fixed-top" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="/" @click="${() => this.closeMenu()}">
            #ftt2019
          </a>
      
          <a role="button" @click="${() => this.toggleMenu() }" 
                class="navbar-burger burger" aria-label="menu" aria-expanded="false" 
                data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
          </a>
          
        </div>
      
        <div class="navbar-menu ${ this.isActive ? 'is-active' : ''}">
          <div class="navbar-start">
          
           ${pages.map(page =>html`
              <a class="navbar-item" @click="${() => this.toggleMenu()}" href="${page.path}">${page.name}</a>
            `)}
           
           <a class="navbar-item" href="/2019/asistentes">
            Capturados: ${this.capturados.length}
            </a>
      
          </div>
        </div>
      </nav>
		`;
    }
  }
}