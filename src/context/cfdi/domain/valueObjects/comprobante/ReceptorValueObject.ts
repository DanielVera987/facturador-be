import { RegimenFiscal, UsoCFDI } from '../../enums/CatalogosEnum';
import type { IReceptor } from '../../interfaces/Receptor';
import CodigoPostalValueObject from '../shared/CodigoPostalValueObject';
import NombreValueObject from '../shared/NombreValueObject';
import RfcValueObject from '../shared/RfcValueObject';

/**
 * Value Object compuesto para el nodo Receptor del CFDI
 * Según el Anexo 20 v4.0 del SAT
 */
export default class ReceptorValueObject {
  public readonly rfc: RfcValueObject;
  public readonly nombre: NombreValueObject;
  public readonly domicilioFiscalReceptor: CodigoPostalValueObject;
  public readonly regimenFiscalReceptor: RegimenFiscal;
  public readonly usoCFDI: UsoCFDI;

  constructor(attributes: IReceptor) {
    this.rfc = new RfcValueObject(attributes.rfc);
    this.nombre = new NombreValueObject(attributes.nombre);
    this.domicilioFiscalReceptor = new CodigoPostalValueObject(
      attributes.domicilioFiscalReceptor,
    );
    this.regimenFiscalReceptor = attributes.regimenFiscalReceptor;
    this.usoCFDI = attributes.usoCFDI;
  }

  public toPrimitives() {
    return {
      rfc: this.rfc.value,
      nombre: this.nombre.value,
      domicilioFiscalReceptor: this.domicilioFiscalReceptor.value,
      regimenFiscalReceptor: this.regimenFiscalReceptor,
      usoCFDI: this.usoCFDI,
    };
  }
}
