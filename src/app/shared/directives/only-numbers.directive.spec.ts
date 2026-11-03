import { describe, expect, it } from 'vitest';
import { OnlyNumbersDirective } from './only-numbers.directive';

describe('OnlyNumbersDirective', () => {
  it('strips non-digit characters from pasted text', () => {
    const input = document.createElement('input');
    input.value = '4242 4242-ab12';
    input.addEventListener('input', (event) => new OnlyNumbersDirective().onInput(event));
    input.dispatchEvent(new Event('input'));

    expect(input.value).toBe('4242424212');
  });

  it.each([['1', false], ['a', true]])('handles the %s key', (key, prevented) => {
    const event = new KeyboardEvent('keypress', { key, cancelable: true });
    new OnlyNumbersDirective().onKeyPress(event);

    expect(event.defaultPrevented).toBe(prevented);
  });
});
