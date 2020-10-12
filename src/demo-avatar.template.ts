import { html } from 'lit-element';
import { DemoAvatar } from './demo-avatar.component';

import '@spectrum/sp-avatar';
import '@spectrum/sp-container';


export default function template(this: DemoAvatar) {
  return html`
    <sp-container>
      <sp-rule medium label="Avatar"></sp-rule>

      <sp-demo width="50">
        <pre><sp-avatar src="https://opensource.adobe.com/spectrum-css/img/example-ava.jpg" alt="Avatar" width="30" height="30"></sp-avatar></pre>
      </sp-demo>
      <sp-demo width="50">
        <pre><sp-avatar src="https://opensource.adobe.com/spectrum-css/img/example-ava.jpg" alt="Avatar" width="30" height="30" disabled></sp-avatar></pre>
      </sp-demo>
    </sp-container>
  `;
  
}
