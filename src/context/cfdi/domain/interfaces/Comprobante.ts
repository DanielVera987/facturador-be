import type {
  Exportacion,
  FormaPago,
  MetodoPago,
  Moneda,
  TipoDeComprobante,
} from '../enums/CatalogosEnum';
import type { IConcepto } from './Concepto';
import type { IEmisor } from './Emisor';
import type { IReceptor } from './Receptor';

/**
 * Interface para el nodo Comprobante del CFDI 4.0
 * Según el Anexo 20 del SAT versión 4.0
 *
 * Atributos marcados como "Requerido", "Opcional" o "Condicional"
 * según la especificación del SAT.
 */
export default interface IComprobante {
  /**
   * Opcional. Serie para control interno del contribuyente.
   * Longitud máxima: 25 caracteres. Patrón: [^|]{1,25}
   */
  serie?: string;

  /**
   * Opcional. Folio para control interno del contribuyente.
   * Longitud máxima: 40 caracteres. Patrón: [^|]{1,40}
   */
  folio?: string;

  /**
   * Requerido. Fecha y hora de expedición del comprobante fiscal.
   * Formato: yyyy-MM-ddTHH:mm:ss
   */
  fecha: Date;

  /**
   * Requerido. Sello digital del comprobante fiscal.
   * Se genera al firmar la cadena original con el certificado de sello digital.
   */
  sello: string;

  /**
   * Requerido. Número de serie del certificado de sello digital.
   * Patrón: [0-9]{20}
   */
  noCertificado: string;

  /**
   * Requerido. Certificado de sello digital en formato base64.
   */
  certificado: string;

  /**
   * Opcional. Condiciones comerciales aplicables para el pago del comprobante.
   * Longitud máxima: 1000 caracteres. Patrón: [^|]{1,1000}
   */
  condicionesDePago?: string;

  /**
   * Requerido. Suma de los importes de los conceptos antes de descuentos e impuestos.
   * Debe tener hasta la cantidad de decimales que soporte la moneda (catálogo c_Moneda).
   * No negativo.
   */
  subtotal: number;

  /**
   * Opcional. Suma total de los descuentos aplicables antes de impuestos.
   * Debe ser menor o igual que el SubTotal.
   * No negativo.
   */
  descuento?: number;

  /**
   * Requerido. Clave de la moneda utilizada (catálogo c_Moneda).
   */
  moneda: Moneda;

  /**
   * Condicional. Tipo de cambio conforme a la moneda utilizada.
   * Requerido cuando Moneda no es MXN ni XXX.
   * Cuando Moneda es MXN se puede registrar "1" u omitir.
   * Cuando Moneda es XXX no debe existir.
   */
  tipoCambio?: number;

  /**
   * Requerido. Monto total del comprobante.
   * No negativo.
   */
  total: number;

  /**
   * Requerido. Clave del efecto del comprobante fiscal (catálogo c_TipoDeComprobante).
   * I=Ingreso, E=Egreso, T=Traslado, N=Nómina, P=Pago
   */
  tipoDeComprobante: TipoDeComprobante;

  /**
   * Requerido. Atributo para expresar si el comprobante ampara
   * una operación de exportación (catálogo c_Exportacion).
   * 01=No aplica, 02=Definitiva A1, 03=Temporal, 04=Definitiva distinta A1
   */
  exportacion: Exportacion;

  /**
   * Condicional. Clave del método de pago (catálogo c_MetodoPago).
   * PUE=Pago en una sola exhibición, PPD=Pago en parcialidades o diferido.
   * No debe existir si TipoDeComprobante es T o P.
   */
  metodoPago?: MetodoPago;

  /**
   * Condicional. Clave de la forma de pago (catálogo c_FormaPago).
   * No debe existir si TipoDeComprobante es T, N o P.
   * Cuando MetodoPago es PPD, debe ser "99" (Por definir).
   */
  formaPago?: FormaPago;

  /**
   * Requerido. Código postal del lugar de expedición del comprobante.
   * Debe corresponder a un valor del catálogo c_CodigoPostal.
   * Patrón: [0-9]{5}
   */
  lugarExpedicion: string;

  /**
   * Opcional. Clave de confirmación única e irrepetible proporcionada
   * por el SAT para registrar comprobantes con importes fuera del rango establecido.
   */
  confirmacion?: string;

  emisor?: IEmisor | null;

  receptor?: IReceptor | null;

  /**
   * Requerido. Lista de conceptos cubiertos por el comprobante.
   * Debe contener al menos un concepto.
   */
  conceptos?: IConcepto[];
}
