import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
    imports: [
        ConfigModule.forRoot(), // Importe o módulo de configuração
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule], 
            useFactory: async (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get<string>('DB_HOST', 'localhost'), 
                port: configService.get<number>('DB_PORT', 5432),
                username: configService.get<string>('DB_USERNAME', 'postgres'),
                password: configService.get<string>('DB_PASSWORD', 'root'),
                database: configService.get<string>('DB_DATABASE', 'postgres'),
                synchronize: configService.get<boolean>('DB_SYNCHRONIZE', true),
                autoLoadEntities: true, // Certifique-se de que essa configuração esteja correta para carregar automaticamente as entidades
            }),
            inject: [ConfigService],
        }),
    ],
})
export class DatabaseModule {}
