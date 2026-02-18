import type { Impuesto, TipoFactor } from '../enums/CatalogosEnum';

/**
 * Interface para el nodo Retencion dentro de Concepto > Impuestos > Retenciones
 * Según el Anexo 20 v4.0 del SAT (XSD cfdv40.xsd)
 */
export interface IRetencionConcepto {
  /**
   * Requerido. Base para el cálculo de la retención.
   * No se permiten valores negativos.
   */
  base: number;

  /**
   * Requerido. Clave del tipo de impuesto retenido (catálogo c_Impuesto).
   * 001=ISR, 002=IVA, 003=IEPS
   */
  impuesto: Impuesto;

  /**
   * Requerido. Clave del tipo de factor (catálogo c_TipoFactor).
   */
  tipoFactor: TipoFactor;

  /**
   * Requerido. Tasa o cuota del impuesto que se retiene.
   */
  tasaOCuota: number;

  /**
   * Requerido. Importe del impuesto retenido.
   * No se permiten valores negativos.
   */
  importe: number;
}
