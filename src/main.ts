import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as dotenv from 'dotenv';

async function bootstrap() {
  dotenv.config();
  const app = await NestFactory.create(AppModule);
  
  // Habilitando CORS com as configurações especificadas
  app.enableCors({
    origin: true,
    methods: ['GET', 'POST', 'DELETE', 'PUT', 'PATCH'],
    exposedHeaders: ['Authorization'],
    credentials: true,
  });

  await app.listen(3000);
}

bootstrap().then(() => {
  console.log('Application is running on http://localhost:3000');
}).catch(error => {
  console.error('Error starting the application', error);
});
