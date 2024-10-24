import { User } from 'src/user/entities/user.entity';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class FunctionalUnit {
    @PrimaryGeneratedColumn('uuid')
    id: string; 

    @Column()
    number: number;
    
    @Column()
    balance: number;

    @ManyToOne(type => User)
    @JoinTable()
    user: User
}
