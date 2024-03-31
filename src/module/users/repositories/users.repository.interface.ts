import { BaseRepository } from '../../../common/base.repository';
import { ICountUsersRepositoryResponseDto } from '../dto/count-users.dto';
import { User } from '../entities/user.entity';

export interface IUsersRepository extends BaseRepository<User> {
  findByEmail(email: string): Promise<User>;
  countUsers(): Promise<ICountUsersRepositoryResponseDto[]>;
}
