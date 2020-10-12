import { customElement,  property } from 'lit-element';

import { Base } from '@spectrum/sp-base';

import labelStyles from './avatar.styles';
import standardTemplate from './avatar.template';


@customElement('sp-avatar')
export class Avatar extends Base {
  public static componentStyles = labelStyles;

  @property({ type: String }) public alt: string = '';
  @property({ type: String }) public src: string = '';
  @property({ type: String }) public width: string = '';
  @property({ type: String }) public height: string = '';
  @property({ type: Boolean }) public disabled: boolean = false;

  protected render() {
    this.style.width = `${this.width}px`;
    this.style.height = `${this.height}px`;
    this.style.display = `inline-block`;

    return standardTemplate.call(this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'sp-avatar': Avatar;
  }
}
