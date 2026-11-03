import { NgOptimizedImage } from '@angular/common';
import { Component, input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'ngc-credit-card-header',
  imports: [NgOptimizedImage],
  templateUrl: './credit-card-header.component.html',
  changeDetection: ChangeDetectionStrategy.Eager,
  styleUrl: './credit-card-header.component.scss',
})
export class CreditCardHeaderComponent {
  type = input.required<string | undefined>();
}
