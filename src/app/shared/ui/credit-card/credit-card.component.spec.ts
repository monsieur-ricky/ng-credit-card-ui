import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { CreditCardComponent } from './credit-card.component';

describe('CreditCardComponent', () => {
  it.each([
    ['4242424242424242', 'visa'],
    ['5555555555554444', 'mastercard'],
    ['2221000000000009', 'mastercard'],
    ['378282246310005', 'american-express'],
  ])('detects the brand for %s', (number, type) => {
    const fixture = TestBed.createComponent(CreditCardComponent);
    fixture.componentRef.setInput('cardInfo', { number });

    expect(fixture.componentInstance.type()).toBe(type);
    expect(fixture.componentInstance.groupedCardNumbers().join('')).toBe(number);
  });

  it('handles missing card data and updates signal inputs', async () => {
    const fixture = TestBed.createComponent(CreditCardComponent);
    fixture.componentRef.setInput('cardInfo', undefined);
    await fixture.whenStable();

    expect(fixture.componentInstance.style()).toBe('credit-card--dark');
    expect(fixture.componentInstance.expiration()).toBe('--/--');
    expect(fixture.componentInstance.groupedCardNumbers()).toEqual([]);
    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).not.toContain('undefined');
    expect(element.textContent).not.toContain('null');

    fixture.componentRef.setInput('cardInfo', {
      name: 'Arya Stark', number: '4242424242424242',
      expMonth: '2', expYear: '2030', ccv: '123', style: 'light',
    });
    await fixture.whenStable();

    expect(fixture.componentInstance.expiration()).toBe('02/30');
    expect(element.querySelector('.credit-card--light')).not.toBeNull();
    expect(element.textContent).toContain('Arya Stark');
    expect(element.querySelector('ngc-credit-card-back')?.textContent).toContain('123');
  });
});
