import type { Http } from '../../../shared/domain/http/Http';
import { Inject } from '../../../shared/infrastructure/di';
import Types from '../../../shared/Types';
import Comprobante from '../../domain/interfaces/Comprobante';
import { PacProvider, Stamp } from '../../domain/ports/PacProvider';

class StampProvider implements Stamp {
  // TODO: add url from environment variables
  private readonly url: string = 'https://ws.multifacturas.com/api/';

  private readonly mode: 'JSON' | 'XML' = 'JSON';

  constructor(@Inject(Types.Http) private readonly http: Http) {}

  run(config: PacProvider, data: Comprobante): Promise<any> {
    const body = this.mapBody(config, data);

    return this.http.post(this.url, {
      json: JSON.stringify(body),
      modo: this.mode,
    });
  }

  // TODO: Create a class for mapping
  private mapBody(config: PacProvider, data: Comprobante): unknown {
    return {
      version_cfdi: '4.0',
      validacion_local: 'NO',
      PAC: {
        usuario: config.getCredentials()?.user,
        pass: config.getCredentials().password,
        produccion: 'NO',
      },
      conf: {
        cer: config.getCsd()?.cer,
        key: config.getCsd()?.key,
      },
      factura: {
        condicionesDePago: data.condicionesDePago,
        fecha_expedicion: data.fecha.toISOString(),
        folio: data.folio,
        forma_pago: data.formaPago,
        lugarExpedicion: data.lugarExpedicion,
        metodo_pago: data.metodoPago,
        moneda: data.moneda,
        serie: data.serie,
        subtotal: data.subtotal,
        tipocambio: data.tipoCambio,
        tipocomprobante: data.tipoDeComprobante,
        total: data.total,
        Exportacion: data.exportacion,
      },
      emisor: data.emisor,
      receptor: data.receptor,
      conceptos: data.conceptos,
    };
  }
}

export default StampProvider;
