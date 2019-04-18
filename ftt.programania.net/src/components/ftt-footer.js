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
          <hr style="border: thin dotted #cdcdcd"/>
              Powered by Programania, 
              <a target="_blank" href="https://github.com/luisartola/ftt-web-components">código fuente</a>
              <br/>
              <br/>
              <br/>
              <a target="_blank" href="https://agile-spain.org/">
                <img style="height:100px" src="/assets/logo-agilespain.png"/>
              </a>
          </div>
        </footer>
		`;
    }
  }
}