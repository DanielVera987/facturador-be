import type { Impuesto, TipoFactor } from '../enums/CatalogosEnum';

/**
 * Interface para el nodo Traslado dentro de Concepto > Impuestos > Traslados
 * Según el Anexo 20 v4.0 del SAT (XSD cfdv40.xsd)
 */
export interface ITrasladoConcepto {
  /**
   * Requerido. Base para el cálculo del impuesto.
   * No se permiten valores negativos.
   */
  base: number;

  /**
   * Requerido. Clave del tipo de impuesto trasladado (catálogo c_Impuesto).
   * 001=ISR, 002=IVA, 003=IEPS
   */
  impuesto: Impuesto;

  /**
   * Requerido. Clave del tipo de factor (catálogo c_TipoFactor).
   * Tasa, Cuota o Exento
   */
  tipoFactor: TipoFactor;

  /**
   * Condicional. Valor de la tasa o cuota del impuesto.
   * Requerido cuando TipoFactor es Tasa o Cuota.
   * Ejemplo: 0.160000 para IVA 16%
   */
  tasaOCuota?: number;

  /**
   * Condicional. Importe del impuesto trasladado.
   * No se permiten valores negativos.
   * Requerido cuando TipoFactor es Tasa o Cuota.
   */
  importe?: number;
}
