import type { ITrasladoConcepto } from './TrasladoConcepto';
import type { IRetencionConcepto } from './RetencionConcepto';

/**
 * Interface para el nodo Impuestos dentro de Concepto
 * Según el Anexo 20 v4.0 del SAT (XSD cfdv40.xsd)
 *
 * Nodo condicional para capturar los impuestos aplicables al concepto.
 */
export interface IImpuestosConcepto {
  /**
   * Opcional. Array de impuestos trasladados aplicables al concepto.
   * Cada elemento representa un traslado específico (IVA, IEPS, etc.)
   */
  traslados?: ITrasladoConcepto[];

  /**
   * Opcional. Array de impuestos retenidos aplicables al concepto.
   * Cada elemento representa una retención específica (ISR, IVA retenido, etc.)
   */
  retenciones?: IRetencionConcepto[];
}
