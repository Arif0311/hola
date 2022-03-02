import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateHolaDTO } from 'src/dto/create-hola.dto';
import { Hola } from 'src/entity/hola.entity';
import { Repository } from 'typeorm';
import { HolaDTO } from 'src/dto/hola.dto';
import { UpdateHolaDTO } from 'src/dto/update-hola.dto';

@Injectable()
export class HolaService {

    constructor(@InjectRepository(Hola) private holaRepository: Repository<Hola>) {}

    public async getOne(holaId: number) {
        const hola: Hola = await this.holaRepository.findOne(holaId);

        if(!hola) throw new NotFoundException(' hola with the id ${holaId} was not found');

        const holaDTO: HolaDTO = this.entityToDTO(hola);

        return holaDTO;
    }

 
    public async createOne(createHolaRequest: CreateHolaDTO){
        const hola: Hola = new Hola();
        hola.nama = createHolaRequest.nama;
        hola.NoID = createHolaRequest.NoID;
        hola.NoTelp = createHolaRequest.NoTelp;
        hola.Asuransi = createHolaRequest.Asuransi;
        hola.Apointment = createHolaRequest.Apointment;

        await this.holaRepository.save(hola);

        const holaDTO = this.entityToDTO(hola);
       

        return holaDTO;
    }

    private entityToDTO(hola: Hola): HolaDTO{

        const holaDTO = new Hola();
        holaDTO.id = hola.id;
        holaDTO.nama = hola.nama;
        holaDTO.NoID = hola.NoID;
        holaDTO.NoTelp = hola.NoTelp;
        holaDTO.Asuransi = hola.Asuransi;
        holaDTO.Apointment = hola.Apointment;

        return holaDTO;
    }

    public async getAll(){
        const holas: Hola[] = await this.holaRepository.find();

        const holasDTO: HolaDTO[] = holas.map(x => this.entityToDTO(x));

        return holasDTO;
    }

    public async updateOne(holaId: number, updateHolaRequest: UpdateHolaDTO) {
        
        const hola: Hola = await this.getOne(holaId);

        hola.nama = updateHolaRequest.nama || hola.nama;
        hola.NoID = updateHolaRequest.NoID || hola.NoID;
        hola.NoTelp = updateHolaRequest.NoTelp || hola.NoTelp;
        hola.Asuransi = updateHolaRequest.Asuransi || hola.Asuransi;
        hola.Apointment = updateHolaRequest.Apointment || hola.Apointment;

        await this.holaRepository.save(hola);

        const holaDTO: HolaDTO = this.entityToDTO(hola);

        return holaDTO;
    }

    public async deleteOne(holaId: number) {
        
        const hola: Hola = await this.getOne(holaId);

        await this.holaRepository.remove(hola);

    }

}
