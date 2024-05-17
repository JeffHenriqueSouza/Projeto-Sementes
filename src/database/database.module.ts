import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get('DB_HOST', 'localhost'),
        port: configService.get<number>('DB_PORT', 5432),
        username: configService.get('DB_USERNAME', 'postgres'),
        password: configService.get('DB_PASSWORD', 'root'),
        database: configService.get('DB_DATABASE', 'postgres'),
        entities: [join(__dirname, '/../**/*.entity{.ts,.js}')],  // Inclui todas as entidades
        migrations: [join(__dirname, '/../database/migrations/*{.ts,.js}')],
        cli: {
          migrationsDir: 'src/database/migrations',
        },
        synchronize: true,
        logging: true,
        ssl: true
      }),
    }),
  ],
})
export class DatabaseModule {}
