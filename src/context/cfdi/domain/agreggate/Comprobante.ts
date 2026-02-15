import { AggregateRoot } from '../../../shared/domain/AggregateRoot';
import type IComprobante from '../interfaces/Comprobante';
import { StringValueObject } from '../../../shared/domain/valueObjects/StringValueObject';
import DateValueObject from '../../../shared/domain/valueObjects/DateValueObject';
import LengthValueObject from '../../../shared/domain/valueObjects/LengthValueObject';
import type {
  Exportacion,
  FormaPago,
  MetodoPago,
  Moneda,
  TipoDeComprobante,
} from '../enums/CatalogosEnum';
import NoCertificadoValueObject from '../valueObjects/NoCertificadoValueObject';
import CodigoPostalValueObject from '../valueObjects/CodigoPostalValueObject';
import CondicionesDePagoValueObject from '../valueObjects/CondicionesDePagoValueObject';
import ImporteValueObject from '../valueObjects/ImporteValueObject';
import TipoCambioValueObject from '../valueObjects/TipoCambioValueObject';
import EmisorValueObject from '../valueObjects/EmisorValueObject';
import ReceptorValueObject from '../valueObjects/ReceptorValueObject';
import { IEmisor } from '../interfaces/Emisor';
import { IReceptor } from '../interfaces/Receptor';

export default class Comprobante extends AggregateRoot {
  private readonly version: string = '4.0';

  private serie?: LengthValueObject;

  private folio?: LengthValueObject;

  private fecha: DateValueObject;

  private sello: StringValueObject;

  private noCertificado: NoCertificadoValueObject;

  private certificado: StringValueObject;

  private condicionesDePago?: CondicionesDePagoValueObject;

  private subtotal: ImporteValueObject;

  private descuento?: ImporteValueObject;

  private moneda: Moneda;

  private tipoCambio?: TipoCambioValueObject;

  private total: ImporteValueObject;

  private tipoDeComprobante: TipoDeComprobante;

  private exportacion: Exportacion;

  private metodoPago?: MetodoPago;

  private formaPago?: FormaPago;

  private lugarExpedicion: CodigoPostalValueObject;

  private confirmacion?: StringValueObject;

  private emisor: EmisorValueObject;

  private receptor: ReceptorValueObject;

  constructor(attributes: IComprobante) {
    super();

    // Atributos opcionales
    if (attributes.serie !== undefined) {
      this.serie = new LengthValueObject(attributes.serie, 25);
    }

    if (attributes.folio !== undefined) {
      this.folio = new LengthValueObject(attributes.folio, 40);
    }

    // Atributos requeridos
    this.fecha = new DateValueObject(attributes.fecha);
    this.sello = new StringValueObject(attributes.sello);
    this.noCertificado = new NoCertificadoValueObject(attributes.noCertificado);
    this.certificado = new StringValueObject(attributes.certificado);

    // Atributo opcional
    if (attributes.condicionesDePago !== undefined) {
      this.condicionesDePago = new CondicionesDePagoValueObject(
        attributes.condicionesDePago,
      );
    }

    this.subtotal = new ImporteValueObject(attributes.subtotal);

    if (attributes.descuento !== undefined) {
      this.descuento = new ImporteValueObject(attributes.descuento);
    }

    this.moneda = attributes.moneda;

    if (attributes.tipoCambio !== undefined) {
      this.tipoCambio = new TipoCambioValueObject(attributes.tipoCambio);
    }

    this.total = new ImporteValueObject(attributes.total);

    this.tipoDeComprobante = attributes.tipoDeComprobante;
    this.exportacion = attributes.exportacion;

    if (attributes.metodoPago !== undefined) {
      this.metodoPago = attributes.metodoPago;
    }

    if (attributes.formaPago !== undefined) {
      this.formaPago = attributes.formaPago;
    }

    this.lugarExpedicion = new CodigoPostalValueObject(
      attributes.lugarExpedicion,
    );

    if (attributes.confirmacion !== undefined) {
      this.confirmacion = new StringValueObject(attributes.confirmacion);
    }
  }

  public static create(attributes: IComprobante): Comprobante {
    return new Comprobante(attributes);
  }

  public addEmisor(emisor: IEmisor): void {
    this.emisor = new EmisorValueObject(emisor);
  }

  public addReceptor(receptor: IReceptor): void {
    this.receptor = new ReceptorValueObject(receptor);
  }

  public toPrimitives() {
    return {
      version: this.version,
      ...(this.serie !== undefined && { serie: this.serie.value }),
      ...(this.folio !== undefined && { folio: this.folio.value }),
      fecha: this.fecha.value,
      sello: this.sello.value,
      noCertificado: this.noCertificado.value,
      certificado: this.certificado.value,
      ...(this.condicionesDePago !== undefined && {
        condicionesDePago: this.condicionesDePago.value,
      }),
      subtotal: this.subtotal.value,
      ...(this.descuento !== undefined && {
        descuento: this.descuento.value,
      }),
      moneda: this.moneda,
      ...(this.tipoCambio !== undefined && {
        tipoCambio: this.tipoCambio.value,
      }),
      total: this.total.value,
      tipoDeComprobante: this.tipoDeComprobante,
      exportacion: this.exportacion,
      ...(this.metodoPago !== undefined && {
        metodoPago: this.metodoPago,
      }),
      ...(this.formaPago !== undefined && {
        formaPago: this.formaPago,
      }),
      lugarExpedicion: this.lugarExpedicion.value,
      ...(this.confirmacion !== undefined && {
        confirmacion: this.confirmacion.value,
      }),
      emisor: this.emisor.toPrimitives(),
      receptor: this.receptor.toPrimitives(),
    };
  }
}
