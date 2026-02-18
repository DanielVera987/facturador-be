import type { ObjetoImpuesto } from '../enums/CatalogosEnum';
import type { IImpuestosConcepto } from './ImpuestosConcepto';

/**
 * Interface para el nodo Concepto del CFDI 4.0
 * Según el Anexo 20 del SAT versión 4.0 (XSD cfdv40.xsd)
 */
export interface IConcepto {
  /**
   * Requerido. Clave del producto o servicio amparado por el concepto.
   * Catálogo c_ClaveProdServ del SAT.
   * Formato: 8 dígitos numéricos (ej: "84111506")
   */
  claveProdServ: string;

  /**
   * Opcional. Número de parte, SKU o identificador del producto/servicio
   * propio de la operación del emisor.
   * Longitud máxima: 100 caracteres.
   */
  noIdentificacion?: string;

  /**
   * Requerido. Cantidad de bienes o servicios del tipo particular.
   * Debe ser mayor a 0.
   */
  cantidad: number;

  /**
   * Requerido. Clave de unidad de medida estandarizada.
   * Catálogo c_ClaveUnidad del SAT (ej: "H87", "E48", "ACT").
   */
  claveUnidad: string;

  /**
   * Opcional. Unidad de medida propia de la operación del emisor.
   * Longitud máxima: 20 caracteres.
   */
  unidad?: string;

  /**
   * Requerido. Descripción del bien o servicio cubierto por el concepto.
   * Longitud máxima: 1000 caracteres. Patrón: [^|]{1,1000}
   */
  descripcion: string;

  /**
   * Requerido. Valor o precio unitario del bien o servicio.
   * No se permiten valores negativos.
   */
  valorUnitario: number;

  /**
   * Requerido. Importe total del concepto (Cantidad x ValorUnitario).
   * No se permiten valores negativos.
   */
  importe: number;

  /**
   * Opcional. Importe de los descuentos aplicables al concepto.
   * No se permiten valores negativos.
   */
  descuento?: number;

  /**
   * Requerido. Expresar si la operación comercial es objeto o no de impuesto.
   * Catálogo c_ObjetoImp del SAT.
   */
  objetoImp: ObjetoImpuesto;

  /**
   * Condicional. Impuestos aplicables al concepto (traslados y retenciones).
   */
  impuestos?: IImpuestosConcepto;
}
