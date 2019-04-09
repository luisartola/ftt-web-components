import {html, LitElement} from '@polymer/lit-element/';
import css from  '../mystyles.scss';

export default {
  name: 'ftt-wellcome-form',
  element: class extends LitElement {

    connectedCallback(){

      var bouncer = new Bouncer('[data-validate]', {
        disableSubmit: false
      });

      // Detect show error events
      document.addEventListener('bouncerShowError', function (event) {
        var field = event.target;
        field.classList.add("is-danger");
      }, false);

      document.addEventListener('bouncerRemoveError', function (event) {
        var field = event.target;
        field.classList.remove("is-danger");
      }, false);
    }

    render() {
      return html`

      <style>
        ${css}
      </style>

<section class="hero is-primary">
  <div class="hero-body">
    <div class="container">
      <h1 class="title">
        Quiero mi txuleta!
      </h1>
      <h2 class="subtitle">
        Formulario de inscripción en el <strong>#ftt2019</strong>!
      </h2>
    </div>
  </div>
</section>

<section class="section">

    <form name="contact" method="post" >
      <input type="hidden" name="form-name" value="contact" />
          
      <div class="container">

      <div class="field">
        <label class="label">Nombre</label>
        <div class="control">
          <input name="nombre" placeholder="Introduce tu nombre"
                 class="input is-medium"
                 type="text"  required
                 data-bouncer-message="Debes introducir un nombre correcto"
                 data-bouncer-target="#nombre-error">
        </div>
        <p id="nombre-error" class="help is-danger"></p>
      </div>

      <div class="field">
        <label class="label">Email</label>
        <div class="control has-icons-left has-icons-right">
          <input name="email" placeholder="Email input" class="input is-medium"
                 type="email"
                 required
                 data-bouncer-message="Debes introducir un email correcto"
                 data-bouncer-target="#email-error">
          <span class="icon is-small is-left">
            <i class="fas fa-envelope"></i>
            </span>
          <span class="icon is-small is-right">
             <i class="fas fa-exclamation-triangle"></i>
            </span>
        </div>
        <p id="email-error" class="help is-danger"></p>
      </div>

      <div class="field">
        <label class="label">¿Te apuntas al evento?</label>
        <div class="control">
          <div class="select is-medium">
            <select name="meapunto" required>
              <option>Declino la invitación, no va a poder ser :-(</option>
              <option>¡Sí! Contad conmigo... :-)</option>
            </select>
          </div>
        </div>
      </div>

      <div class="field">
        <label class="label">Usuario de twitter</label>
        <div class="control">
          <input name="twitter" class="input is-medium" type="text" placeholder="Text input">
        </div>
      </div>

      <div class="field">
        <label class="label">¿Qué tipo de contenido te apetece trabajar con tu equipo?</label>
        <div class="control">
          <div class="select is-multiple is-medium">
            <select name="contenido" multiple size="4"
                    required
                    data-bouncer-message="Introduce al menos un tipo"
                    data-bouncer-target="#contenido-error"
            >
              <option>Mi experiencia del último año</option>
              <option>Un rant: necesito preparar un buen rant</option>
              <option>Dirty little things: pequeños trucos del día a día</option>
              <option>Otro (te lo pongo en observaciones)</option>
            </select>
          </div>
        </div>
        <p class="help">Antes del propio evento, tendrás que enviarnos tu propuesta :-)</p>
        <p id="contenido-error" class="help is-danger"></p>
      </div>

      <div class="field">
        <div class="control">
          <label class="checkbox is-medium">
            <input name="capitan" type="checkbox">
            Me gustaría ser capitán de un equipo
          </label>
        </div>
      </div>

      <div class="field">
        <label class="label">¿Vienes de fuera?</label>
        <div class="control">
          <div class="select is-medium">
            <select name="donde"
                    required
                    data-bouncer-message="Dinos de ande vienes, porfa"
                    data-bouncer-target="#donde-error"
            >
              <option>Soy del mismísmo Donosti</option>
              <option>Bilbao</option>
              <option>...</option>
            </select>
          </div>
        </div>
        <p id="donde-error" class="help is-danger"></p>
      </div>

      <div class="field">
        <label class="label">Info extra</label>
        <div class="control">
          <textarea name="observaciones" class="textarea is-medium" placeholder="Textarea"></textarea>
        </div>
        <p class="help">¡Todo tipo de sugerencias son bienvenidas!</p>
      </div>

      <div data-netlify-recaptcha></div>

      <div class="field is-grouped">
        <div class="control">
          <button class="button is-medium is-link">Responder</button>
        </div>
      </div>
    </div>
    </form>
  </section>
`;
    }
  }
}