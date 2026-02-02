import { ValueObject } from './ValueObject';

export class NumberValueObject extends ValueObject<number> {
  constructor(value: number) {
    super(value);
    this.ensureIsNumber();
  }

  private ensureIsNumber(): void {
    if (typeof this.value != 'number') {
      throw new Error('value not is number');
    }
  }
}
