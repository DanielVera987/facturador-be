import { ValueObject } from '../../../shared/domain/valueObjects/ValueObject';

export default class CodigoPostalValueObject extends ValueObject<string> {
  private static readonly PATTERN = /^[0-9]{5}$/;

  constructor(value: string) {
    super(value);
    this.ensureIsValidCodigoPostal(value);
  }

  private ensureIsValidCodigoPostal(value: string): void {
    if (!CodigoPostalValueObject.PATTERN.test(value)) {
      throw new Error(
        'CodigoPostal debe ser una cadena de exactamente 5 dígitos numéricos',
      );
    }
  }
}
