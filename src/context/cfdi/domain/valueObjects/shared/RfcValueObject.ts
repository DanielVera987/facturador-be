import { ValueObject } from '../../../../shared/domain/valueObjects/ValueObject';

/**
 * Según el Anexo 20 v4.0 del SAT:
 * - Requerido tanto para Emisor como para Receptor
 * - Persona Moral: 12 caracteres | Persona Física: 13 caracteres
 * - Patrón: [A-ZÑ&]{3,4}[0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])[A-Z0-9]{2}[A0-9]
 */
export default class RfcValueObject extends ValueObject<string> {
  private static readonly PATTERN =
    /^[A-ZÑ&]{3,4}\d{2}(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])[A-Z\d]{2}[A\d]$/;

  public static readonly RFC_GENERICO_NACIONAL = 'XAXX010101000';

  public static readonly RFC_GENERICO_EXTRANJERO = 'XEXX010101000';

  constructor(value: string) {
    super(value);
    this.ensureIsValidRfc(value);
  }

  private ensureIsValidRfc(value: string): void {
    if (!RfcValueObject.PATTERN.test(value)) {
      throw new Error(
        `RFC inválido: "${value}". Debe cumplir con el patrón del SAT para persona física (13 caracteres) o moral (12 caracteres)`,
      );
    }
  }

  public isPersonaFisica(): boolean {
    return this.value.length === 13;
  }

  public isPersonaMoral(): boolean {
    return this.value.length === 12;
  }

  public isGenerico(): boolean {
    return (
      this.value === RfcValueObject.RFC_GENERICO_NACIONAL ||
      this.value === RfcValueObject.RFC_GENERICO_EXTRANJERO
    );
  }
}
