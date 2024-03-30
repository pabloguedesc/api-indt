import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Role } from './entities/roles.entity';
import { User } from '../users/entities/user.entity';
import { RolesRepository } from './repositories/roles.repository';
import { RolesController } from './roles.controller';
import { ListRolesUseCase } from './use-cases/list-roles/list-roles.use-case';

@Module({
  imports: [TypeOrmModule.forFeature([Role, User])],
  controllers: [RolesController],
  providers: [
    ListRolesUseCase,
    {
      provide: 'IRolesRepository',
      useClass: RolesRepository,
    },
  ],
  exports: [],
})
export class RolesModule {}
