import { TestBed } from '@angular/core/testing';
import { describe, expect, it } from 'vitest';
import { AppComponent } from './app.component';

describe('Credit card form', () => {
  async function setup() {
    const fixture = TestBed.createComponent(AppComponent);
    await fixture.whenStable();
    return fixture;
  }

  it('renders the initial card without Zone.js', async () => {
    const fixture = await setup();
    const element: HTMLElement = fixture.nativeElement;

    expect(element.querySelector('h1')?.textContent).toBe('Credit Card UI');
    expect(element.querySelector('ngc-credit-card')?.textContent).toContain('Jon Snow');
    expect(element.querySelector('ngc-credit-card')?.textContent).toContain('01/30');
    expect(element.querySelector('.credit-card--dark')).not.toBeNull();
  });

  it('updates the card from name and number inputs', async () => {
    const fixture = await setup();
    const element: HTMLElement = fixture.nativeElement;
    const name = element.querySelector<HTMLInputElement>('input[name="name"]')!;
    const number = element.querySelector<HTMLInputElement>('input[name="number"]')!;

    name.value = 'Arya Stark';
    name.dispatchEvent(new Event('input', { bubbles: true }));
    number.value = '5555555555554444';
    number.dispatchEvent(new Event('input', { bubbles: true }));
    await fixture.whenStable();

    expect(fixture.componentInstance.name()).toBe('Arya Stark');
    expect(element.querySelector('ngc-credit-card')?.textContent).toContain('Arya Stark');
    expect(element.querySelector('ngc-credit-card-header img')?.getAttribute('src'))
      .toContain('mastercard');
    expect(element.querySelector('ngc-credit-card-number')?.textContent).toContain('4444');
  });

  it('updates card style and expiration from the selects', async () => {
    const fixture = await setup();
    const element: HTMLElement = fixture.nativeElement;

    const year = (new Date().getFullYear() + 1).toString();
    for (const [name, label] of [['style', 'Sunset Orange'], ['month', '12'], ['year', year]]) {
      const select = element.querySelector<HTMLSelectElement>(`select[name="${name}"]`)!;
      select.selectedIndex = Array.from(select.options).findIndex(
        (option) => option.textContent?.trim() === label,
      );
      select.dispatchEvent(new Event('change', { bubbles: true }));
    }
    await fixture.whenStable();

    expect(element.querySelector('.credit-card--sunset-orange')).not.toBeNull();
    expect(element.querySelector('ngc-credit-card')?.textContent).toContain(`12/${year.slice(-2)}`);
  });
});
