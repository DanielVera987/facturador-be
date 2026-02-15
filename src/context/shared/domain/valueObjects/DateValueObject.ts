import { ValueObject } from './ValueObject';

export default class DateValueObject extends ValueObject<Date> {
  constructor(value: Date) {
    super(value);
  }

  ensureIsDate() {
    if (!(this.value instanceof Date)) {
      throw Error('value not instance of Date');
    }
  }
}
