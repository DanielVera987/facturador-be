import { CancelarByUUID, CancelByCSD } from '../interfaces/Cancel';
import Comprobante from '../interfaces/Comprobante';

export interface PacProvider {
  setCsd(attr: Csd): void;

  setCredentials(attr: Credentials): void;

  getCsd(): Csd;

  getCredentials(): Credentials;
}

export interface Stamp {
  run(config: PacProvider, data: Comprobante): Promise<any>;
}

export interface Cancel {
  byUUID(config: PacProvider, attr: CancelarByUUID): void;

  byCSD(config: PacProvider, attr: CancelByCSD): void;
}

export interface Csd {
  cer: string;
  key: string;
  password: string;
}

export interface Credentials {
  user: string;
  password: string;
}
