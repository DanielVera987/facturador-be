import { ValueObject } from './ValueObject';

export default class LengthValueObject extends ValueObject<string> {
  private length: number;

  constructor(value: string, lenght: number = 0) {
    super(value);
    this.length = lenght;
  }

  ensureLength() {
    if (this.value.length > this.length) {
      throw Error('value is exceeded length');
    }
  }
}
