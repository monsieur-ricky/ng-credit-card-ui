import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngc-credit-card-number',
  imports: [],
  templateUrl: './credit-card-number.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './credit-card-number.component.scss',
})
export class CreditCardNumberComponent {
  groupedCardNumbers = input.required<string[]>();
}
