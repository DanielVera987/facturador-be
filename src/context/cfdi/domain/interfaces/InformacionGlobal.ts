export interface InformacionGlobal {
  periodicidad: Periodicidad;
  mes: Meses;
  año: string;
}

export const PeriodicidadMap = {
  '01': 'Diario',
  '02': 'Semanal',
  '03': 'Quincenal',
  '04': 'Mensual',
  '05': 'Bimestral',
} as const;

export type Periodicidad = keyof typeof PeriodicidadMap;

export const MesesMap = {
  '01': 'Enero',
  '02': 'Febrero',
  '03': 'Marzo',
  '04': 'Abril',
  '05': 'Mayo',
  '06': 'Junio',
  '07': 'Julio',
  '08': 'Agosto',
  '09': 'Septiembre',
  '10': 'Octubre',
  '11': 'Noviembre',
  '12': 'Diciembre',
} as const;

export type Meses = keyof typeof MesesMap;
