import { ValueObject } from '../../../../shared/domain/valueObjects/ValueObject';
import {
  Periodicidad,
  PeriodicidadMap,
} from '../../interfaces/InformacionGlobal';

export default class PeriodicidadValueObject extends ValueObject<string> {
  constructor(value: Periodicidad) {
    super(value);
    this.enhancePeriodicidad(value);
  }

  private enhancePeriodicidad(value: string) {
    if (!PeriodicidadMap[value]) {
      throw new Error(
        'La periodicidad ' +
          value +
          ' no se encuentra dentro del catalogo c_Periodicidad',
      );
    }
  }

  getDescription(): string {
    return PeriodicidadMap[this.value as Periodicidad];
  }

  toString(): string {
    return this.getDescription();
  }
}
