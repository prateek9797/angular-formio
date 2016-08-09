import { BaseComponent, BaseOptions, BaseElement } from '../base';
import { FormioComponents } from '../components';
import { FormioTemplate } from '../../formio.template';

export interface ColumnsOptions extends BaseOptions<any> {
    columns: Array<any>
}

export class ColumnsComponent extends BaseComponent<ColumnsOptions> {}
export class ColumnsElement extends BaseElement<ColumnsComponent> {}
export function Columns(template:FormioTemplate) {
    FormioComponents.register('columns', ColumnsComponent, ColumnsElement, {
        template: template.components.columns
    });
    return ColumnsElement;
};