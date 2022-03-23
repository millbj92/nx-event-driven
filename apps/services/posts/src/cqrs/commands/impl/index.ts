import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { PostAggregateArgs } from '../../../@generated/prisma-nestjs-graphql/post/post-aggregate.args';
import { PostAggregate } from '../../../post.model';
import { PostService } from '../../../post.service';
import { CreatePostCommand, DeletePostCommand } from '../interface';
import { UpdatePostCommand } from './../interface/index';
import { plainToClass } from 'class-transformer';
import { SendKafkaCommand } from '@super-rad-poc/common/events';

@CommandHandler(CreatePostCommand)
export class CreatePostCommandHandler implements ICommandHandler<CreatePostCommand> {
  constructor(
    private readonly service: PostService,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: CreatePostCommand) {
    const { post } = command;
    const postAggregate = this.publisher.mergeObjectContext(
     plainToClass(PostAggregate, await this.service.create(post))
    );
    postAggregate.created();
    postAggregate.commit();
  };
}

@CommandHandler(UpdatePostCommand)
export class UpdatePostCommandHandler implements ICommandHandler<UpdatePostCommand> {
  constructor(
    private readonly service: PostService,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: UpdatePostCommand) {
    const { post } = command;
    const postAggregate = this.publisher.mergeObjectContext(
     plainToClass(PostAggregate, await this.service.update(post))
    );
    postAggregate.updated();
    postAggregate.commit();
  };
}


@CommandHandler(DeletePostCommand)
export class DeletePostCommandHandler implements ICommandHandler<DeletePostCommand> {
  constructor(
    private readonly service: PostService,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: DeletePostCommand) {
    const { post } = command;
    const postAggregate = this.publisher.mergeObjectContext(
     plainToClass(PostAggregate, await this.service.remove(post))
    );

    postAggregate.deleted();
    postAggregate.commit();
  };
}


@CommandHandler(SendKafkaCommand)
export class SendToKafkaCommandHandler implements ICommandHandler<SendKafkaCommand> {
  constructor(
    private readonly service: PostService,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: SendKafkaCommand) {
    const { event } = command;

    const postResult = await this.service.sendToKafka(command);
    const postAggregate = this.publisher.mergeObjectContext(
     plainToClass(PostAggregate, event.data)
    );
    postAggregate.created();
    postAggregate.commit();
  };
}
