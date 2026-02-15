import { RegimenFiscal } from '../enums/CatalogosEnum';

/**
 * Interface para el nodo Emisor del CFDI 4.0
 * Según el Anexo 20 del SAT versión 4.0
 */
export interface IEmisor {
  /** Requerido. RFC del contribuyente emisor del comprobante */
  rfc: string;

  /** Requerido. Nombre, denominación o razón social del emisor */
  nombre: string;

  /** Requerido. Clave del régimen fiscal del emisor (catálogo c_RegimenFiscal) */
  regimenFiscal: RegimenFiscal;

  /**
   * Opcional. Número de operación proporcionado por el SAT
   * cuando el comprobante es emitido a cuenta de terceros
   */
  facAtrAdquirente?: string;
}
