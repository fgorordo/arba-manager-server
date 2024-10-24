import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { FunctionalUnitsModule } from './functional-units/functional-units.module';
import { ArbaModule } from './arba/arba.module';
import { SeedModule } from './seed/seed.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: '127.0.0.1',
      port: 5432,
      username: 'dev',
      password: 'dev',
      database: 'dev',
      autoLoadEntities: true,
      synchronize: true,
    }),
    UserModule,
    FunctionalUnitsModule,
    ArbaModule,
    SeedModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
