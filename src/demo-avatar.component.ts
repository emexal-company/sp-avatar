import { PageViewElement } from '@components/page-view-element';
import { customElement, query } from 'lit-element';

import styles from './demo-avatar.styles';
import template from './demo-avatar.template';

// These are the shared styles needed by this element.
import sharedStyles from '@components/shared.styles';

import Prism from "prismjs";

@customElement('demo-avatar')
export class DemoAvatar extends PageViewElement {

  public static styles = [sharedStyles, styles];

  protected render() {
    return template.call(this);
  }

  protected firstUpdated() {
    Prism.highlightAllUnder(this.shadowRoot);
  }

}

declare global {
  interface HTMLElementTagNameMap {
    'demo-avatar': DemoAvatar;
  }
}
