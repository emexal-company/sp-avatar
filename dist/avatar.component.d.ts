import { Base } from '@spectrum/sp-base';
export declare class Avatar extends Base {
    static componentStyles: import("lit-element").CSSResult;
    alt: string;
    src: string;
    width: string;
    height: string;
    disabled: boolean;
    protected render(): import("lit-element").TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        'sp-avatar': Avatar;
    }
}
