import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { CommentAggregate } from '../../../comment.model';
import { CommentService } from '../../../comment.service';
import { CreateCommentCommand, DeleteCommentCommand } from '../interface';
import { UpdateCommentCommand } from './../interface/index';
import { plainToClass } from 'class-transformer';
import { SendKafkaCommand } from '@super-rad-poc/common/events';
@CommandHandler(CreateCommentCommand)
export class CreateCommentCommandHandler implements ICommandHandler<CreateCommentCommand> {
  constructor(
    private readonly service: CommentService,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: CreateCommentCommand) {
    const { comment } = command;
    const commentAggregate = this.publisher.mergeObjectContext(
        plainToClass(CommentAggregate, await this.service.create(comment))
    );
    commentAggregate.created();
    commentAggregate.commit();
    return commentAggregate;
  };
}

@CommandHandler(UpdateCommentCommand)
export class UpdateCommentCommandHandler implements ICommandHandler<UpdateCommentCommand> {
  constructor(
    private readonly service: CommentService,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: UpdateCommentCommand) {
    const { comment } = command;
    const commentAggregate = this.publisher.mergeObjectContext(
        plainToClass(CommentAggregate, await this.service.update(comment))
    );

    commentAggregate.updated();
    commentAggregate.commit();
    return commentAggregate;
  };
}


@CommandHandler(DeleteCommentCommand)
export class DeleteCommentCommandHandler implements ICommandHandler<DeleteCommentCommand> {
  constructor(
    private readonly service: CommentService,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: DeleteCommentCommand) {
    const { comment } = command;
    const commentAggregate = this.publisher.mergeObjectContext(
     plainToClass(CommentAggregate, await this.service.remove(comment))
    );

    commentAggregate.deactivated();
    commentAggregate.commit();
    return commentAggregate;
  };
}

@CommandHandler(SendKafkaCommand)
export class SendKafkaCommandHandler implements ICommandHandler<SendKafkaCommand> {
  constructor(
    private readonly service: CommentService,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: SendKafkaCommand) {
    const { event } = command;
    await this.service.sendKafka(command);
    const commentAggregate = this.publisher.mergeObjectContext(
      plainToClass(CommentAggregate, event.data)
    );
    commentAggregate.commit();
    return commentAggregate;
  };
}
