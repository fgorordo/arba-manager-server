import { FunctionalUnit } from 'src/functional-units/entities/functional-unit.entity';
import { Column, Entity, JoinTable, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Arba } from './arba.entity';
import { ArbaInvoiceStatus } from '../interfaces/arba-invoice-status.interface';

@Entity()
export class ArbaInvoice {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @ManyToOne(type => FunctionalUnit)
    @JoinTable()
    functionalUnit: FunctionalUnit

    @ManyToOne(type => Arba)
    @JoinTable()
    arba: Arba

    @Column()
    amount: number;

    @Column()
    status: ArbaInvoiceStatus
}