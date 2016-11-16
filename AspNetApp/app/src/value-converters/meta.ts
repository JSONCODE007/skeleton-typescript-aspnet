import {DateValueConverter} from './date';
import {NumberValueConverter} from './number';
import {autoinject} from 'aurelia-framework';

@autoinject()
export class MetaValueConverter {
    constructor(private date: DateValueConverter,
                private number: NumberValueConverter) {
    }

    public toView(value, valueConverter, format) {
        /* JUSTIFICATION: http://stackoverflow.com/questions/38898440/aurelia-dynamically-bound-value-converter#comment-65199423 */
        /* tslint:disable:no-string-literal */
        if (this[valueConverter] && this[valueConverter].toView) {
            return this[valueConverter].toView(value, format);
        } else {
            return value;
        }
    }

    public fromView(val, valueConverter, format) {
        if (this[valueConverter] && this[valueConverter].fromView) {
            return this[valueConverter].fromView(value, format);
        } else {
            return value;
        }
    }
}
