import { Inject, Injectable } from '@nestjs/common';
import { IUsersRepository } from '../../repositories/users.repository.interface';

@Injectable()
export class ListUsersUseCase {
  constructor(
    @Inject('IUsersRepository') private usersRepository: IUsersRepository,
  ) {}

  async execute() {
    try {
      const allUsers = await this.usersRepository.findAll();

      return allUsers.filter((user) => user.email !== 'master@admin.com');
    } catch (error) {
      throw error;
    }
  }
}
