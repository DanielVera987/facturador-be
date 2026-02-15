import { ValueObject } from '../../../shared/domain/valueObjects/ValueObject';

export default class ImporteValueObject extends ValueObject<number> {
  constructor(value: number) {
    super(value);
    this.ensureIsValidImporte(value);
  }

  private ensureIsValidImporte(value: number): void {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new Error('Importe debe ser un número válido');
    }

    if (value < 0) {
      throw new Error('Importe no puede ser negativo');
    }
  }
}
