import {DOM, customAttribute, inject} from 'aurelia-framework';
import 'select2';

@customAttribute('select2')
@inject(DOM.Element)
export class Select2CustomAttribute {
  private value: Select2Options;

  constructor(private element: Element) {
  }

  public attached() {
     this.value = this.value || { allowClear: true };
     if (!this.element.attributes.getNamedItem('multiple') && !this.value.placeholder) {
       this.value.placeholder = 'Select';
     }

     $(this.element).select2(this.value).on('change', evt => {
          if (evt.originalEvent) {
            return;
          }

          this.element.dispatchEvent(new Event('change'));
    });
  }

  public detached() {
    $(this.element).select2('destroy');
  }
}
