import {DOM, bindable, customAttribute, inject} from 'aurelia-framework';
import 'spin';

@customAttribute('spin')
@inject(DOM.Element)
export class SpinCustomAttribute {
  @bindable public shouldSpin;

  private spinner: Spinner = undefined;

  constructor(private element) {
  }

  public shouldSpinChanged(newValue, oldValue) {
    if (newValue) {
        if (this.spinner) {
            this.spinner.spin(this.element);
        } else {
            this.spinner = new Spinner({color: '#000', lines: 12, top: '250px'}).spin(this.element);
        }
    } else if (this.spinner) {
        this.spinner.stop();
    }
  }
}
