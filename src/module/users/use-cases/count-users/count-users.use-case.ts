import { Inject, Injectable } from '@nestjs/common';
import { IUsersRepository } from '../../repositories/users.repository.interface';

@Injectable()
export class CountUsersUseCase {
  constructor(
    @Inject('IUsersRepository') private usersRepository: IUsersRepository,
  ) {}

  async execute() {
    try {
      const result = await this.usersRepository.countUsers();

      return {
        totalUsers: result[0].total_users,
        totalActivated: result[0].total_activated,
        totalDeactivated: result[0].total_deactivated,
        totalPerRole: [
          {
            role: 'admin',
            totalActivated: result[0].admin_activated,
            totalDeactivated: result[0].admin_deactivated,
          },
          {
            role: 'common',
            totalActivated: result[0].common_activated,
            totalDeactivated: result[0].common_deactivated,
          },
        ],
      };
    } catch (error) {
      throw error;
    }
  }
}
