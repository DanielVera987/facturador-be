import type { Impuesto, TipoFactor } from '../../enums/CatalogosEnum';
import type { IRetencionConcepto } from '../../interfaces/RetencionConcepto';
import ImporteValueObject from '../shared/ImporteValueObject';
import TasaOCuotaValueObject from './TasaOCuotaValueObject';

/**
 * Value Object compuesto para el nodo Retencion dentro de Concepto > Impuestos
 * Según el Anexo 20 v4.0 del SAT
 */
export default class RetencionConceptoValueObject {
  public readonly base: ImporteValueObject;
  public readonly impuesto: Impuesto;
  public readonly tipoFactor: TipoFactor;
  public readonly tasaOCuota: TasaOCuotaValueObject;
  public readonly importe: ImporteValueObject;

  constructor(attributes: IRetencionConcepto) {
    this.base = new ImporteValueObject(attributes.base);
    this.impuesto = attributes.impuesto;
    this.tipoFactor = attributes.tipoFactor;
    this.tasaOCuota = new TasaOCuotaValueObject(attributes.tasaOCuota);
    this.importe = new ImporteValueObject(attributes.importe);
  }

  public toPrimitives() {
    return {
      base: this.base.value,
      impuesto: this.impuesto,
      tipoFactor: this.tipoFactor,
      tasaOCuota: this.tasaOCuota.value,
      importe: this.importe.value,
    };
  }
}
