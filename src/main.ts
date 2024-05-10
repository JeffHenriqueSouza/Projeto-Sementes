import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { createConnection } from 'typeorm';
import * as dotenv from 'dotenv';

async function bootstrap() {
  // Criar uma conexão com o banco de dados
  const connection = await createConnection();

  // Executar migrações pendentes
  await connection.runMigrations();

  // Fechar a conexão após a execução das migrações
  await connection.close();
  dotenv.config();

  // Criar a instância do aplicativo NestJS
  const app = await NestFactory.create(AppModule);
  
  // Iniciar o servidor
  await app.listen(3000);
}

bootstrap().then(() => {
  console.log('Application is running on http://localhost:3000');
}).catch(error => {
  console.error('Error starting the application', error);
});
