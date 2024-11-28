import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'ngc-credit-card-info',
  imports: [],
  templateUrl: './credit-card-info.component.html',
  styleUrl: './credit-card-info.component.scss',
  encapsulation: ViewEncapsulation.None,
})
export class CreditCardInfoComponent {
  name = input.required<string | undefined>();
  expiration = input.required<string>();
}
