import {MigrationInterface, QueryRunner} from "typeorm";

export class addHola1646124771379 implements MigrationInterface {
    name = 'addHola1646124771379'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hola" DROP COLUMN "status"`);
        await queryRunner.query(`ALTER TABLE "hola" ADD "NoTelp" character varying(64)`);
        await queryRunner.query(`ALTER TABLE "hola" ADD "Asuransi" character varying(64)`);
        await queryRunner.query(`ALTER TABLE "hola" ADD "Apointment" character varying(64)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "hola" DROP COLUMN "Apointment"`);
        await queryRunner.query(`ALTER TABLE "hola" DROP COLUMN "Asuransi"`);
        await queryRunner.query(`ALTER TABLE "hola" DROP COLUMN "NoTelp"`);
        await queryRunner.query(`ALTER TABLE "hola" ADD "status" integer NOT NULL DEFAULT '0'`);
    }

}
