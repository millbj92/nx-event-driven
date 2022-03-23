import { IEvent } from '@nestjs/cqrs'
import { Tag } from '@prisma/client/tags';

export type ITagEvent = IEvent

abstract class TagEvent implements ITagEvent {
  constructor(public readonly tag: Tag) {}
}
export class TagCreatedEvent extends TagEvent {
  constructor(public readonly tag: Tag) {
    super(tag);
  }
}

export class TagUpdatedEvent extends TagEvent {
  constructor(public readonly tag: Tag) {
    super(tag);
  }
}

export class TagDeletedEvent extends TagEvent {
  constructor(public readonly tag: Tag) {
    super(tag);
  }
}
