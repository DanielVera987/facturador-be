import { ValueObject } from '../../../../shared/domain/valueObjects/ValueObject';

/**
 * Anexo 20 v4.0 del SAT:
 * - Requerido
 * - Longitud máxima: 254 caracteres
 * - Patrón: [^|]{1,254}
 */
export default class NombreValueObject extends ValueObject<string> {
  private static readonly MAX_LENGTH = 254;
  private static readonly PATTERN = /^[^|]{1,254}$/;

  constructor(value: string) {
    super(value);
    this.ensureIsValidNombre(value);
  }

  private ensureIsValidNombre(value: string): void {
    if (value.length > NombreValueObject.MAX_LENGTH) {
      throw new Error(
        `Nombre no debe exceder ${NombreValueObject.MAX_LENGTH} caracteres`,
      );
    }

    if (!NombreValueObject.PATTERN.test(value)) {
      throw new Error('Nombre no debe contener el caracter pipe (|)');
    }
  }
}
