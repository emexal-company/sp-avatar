import { __decorate, __metadata } from "tslib";
import { customElement, property } from 'lit-element';
import { Base } from '@spectrum/sp-base';
import labelStyles from './avatar.styles';
import standardTemplate from './avatar.template';
let Avatar = class Avatar extends Base {
    constructor() {
        super(...arguments);
        this.alt = '';
        this.src = '';
        this.width = '';
        this.height = '';
        this.disabled = false;
    }
    render() {
        return standardTemplate.call(this);
    }
};
Avatar.componentStyles = labelStyles;
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Avatar.prototype, "alt", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Avatar.prototype, "src", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Avatar.prototype, "width", void 0);
__decorate([
    property({ type: String }),
    __metadata("design:type", String)
], Avatar.prototype, "height", void 0);
__decorate([
    property({ type: Boolean }),
    __metadata("design:type", Boolean)
], Avatar.prototype, "disabled", void 0);
Avatar = __decorate([
    customElement('sp-avatar')
], Avatar);
export { Avatar };
//# sourceMappingURL=avatar.component.js.map