import {
  Inject,
  Injectable,
  BadRequestException,
  NotFoundException,
  InternalServerErrorException,
} from '@nestjs/common';
import { IUsersRepository } from '../../repositories/users.repository.interface';
import { validate as uuidValidate } from 'uuid';

@Injectable()
export class DeleteUserByIdUseCase {
  constructor(
    @Inject('IUsersRepository') private usersRepository: IUsersRepository,
  ) {}

  async execute(id: string) {
    if (!uuidValidate(id)) {
      throw new BadRequestException('Invalid UUID format for ID.');
    }

    try {
      const findUser = await this.usersRepository.findById(id);

      if (!findUser) {
        throw new NotFoundException('User not found');
      }

      if (findUser.email === 'master@admin.com') {
        throw new NotFoundException('The master user cannot be deleted!');
      }

      const deleteUser = await this.usersRepository.delete(id);

      if (!deleteUser) {
        throw new InternalServerErrorException('Failed to delete user');
      }
    } catch (error) {
      throw error;
    }
  }
}
