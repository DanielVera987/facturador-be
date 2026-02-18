import { ValueObject } from '../../../../shared/domain/valueObjects/ValueObject';

/**
 * Value Object para TipoCambio del CFDI
 * Según el Anexo 20 v4.0 del SAT:
 * - Condicional: requerido cuando Moneda es diferente de MXN o XXX
 * - Debe ser mayor a 0
 */
export default class TipoCambioValueObject extends ValueObject<number> {
  constructor(value: number) {
    super(value);
    this.ensureIsValidTipoCambio(value);
  }

  private ensureIsValidTipoCambio(value: number): void {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new Error('TipoCambio debe ser un número válido');
    }

    if (value <= 0) {
      throw new Error('TipoCambio debe ser mayor a 0');
    }
  }
}
