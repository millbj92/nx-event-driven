import { Module } from '@nestjs/common';
import { IEvent } from '@nestjs/cqrs';
import { Message } from '@prisma/client/messages'
import { IEventMetadata } from './../event_data/IEventMetadata';


export type IMessageEvent = IEvent

abstract class MessageEvent implements IMessageEvent {
  constructor(public readonly message: Message) {}
}

export class MessageCreatedEvent extends MessageEvent {
  constructor(public readonly message: Message) {
    super(message);
  }
}

export class MessageUpdatedEvent extends MessageEvent {
  constructor(public readonly message: Message) {
    super(message);
  }
}

export class MessageDeletedEvent extends MessageEvent {
  constructor(public readonly message: Message) {
    super(message);
  }
}


@Module({
  imports: [],
  providers:[ ],
  exports: [
    MessageCreatedEvent,
    MessageDeletedEvent,
    MessageUpdatedEvent
  ]

})
export class MessageEventModule{

}
