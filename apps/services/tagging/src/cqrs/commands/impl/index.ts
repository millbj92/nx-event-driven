import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { TagAggregateArgs } from '../../../@generated/prisma-nestjs-graphql/tag/tag-aggregate.args';
import { TagAggregate } from '../../../tag.model';
import { TagService } from '../../../tag.service';
import { CreateTagCommand, DeleteTagCommand } from '../interface';
import { UpdateTagCommand } from './../interface/index';
import { plainToClass } from 'class-transformer';
import { KafkaFactory, SendKafkaCommand } from '@super-rad-poc/common/events';

@CommandHandler(CreateTagCommand)
export class CreateTagCommandHandler implements ICommandHandler<CreateTagCommand> {
  constructor(
    private readonly service: TagService,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: CreateTagCommand) {
    const { tag } = command;
    const tagAggregate = this.publisher.mergeObjectContext(
      plainToClass(TagAggregate, await this.service.create(tag))
    );
    tagAggregate.created();
    tagAggregate.commit();
  };
}

@CommandHandler(UpdateTagCommand)
export class UpdateTagCommandHandler implements ICommandHandler<UpdateTagCommand> {
  constructor(
    private readonly service: TagService,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: UpdateTagCommand) {
    const { tag } = command;

    const tagAggregate = this.publisher.mergeObjectContext(
      plainToClass(TagAggregate, await this.service.update(tag))
    )

    tagAggregate.updated();
    tagAggregate.commit();
  };
}


@CommandHandler(DeleteTagCommand)
export class DeleteTagCommandHandler implements ICommandHandler<DeleteTagCommand> {
  constructor(
    private readonly service: TagService,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: DeleteTagCommand) {
    const { tag } = command;
    const tagAggregate = this.publisher.mergeObjectContext(
      plainToClass(TagAggregate, await this.service.remove(tag))
    );

    tagAggregate.deleted();
    tagAggregate.commit();
  };
}


@CommandHandler(SendKafkaCommand)
export class SendKafkaCommandHandler implements ICommandHandler<SendKafkaCommand> {
  constructor(
    private readonly service: TagService,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: SendKafkaCommand) {
    const tagResult = await this.service.sendToKafka(command)
    const tagAggregate = this.publisher.mergeObjectContext(
      plainToClass(TagAggregate, command.event.data)
    );
    tagAggregate.commit();
  };
}
