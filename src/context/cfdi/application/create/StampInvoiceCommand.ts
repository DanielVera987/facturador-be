import { Command } from "../../../shared/application/Command";
import Comprobante from "../../domain/interfaces/Comprobante";

class StampInvoiceCommand implements Command<Comprobante, string> {
  run(cfdi: Comprobante): string {
    
  }
}

export default StampInvoiceCommand;