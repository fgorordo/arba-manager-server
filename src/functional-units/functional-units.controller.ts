import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { FunctionalUnitsService } from './functional-units.service';
import { CreateFunctionalUnitDto } from './dto/create-functional-unit.dto';
import { UpdateFunctionalUnitDto } from './dto/update-functional-unit.dto';

@Controller('functional-units')
export class FunctionalUnitsController {
  constructor(private readonly functionalUnitsService: FunctionalUnitsService) {}
}
