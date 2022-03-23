import { CommandHandler, EventPublisher, ICommandHandler } from '@nestjs/cqrs';
import { FileAggregateArgs } from '../../../@generated/prisma-nestjs-graphql/file/file-aggregate.args';
import { FileAggregate } from '../../../file.model';
import { FileService } from '../../../file.service';
import { CreateFileCommand, DeleteFileCommand } from '../interface';
import { UpdateFileCommand } from './../interface/index';
import { plainToClass } from 'class-transformer';
import { SendKafkaCommand } from '@super-rad-poc/common/events';

@CommandHandler(CreateFileCommand)
export class CreateFileCommandHandler implements ICommandHandler<CreateFileCommand> {
  constructor(
    private readonly service: FileService,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: CreateFileCommand) {
    const { file } = command;
    const fileAggregate = this.publisher.mergeObjectContext(
      plainToClass(FileAggregate, await this.service.create(file))
    );
    fileAggregate.created();
    fileAggregate.commit();
  };
}

@CommandHandler(UpdateFileCommand)
export class UpdateFileCommandHandler implements ICommandHandler<UpdateFileCommand> {
  constructor(
    private readonly service: FileService,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: UpdateFileCommand) {
    const { file } = command;
    const fileAggregate = this.publisher.mergeObjectContext(
      plainToClass(FileAggregate, await this.service.update(file))
    );

    fileAggregate.updated();
    fileAggregate.commit();
  };
}


@CommandHandler(DeleteFileCommand)
export class DeleteFileCommandHandler implements ICommandHandler<DeleteFileCommand> {
  constructor(
    private readonly service: FileService,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: DeleteFileCommand) {
    const { file } = command;
    const fileAggregate = this.publisher.mergeObjectContext(
     plainToClass(FileAggregate,  await this.service.remove(file))
    );

    fileAggregate.deleted();
    fileAggregate.commit();
  };
}


@CommandHandler(SendKafkaCommand)
export class SendKafkaCommandHandler implements ICommandHandler<SendKafkaCommand> {
  constructor(
    private readonly service: FileService,
    private readonly publisher: EventPublisher,
  ) {}

  async execute(command: SendKafkaCommand) {
    const { event } = command;
    await this.service.sendKafka(command);
    const fileAggregate = this.publisher.mergeObjectContext(
      plainToClass(FileAggregate, event.data)
    );
    fileAggregate.commit();
  };
}
