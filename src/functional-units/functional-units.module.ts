import { Module } from '@nestjs/common';
import { FunctionalUnitsService } from './functional-units.service';
import { FunctionalUnitsController } from './functional-units.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { FunctionalUnit } from './entities/functional-unit.entity';

@Module({
  imports: [TypeOrmModule.forFeature([FunctionalUnit])],
  controllers: [FunctionalUnitsController],
  providers: [FunctionalUnitsService],
})
export class FunctionalUnitsModule {}
