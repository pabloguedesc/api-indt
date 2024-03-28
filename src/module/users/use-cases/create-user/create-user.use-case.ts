import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from '../../dto/create-user.dto';
import { User } from '../../entities/user.entity';
import { IUsersRepository } from '../../repositories/users.repository.interface';
import { QueryFailedError } from 'typeorm';
import { ConflictException } from '@nestjs/common';
import { IRolesRepository } from '../../../roles/repositories/roles.repository.interface';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject('IUsersRepository') private usersRepository: IUsersRepository,
    @Inject('IRolesRepository') private rolesRepository: IRolesRepository,
  ) {}

  async execute(createUserDto: CreateUserDto): Promise<User> {
    const newUser = new User();
    newUser.name = createUserDto.name;
    newUser.lastName = createUserDto.lastName;
    newUser.email = createUserDto.email;
    newUser.password = createUserDto.password;

    const findRole = await this.rolesRepository.findById(createUserDto.roleId);

    if (!findRole) {
      throw new NotFoundException('Role not found');
    }

    newUser.role = findRole;

    try {
      return await this.usersRepository.create(newUser);
    } catch (error) {
      if (
        error instanceof QueryFailedError &&
        error.message.includes('unique constraint')
      ) {
        throw new ConflictException(
          'A user with the same details already exists',
        );
      }

      throw error;
    }
  }
}
