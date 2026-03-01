export interface CancelarByUUID {
  uuid: string;
  rfc: string;
  motivo: MotivoCancelar;
}

export interface CancelByCSD extends CancelarByUUID {
  cer: string;
  key: string;
  password: string;
}

export type MotivoCancelar = {
  '01': 'Comprobante emitido con errores con relación',
  '02': 'Comprobante emitido con errores sin relación',
  '03': 'No se llevó a cabo la operación',
  '04': 'Operación nominativa relacionada en una factura global',
}