import {
  Controller,
  HttpCode,
  HttpStatus,
  Get,
  UseGuards,
} from '@nestjs/common';
import { ListRolesUseCase } from './use-cases/list-roles/list-roles.use-case';
import { Role } from './entities/roles.entity';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('roles')
export class RolesController {
  constructor(private readonly listRolesUseCase: ListRolesUseCase) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  async create(): Promise<Role[]> {
    return this.listRolesUseCase.execute();
  }
}
