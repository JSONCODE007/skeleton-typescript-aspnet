import {ClaimErrorCodeValueConverter} from './claim-error-code';
import {ClaimStatusValueConverter} from './claim-status';
import {ClaimTypeValueConverter} from './claim-type';
import {DateValueConverter} from './date';
import {NumberValueConverter} from './number';
import {autoinject} from 'aurelia-framework';

@autoinject()
export class MetaValueConverter {
    constructor(private claimErrorCodeValueConverter: ClaimErrorCodeValueConverter,
                private claimStatusValueConverter: ClaimStatusValueConverter,
                private claimTypeValueConverter: ClaimTypeValueConverter,
                private dateValueConverter: DateValueConverter,
                private numberValueConverter: NumberValueConverter) {
    }

    public toView(val, converter, format) {
        /* JUSTIFICATION: http://stackoverflow.com/questions/38898440/aurelia-dynamically-bound-value-converter#comment-65199423 */
        /* tslint:disable:no-string-literal */
        if (this[converter + 'ValueConverter'] && this[converter + 'ValueConverter'].toView) {
            return this[converter + 'ValueConverter'].toView(val, format);
        } else {
            return val;
        }
    }

    public fromView(val, converter, format) {
        if (this[converter + 'ValueConverter'] && this[converter + 'ValueConverter'].fromView) {
            return this[converter + 'ValueConverter'].fromView(val, format);
        } else {
            return val;
        }
    }
}
