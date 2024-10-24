import { PartialType } from '@nestjs/mapped-types';
import { CreateArbaDto } from './create-arba.dto';

export class UpdateArbaDto extends PartialType(CreateArbaDto) {}
