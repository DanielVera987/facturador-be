import { ValueObject } from '../../../shared/domain/valueObjects/ValueObject';

export default class CondicionesDePagoValueObject extends ValueObject<string> {
  private static readonly MAX_LENGTH = 1000;
  private static readonly PATTERN = /^[^|]{1,1000}$/;

  constructor(value: string) {
    super(value);
    this.ensureIsValid(value);
  }

  private ensureIsValid(value: string): void {
    if (value.length > CondicionesDePagoValueObject.MAX_LENGTH) {
      throw new Error(
        `CondicionesDePago no debe exceder ${CondicionesDePagoValueObject.MAX_LENGTH} caracteres`,
      );
    }

    if (!CondicionesDePagoValueObject.PATTERN.test(value)) {
      throw new Error(
        'CondicionesDePago no debe contener el caracter pipe (|)',
      );
    }
  }
}
