/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

 import { NestFactory } from '@nestjs/core';
 import { AppModule } from './app.module';
 import {getLogger} from '@super-rad-poc/common/models';

async function bootstrap() {
  const logger = getLogger();
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT || 5000;
  await app.listen(port);
  logger.info(
    `Comments service is running on http://localhost:${port}`
  );
}

bootstrap();
