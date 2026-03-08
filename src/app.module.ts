import { Module } from '@nestjs/common';
import { CfdiModule } from './context/cfdi/infrastructure/cfdi.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    CfdiModule
  ],
})
export class AppModule {}
