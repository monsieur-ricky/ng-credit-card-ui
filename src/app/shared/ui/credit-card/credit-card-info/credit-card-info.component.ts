import { Component, input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngc-credit-card-info',
  imports: [],
  templateUrl: './credit-card-info.component.html',
  styleUrl: './credit-card-info.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager,
  encapsulation: ViewEncapsulation.None,
})
export class CreditCardInfoComponent {
  name = input.required<string | undefined>();
  expiration = input.required<string>();
}
