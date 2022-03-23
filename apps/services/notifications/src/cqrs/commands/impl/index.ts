import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { NotificationAggregateArgs } from '../../../@generated/prisma-nestjs-graphql/notification/notification-aggregate.args';
import { NotificationAggregate } from '../../../notification.model';
import { NotificationService } from '../../../notification.service';
import { CreateNotificationCommand, DeleteNotificationCommand } from '../interface';
import { UpdateNotificationCommand } from './../interface/index';
import { plainToClass } from 'class-transformer';
import { SendKafkaCommand } from '@super-rad-poc/common/events';

@CommandHandler(CreateNotificationCommand)
export class CreateNotificationCommandHandler implements ICommandHandler<CreateNotificationCommand> {
  constructor(
    private readonly service: NotificationService,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: CreateNotificationCommand) {
    const { notification } = command;
    const notificationAggregate = this.publisher.mergeObjectContext(
      plainToClass(NotificationAggregate, await this.service.create(notification))
    );
    notificationAggregate.created();
    notificationAggregate.commit();
  };
}

@CommandHandler(UpdateNotificationCommand)
export class UpdateNotificationCommandHandler implements ICommandHandler<UpdateNotificationCommand> {
  constructor(
    private readonly service: NotificationService,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: UpdateNotificationCommand) {
    const { notification } = command;
    const notificationAggregate = this.publisher.mergeObjectContext(
      plainToClass(NotificationAggregate, await this.service.update(notification))
    );
    notificationAggregate.updated();
    notificationAggregate.commit();
  };
}


@CommandHandler(DeleteNotificationCommand)
export class DeleteNotificationCommandHandler implements ICommandHandler<DeleteNotificationCommand> {
  constructor(
    private readonly service: NotificationService,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: DeleteNotificationCommand) {
    const { notification } = command;
    const notificationAggregate = this.publisher.mergeObjectContext(
      plainToClass(NotificationAggregate, await this.service.remove(notification))
    );
    notificationAggregate.deleted();
    notificationAggregate.commit();
  };
}


@CommandHandler(SendKafkaCommand)
export class SendKafkaCommandHandler implements ICommandHandler<SendKafkaCommand> {
  constructor(
    private readonly service: NotificationService,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: SendKafkaCommand) {
    const { event } = command;
    const notificationResult = await this.service.sendToKafka(command);
    const notificationAggregate = this.publisher.mergeObjectContext(
      plainToClass(NotificationAggregate, event.data)
    );
    notificationAggregate.commit();
  };
}
