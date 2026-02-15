import { RegimenFiscal, UsoCFDI } from '../enums/CatalogosEnum';
import type { IReceptor } from '../interfaces/Receptor';
import CodigoPostalValueObject from './CodigoPostalValueObject';
import NombreValueObject from './NombreValueObject';
import RfcValueObject from './RfcValueObject';

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
