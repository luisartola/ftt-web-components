import {LitElement, html} from 'lit-element';
import css from  '../mystyles.scss';

export default {
  name: 'ftt-concepto',
  element: class extends LitElement {
    render() {
      return html`

    <style>
    ${css}
    </style>

    <ftt-section-title 
            title="#ftt2018" 
            subtitle="Experiencia real + dinámica + txuleta">
    </ftt-section-title>
  
  <ftt-galeria></ftt-galeria>
  
  <section class="section">
  <div class="container content">
  
    <h1>¿Por qué?</h1>
  
    <ul>
      <li>internet está lleno de información sobre CÓMO hacer las cosas, pero muchas veces no sabemos CUÁNDO hacerlas ni POR QUÉ</li>
      <li>nos centramos en lo que ganamos al aplicar una tecnología pero no lo que sacrificamos a cambio.</li>
      <li>dado que para escuchar una charla me puedo poner youtube, ir a un evento tiene que aportarme más…o al menos algo distinto.</li>
    </ul>
    
    <h3>Concepto</h3>
    <ul>
      <li>dinámica donde todo el mundo participa. Todo el mundo tiene la oportunidad de dar y recibir por igual.</li>
      <li>experiencias vividas: desde las trincheras.</li>
      <li>reflexionar sobre <strong>por qué</strong> y <strong>cuándo</strong> hacer las cosas, porque ya hay suficiente información sobre <strong>cómo</strong> hacerlas.</li>
      <li>la web es construida entre todos y en ella dejamos nuestro mensaje al mundo.</li>
      <li>la web no tiene valor previo (puesto que el evento no es secreto, pero no se promociona), la web tiene valor a posteriori</li>
      <li>no hay promoción, ni patrocinio, ni vanity metrics de ningún tipo</li>
    </ul>
    
    <h2 id="código-de-conducta">Código de conducta</h2>
    <ul>
      <li>En general, no seas un/a capullo/a.</li>
      <li>Haz preguntas para hacer pensar a tu compañero, no para juzgarle o hacer que se sienta mal.</li>
    </ul>
    <h2>Asistir</h2>
    <p>
      Odiamos que gente que quiere venir no pueda.
      Este año hemos duplicado aforo para dejar menos gente fuera,
      pero el evento sigue funcionando por invitación a dedo.
    </p>
    
    
    </div>
  </section>
    
    <section class="section">
      <div class="container">
        <h3 class="title">Lugar</h3>
        
        <p><a href="https://www.iruinsagardotegia.com">Sidrería Iruin</a></p>
        <video width="640" controls>
          <source src="/assets/video/VID_20180414_110255.mp4" type="video/mp4">
        </video>
        <br/>
        <img src="/assets/img/disfrutar-del-entorno.jpg">        
        
      </div>
    </section>
    
		`;
    }
  }
}