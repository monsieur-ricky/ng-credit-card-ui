import { Component, input, ViewEncapsulation, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngc-credit-card-back',
  imports: [],
  templateUrl: './credit-card-back.component.html',
  styleUrl: './credit-card-back.component.scss',
  changeDetection: ChangeDetectionStrategy.Eager,
  encapsulation: ViewEncapsulation.None,
})
export class CreditCardBackComponent {
  name = input.required<string | undefined>();
  ccv = input.required<string | undefined>();
}
