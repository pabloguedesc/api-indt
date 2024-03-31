import {
  Body,
  Controller,
  Post,
  HttpCode,
  HttpStatus,
  Get,
  Param,
  Delete,
  Put,
  UseGuards,
} from '@nestjs/common';
import { CreateUserUseCase } from './use-cases/create-user/create-user.use-case';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from './entities/user.entity';
import { UpdateUserUseCase } from './use-cases/update-user/update-user-use-case';
import { ListUsersUseCase } from './use-cases/list-users/list-users.use-case';
import { FindUserByIdUseCase } from './use-cases/find-user-by-id/find-user-by-id.use-case';
import { DeleteUserByIdUseCase } from './use-cases/delete-user-by-id/delete-user-by-id';
import { UpdateUserDto } from './dto/update-user.dto';
import { CountUsersUseCase } from './use-cases/count-users/count-users.use-case';
import { ICountUsersResponse } from './dto/count-users.dto';
import { AuthGuard } from '@nestjs/passport';

@UseGuards(AuthGuard('jwt'))
@Controller('users')
export class UsersController {
  constructor(
    private readonly createUserUseCase: CreateUserUseCase,
    private readonly listUsersUseCase: ListUsersUseCase,
    private readonly findUserByIdUseCase: FindUserByIdUseCase,
    private readonly deleteUserByIdUseCase: DeleteUserByIdUseCase,
    private readonly updateUserUseCase: UpdateUserUseCase,
    private readonly countUsersUseCase: CountUsersUseCase,
  ) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  async create(@Body() createUserDto: CreateUserDto): Promise<User> {
    return this.createUserUseCase.execute(createUserDto);
  }

  @Get()
  @HttpCode(HttpStatus.OK)
  async list(): Promise<User[]> {
    return this.listUsersUseCase.execute();
  }

  @Get('count')
  @HttpCode(HttpStatus.OK)
  async countUsers(): Promise<ICountUsersResponse> {
    return this.countUsersUseCase.execute();
  }

  @Get(':id')
  @HttpCode(HttpStatus.OK)
  async findById(@Param('id') id: string): Promise<User> {
    return this.findUserByIdUseCase.execute(id);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  async delete(@Param('id') id: string): Promise<void> {
    return this.deleteUserByIdUseCase.execute(id);
  }

  @Put()
  @HttpCode(HttpStatus.OK)
  async update(@Body() updateUserDto: UpdateUserDto): Promise<User> {
    return this.updateUserUseCase.execute(updateUserDto);
  }
}
