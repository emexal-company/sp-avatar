import { html } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { styleMap } from 'lit-html/directives/style-map.js';
export default function standardTemplate() {
    const imageStyles = {
        width: `${this.width}px`,
        height: `${this.height}px`
    };
    const classes = {
        'is-disabled': this.disabled
    };
    return html `
    <img class="spectrum-Avatar ${classMap(classes)}" src="${this.src}" alt="${this.alt}" style="${styleMap(imageStyles)}">
    `;
}
//# sourceMappingURL=avatar.template.js.map