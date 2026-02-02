export type Primitive = string | number | Date | boolean;

export abstract class ValueObject<T extends Primitive> {
  readonly value: T;

  constructor(value: T) {
    this.value = value;
    this.ensureValueIsDefinied(value);
  }

  private ensureValueIsDefinied(value: T) {
    if (!value || value == undefined || value == null) {
      throw Error('Value must be definied');
    }
  }

  toString(): string {
    return this.value.toString();
  }
}
