import { User } from '@prisma/client/users';

interface IRoomJoinRequest {
  user: UserForChat;
  room: string;
  prevRoom?: string;
}

interface IChatMessage {
  id?: string;
  message: string;
  user: UserForChat;
  room: string;
  isRead?: boolean
}

interface IChatRoom {
  id: string;
  messages: IChatMessage[];
}

export class ChatRoom implements IChatRoom {
  constructor(
    public readonly id: string,
    public readonly messages: IChatMessage[]
  ) { }
}

type TUserForChat = Pick<User, "id" | "firstName" | "lastName" | "picture">;
interface IUserForChat extends TUserForChat {
  clientId?: string;
  isTyping?: boolean;
}
export class UserForChat implements IUserForChat {
  constructor (
    public readonly id:string,
    public readonly firstName:string,
    public readonly lastName:string,
    public readonly picture:string,
    public readonly chatRooms: ChatRoom[],
    public readonly clientId?: string,
    public isTyping?:boolean
  ) {}
}
export class RoomJoinRequest implements IRoomJoinRequest {
  constructor(
    public readonly room: string,
    public readonly user: UserForChat,
    public readonly prevRoom?: string
  ) {}
}

export class ChatMessage implements IChatMessage {
  constructor(
    public readonly message: string,
    public readonly user: UserForChat,
    public readonly room: string,
    public readonly isRead?: boolean
  ) {}
}

interface IChatRequest {
  from: UserForChat;
  to: UserForChat;
  message: ChatMessage;
}
export class ChatRequest implements IChatRequest {
  constructor(
    public readonly from: UserForChat,
    public readonly to: UserForChat,
    public readonly message: ChatMessage
  ) {}
}
