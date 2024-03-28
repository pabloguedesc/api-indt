import { Module } from '@nestjs/common';
import { UsersRepository } from './repositories/users.repository';
import { UsersController } from './users.controller';
import { CreateUserUseCase } from './use-cases/create-user/create-user.use-case';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Role } from '../roles/entities/roles.entity';
import { RolesRepository } from '../roles/repositories/roles.repository';

@Module({
  imports: [TypeOrmModule.forFeature([User, Role])],
  controllers: [UsersController],
  providers: [
    CreateUserUseCase,
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
