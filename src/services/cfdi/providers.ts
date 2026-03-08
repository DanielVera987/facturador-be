import StampInvoiceCommand from '../../context/cfdi/application/create/StampInvoiceCommand';
import PacProvider from '../../context/cfdi/infrastructure/MultifacturasProvider/PacProvider';
import StampProvider from '../../context/cfdi/infrastructure/MultifacturasProvider/StampProvider';
import AxiosHttp from '../../context/shared/infrastructure/http/AxiosHttp';
import Types from '../../context/cfdi/Types';
import TypesShared from '../../context/shared/Types';

const providers = [
  {
    provide: Types.StampInvoiceCommand,
    useClass: StampInvoiceCommand
  },
  {
    provide: Types.PacProvider,
    useClass: PacProvider
  },
  {
    provide: Types.StampProvider,
    useClass: StampProvider
  },
  {
    provide: TypesShared.Http,
    useClass: AxiosHttp
  }
];

export default providers;