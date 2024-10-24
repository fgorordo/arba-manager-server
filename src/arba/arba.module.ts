import { Module } from '@nestjs/common';
import { ArbaService } from './arba.service';
import { ArbaController } from './arba.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Arba } from './entities/arba.entity';
import { ArbaInvoice } from './entities/arba-invoices.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Arba, ArbaInvoice])],
  controllers: [ArbaController],
  providers: [ArbaService],
})
export class ArbaModule {}
