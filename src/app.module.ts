import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CfdiModule } from './context/cfdi/infrastructure/cfdi.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
    }),
    CfdiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
