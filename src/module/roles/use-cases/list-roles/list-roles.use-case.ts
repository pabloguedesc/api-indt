import { Inject, Injectable } from '@nestjs/common';
import { IRolesRepository } from '../../repositories/roles.repository.interface';

@Injectable()
export class ListRolesUseCase {
  constructor(
    @Inject('IRolesRepository') private rolesRepository: IRolesRepository,
  ) {}

  async execute() {
    try {
      return this.rolesRepository.findAll();
    } catch (error) {
      throw error;
    }
  }
}
