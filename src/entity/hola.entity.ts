import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class Hola {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ nullable: true, length: 64 })
    nama: string;

    @Column({ nullable: true, length: 64 })
    NoID: string;

    @Column({ nullable: true, length: 64 })
    NoTelp : string;

    @Column({ nullable: true, length: 64 })
    Asuransi: string;

    @Column({ nullable: true, length: 64})
    Apointment: string;
    

}