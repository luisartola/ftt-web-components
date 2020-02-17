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

    render() {
      return html`

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
              <p class="heading">Cuándo</p>
              <p class="title">25-04-2020</p>
               <small>Habrá una <strong>segunda edición éste año</strong>, no desesperar</small>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Asistencia</p>
              <p class="title">Por invitación</p>
              <small>35 asistentes elegidos con criterio de diversidad y justicia poética</small>
            </div>
          </div>
        </nav>
      </div>
        
        
        <div class="notification is-info">
          <span class="icon">
            <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
          </span>
        Atención al nuevo formato, explicado en el Horario
        </div>

    
      <h1 class="title">
        Horario
      </h1>
                      
        <table class="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Hora</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td style="width:20%"></td>
              <td>
                Empezamos en la oficinas de 
                <a target="_blank" href="https://goo.gl/maps/eYpnyXZCoo9AbtsFA">Buntplanet</a>
              </td>
            </tr>
          <tr>
              <td style="width:20%">9:30</td>
              <td>9:30 : decidir grupos</td>
            </tr>
          <tr>
              <td style="width:20%">10:45</td>
              <td>Segunda iteración: qué nos une como grupo</td>
            </tr>
          <tr>
              <td style="width:20%">11:30</td>
              <td>Hamaiketako: recuperando fuerzas</td>
          </tr>
          <tr>
              <td style="width:20%">12:00</td>
              <td> 
                  Planteamineto del Output (ésta vez será para todos el mismo, un Pecha Kucha)
                  <a href="https://www.youtube.com/watch?v=jJ2yepIaAtE">
                      <small>¿qué es un pecha kucha?</small>
                  </a>
              </td>
          </tr>
          
          <tr>
              <td style="width:20%">13:30</td>
              <td>Comer</td>
          </tr>
          
          <tr>
              <td style="width:20%">15:00</td>
              <td>Preparar Pecha Kucha</td>
          </tr>
          
          <tr>
              <td style="width:20%">16:00</td>
              <td>Exponer y grabar Pecha Kuchas + Ronda de preguntas</td>
          </tr>
          
          <tr>
              <td style="width:20%">19:00</td>
              <td>
                Coger transporte a la <a target="_blank" href="https://www.iruinsagardotegia.com/home">sidrería Irúin</a>.
                <br>
                Cañeo intenso + cenar txuleta
              </td>
          </tr>
          </table>
      
      </div>
  
    </section>
      
		`;
    }
  }
};