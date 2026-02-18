import { ValueObject } from '../../../../shared/domain/valueObjects/ValueObject';

/**
 * Value Object para importes monetarios del CFDI (SubTotal, Descuento, Total, ValorUnitario, Base)
 * Según el Anexo 20 v4.0 del SAT:
 * - Tipo: tdCFDI:t_Importe
 * - El valor debe ser >= 0
 */
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
