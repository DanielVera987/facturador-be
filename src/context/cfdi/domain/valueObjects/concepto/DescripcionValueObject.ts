import { ValueObject } from '../../../../shared/domain/valueObjects/ValueObject';

/**
 * Value Object para Descripcion del nodo Concepto
 * Según el Anexo 20 v4.0 del SAT:
 * - Requerido
 * - Longitud máxima: 1000 caracteres
 * - Patrón: [^|]{1,1000} (no puede contener el caracter pipe "|")
 */
export default class DescripcionValueObject extends ValueObject<string> {
  private static readonly MAX_LENGTH = 1000;
  private static readonly PATTERN = /^[^|]{1,1000}$/;

  constructor(value: string) {
    super(value);
    this.ensureIsValid(value);
  }

  private ensureIsValid(value: string): void {
    if (value.length > DescripcionValueObject.MAX_LENGTH) {
      throw new Error(
        `Descripcion no debe exceder ${DescripcionValueObject.MAX_LENGTH} caracteres`,
      );
    }

    if (!DescripcionValueObject.PATTERN.test(value)) {
      throw new Error('Descripcion no debe contener el caracter pipe (|)');
    }
  }
}
