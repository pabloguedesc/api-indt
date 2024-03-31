import {
  Inject,
  Injectable,
  BadRequestException,
  NotFoundException,
} from '@nestjs/common';
import { IUsersRepository } from '../../repositories/users.repository.interface';
import { validate as uuidValidate } from 'uuid';

@Injectable()
export class FindUserByIdUseCase {
  constructor(
    @Inject('IUsersRepository') private usersRepository: IUsersRepository,
  ) {}

  async execute(id: string) {
    if (!uuidValidate(id)) {
      throw new BadRequestException('Invalid UUID format for ID.');
    }

    try {
      const user = await this.usersRepository.findById(id);

      if (!user) {
        throw new NotFoundException('User not found');
      }

      return user;
    } catch (error) {
      throw error;
    }
  }
}
