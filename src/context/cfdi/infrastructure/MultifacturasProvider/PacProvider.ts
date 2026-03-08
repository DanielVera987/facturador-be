import { PacProvider, Csd, Credentials } from '../../domain/ports/PacProvider';

class MultifacturasPacProvider implements PacProvider {
  private csd: Csd;

  private credentials: Credentials;

  constructor() {
    this.csd = {} as Csd;
    this.credentials = {} as Credentials;
  }

  setCsd(csd: Csd): void {
    this.csd = csd;
  }

  setCredentials(credentials: Credentials): void {
    this.credentials = credentials;
  }

  getCsd(): Csd {
    return this.csd;
  }

  getCredentials(): Credentials {
    return this.credentials;
  }
}

export default MultifacturasPacProvider;
