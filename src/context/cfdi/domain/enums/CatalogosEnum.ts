/**
 * Catálogos SAT para CFDI 4.0
 * Basado en el Anexo 20 del SAT versión 4.0
 * Fuente: http://omawww.sat.gob.mx/tramitesyservicios/Paginas/anexo_20.htm
 */

/**
 * Catálogo c_FormaPago
 * Formas de pago disponibles en el CFDI 4.0
 */
export enum FormaPago {
  Efectivo = '01',
  ChequeNominativo = '02',
  TransferenciaElectronicaDeFondos = '03',
  TarjetaDeCredito = '04',
  MonederoElectronico = '05',
  DineroElectronico = '06',
  ValesDeDespensa = '08',
  DacionEnPago = '12',
  PagoPorSubrogacion = '13',
  PagoPorConsignacion = '14',
  Condonacion = '15',
  Compensacion = '17',
  Novacion = '23',
  Confusion = '24',
  RemisionDeDeuda = '25',
  PrescripcionOCaducidad = '26',
  ASatisfaccionDelAcreedor = '27',
  TarjetaDeDebito = '28',
  TarjetaDeServicios = '29',
  AplicacionDeAnticipos = '30',
  IntermediarioPagos = '31',
  PorDefinir = '99',
}

/**
 * Catálogo c_MetodoPago
 * Método de pago del CFDI
 */
export enum MetodoPago {
  PagoEnUnaSolaExhibicion = 'PUE',
  PagoEnParcialidadesODiferido = 'PPD',
}

/**
 * Catálogo c_TipoDeComprobante
 * Tipos de comprobante fiscal
 */
export enum TipoDeComprobante {
  Ingreso = 'I',
  Egreso = 'E',
  Traslado = 'T',
  Nomina = 'N',
  Pago = 'P',
}

/**
 * Catálogo c_Exportacion
 * Identifica si el comprobante ampara una operación de exportación
 */
export enum Exportacion {
  NoAplica = '01',
  DefinitivaConClaveA1 = '02',
  Temporal = '03',
  DefinitivaConClaveDistintaA1 = '04',
}

/**
 * Catálogo c_RegimenFiscal
 * Régimen fiscal del contribuyente
 */
export enum RegimenFiscal {
  GeneralDeLeyPersonasMorales = '601',
  PersonasMoralesConFinesNoLucrativos = '603',
  SueldosYSalariosEIngresosAsimiladosASalarios = '605',
  Arrendamiento = '606',
  RegimenDeEnajenacionOAdquisicionDeBienes = '607',
  DemasIngresos = '608',
  ResidentesEnElExtranjeroSinEstablecimientoPermanenteEnMexico = '610',
  IngresosPorDividendos = '611',
  PersonasFisicasConActividadesEmpresarialesYProfesionales = '612',
  IngresosPorIntereses = '614',
  RegimenDeLosIngresosPorObtencionDePremios = '615',
  SinObligacionesFiscales = '616',
  SociedadesCooperativasDeProduccion = '620',
  IncorporacionFiscal = '621',
  ActividadesAgricolasGanaderasSilvicolasYPesqueras = '622',
  OpcionalParaGruposDeSociedades = '623',
  Coordinados = '624',
  ActividadesEmpresarialesConIngresosATravesDePlataformasTecnologicas = '625',
  RegimenSimplificadoDeConfianza = '626',
}

/**
 * Catálogo c_UsoCFDI
 * Uso que le dará el receptor al comprobante fiscal
 */
export enum UsoCFDI {
  AdquisicionDeMercancias = 'G01',
  DevolucionesDescuentosOBonificaciones = 'G02',
  GastosEnGeneral = 'G03',
  Construcciones = 'I01',
  MobiliarioYEquipoDeOficinaPorInversiones = 'I02',
  EquipoDeTransporte = 'I03',
  EquipoDeComputoYAccesorios = 'I04',
  DadosTroquelesYMoldes = 'I05',
  ComunicacionesTelefonicas = 'I06',
  ComunicacionesSatelitales = 'I07',
  OtraMaquinariaYEquipo = 'I08',
  HonorariosMedicosDentalesYGastosHospitalarios = 'D01',
  GastosMedicosPorIncapacidadODiscapacidad = 'D02',
  GastosFunerales = 'D03',
  Donativos = 'D04',
  InteresesRealesPorCreditosHipotecarios = 'D05',
  AportacionesVoluntariasAlSAR = 'D06',
  PrimasPorSeguroDeGastosMedicos = 'D07',
  GastosDeTransportacionEscolarObligatoria = 'D08',
  DepositosEnCuentasParaElAhorro = 'D09',
  PagosPorServiciosEducativos = 'D10',
  SinEfectosFiscales = 'S01',
  Pagos = 'CP01',
  Nomina = 'CN01',
}

/**
 * Catálogo c_Moneda (subconjunto de monedas más comunes en México)
 * Basado en ISO 4217
 * El catálogo completo del SAT incluye todas las monedas ISO 4217
 */
export enum Moneda {
  MXN = 'MXN', // Peso Mexicano
  USD = 'USD', // Dólar Americano
  EUR = 'EUR', // Euro
  GBP = 'GBP', // Libra Esterlina
  JPY = 'JPY', // Yen
  CAD = 'CAD', // Dólar Canadiense
  BRL = 'BRL', // Real Brasileño
  CHF = 'CHF', // Franco Suizo
  CNY = 'CNY', // Yuan Renminbi
  COP = 'COP', // Peso Colombiano
  GTQ = 'GTQ', // Quetzal
  ARS = 'ARS', // Peso Argentino
  CLP = 'CLP', // Peso Chileno
  MXV = 'MXV', // México Unidad de Inversión (UDI)
  XXX = 'XXX', // No aplica (transacciones sin moneda)
}

/**
 * Catálogo c_ObjetoImp
 * Identifica si los conceptos del comprobante son objeto de impuesto
 */
export enum ObjetoImpuesto {
  NoObjetoDeImpuesto = '01',
  SiObjetoDeImpuesto = '02',
  SiObjetoDelImpuestoYNoObligadoAlDesglose = '03',
  SiObjetoDelImpuestoYNoCausaImpuesto = '04',
  SiObjetoDelImpuestoIVACreditoPODEBI = '05',
  SiObjetoDelIVANoTrasladoIVA = '06',
  NoTrasladoDelIVASiDesgloseIEPS = '07',
  NoTrasladoDelIVANoDesgloseIEPS = '08',
}

/**
 * Catálogo c_Impuesto
 * Tipos de impuestos federales
 */
export enum Impuesto {
  ISR = '001',
  IVA = '002',
  IEPS = '003',
}

/**
 * Catálogo c_TipoFactor
 * Tipos de factor aplicables a impuestos
 */
export enum TipoFactor {
  Tasa = 'Tasa',
  Cuota = 'Cuota',
  Exento = 'Exento',
}

/**
 * Catálogo c_TipoRelacion
 * Tipo de relación entre comprobantes
 */
export enum TipoRelacion {
  NotaDeCreditoDeDocumentosRelacionados = '01',
  NotaDeDebitoDeDocumentosRelacionados = '02',
  DevolucionDeMercanciaSobreFacturasOTrasladosPrevios = '03',
  SustitucionDeLoscfdiPrevios = '04',
  TrasladosDeMercanciasFacturadosPreviamente = '05',
  FacturaGeneradaPorLosTrasladosPrevios = '06',
  CFDIPorAplicacionDeAnticipo = '07',
}
