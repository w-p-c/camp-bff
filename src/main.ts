import { NestFactory } from '@nestjs/core';
import { AppModule } from './module/app/module';
import { Env } from './config/app/type';

async function bootstrap() {
  const env = process.env.NODE_ENV;

  const app = await NestFactory.create(AppModule, {
    snapshot: env === Env.Development,
  });
  await app.listen(3000);
}
bootstrap();
