import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Arba {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    year: number;

    @Column()
    totalAmount: number;

    @Column()
    details: string;

    @Column()
    share: number;
}
