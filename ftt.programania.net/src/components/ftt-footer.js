import css from  '../mystyles.scss';
import {html, LitElement} from '@polymer/lit-element/';

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
              Powered by Programania
            </p>
          </div>
        </footer>
		`;
    }
  }
}