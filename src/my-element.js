import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'

class MyElement extends PolymerElement {
  static get properties() {
    return {
      name: {
        type: String,
        value: ''
      },
      image: {
        type: String,
        value: ''
      },
    }
  }

  static get template () {
    return html`
      <style>
        section {
          padding: 88px 16px;
        }
        .container {
          @apply --layout-horizontal;
          max-width: 800px;
          margin: 0 auto;
        }
        .container > * {
          @apply --layout-flex;
        }
        .container img {
          max-width: 100%;
          max-height: 100%;
        }
        .container h3 {
          font-size: 32px;
          font-weight: 300;
          margin: 24px 0;
        }
        .container p {
          line-height: 1.5;
        }
        @media (max-width: 600px) {
          .container {
            @apply --layout-vertical;
          }
        }
      </style>

      <section>
        <div class="container">
          <div>
            <img src="[[image]]">
          </div>
          <div>
            <h3>[[name]]</h3>
            <p>Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea. Lorem ipsum dolor sit amet, per in nusquam nominavi periculis, sit elit oportere ea.</p>
            <p>Convenire definiebas scriptorem eu cum. Sit dolor dicunt consectetuer no. Convenire definiebas scriptorem eu cum. Sit dolor dicunt consectetuer no.</p>
          </div>
        </div>
      </section>
    `
  }
}

customElements.define('my-element', MyElement)
