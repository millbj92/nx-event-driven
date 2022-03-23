import { Module } from '@nestjs/common';
import { TagModule } from './tag.module';


@Module({
  imports: [TagModule],
controllers: [],
  providers: [],
})
export class AppModule {}
