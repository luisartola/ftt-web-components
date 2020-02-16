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
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">Dónde</p>
              <p class="title">Buntplanet</p>
            </div>
          </div>
          <div class="level-item has-text-centered">
            <div>
              <p class="heading">...</p>
              <p class="title">....</p>
            </div>
          </div>
        </nav>
      </div>
      
      
      <h1 class="title">Ojo cambios en el formato</h1>
      
      <div class="content">
        <ul>
            <li>Mañana y tarde</li>
            <li>Cena en sidrería</li>
            <li>Dos ediciones</li>
            <li>35 asistentes</li>
            <li>El formato de output será Pecha Kucha</li>
            <li>
                Entradas por invitación siguiendo el siguiente criterio:
                antigüedad, diversidad, azar y justicia poética
             </li>
        </ul>
      
</div>
      
        
        <h1 class="title">Horario</h1>
        
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
              <td> Esquema general del Pecha Kucha</td>
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