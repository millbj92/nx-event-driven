import { File } from '@prisma/client/files'
import { IEvent } from '@nestjs/cqrs';
import { IEventMetadata } from './../event_data/IEventMetadata';



export type IFileEvent = IEvent;


abstract class FileEvent implements IFileEvent {
  constructor(public readonly file: File) {}
};

export class FileCreatedEvent extends FileEvent {
  constructor(public readonly file: File) {
    super(file);
  }
}

export class FileUpdatedEvent extends FileEvent {
  constructor(public readonly file: File) {
    super(file);
  }
}

export class FileDeletedEvent extends FileEvent {
  constructor(public readonly file: File) {
    super(file);
  }
}

export type FileDeleted = IFileEvent
