import { Body, Controller, Post, Get, Param, Put, Delete, HttpCode, HttpStatus } from '@nestjs/common';
import { CreateHolaDTO } from 'src/dto/create-hola.dto';
import { UpdateHolaDTO } from 'src/dto/update-hola.dto';
import { HolaService } from './hola.service';

@Controller('holas')
export class HolaController {
    constructor(private readonly holaService: HolaService){}


    @Get()
    public async getAll() {
        const resp = await this.holaService.getAll();
        return resp;
    }

    @Get("/:id")
    public async getOne(@Param("id") holaId: number){
        const resp = await this.holaService.getOne(holaId);
        return resp;
    }


    @Post()
    public async createOne(@Body() createHolaRequest: CreateHolaDTO){
        const resp = await this.holaService.createOne(createHolaRequest);
        return resp;

    }

    @Put("/:id")
    public async updateOne(@Param("id") holaId: number, @Body() updateHolaRequest: UpdateHolaDTO ){
        const resp = await this.holaService.updateOne(holaId, updateHolaRequest);
        return resp;

    }

    @Delete("/:id")
    @HttpCode(HttpStatus.NO_CONTENT)
    public async deleteOne(@Param("id") holaId: number){
        await this.holaService.deleteOne(holaId);
    }
}
