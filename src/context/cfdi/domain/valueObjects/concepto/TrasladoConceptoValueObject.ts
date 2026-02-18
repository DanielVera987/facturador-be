import type { Impuesto, TipoFactor } from '../../enums/CatalogosEnum';
import type { ITrasladoConcepto } from '../../interfaces/TrasladoConcepto';
import ImporteValueObject from '../shared/ImporteValueObject';
import TasaOCuotaValueObject from './TasaOCuotaValueObject';

/**
 * Value Object compuesto para el nodo Traslado dentro de Concepto > Impuestos
 * Según el Anexo 20 v4.0 del SAT
 */
export default class TrasladoConceptoValueObject {
  public readonly base: ImporteValueObject;
  public readonly impuesto: Impuesto;
  public readonly tipoFactor: TipoFactor;
  public readonly tasaOCuota?: TasaOCuotaValueObject;
  public readonly importe?: ImporteValueObject;

  constructor(attributes: ITrasladoConcepto) {
    this.base = new ImporteValueObject(attributes.base);
    this.impuesto = attributes.impuesto;
    this.tipoFactor = attributes.tipoFactor;

    if (attributes.tasaOCuota !== undefined) {
      this.tasaOCuota = new TasaOCuotaValueObject(attributes.tasaOCuota);
    }

    if (attributes.importe !== undefined) {
      this.importe = new ImporteValueObject(attributes.importe);
    }
  }

  public toPrimitives() {
    return {
      base: this.base.value,
      impuesto: this.impuesto,
      tipoFactor: this.tipoFactor,
      ...(this.tasaOCuota !== undefined && {
        tasaOCuota: this.tasaOCuota.value,
      }),
      ...(this.importe !== undefined && {
        importe: this.importe.value,
      }),
    };
  }
}
