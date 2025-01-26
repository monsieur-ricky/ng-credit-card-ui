import { Component, computed, signal } from '@angular/core';
import { CreditCardComponent } from './shared/ui/credit-card/credit-card.component';
import { FormsModule } from '@angular/forms';
import { OnlyNumbersDirective } from './shared/directives/only-numbers.directive';
import {
  CreditCard,
  CreditCardStyle,
} from './shared/models/credit-card.interface';
@Component({
  selector: 'ngc-root',
  imports: [FormsModule, CreditCardComponent, OnlyNumbersDirective],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  name = signal<string | undefined>('Jon Snow');
  number = signal<string | undefined>('4242424242424242');
  expMonth = signal<string | undefined>('1');
  expYear = signal<string | undefined>('2030');
  ccv = signal<string | undefined>('578');
  style = signal<CreditCardStyle>('dark');

  cardForm = computed<CreditCard>(() => ({
    name: this.name(),
    number: this.number(),
    expMonth: this.expMonth(),
    expYear: this.expYear(),
    ccv: this.ccv(),
    style: this.style(),
  }));

  title = 'Credit Card UI';
  months = Array.from({ length: 12 }, (_, i) => (i + 1).toString());
  years = Array.from({ length: 11 }, (_, i) =>
    (new Date().getFullYear() + i).toString()
  );
  styles: { value: CreditCardStyle; name: string }[] = [
    { value: 'dark', name: 'Dark' },
    { value: 'light', name: 'Light' },
    { value: 'cotton-candy', name: 'Cotton Candy' },
    { value: 'rainbow', name: 'Rainbow' },
    { value: 'sunset-orange', name: 'Sunset Orange' },
    { value: 'sky-blue', name: 'Sky Blue' },
    { value: 'aqua-pink', name: 'Aqua Pink' },
    { value: 'violet-bliss', name: 'Violet Bliss' },
    { value: 'royal-purple', name: 'Royal Purple' },
    { value: 'midnight-blue', name: 'Midnight Blue' },
    { value: 'forest-green', name: 'Forest Green' },
    { value: 'crimson-red', name: 'Crimson Red' },
  ];
}
