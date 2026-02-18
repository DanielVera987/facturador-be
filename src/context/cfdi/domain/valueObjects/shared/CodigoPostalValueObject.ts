import { ValueObject } from '../../../../shared/domain/valueObjects/ValueObject';

/**
 * Value Object para Código Postal (usado en LugarExpedicion y DomicilioFiscalReceptor)
 * Según el Anexo 20 v4.0 del SAT:
 * - Patrón: [0-9]{5} (cadena de exactamente 5 dígitos)
 */
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
