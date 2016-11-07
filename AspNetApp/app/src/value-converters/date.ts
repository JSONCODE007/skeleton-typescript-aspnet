import * as moment from 'moment';

export class DateValueConverter {
    public toView(value, format) {
        format = format || 'l';
        return value ? moment(value).format(format) : '';
    }
}
