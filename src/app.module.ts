import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CfdiModule } from './services/cfdi/cfdi.module';

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
