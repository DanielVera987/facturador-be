import { Command } from '../../../shared/application/Command';
import Comprobante from '../../domain/interfaces/Comprobante';
import { default as ComprobanteAggregate } from '../../domain/agreggate/Comprobante';
import { Inject, Injectable } from '../../../shared/infrastructure/DI';
import type {
  PacProvider,
  Stamp,
  Csd,
  Credentials,
} from '../../domain/ports/PacProvider';
import Types from '../../Types';

@Injectable()
class StampInvoiceCommand implements Command<Comprobante, object> {
  constructor(
    @Inject(Types.PacProvider) private readonly pacProvider: PacProvider,
    @Inject(Types.StampProvider) private readonly stampProvider: Stamp,
  ) {}

  run(cfdi: Comprobante): object {
    return { message: 'Test' };
    const comprobante = ComprobanteAggregate.create(cfdi);

    this.configPacProvider({} as Csd, {} as Credentials);

    this.stampProvider.run(
      {} as PacProvider,
      comprobante.toPrimitives() as Comprobante,
    );

    return comprobante.toPrimitives();
  }

  private configPacProvider(csd: Csd, credentials: Credentials) {
    this.pacProvider.setCsd(csd);
    this.pacProvider.setCredentials(credentials);
  }
}

export default StampInvoiceCommand;
