import { Module } from '@nestjs/common';
import { StampCfdiController } from './HttpApi/StampCfdi/StampCfdiController';

@Module({
  controllers: [StampCfdiController]
})
export class CfdiModule { }
