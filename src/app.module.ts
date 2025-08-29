import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocumentoModule } from './documento/documento.module';
import { DatabaseModule } from './database/database.module';


@Module({
  imports: [DocumentoModule,],
  controllers: [AppController],
  providers: [AppService],
  exports:[]
})
export class AppModule {}

