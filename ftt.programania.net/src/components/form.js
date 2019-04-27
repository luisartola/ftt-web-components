import {html, LitElement} from 'lit-element';
import css from '../mystyles.scss';
import {createForm} from 'final-form';
import jjv from 'jjv';

const schema = {
    type: 'object',
    properties: {
        firstname: {
            type: 'string',
            minLength: 2,
            maxLength: 15
        },
        lastname: {
            type: 'string',
            minLength: 2,
            maxLength: 25
        },
        gender: {
            type: 'string',
            enum: ['male', 'female']
        },
        email: {
            type: 'string',
            format: 'email'
        },
        password: {
            type: 'string',
            minLength: 8
        }
    },
    required: ['firstname', 'lastname', 'email', 'password']
};

var env = jjv();

export default {
    name: 'ftt-form',
    element: class extends LitElement {


        static get properties() {
            return {
                formState: Object
            };
        }

        constructor(){
            super();
            this.formState = {};
        }

        connectedCallback(){
            super.connectedCallback();
            this.form = createForm({
                initialValues: {
                  firstname : '',
                  lastname : '',
                  gender : '',
                  email : '',
                  password : '',
                },
                onSubmit: () => {
                    alert('submit!!!');
                }, // required
                validate: (formState) => {
                    let validate = env.validate(schema, formState);
                    console.log("validate", validate.validation);
                    return validate.validation;
                }
            });

            this.unsubscribe = this.form.subscribe(
                formState => {
                    this.formState = formState;
                    console.log('formState.dirty', formState.dirty);
                    console.log('formState.valid', formState.valid);
                    console.log('formState.values', formState.values);
                    // Update UI
                },
                { // FormSubscription: the list of values you want to be updated about
                    dirty: true,
                    valid: true,
                    values: true
                });

            // Subscribe to field state updates
            this.unregisterField = this.form.registerField(
                'firstname',
                fieldState => {
                    console.log('firstname updated', fieldState);
                    // Update field UI
                    // const { blur, change, focus, ...rest } = fieldState
                    // In addition to the values you subscribe to, field state also
                    // includes functions that your inputs need to update their state.
                },
                { // FieldSubscription: the list of values you want to be updated about
                    active: true,
                    dirty: true,
                    touched: true,
                    valid: true,
                    value: true
                }
            );
        }

        disconnectedCallback(){
            super.disconnectedCallback();
            this.unsubscribe();
            this.unregisterField();
        }

        click() {
            this.form.submit();
        }

        formChange(e){
            this.form.change(e.currentTarget.id,e.currentTarget.value );
        }

        render() {
            return html`

      <style> 
        ${css}
      </style>

      <ftt-section-title 
            title="Formulario" 
            subtitle="Para probar">
       </ftt-section-title>
       
      <section class="section">
        <div class="container">
        
        
        <form method="post">
        
        ${this.form.getFieldState('firstname').valid}
        ${JSON.stringify(this.form.getFieldState('firstname').error)}
        
        First name: <input id="firstname" @change="${(e) => this.formChange(e)}" type="text" name="firstname" .value="${this.form.getFieldState('firstname').value}"/>
        
        <button type="button" @click="${() => this.click()}">Enviar</button>
        
        </form>
        
        <pre>
        
            ${JSON.stringify(this.formState, null, 2)}
        </pre>
        <pre>
        
            ${JSON.stringify(this.form.getFieldState('firstname'), null, 2)}
        </pre>
        
        
        </div>
      </section>  
    `;
        }
    }
};