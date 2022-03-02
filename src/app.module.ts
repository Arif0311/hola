import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { HolaModule } from './hola/hola.module';

@Module({
  imports: [DatabaseModule, HolaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
