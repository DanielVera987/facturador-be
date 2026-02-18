## Ejemplo de uso

```
import Comprobante from './cfdi/domain/agreggate/Comprobante';
import {
  Moneda,
  TipoDeComprobante,
  Exportacion,
  MetodoPago,
  FormaPago,
  RegimenFiscal,
  UsoCFDI,
  ObjetoImpuesto,
  TipoFactor,
  Impuesto,
} from './cfdi/domain/enums/CatalogosEnum';

const comprobante = new Comprobante({
  serie: 'FACTURA',
  folio: '00001',
  fecha: new Date('2025-02-15'),
  sello: 'fasfasfasfasfas',
  noCertificado: '11111111111111111111',
  certificado: 'sdfasdfdsf',
  condicionesDePago: undefined,
  subtotal: 100.0,
  descuento: undefined,
  moneda: Moneda.MXN,
  tipoCambio: 1,
  total: 116.0,
  tipoDeComprobante: TipoDeComprobante.Ingreso,
  exportacion: Exportacion.NoAplica,
  metodoPago: MetodoPago.PagoEnUnaSolaExhibicion,
  formaPago: FormaPago.Efectivo,
  lugarExpedicion: '77666',
});

comprobante.addEmisor({
  rfc: 'XAXX010101000',
  nombre: 'DANIEL ALBERTO VERA ANGULO',
  regimenFiscal: RegimenFiscal.SinObligacionesFiscales,
});

comprobante.addReceptor({
  rfc: 'XAXX010101000',
  nombre: 'DANIEL ALBERTO VERA ANGULO',
  domicilioFiscalReceptor: '70666',
  regimenFiscalReceptor: RegimenFiscal.SinObligacionesFiscales,
  usoCFDI: UsoCFDI.GastosEnGeneral,
});

comprobante
  .addConcepto({
    claveProdServ: '01010101',
    cantidad: 1,
    claveUnidad: 'H87',
    descripcion: 'cocacola 1l',
    valorUnitario: 100.0,
    importe: 100.0,
    descuento: 0,
    objetoImp: ObjetoImpuesto.SiObjetoDeImpuesto,
  })
  .addTrasladado({
    base: 100.0,
    impuesto: Impuesto.IVA,
    tipoFactor: TipoFactor.Tasa,
    tasaOCuota: 0.16,
    importe: 16.0,
  })
  .addRetencion({
    base: 100.0,
    impuesto: Impuesto.ISR,
    tipoFactor: TipoFactor.Tasa,
    tasaOCuota: 0.1,
    importe: 10.0,
  });

comprobante.addConceptos([
  {
    claveProdServ: '01010101',
    cantidad: 1,
    claveUnidad: 'H87',
    descripcion: 'other product',
    valorUnitario: 100.0,
    importe: 100.0,
    descuento: 0,
    objetoImp: ObjetoImpuesto.SiObjetoDeImpuesto,
    impuestos: {
      traslados: [
        {
          base: 100.0,
          impuesto: Impuesto.IVA,
          tipoFactor: TipoFactor.Tasa,
          tasaOCuota: 0.16,
          importe: 16.0,
        },
      ],
      retenciones: [
        {
          base: 100.0,
          impuesto: Impuesto.ISR,
          tipoFactor: TipoFactor.Tasa,
          tasaOCuota: 0.1,
          importe: 10.0,
        },
      ],
    },
  },
]);
```