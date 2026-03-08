import { Command } from '../../../shared/application/Command';
import Comprobante from '../../domain/interfaces/Comprobante';
import ComprobanteAggregate from '../../domain/agreggate/Comprobante';

class StampInvoiceCommand implements Command<Comprobante, object> {
  run(cfdi: Comprobante): object {
    // TODO: validate node parents

    const comprobante = ComprobanteAggregate.create(cfdi);

    return comprobante.toPrimitives();
  }
}

export default StampInvoiceCommand;
