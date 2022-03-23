import { Module } from '@nestjs/common';
import { PostModule } from './post.module';

@Module({
  imports: [PostModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
