import { ValueObject } from '../../../shared/domain/valueObjects/ValueObject';

export default class RfcValueObject extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.ensurePatternRfc(value);
  }

  ensurePatternRfc(value: string) {
    const pattern =
      /^([A-ZÑ&]{3,4}) ?(?:- ?)?(\d{2}(?:0[1-9]|1[0-2])(?:0[1-9]|[12]\d|3[01])) ?(?:- ?)?([A-Z\d]{2})([A\d])$/;

    return value.match(pattern);
  }
}
