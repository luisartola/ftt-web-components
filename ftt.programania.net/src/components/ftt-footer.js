import css from  '../mystyles.scss';
import {html, LitElement} from 'lit-element';

export default {
  name: 'ftt-footer',
  element: class extends LitElement {

    render() {
      return html`
        <style>
          ${css}
        </style>
        <footer class="footer">
          <div class="content has-text-centered">
            <p>
              Powered by Programania, <a href="https://github.com/luisartola/ftt-web-components">código fuente</a>
              <img style="height:50px" src="/assets/logo-agilespain.png"/>
            </p>
          </div>
        </footer>
		`;
    }
  }
}