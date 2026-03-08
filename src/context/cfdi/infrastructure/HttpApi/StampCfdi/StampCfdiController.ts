import { Body, Controller, Post, HttpStatus, HttpException } from '@nestjs/common';
import { Inject } from '../../../../shared/infrastructure/DI';
import type { Command } from '../../../../shared/application/Command';
import type Comprobante from '../../../domain/interfaces/Comprobante';
import Types from '../../../Types';

@Controller('v1/cfdi4.0/stamp')
export class StampCfdiController {
  constructor(
    @Inject(Types.StampInvoiceCommand) private readonly stampInvoice: Command<Comprobante, object>
  ) {}

  @Post()
  async stamp(@Body() body: Comprobante): Promise<object> {
    try {
      return await this.stampInvoice.run(body);
    } catch (error) {
      throw new HttpException(
        {
          status: HttpStatus.INTERNAL_SERVER_ERROR,
          message: error?.message ?? '',
        },
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
