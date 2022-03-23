import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { MessageAggregateArgs } from '../../../@generated/prisma-nestjs-graphql/message/message-aggregate.args';
import { MessageAggregate } from '../../../message.model';
import { MessageService } from '../../../message.service';
import { CreateMessageCommand, DeleteMessageCommand } from '../interface';
import { UpdateMessageCommand } from './../interface/index';
import { plainToClass } from 'class-transformer';
import { SendKafkaCommand } from '@super-rad-poc/common/events';

@CommandHandler(CreateMessageCommand)
export class CreateMessageCommandHandler implements ICommandHandler<CreateMessageCommand> {
  constructor(
    private readonly service: MessageService,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: CreateMessageCommand) {
    const { message } = command;
    const messageAggregate = this.publisher.mergeObjectContext(
      plainToClass(MessageAggregate,  await this.service.create(message))
    );
    messageAggregate.created();
    messageAggregate.commit();
  };
}

@CommandHandler(UpdateMessageCommand)
export class UpdateMessageCommandHandler implements ICommandHandler<UpdateMessageCommand> {
  constructor(
    private readonly service: MessageService,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: UpdateMessageCommand) {
    const { message } = command
    const messageAggregate = this.publisher.mergeObjectContext(
      plainToClass(MessageAggregate, await this.service.update(message))
    );

    messageAggregate.updated();
    messageAggregate.commit();
  };
}


@CommandHandler(DeleteMessageCommand)
export class DeleteMessageCommandHandler implements ICommandHandler<DeleteMessageCommand> {
  constructor(
    private readonly service: MessageService,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: DeleteMessageCommand) {
    const { message } = command;
    const messageAggregate = this.publisher.mergeObjectContext(
      plainToClass(MessageAggregate, await this.service.remove(message))
    );

    messageAggregate.deleted();
    messageAggregate.commit();
  };
}


@CommandHandler(SendKafkaCommand)
export class SendKafkaCommandHandler implements ICommandHandler<SendKafkaCommand> {
  constructor(
    private readonly service: MessageService,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: SendKafkaCommand) {
    const { event } = command;
    await this.service.sendToKafka(command)
    const messageAggregate = this.publisher.mergeObjectContext(
      plainToClass(MessageAggregate, event.data)
    );

    messageAggregate.commit();
  };
}
