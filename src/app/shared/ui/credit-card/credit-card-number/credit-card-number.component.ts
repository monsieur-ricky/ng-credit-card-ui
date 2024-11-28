import { Component, input } from '@angular/core';

@Component({
  selector: 'ngc-credit-card-number',
  imports: [],
  templateUrl: './credit-card-number.component.html',
  styleUrl: './credit-card-number.component.scss',
})
export class CreditCardNumberComponent {
  groupedCardNumbers = input.required<string[]>();
}
