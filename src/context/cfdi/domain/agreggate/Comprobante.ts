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
import NoCertificadoValueObject from '../valueObjects/comprobante/NoCertificadoValueObject';
import CondicionesDePagoValueObject from '../valueObjects/comprobante/CondicionesDePagoValueObject';
import TipoCambioValueObject from '../valueObjects/comprobante/TipoCambioValueObject';
import EmisorValueObject from '../valueObjects/comprobante/EmisorValueObject';
import ReceptorValueObject from '../valueObjects/comprobante/ReceptorValueObject';
import CodigoPostalValueObject from '../valueObjects/shared/CodigoPostalValueObject';
import ImporteValueObject from '../valueObjects/shared/ImporteValueObject';
import ConceptoValueObject from '../valueObjects/concepto/ConceptoValueObject';
import { IEmisor } from '../interfaces/Emisor';
import { IReceptor } from '../interfaces/Receptor';
import type { IConcepto } from '../interfaces/Concepto';
import InformacionGlobalValueObject from '../valueObjects/comprobante/InformacionGlobalValueObject';
import { InformacionGlobal } from '../interfaces/InformacionGlobal';

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

  private informacionGlobal?: InformacionGlobalValueObject;

  private emisor?: EmisorValueObject;

  private receptor?: ReceptorValueObject;

  private conceptos: ConceptoValueObject[] = [];

  constructor(attributes: IComprobante) {
    super();

    // Atributos requeridos
    this.fecha = new DateValueObject(attributes.fecha);
    this.sello = new StringValueObject(attributes.sello);
    this.noCertificado = new NoCertificadoValueObject(attributes.noCertificado);
    this.certificado = new StringValueObject(attributes.certificado);
    this.subtotal = new ImporteValueObject(attributes.subtotal);
    this.moneda = attributes.moneda;
    this.total = new ImporteValueObject(attributes.total);
    this.tipoDeComprobante = attributes.tipoDeComprobante;
    this.exportacion = attributes.exportacion;
    this.lugarExpedicion = new CodigoPostalValueObject(
      attributes.lugarExpedicion,
    );

    // Atributos opcionales
    if (attributes.serie !== undefined) {
      this.serie = new LengthValueObject(attributes.serie, 25);
    }

    if (attributes.folio !== undefined) {
      this.folio = new LengthValueObject(attributes.folio, 40);
    }

    if (attributes.condicionesDePago !== undefined) {
      this.condicionesDePago = new CondicionesDePagoValueObject(
        attributes.condicionesDePago,
      );
    }

    if (attributes.descuento !== undefined) {
      this.descuento = new ImporteValueObject(attributes.descuento);
    }

    if (attributes.tipoCambio !== undefined) {
      this.tipoCambio = new TipoCambioValueObject(attributes.tipoCambio);
    }

    if (attributes.metodoPago !== undefined) {
      this.metodoPago = attributes.metodoPago;
    }

    if (attributes.formaPago !== undefined) {
      this.formaPago = attributes.formaPago;
    }

    if (attributes.confirmacion !== undefined) {
      this.confirmacion = new StringValueObject(attributes.confirmacion);
    }

    // Nodos hijos
    if (attributes.emisor !== undefined && attributes.emisor !== null) {
      this.addEmisor(attributes.emisor);
    }

    if (attributes.receptor !== undefined && attributes.receptor !== null) {
      this.addReceptor(attributes.receptor);
    }

    if (attributes.conceptos !== undefined) {
      this.addConceptos(attributes.conceptos);
    }

    if (attributes.informacionGlobal !== undefined) {
      this.addInformacionGlobal(attributes.informacionGlobal);
    }
  }

  public static create(attributes: IComprobante): Comprobante {
    return new Comprobante(attributes);
  }

  public addInformacionGlobal(informacionGlobal: InformacionGlobal) {
    this.informacionGlobal = new InformacionGlobalValueObject(
      informacionGlobal,
    );
  }

  public addEmisor(emisor: IEmisor): void {
    this.emisor = new EmisorValueObject(emisor);
  }

  public addReceptor(receptor: IReceptor): void {
    this.receptor = new ReceptorValueObject(receptor);
  }

  public addConcepto(concepto: IConcepto): ConceptoValueObject {
    const newConcepto = new ConceptoValueObject(concepto);
    this.conceptos.push(newConcepto);
    return newConcepto;
  }

  public addConceptos(conceptos: IConcepto[]): void {
    conceptos.forEach((concepto) => this.addConcepto(concepto));
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
      ...(this.informacionGlobal !== undefined && {
        informacionGlobal: this.informacionGlobal.toPrimitives(),
      }),
      ...(this.emisor !== undefined && {
        emisor: this.emisor.toPrimitives(),
      }),
      ...(this.receptor !== undefined && {
        receptor: this.receptor.toPrimitives(),
      }),
      conceptos: this.conceptos.map((c) => c.toPrimitives()),
    };
  }
}
