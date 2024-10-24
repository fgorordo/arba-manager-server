import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ArbaService } from './arba.service';
import { CreateArbaDto } from './dto/create-arba.dto';
import { UpdateArbaDto } from './dto/update-arba.dto';

@Controller('arba')
export class ArbaController {
  constructor(private readonly arbaService: ArbaService) {}
}
