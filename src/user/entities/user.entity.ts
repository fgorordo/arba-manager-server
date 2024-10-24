import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { UserRole } from '../interfaces/roles.interface';

@Entity()
export class User {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    name: string;

    @Column()
    lastName: string;

    @Column()
    email: string;

    @Column()
    phone: string;

    @Column({nullable: true})
    pin: string;

    @Column({nullable: true})
    password: string;

    @Column({default: UserRole.USER})
    role: UserRole
}
