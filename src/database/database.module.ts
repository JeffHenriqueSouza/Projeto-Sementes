import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';

@Module({
    imports: [
        TypeOrmModule.forRootAsync({
            imports: [ConfigModule], // Importa o módulo de configuração do NestJS para acessar variáveis de ambiente ou arquivos de configuração externos
            useFactory: (configService: ConfigService) => ({
                type: 'postgres',
                host: configService.get<string>('DB_HOST', 'localhost'), // Obtém o host do banco de dados a partir das variáveis de ambiente ou usa 'localhost' como padrão
                port: configService.get<number>('DB_PORT', 5432), // Obtém a porta do banco de dados a partir das variáveis de ambiente ou usa 5432 como padrão
                username: configService.get<string>('DB_USERNAME', 'postgres'), // Obtém o nome de usuário do banco de dados a partir das variáveis de ambiente ou usa 'postgres' como padrão
                password: configService.get<string>('DB_PASSWORD', 'root'), // Obtém a senha do banco de dados a partir das variáveis de ambiente ou usa 'root' como padrão
                database: configService.get<string>('DB_DATABASE', 'posteres'), // Obtém o nome do banco de dados a partir das variáveis de ambiente ou usa 'usuario' como padrão
                synchronize: configService.get<boolean>('DB_SYNCHRONIZE', true), // Obtém a opção de sincronização do banco de dados a partir das variáveis de ambiente ou usa true como padrão
                entities: [__dirname + '/../**/*.entity{.ts,.js}'], // Define o caminho das entidades para que o TypeORM possa encontrar automaticamente as entidades
            }),
            inject: [ConfigService], // Injeta o ConfigService para acessar as configurações
        }),
    ],
})
export class DatabaseModule {}
