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
              Powered by Programania
              <br/>
              <br/>
              <a target="_blank" href="https://github.com/luisartola/ftt-web-components">Código fuente</a>
              <span style="margin:10px">|</span>
              <a target="_blank" href="https://twitter.com/ggalmazor/lists/ftt2019">Asistentes en twitter</a>
              <span style="margin:10px">|</span>
              <a target="_blank" href="https://twitter.com/hashtag/ftt2019?src=hash">#ftt2019</a>
          </div>
          <div class="content has-text-centered">
            <a href="/2019/grupos">2019</a>
                <span style="margin:10px">|</span>
            <a  href="/2018/grupos">2018</a>
      </div>
           <div class="content has-text-centered">
              <a target="_blank" href="https://agile-spain.org/">
                <img style="height:100px" src="/assets/logo-agilespain.png"/>
              </a>
          </div>
        </footer>
		`;
    }
  }
}