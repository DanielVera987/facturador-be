import { ValueObject } from '../../../../shared/domain/valueObjects/ValueObject';

/**
 * Value Object para el Número de Certificado del CFDI
 * Según el Anexo 20 v4.0 del SAT:
 * - Requerido
 * - Patrón: [0-9]{20} (cadena de exactamente 20 dígitos)
 */
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
