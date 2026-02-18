import type { IImpuestosConcepto } from '../../interfaces/ImpuestosConcepto';
import TrasladoConceptoValueObject from './TrasladoConceptoValueObject';
import RetencionConceptoValueObject from './RetencionConceptoValueObject';
import { ITrasladoConcepto } from '../../interfaces/TrasladoConcepto';
import { IRetencionConcepto } from '../../interfaces/RetencionConcepto';

/**
 * Value Object compuesto para el nodo Impuestos dentro de Concepto
 * Según el Anexo 20 v4.0 del SAT
 *
 * Contiene los arrays de traslados y retenciones aplicables al concepto.
 */
export default class ImpuestosConceptoValueObject {
  public readonly traslados: TrasladoConceptoValueObject[];
  public readonly retenciones: RetencionConceptoValueObject[];

  constructor(attributes: IImpuestosConcepto) {
    this.traslados = (attributes.traslados ?? []).map(
      (t) => new TrasladoConceptoValueObject(t),
    );

    this.retenciones = (attributes.retenciones ?? []).map(
      (r) => new RetencionConceptoValueObject(r),
    );
  }

  public addTrasladado(trasladado: ITrasladoConcepto) {
    this.traslados.push(new TrasladoConceptoValueObject(trasladado));
  }

  public addRetencion(retencion: IRetencionConcepto) {
    this.retenciones.push(new RetencionConceptoValueObject(retencion));
  }

  public toPrimitives() {
    return {
      ...(this.traslados.length > 0 && {
        traslados: this.traslados.map((t) => t.toPrimitives()),
      }),
      ...(this.retenciones.length > 0 && {
        retenciones: this.retenciones.map((r) => r.toPrimitives()),
      }),
    };
  }
}
