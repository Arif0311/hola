import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Hola } from 'src/entity/hola.entity';
import { HolaController } from './hola.controller';
import { HolaService } from './hola.service';

@Module({
  controllers: [HolaController],
  providers: [HolaService],
  imports: [TypeOrmModule.forFeature([Hola])]
})
export class HolaModule {}