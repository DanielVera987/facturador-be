import IComprobante from "../interfaces/Comprobante";
import { CancelarByUUID, CancelByCSD } from "../interfaces/Cancel";

export interface PacProvider {
  csd(attr: Csd): void | unknown;

  credetendials(attr: Credetendials): void | unknown;
}

export interface Stamp {
  v4(config: PacProvider, data: IComprobante): void | unknown;
}

export interface Cancel {
  byUUID(config: PacProvider, attr: CancelarByUUID): void | unknown;

  byCSD(config: PacProvider, attr: CancelByCSD): void | unknown;
}

export interface Csd {
  cer: string;
  key: string;
  password: string;
}

export interface Credetendials {
  user: string;
  password: string;
}