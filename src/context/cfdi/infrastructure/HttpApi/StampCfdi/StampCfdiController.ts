import { Controller, Post } from '@nestjs/common';
import { Inject } from '../../../../shared/infrastructure/DI';
import type { Command } from '../../../../shared/application/Command';
import Comprobante from '../../../domain/interfaces/Comprobante';
import Types from '../../../Types';

@Controller('v1/cfdi/stamp')
export class StampCfdiController {
  constructor(
    @Inject(Types.StampInvoiceCommand) private readonly stampInvoice: Command<Comprobante, object>
  ) {}

  @Post()
  stamp(): object {
    try {
      return this.stampInvoice.run({} as Comprobante);
    } catch (error) {
      return {
        code: 500,
        message: error
      }
    }
  }
}
