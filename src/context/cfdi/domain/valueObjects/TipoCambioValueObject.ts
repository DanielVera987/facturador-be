import { ValueObject } from '../../../shared/domain/valueObjects/ValueObject';

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
