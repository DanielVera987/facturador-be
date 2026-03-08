import { Module } from '@nestjs/common';
import { StampCfdiController } from '../../context/cfdi/infrastructure/HttpApi/StampCfdi/StampCfdiController';
import providers from './providers';

@Module({
  controllers: [StampCfdiController],
  providers
})
export class CfdiModule { }
