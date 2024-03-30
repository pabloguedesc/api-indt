import { Module } from '@nestjs/common';
import { UsersRepository } from './repositories/users.repository';
import { UsersController } from './users.controller';
import { CreateUserUseCase } from './use-cases/create-user/create-user.use-case';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Role } from '../roles/entities/roles.entity';
import { RolesRepository } from '../roles/repositories/roles.repository';
import { ListUsersUseCase } from './use-cases/list-users/list-users.use-case';
import { FindUserByIdUseCase } from './use-cases/find-user-by-id/find-user-by-id.use-case';
import { DeleteUserByIdUseCase } from './use-cases/delete-user-by-id/delete-user-by-id';
import { UpdateUserUseCase } from './use-cases/update-user/update-user-use-case';
// import { CountUsersUseCase } from './use-cases/count-users/count-users.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role])],
  controllers: [UsersController],
  providers: [
    CreateUserUseCase,
    ListUsersUseCase,
    FindUserByIdUseCase,
    DeleteUserByIdUseCase,
    UpdateUserUseCase,
    // CountUsersUseCase,
    {
      provide: 'IUsersRepository',
      useClass: UsersRepository,
    },
    {
      provide: 'IRolesRepository',
      useClass: RolesRepository,
    },
  ],
  exports: [],
})
export class UsersModule {}
