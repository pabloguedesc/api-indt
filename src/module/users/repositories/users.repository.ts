import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../entities/user.entity';
import { IUsersRepository } from './users.repository.interface';
import { Repository } from 'typeorm';

@Injectable()
export class UsersRepository implements IUsersRepository {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  async findByEmail(email: string): Promise<User> {
    return this.usersRepository.findOneBy({ email });
  }

  // countUsers(): Promise<ICountUsersDto[]> {
  //   throw new Error('Method not implemented.');
  // }

  async findAll(): Promise<User[]> {
    return this.usersRepository.find({
      order: { createdAt: 'DESC' },
      select: ['email', 'name', 'id', 'isActivated', 'lastName', 'role'],
      relations: ['role'],
    });
  }

  async findById(id: string): Promise<User | null> {
    return this.usersRepository.findOneBy({ id });
  }

  async create(item: User): Promise<User> {
    const newUser = this.usersRepository.create(item);
    return this.usersRepository.save(newUser);
  }

  async update(id: string, item: User): Promise<User> {
    const user = await this.usersRepository.findOneBy({ id });
    const updatedUser = this.usersRepository.merge(user, item);
    return this.usersRepository.save(updatedUser);
  }

  async delete(id: string): Promise<boolean> {
    const result = await this.usersRepository.delete(id);

    return result.affected === 0 ? false : true;
  }
}
