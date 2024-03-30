import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './module/users/users.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSourceTypeORM } from './database/data-source';
import { ConfigModule } from '@nestjs/config';
import { RolesModule } from './module/roles/roles.module';
import { AuthModule } from './module/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    RolesModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      useFactory: async () => ({
        ...DataSourceTypeORM.options,
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
