import { Module } from '@nestjs/common';
import { SeedController } from './seed.controller';
import { SeedService } from './seed.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entity';
import { FunctionalUnit } from 'src/functional-units/entities/functional-unit.entity';
import { Arba } from 'src/arba/entities/arba.entity';
import { ArbaInvoice } from 'src/arba/entities/arba-invoices.entity';

@Module({
    imports: [TypeOrmModule.forFeature([User, FunctionalUnit,Arba,ArbaInvoice])],
    controllers: [SeedController],
    providers: [SeedService],
})
export class SeedModule {}
