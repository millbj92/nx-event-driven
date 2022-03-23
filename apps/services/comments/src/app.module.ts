import { Module } from '@nestjs/common';
import { CommentModule } from './comment.module';

@Module({
  imports: [
    CommentModule,
  ],
  providers: []
})
export class AppModule {}
