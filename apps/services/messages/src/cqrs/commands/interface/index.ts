import { Message } from '@prisma/client/messages';
import { ICommand } from '@nestjs/cqrs'
import { MessageAggregate } from '../../../message.model';
import { MessageCreateInput } from '../../../@generated/prisma-nestjs-graphql/message/message-create.input';
import { MessageUpdateInput } from './../../../@generated/prisma-nestjs-graphql/message/message-update.input';
import { MessageWhereUniqueInput } from './../../../@generated/prisma-nestjs-graphql/message/message-where-unique.input';

export interface IMessageCommand extends ICommand {
  message: Message;
};

abstract class MessageCommand implements IMessageCommand {
  constructor(public readonly message: MessageAggregate) {}
}

export class CreateMessageCommand {
  constructor(public readonly message: MessageCreateInput) {}
}

export class UpdateMessageCommand {
  constructor(public readonly message: MessageUpdateInput) {}
}

export class DeleteMessageCommand {
  constructor(public readonly message: MessageWhereUniqueInput) {}
}

export type MessageEventType = 'MESSAGE_CREATED' | 'MESSAGE_UPDATED' | 'MESSAGE_DELETED';
export class SendKafkaCommand {
  constructor(public readonly message: Message, public readonly type: MessageEventType) {}
}
