import { Injectable } from '@nestjs/common';
import { CreateArbaDto } from './dto/create-arba.dto';
import { UpdateArbaDto } from './dto/update-arba.dto';

@Injectable()
export class ArbaService {
  create(createArbaDto: CreateArbaDto) {
    return 'This action adds a new arba';
  }

  findAll() {
    return `This action returns all arba`;
  }

  findOne(id: number) {
    return `This action returns a #${id} arba`;
  }

  update(id: number, updateArbaDto: UpdateArbaDto) {
    return `This action updates a #${id} arba`;
  }

  remove(id: number) {
    return `This action removes a #${id} arba`;
  }
}
