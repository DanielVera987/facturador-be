import { ValueObject } from '../../../../shared/domain/valueObjects/ValueObject';

/**
 * Value Object para TasaOCuota de impuestos del nodo Concepto
 * Según el Anexo 20 v4.0 del SAT:
 * - Condicional en Traslados (requerido cuando TipoFactor es Tasa o Cuota)
 * - Requerido en Retenciones
 * - Valor decimal >= 0
 * - Ejemplo: 0.160000 para IVA 16%, 0.080000 para IEPS 8%
 */
export default class TasaOCuotaValueObject extends ValueObject<number> {
  constructor(value: number) {
    super(value);
    this.ensureIsValid(value);
  }

  private ensureIsValid(value: number): void {
    if (typeof value !== 'number' || isNaN(value)) {
      throw new Error('TasaOCuota debe ser un número válido');
    }

    if (value < 0) {
      throw new Error('TasaOCuota no puede ser negativo');
    }
  }
}
