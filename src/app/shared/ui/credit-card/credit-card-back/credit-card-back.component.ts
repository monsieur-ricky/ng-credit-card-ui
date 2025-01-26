import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngc-credit-card-back',
  imports: [],
  templateUrl: './credit-card-back.component.html',
  styleUrl: './credit-card-back.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CreditCardBackComponent {
  name = input.required<string | undefined>();
  ccv = input.required<string | undefined>();
}
