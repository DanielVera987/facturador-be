import { RegimenFiscal, UsoCFDI } from '../enums/CatalogosEnum';

/**
 * Interface para el nodo Receptor del CFDI 4.0
 * Según el Anexo 20 del SAT versión 4.0
 */
export interface IReceptor {
  /** Requerido. RFC del contribuyente receptor del comprobante */
  rfc: string;

  /** Requerido. Nombre, denominación o razón social del receptor */
  nombre: string;

  /**
   * Requerido. Código postal del domicilio fiscal del receptor.
   * Debe corresponder a un valor del catálogo c_CodigoPostal
   */
  domicilioFiscalReceptor: string;

  /** Requerido. Clave del régimen fiscal del receptor (catálogo c_RegimenFiscal) */
  regimenFiscalReceptor: RegimenFiscal;

  /** Requerido. Clave del uso del CFDI (catálogo c_UsoCFDI) */
  usoCFDI: UsoCFDI;
}
