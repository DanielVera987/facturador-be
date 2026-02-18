import { ValueObject } from '../../../../shared/domain/valueObjects/ValueObject';

/**
 * Value Object para ClaveUnidad del nodo Concepto
 * Según el Anexo 20 v4.0 del SAT:
 * - Requerido
 * - Clave del catálogo c_ClaveUnidad del SAT
 * - Formato: cadena alfanumérica de 2 a 3 caracteres (ej: "H87", "E48", "ACT")
 */
export default class ClaveUnidadValueObject extends ValueObject<string> {
  private static readonly PATTERN = /^[A-Z0-9]{2,3}$/;

  constructor(value: string) {
    super(value);
    this.ensureIsValid(value);
  }

  private ensureIsValid(value: string): void {
    if (!ClaveUnidadValueObject.PATTERN.test(value)) {
      throw new Error(
        'ClaveUnidad debe ser una cadena alfanumérica de 2 a 3 caracteres del catálogo SAT',
      );
    }
  }
}
