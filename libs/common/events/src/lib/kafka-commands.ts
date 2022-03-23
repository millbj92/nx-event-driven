import { Post } from '@prisma/client/posts';
import { User } from '@prisma/client/users';
import { Message} from '@prisma/client/messages' ;
import { Comment } from '@prisma/client/comments';
import { Notification } from '@prisma/client/notifications';
import { Tag } from '@prisma/client/tags';
import { File } from '@prisma/client/files';
import { ICommand } from '@nestjs/cqrs';


export interface IEventMetadata<T> {
  version: number;
  timestamp: Date;
}

type TypeName<T> =
T extends Post ? "POST" :
T extends User ? "USER" :
T extends Message ? "MESSAGE" :
T extends Comment ? "COMMENT" :
T extends Notification ? "NOTIFICATION" :
T extends Tag ? "TAG" :
T extends File ? "FILE" :
T extends string ? T :
 "UNKNOWN";



export type BaseEventType<T> = `${Uppercase<TypeName<T>>}_CREATED` | `${Uppercase<TypeName<T>>}_UPDATED` | `${Uppercase<TypeName<T>>}_DELETED`;
export type UserEventType =  'USER_CREATED' | 'USER_UPDATED' | 'USER_ACTIVATED' | 'USER_DEACTIVATED' | 'USER_BANNED' | 'USER_UNBANNED' | 'USER_VERIFIED';
export type MessageEventType = BaseEventType<Message>;
export type CommentEventType = BaseEventType<'COMMENT'>;
export type ReactionEventType = BaseEventType<'REACTION'>;
export type NotificationEventType = BaseEventType<'NOTIFICATION'>;
export type PostEventType = BaseEventType<'POST'>;
export type TagEventType = BaseEventType<'TAG'>;
export type FileEventType = BaseEventType<'FILE'>;

export type BaseEvent<T> = {
   topic:  T extends User ? UserEventType : BaseEventType<T>;
   data: Partial<T> & IEventMetadata<T>;
};

export type UserEvent = BaseEvent<User>;
export type MessageEvent = BaseEvent<Message>;
export type CommentEvent = BaseEvent<Comment>;
export type NotificationEvent = BaseEvent<Notification>;
export type PostEvent = BaseEvent<Post>;
export type TagEvent = BaseEvent<Tag>;
export type FileEvent = BaseEvent<File>;

export class EventFactory {
  static userEvent<T extends UserEventType>(topic: T, data: Partial<User>, version: number): UserEvent {
    return {
      data: {
        ...data,
        version,
        timestamp: new Date(),
      },
      topic,
    };
  }

  static messageEvent<T extends MessageEventType>(topic: T, data: Partial<Message>, version: number): MessageEvent {
    return {
      topic,
      data: {
        ...data,
        version,
        timestamp: new Date(),
      },
    };
  }

  static fileEvent<T extends FileEventType>(topic: T, data: Partial<File>, version: number): FileEvent {
    return {
      topic,
      data: {
        ...data,
        version,
        timestamp: new Date(),
      },
    };
  }

  static commentEvent<T extends CommentEventType>(topic: T, data: Partial<Comment>, version: number): CommentEvent {
    return {
     topic,
     data: {
        ...data,
        version,
        timestamp: new Date(),
     }
    };
  }

  static notificationEvent<T extends NotificationEventType>(topic: T, data: Partial<Notification>, version: number): NotificationEvent {
    return {
     topic,
      data: {
        ...data,
        version,
        timestamp: new Date(),
      }
    };
  }

  static postEvent<T extends PostEventType>(topic: T, data: Partial<Post>, version: number): PostEvent {
    return {
      topic,
      data: {
        ...data,
        version,
        timestamp: new Date(),
      },
    };
  }

  static tagEvent<T extends TagEventType>(topic: T, data: Partial<Tag>, version: number): TagEvent {
    return {
      topic,
      data: {
        ...data,
        version,
        timestamp: new Date(),
      },
    };
  }
};


export type EventType = UserEventType | MessageEventType | CommentEventType | NotificationEventType | PostEventType | TagEventType | FileEventType;
export type Event = UserEvent | MessageEvent | CommentEvent | NotificationEvent | PostEvent | TagEvent | FileEvent;

export class SendKafkaCommand implements ICommand {
  constructor(public readonly event: Event) {}
}

export class KafkaFactory  {
  static createCommand(eventBase: Event ): SendKafkaCommand {
    return new SendKafkaCommand(eventBase);
  }
}
