import { ValueObject } from '../../../../shared/domain/valueObjects/ValueObject';

/**
 * Value Object para ClaveProdServ del nodo Concepto
 * Según el Anexo 20 v4.0 del SAT:
 * - Requerido
 * - Clave del catálogo c_ClaveProdServ del SAT
 * - Formato: cadena numérica de 8 dígitos (ej: "84111506")
 */
export default class ClaveProdServValueObject extends ValueObject<string> {
  private static readonly PATTERN = /^[0-9]{8}$/;

  constructor(value: string) {
    super(value);
    this.ensureIsValid(value);
  }

  private ensureIsValid(value: string): void {
    if (!ClaveProdServValueObject.PATTERN.test(value)) {
      throw new Error(
        'ClaveProdServ debe ser una cadena de exactamente 8 dígitos numéricos del catálogo SAT',
      );
    }
  }
}
