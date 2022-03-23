import { Inject } from "@nestjs/common";
import { EventsHandler, IEventHandler } from "@nestjs/cqrs";
import {  FileCreatedEvent, FileDeleted, FileDeletedEvent, FileUpdatedEvent } from "@super-rad-poc/common/events";

@EventsHandler(FileCreatedEvent)
export class FileCreatedHandler implements IEventHandler<FileCreatedEvent> {

  async handle(event: FileCreatedEvent) {
    console.log("FileCreatedHandler");
  }

}


@EventsHandler(FileDeletedEvent)
export class FileDeletedHandler implements IEventHandler<FileDeletedEvent> {


  async handle(event: FileDeletedEvent) {
    console.log("FileDeletedHandler");
  }

}


@EventsHandler(FileUpdatedEvent)
export class FileUpdatedHandler implements IEventHandler<FileUpdatedEvent> {


  async handle(event: FileUpdatedEvent) {
    console.log("FileUpdatedHandler");
  }
}


export const EventHandlers = [
  FileCreatedHandler,
  FileDeletedHandler,
  FileUpdatedHandler,
];
