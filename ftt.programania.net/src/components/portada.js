import {html, LitElement} from 'lit-element';
import css from '../mystyles.scss';
import mdFactory from 'markdown-it';

const md = mdFactory();


export default {
    name: 'ftt-portada',
    element: class extends LitElement {

        render() {
            return html`
<style>${css}</style>
<section class="hero is-primary">
    <div class="hero-body">
        <div class="container">
            <h1 class="title"> From the trenches </h1>
            <h2 class="subtitle"> Experiencia real + dinámica dirigida + txuleta </h2>
        </div>
    </div>
</section>

<section class="section">
    <div class="container">
        <div class="box">
            <nav class="level">
                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading">Edición</p>
                        <p class="title">FTT 2020.1</p>
                        <p class="title">FTT 2020.2</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading">Cuándo</p>
                        <p class="title">25-04-2020</p>
                        <p class="title">TBD (otoño/invierno)</p>
                    </div>
                </div>
                <div class="level-item has-text-centered">
                    <div>
                        <p class="heading">Asistencia</p>
                        <p class="title">35 invitados</p>
                        <p class="title">35 invitados</p>
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
            <tbody>
            <tr>
                <td style="width:20%">9:00</td>
                <td>
                    Empezamos en la oficinas de
                    <a target="_blank" href="https://goo.gl/maps/eYpnyXZCoo9AbtsFA">Buntplanet</a>
                </td>
            </tr>
            <tr>
                <td style="width:20%">9:30</td>
                <td>Iteración 1: Decidimos grupos</td>
            </tr>
            <tr>
                <td style="width:20%">10:45</td>
                <td>Iteración 2: Qué nos une como grupo?</td>
            </tr>
            <tr>
                <td style="width:20%">11:30</td>
                <td>Hamaiketako: Recuperar fuerzas</td>
            </tr>
            <tr>
                <td style="width:20%">12:00</td>
                <td>Planteamineto del Output: <a target="_blank" href="https://www.youtube.com/watch?v=jJ2yepIaAtE">Pecha Kucha</a></td>
            </tr>

            <tr>
                <td style="width:20%">13:30</td>
                <td>Comer: Restaurante <a target="_blank" href="https://goo.gl/maps/qvzSEmSKSaXNNPSB9">Algorri</a></td>
            </tr>

            <tr>
                <td style="width:20%">15:00</td>
                <td>Preparar output: <a target="_blank" href="https://www.youtube.com/watch?v=jJ2yepIaAtE">Pecha Kucha</a></td>
            </tr>

            <tr>
                <td style="width:20%">16:00</td>
                <td>Exponer y grabar Pecha Kuchas + Ronda de preguntas</td>
            </tr>

            <tr>
                <td style="width:20%">19:00</td>
                <td>
                    El autobús sale a la <a target="_blank" href="https://www.iruinsagardotegia.com/home">sidrería Iruin</a>
                </td>
            </tr>
        </table>
    </div>
</section>

<section class="section">
    <div class="container">

        <h1 class="title">Más info</h1>

        <div class="columns">
            <div class="column">
                <h2 class="title">Dónde será el FTT?</h2>
                
                <p>Este año la gente maja de <a target="_blank" href="https://buntplanet.com">BuntPlanet</a> nos cede su espacio:</p>
        
                <iframe width="100%" height="auto" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.8346699552903!2d-2.0112086840373102!3d43.29678388342164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51b06bbb3d4b5f%3A0x5395911b9d8dff8d!2sBUNT%20PLANET%20SL!5e0!3m2!1ses!2ses!4v1581961827150!5m2!1ses!2ses" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                
                <h2 class="title">Qué es un Pecha Kutxa?</h2>

                <iframe width="100%" height="auto" src="https://www.youtube.com/embed/jJ2yepIaAtE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div>
            <div class="column">
                <h2 class="title">Dónde vamos a comer?</h2>
    
                <p>Comeremos en el restaurante Algorri, en el mismo parque empresarial:</p>
                
                <iframe width="100%" height="auto" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2903.7628224098585!2d-2.007185884037278!3d43.29828838332475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51b013eea3ce93%3A0xcf5201d3afa88864!2sAlgorri!5e0!3m2!1ses!2ses!4v1581961346429!5m2!1ses!2ses" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
                
                <h2 class="title">Dónde vamos a cenar?</h2>

                <p>Los asistentes al evento y sus acompañantes iremos a cenar a la <a target="_blank" href="https://www.iruinsagardotegia.com/home">sidrería Iruin</a>:</p>
                
                <iframe width="100%" height="auto" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2905.151057085864!2d-2.0375091840378246!3d43.269211085192744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd51b103a0a4d993%3A0xe2e15b0d50325110!2sSagardotegia%20Iruin!5e0!3m2!1ses!2ses!4v1581962024025!5m2!1ses!2ses" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
            </div>
        </div>
    </div>
</section>
    		`;
        }
    }
};
