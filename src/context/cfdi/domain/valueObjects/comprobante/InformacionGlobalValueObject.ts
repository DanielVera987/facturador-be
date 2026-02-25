import { StringValueObject } from '../../../../shared/domain/valueObjects/StringValueObject';
import type { InformacionGlobal } from '../../interfaces/InformacionGlobal';
import PeriodicidadValueObject from './PeriodicidadValueObject';

export default class InformacionGlobalValueObject {
  public readonly periodicidad: StringValueObject;
  public readonly meses: StringValueObject;
  public readonly año: StringValueObject;

  constructor(attributes: InformacionGlobal) {
    this.periodicidad = new PeriodicidadValueObject(attributes.periodicidad);
    this.meses = new StringValueObject(attributes.mes);
    this.año = new StringValueObject(attributes.año);
  }

  public toPrimitives() {
    return {
      periodicidad: this.periodicidad.value,
      meses: this.meses.value,
      año: this.año.value,
    };
  }
}
