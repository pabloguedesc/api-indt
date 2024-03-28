import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/roles.entity';
import { User } from '../users/entities/user.entity';
import { RolesRepository } from './repositories/roles.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Role, User])],
  controllers: [],
  providers: [],
  exports: [Role, RolesRepository],
})
export class UsersModule {}
