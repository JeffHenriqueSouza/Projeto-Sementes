import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { join } from 'path'; // Importante para construir os caminhos para as entidades e migrações

@Module({
    imports: [
        ConfigModule.forRoot(), // Importa o módulo de configuração
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule], // Importa o ConfigModule para usar o ConfigService
            inject: [ConfigService], // Injeta o ConfigService para acessar variáveis de ambiente
            useFactory: async (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get('DB_HOST', 'dpg-cp0m0hq1hbls73ecst90-a'), // Obtém o host do banco de dados da variável de ambiente DB_HOST, se não estiver definida, usa 'localhost' por padrão
                port: configService.get<number>('DB_PORT', 5432), // Obtém a porta do banco de dados da variável de ambiente DB_PORT, se não estiver definida, usa 5432 por padrão
                username: configService.get('DB_USERNAME', 'postgres_41hc_user'), // Obtém o nome de usuário do banco de dados da variável de ambiente DB_USERNAME, se não estiver definida, usa 'postgres' por padrão
                password: configService.get('DB_PASSWORD', 'kKhMMv5hsfKAYHCcOTb1mYCLEajuaBqp'), // Obtém a senha do banco de dados da variável de ambiente DB_PASSWORD, se não estiver definida, usa 'root' por padrão
                database: configService.get('DB_DATABASE', 'postgres_41hc'), // Obtém o nome do banco de dados da variável de ambiente DB_DATABASE, se não estiver definida, usa 'postgres' por padrão
                entities: [join(__dirname, '/../**/*.entity{.ts,.js}')], // Caminho para as entidades do TypeORM
                migrations: [join(__dirname, '/../database/migrations/*{.ts,.js}')], // Caminho para as migrações do TypeORM
                cli: {
                    migrationsDir: 'src/database/migrations',
                },
                synchronize: true, // Sincroniza automaticamente o esquema do banco de dados com as entidades do TypeORM (apenas para ambiente de desenvolvimento)
            }),
        }),
    ],
})
export class DatabaseModule {}
