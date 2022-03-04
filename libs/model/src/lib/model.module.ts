import { Module } from '@nestjs/common';
import { PrismaService } from './prisma/prisma.service';

@Module({
  controllers: [],
  providers: [PrismaService],
  exports: [],
})
export class ModelModule {}
