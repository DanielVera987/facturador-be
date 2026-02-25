import type { ObjetoImpuesto } from '../../enums/CatalogosEnum';
import type { IConcepto } from '../../interfaces/Concepto';
import LengthValueObject from '../../../../shared/domain/valueObjects/LengthValueObject';
import type { ITrasladoConcepto } from '../../interfaces/TrasladoConcepto';
import ImporteValueObject from '../shared/ImporteValueObject';
import ClaveProdServValueObject from './ClaveProdServValueObject';
import ClaveUnidadValueObject from './ClaveUnidadValueObject';
import CantidadValueObject from './CantidadValueObject';
import DescripcionValueObject from './DescripcionValueObject';
import ImpuestosConceptoValueObject from './ImpuestosConceptoValueObject';
import { IRetencionConcepto } from '../../interfaces/RetencionConcepto';

export default class ConceptoValueObject {
  public readonly claveProdServ: ClaveProdServValueObject;
  public readonly noIdentificacion?: LengthValueObject;
  public readonly cantidad: CantidadValueObject;
  public readonly claveUnidad: ClaveUnidadValueObject;
  public readonly unidad?: LengthValueObject;
  public readonly descripcion: DescripcionValueObject;
  public readonly valorUnitario: ImporteValueObject;
  public readonly importe: ImporteValueObject;
  public readonly descuento?: ImporteValueObject;
  public readonly objetoImp: ObjetoImpuesto;
  private impuestos?: ImpuestosConceptoValueObject;

  constructor(attributes: IConcepto) {
    this.claveProdServ = new ClaveProdServValueObject(attributes.claveProdServ);

    if (attributes.noIdentificacion !== undefined) {
      this.noIdentificacion = new LengthValueObject(
        attributes.noIdentificacion,
        100,
      );
    }

    this.cantidad = new CantidadValueObject(attributes.cantidad);
    this.claveUnidad = new ClaveUnidadValueObject(attributes.claveUnidad);

    if (attributes.unidad !== undefined) {
      this.unidad = new LengthValueObject(attributes.unidad, 20);
    }

    this.descripcion = new DescripcionValueObject(attributes.descripcion);
    this.valorUnitario = new ImporteValueObject(attributes.valorUnitario);
    this.importe = new ImporteValueObject(attributes.importe);

    if (attributes.descuento !== undefined) {
      this.descuento = new ImporteValueObject(attributes.descuento);
    }

    this.objetoImp = attributes.objetoImp;

    if (attributes.impuestos !== undefined) {
      this.impuestos = new ImpuestosConceptoValueObject(attributes.impuestos);
    }
  }

  public addTrasladado(trasladado: ITrasladoConcepto) {
    if (this.impuestos === undefined) {
      this.impuestos = new ImpuestosConceptoValueObject({ traslados: [] });
    }

    this.impuestos.addTrasladado(trasladado);
    return this;
  }

  public addRetencion(retencion: IRetencionConcepto) {
    if (this.impuestos === undefined) {
      this.impuestos = new ImpuestosConceptoValueObject({ retenciones: [] });
    }

    this.impuestos.addRetencion(retencion);
    return this;
  }

  public toPrimitives() {
    return {
      claveProdServ: this.claveProdServ.value,
      ...(this.noIdentificacion !== undefined && {
        noIdentificacion: this.noIdentificacion.value,
      }),
      cantidad: this.cantidad.value,
      claveUnidad: this.claveUnidad.value,
      ...(this.unidad !== undefined && {
        unidad: this.unidad.value,
      }),
      descripcion: this.descripcion.value,
      valorUnitario: this.valorUnitario.value,
      importe: this.importe.value,
      ...(this.descuento !== undefined && {
        descuento: this.descuento.value,
      }),
      objetoImp: this.objetoImp,
      ...(this.impuestos !== undefined && {
        impuestos: this.impuestos.toPrimitives(),
      }),
    };
  }
}
