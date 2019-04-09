import {html, LitElement} from 'lit-element';

export default {
  name: 'not-found',
  element: class extends LitElement {
    render() {
      return html`
			<h1>404</h1>
			<p>
				Page not found.
			</p>
		`;
    }
  }
}