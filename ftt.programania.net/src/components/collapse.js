


//cuál es el mínimo número de css necesarios para que funcione collapse?
import css from '../mystyles.scss';
import {html, LitElement} from 'lit-element';

export default {
    name: 'ftt-collapse',
    element: class extends LitElement {

        static get properties() {
            return {
                title: {type: String},
                isHidden: {type: Boolean}
            };
        }

        constructor() {
            super();
            this.isHidden = true;
        }

        click() {
            this.isHidden = !this.isHidden;
        }

        render() {
            return html`

        <style>
        ${css}
        </style>

        <section style="cursor:pointer" class="section" @click="${() => this.click()}">
            <div class="container">
                <div class="card is-fullwidth">
                    <header class="card-header">
                        <p class="card-header-title">${this.title}</p>
                        <a class="card-header-icon card-toggle">
                            <i class="fa fa-angle-down"></i>
                        </a>
                    </header>
                    <div class="card-content ${this.isHidden ? 'is-hidden' : ''}">
                        <div class="content">
                            <slot></slot>
                        </div>
                    </div>
                </div>
        
            </div>
        </section>
		`;
        }
    }
};