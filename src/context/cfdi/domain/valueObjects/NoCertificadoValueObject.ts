import { ValueObject } from '../../../shared/domain/valueObjects/ValueObject';

export default class NoCertificadoValueObject extends ValueObject<string> {
  private static readonly PATTERN = /^[0-9]{20}$/;

  constructor(value: string) {
    super(value);
    this.ensureIsValidNoCertificado(value);
  }

  private ensureIsValidNoCertificado(value: string): void {
    if (!NoCertificadoValueObject.PATTERN.test(value)) {
      throw new Error(
        'NoCertificado debe ser una cadena de exactamente 20 dígitos numéricos',
      );
    }
  }
}
