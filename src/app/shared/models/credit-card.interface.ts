export type CreditCardStyle =
  | 'dark'
  | 'light'
  | 'cotton-candy'
  | 'rainbow'
  | 'sunset-orange'
  | 'sky-blue'
  | 'aqua-pink'
  | 'violet-bliss'
  | 'royal-purple'
  | 'midnight-blue'
  | 'forest-green'
  | 'crimson-red';

export interface CreditCard {
  name: string | undefined;
  number: string | undefined;
  expMonth: string | undefined;
  expYear: string | undefined;
  ccv: string | undefined;
  style?: CreditCardStyle;
}
