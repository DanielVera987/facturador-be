import { Controller, Post } from '@nestjs/common';
import { Inject } from '../../../../shared/infrastructure/DI';
import type { Command } from '../../../../shared/application/Command';
import Comprobante from '../../../domain/interfaces/Comprobante';

@Controller('v1/cfdi/stamp')
export class StampCfdiController {
  constructor(
    @Inject('StampInvoiceCommand') private readonly stampInvoice: Command<Comprobante, object>
  ) {}

  @Post()
  stamp(): object {
    return this.stampInvoice.run({} as Comprobante);
  }
}
