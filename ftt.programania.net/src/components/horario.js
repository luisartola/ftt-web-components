import {html, LitElement} from 'lit-element';
import css from  '../mystyles.scss';

export default {
  name: 'ftt-horario',
  element: class extends LitElement {
    render() {
      return html`

      <style>
        ${css}
      </style>

      <ftt-section-title 
            title="Horario" 
            subtitle="El plan completo de viernes a domingo">
       </ftt-section-title>
       
      <section class="section">
        <div class="container">
          <h1 class="title">Viernes</h1>
          <table class="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Hora</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>19:30</td>
              <td>Birras previas en el <a target="_blank" href="https://goo.gl/maps/gQ1v5Vk28kJGWDY5A">Drop</a></td>
            </tr>
          </table>
        </div>
        </section>
      
      <section class="section">
        <div class="container">
          <h1 class="title">Sábado</h1>
          <table class="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Hora</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>8:40</td>
              <td>
              Sale el bus de la 
              <a target="_blank" href="https://goo.gl/maps/pB6du1TQW6GF36qk7">Estación de autobuses</a>
              camino de la <a target="_blank" href="https://www.iruinsagardotegia.com/home">sidrería Irúin</a>
              </td>
            </tr>
          <tr>
              <td>9:30</td>
              <td>Primera iteración: mejora tu experiencia</td>
            </tr>
          <tr>
              <td>10:45</td>
              <td>Segunda iteración: qué nos une como grupo</td>
            </tr>
          <tr>
              <td>11:30</td>
              <td>Hamaiketako: recuperando fuerzas</td>
          </tr>
          <tr>
              <td>12:00</td>
              <td>Tercera iteración: preparando exposición pública</td>
          </tr>
          
          <tr>
              <td>13:00</td>
              <td>Círculo y conclusiones de cada grupo</td>
          </tr>
          
          <tr>
              <td>14:30</td>
              <td>Comer Txuleta y beber sidra</td>
          </tr>
          
          <tr>
              <td>19:30</td>
              <td>
                Sale el bus de vuelta. 
                Networking en <a target="_blank" href="https://goo.gl/maps/CdRXCzWPsX5U18476">Plaza de la constitución</a>
              </td>
          </tr>

          </table>
        </div>
      </section>
      
      <section class="section">
        <div class="container">
          <h1 class="title">Domingo</h1>
          <table class="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Hora</th>
              <th></th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>11:00</td>
              <td>Desayunaco</td>
            </tr>
          </table>
        </div>
      </section>  
    `;
    }
  }
}