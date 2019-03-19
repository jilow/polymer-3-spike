import { PolymerElement, html } from '@polymer/polymer/polymer-element.js'

import '@polymer/polymer/lib/elements/dom-if.js'
import '@polymer/app-layout/app-header/app-header.js'
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js'

import './my-element.js'

class MyApp extends PolymerElement {

  static get properties() {
    return {
      name: {
        type: String,
        value: ''
      },
      title: {
        type: String,
        value: ''
      },
      subtitle: {
        type: String,
        value: ''
      }
    }
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener('popstate', this.scrollToHash.bind(this))
    setTimeout(() => this.scrollToHash(), 100)
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener('popstate', this.scrollToHash.bind(this))
  }

  scrollToHash() {
    const hash = window.location.hash.slice(1)
    const section = this.shadowRoot.querySelector(`my-element[name=${hash}]`)
    section.scrollIntoView()
  }

  static get template() {
    return html`
      <style>
        a {
          text-decoration: none;
          font-size: inherit;
          color: inherit;
        }
        .toolbar {
          @apply --layout-horizontal;
          @apply --layout-justified;
          background-color: rgba(255, 255, 255, 0.95);
        }
        .tabs {
          height: 100%;
          @apply --layout-horizontal;
        }
        .tabs > a {
          @apply --layout-vertical;
          @apply --layout-center-center;
          margin: 12px 16px 12px;
          border-bottom: 1px solid #222;
        }
        header {
          @apply --layout-vertical;
          @apply --layout-center-center;
          height: calc(100vh - 64px);
          padding: 0 16px;
          background-image: url('//app-layout-assets.appspot.com/assets/landing-page/glass_explorer_food_2.png');
          background-repeat: no-repeat;
          background-size: cover;
          color: white;
          text-align: center;
        }
        header > h2 {
          font-size: 56px;
          font-weight: 300;
          margin: 0;
        }
        header > p {
          font-size: 32px;
        }
      </style>

      <app-header-layout>

        <app-header reveals effects="waterfall" slot="header">
          <app-toolbar class="toolbar">
            <p>[[name]]</p>
            <div class="tabs">
              <a href="#About">About</a>
              <a href="#Services">Services</a>
              <a href="#Contact">Contact</a>
            </div>
          </app-toolbar>
        </app-header>

        <header>
          <h2>[[title]]</h2>
          <p>[[subtitle]]</p>
        </header>

        <my-element
          name="About"
          image="//app-layout-assets.appspot.com/assets/landing-page/berries.jpg"
        ></my-element>

        <my-element
          name="Services"
          image="//app-layout-assets.appspot.com/assets/landing-page/tomato.jpg"
        ></my-element>

        <my-element
          name="Contact"
          image="//app-layout-assets.appspot.com/assets/landing-page/red-onion.jpg"
        ></my-element>

      </app-header-layout>
    `
  }

}

customElements.define('my-app', MyApp)
