import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { IRolesRepository } from './roles.repository.interface';
import { Role } from '../entities/roles.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RolesRepository implements IRolesRepository {
  constructor(
    @InjectRepository(Role)
    private rolesRepository: Repository<Role>,
  ) {}

  findAll(): Promise<Role[]> {
    throw new Error('Method not implemented.');
  }
  async findById(id: string): Promise<Role> {
    return this.rolesRepository.findOneBy({ id });
  }
  create(item: Role): Promise<Role> {
    throw new Error('Method not implemented.');
  }
  update(id: string, item: Role): Promise<Role> {
    throw new Error('Method not implemented.');
  }
  delete(id: string): Promise<boolean> {
    throw new Error('Method not implemented.');
  }
}
