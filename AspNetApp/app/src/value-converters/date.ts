import * as moment from 'moment';

export class DateValueConverter {
    public toView(value, format) {
        format = format || 'YYYY-MM-DD';
        return value ? moment(value).format(format) : '';
    }

    public fromView(value) {
        return value;
    }
}
