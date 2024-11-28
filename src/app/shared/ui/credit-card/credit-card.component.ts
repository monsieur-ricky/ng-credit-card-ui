import { Component, computed, input } from '@angular/core';
import { CreditCard } from '../../models/credit-card.interface';
import { CreditCardHeaderComponent } from './credit-card-header/credit-card-header.component';
import { CreditCardNumberComponent } from './credit-card-number/credit-card-number.component';
import { CreditCardInfoComponent } from './credit-card-info/credit-card-info.component';

@Component({
  selector: 'ngc-credit-card',
  imports: [
    CreditCardHeaderComponent,
    CreditCardNumberComponent,
    CreditCardInfoComponent,
  ],
  templateUrl: './credit-card.component.html',
  styleUrl: './credit-card.component.scss',
})
export class CreditCardComponent {
  cardInfo = input.required<CreditCard | undefined>();

  style = computed(() => `credit-card--${this.cardInfo()?.style ?? 'dark'}`);
  type = computed(() => this.getCardType(this.cardInfo()?.number));
  expiration = computed(() => this.formatExpiration(this.cardInfo()));
  groupedCardNumbers = computed(
    () => (this.cardInfo()?.number?.match(/.{1,4}/g) || []) as string[]
  );

  private getCardType(number?: string): string {
    switch (number?.charAt(0)) {
      case '3':
        return 'american-express';

      case '4':
        return 'visa';

      case '2':
      case '5':
        return 'mastercard';

      default:
        return 'visa';
    }
  }

  private formatExpiration(cardInfo?: CreditCard): string {
    const month = cardInfo?.expMonth?.padStart(2, '0') ?? '--';
    const year = cardInfo?.expYear ?? '--';

    return `${month}/${year?.slice(-2)}`;
  }
}
