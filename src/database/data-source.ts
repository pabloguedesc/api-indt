import 'reflect-metadata';
import * as dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { User } from '../module/users/entities/user.entity';
import { Role } from '../module/roles/entities/roles.entity';

dotenv.config();

export const DataSourceTypeORM = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USERNAME,
  synchronize: false,
  logging: false,
  entities: [User, Role],
  migrations: ['src/migrations/**/*.ts'],
  subscribers: [],
});
