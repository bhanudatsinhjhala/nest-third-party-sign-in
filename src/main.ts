import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import env from './common/configs/env.config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger();
  const app = await NestFactory.create(AppModule);
  await app.listen(env.PORT, () =>
    logger.log('~ is the port on which Server is running', env.PORT),
  );
}
bootstrap();
