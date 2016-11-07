import * as numeral from 'numeral';

export class NumberValueConverter {
    public toView(value, format) {
        format = format || '$0,0.00';
        return value || value === 0 ? numeral(value).format(format) : '';
    }
}
