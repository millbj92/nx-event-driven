/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */


import { NestFactory } from '@nestjs/core';
import { getLogger } from '@super-rad-poc/services/shared';

import { AppModule } from './app.module';

async function bootstrap() {
  const logger = getLogger();
  const app = await NestFactory.create(AppModule);
  const port =  process.env.PORT || 5003
  await app.listen(port);
  logger.info(
   `Messages service is running on http://localhost:${port}`
  );
}

bootstrap();
