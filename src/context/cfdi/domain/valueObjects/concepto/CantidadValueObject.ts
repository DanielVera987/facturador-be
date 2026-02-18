import { ValueObject } from '../../../../shared/domain/valueObjects/ValueObject';

/**
 * Value Object para Cantidad del nodo Concepto
 * Según el Anexo 20 v4.0 del SAT:
 * - Requerido
 * - Cantidad de bienes o servicios del tipo particular
 * - Debe ser mayor a 0
 */
export default class CantidadValueObject extends ValueObject<number> {
  constructor(value: number) {
    super(value);
    this.ensureIsValid(value);
  }

  private ensureIsValid(value: number): void {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new Error('Cantidad debe ser un número válido');
    }

    if (value <= 0) {
      throw new Error('Cantidad debe ser mayor a 0');
    }
  }
}
