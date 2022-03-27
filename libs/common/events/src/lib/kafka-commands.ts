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
T extends Post ? "post" :
T extends User ? "user" :
T extends Message ? "message" :
T extends Comment ? "comment" :
T extends Notification ? "notification" :
T extends Tag ? "tag" :
T extends File ? "file" :
T extends string ? T :
 "unknown";



export type BaseEventType<T> = `${Lowercase<TypeName<T>>}.created` | `${Lowercase<TypeName<T>>}.updated` | `${Lowercase<TypeName<T>>}.deleted`;
export type UserEventType =  'user.created' | 'user.updated' | 'user.activated' | 'user.deactivated' | 'user.banned' | 'user.unbanned' | 'user.verified' | "user.loggedin" | "user.verification.resent";
export type MessageEventType = BaseEventType<Message>;
export type CommentEventType = BaseEventType<'comment'>;
export type ReactionEventType = BaseEventType<'reaction'>;
export type NotificationEventType = BaseEventType<'notification'>;
export type PostEventType = BaseEventType<'post'>;
export type TagEventType = BaseEventType<'tag'>;
export type FileEventType = BaseEventType<'file'>;

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
