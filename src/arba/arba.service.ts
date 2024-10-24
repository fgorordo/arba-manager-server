import { Injectable } from '@nestjs/common';
import { CreateArbaDto } from './dto/create-arba.dto';
import { UpdateArbaDto } from './dto/update-arba.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Arba } from './entities/arba.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArbaService {
  constructor(
    @InjectRepository(Arba) private readonly arbaRepository:Repository<Arba>,
  ) {}

  async create(dto: any) {
    const arba = this.arbaRepository.create(dto);
    return await this.arbaRepository.save(arba);
  };

  private async generateArbaInvoice() {
    
  }
}
