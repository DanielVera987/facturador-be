import { RegimenFiscal } from '../../enums/CatalogosEnum';
import type { IEmisor } from '../../interfaces/Emisor';
import NombreValueObject from '../shared/NombreValueObject';
import RfcValueObject from '../shared/RfcValueObject';

/**
 * Value Object compuesto para el nodo Emisor del CFDI
 * Según el Anexo 20 v4.0 del SAT
 */
export default class EmisorValueObject {
  public readonly rfc: RfcValueObject;
  public readonly nombre: NombreValueObject;
  public readonly regimenFiscal: RegimenFiscal;
  public readonly facAtrAdquirente?: string;

  constructor(attributes: IEmisor) {
    this.rfc = new RfcValueObject(attributes.rfc);
    this.nombre = new NombreValueObject(attributes.nombre);
    this.regimenFiscal = attributes.regimenFiscal;

    if (attributes.facAtrAdquirente !== undefined) {
      this.facAtrAdquirente = attributes.facAtrAdquirente;
    }
  }

  public toPrimitives() {
    return {
      rfc: this.rfc.value,
      nombre: this.nombre.value,
      regimenFiscal: this.regimenFiscal,
      ...(this.facAtrAdquirente !== undefined && {
        facAtrAdquirente: this.facAtrAdquirente,
      }),
    };
  }
}
