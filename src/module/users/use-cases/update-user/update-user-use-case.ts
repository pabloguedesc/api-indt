import {
  Inject,
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { IUsersRepository } from '../../repositories/users.repository.interface';
import { validate as uuidValidate } from 'uuid';
import { User } from '../../entities/user.entity';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { IRolesRepository } from '../../../roles/repositories/roles.repository.interface';

@Injectable()
export class UpdateUserUseCase {
  constructor(
    @Inject('IUsersRepository') private usersRepository: IUsersRepository,
    @Inject('IRolesRepository') private rolesRepository: IRolesRepository,
  ) {}

  async execute(updateUserDto: UpdateUserDto): Promise<User> {
    const user = await this.usersRepository.findById(updateUserDto.id);

    if (!user) {
      throw new NotFoundException('User not found');
    }

    if (user.email === 'master@admin.com') {
      throw new NotFoundException('The master user cannot be updated!');
    }

    user.name = updateUserDto.name ?? user.name;
    user.lastName = updateUserDto.lastName ?? user.lastName;
    user.email = updateUserDto.email ?? user.email;
    user.isActivated = updateUserDto.isActivated ?? user.isActivated;

    if (updateUserDto.roleId) {
      const findRole = await this.rolesRepository.findById(
        updateUserDto.roleId,
      );
      if (!findRole) {
        throw new NotFoundException('Role not found');
      }
      user.role = findRole;
    }

    try {
      return this.usersRepository.update(user.id, user);
    } catch (error) {
      throw error;
    }
  }
}
