import { Controller, Post } from '@nestjs/common';

@Controller('v1/cfdi/stamp')
export class StampCfdiController {
  @Post()
  stamp(): string {
    return 'Hello World';
  }
}
