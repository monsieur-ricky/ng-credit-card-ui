import { Directive } from '@angular/core';

@Directive({
  selector: '[ngcOnlyNumbers]',
  host: {
    '(input)': 'onInput($event)',
    '(keypress)': 'onKeyPress($event)',
  },
})
export class OnlyNumbersDirective {
  onKeyPress(event: KeyboardEvent) {
    const charCode = event.key ? event.key.charCodeAt(0) : 0;

    if (charCode < 48 || charCode > 57) {
      event.preventDefault();
    }
  }

  onInput(event: Event) {
    const input = event.target as HTMLInputElement;
    input.value = input.value.replace(/\D/g, '');
  }
}
