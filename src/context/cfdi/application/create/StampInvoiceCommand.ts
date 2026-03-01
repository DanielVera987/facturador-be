import { Command } from "../../../shared/application/Command";
import Comprobante from "../../domain/interfaces/Comprobante";
import { default as ComprobanteAggregate  } from "../../domain/agreggate/Comprobante";

class StampInvoiceCommand implements Command<Comprobante, Object> {
  run(cfdi: Comprobante): Object {
    // TODO: validate node parents

    const comprobante = ComprobanteAggregate.create(cfdi);

    return comprobante.toPrimitives();
  }
}

export default StampInvoiceCommand;