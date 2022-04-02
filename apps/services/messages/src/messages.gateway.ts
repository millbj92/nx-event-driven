import {
  SubscribeMessage,
  WebSocketGateway ,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Message, Thread } from '@prisma/client/messages';
import { ChatMessage, ChatRequest, RoomJoinRequest, UserForChat } from '@super-rad-poc/common/models';

import { getLogger } from '@super-rad-poc/services/shared';
import { Socket, Server} from 'socket.io';
import * as jwt  from 'jsonwebtoken';
import { BadRequestException } from '@nestjs/common';
import { User } from '@prisma/client/users';
import { InMemoryDatabase } from './database';

@WebSocketGateway({
  namespace: 'messages',
  cors: {
    origin: '*',
  },
})
export class MessagesGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  userRoomMap: {[key: string]: string} = {};
  private connectedUsers = new InMemoryDatabase<UserForChat & { socket: Socket}, string>();
  @WebSocketServer() server: Server;
  private logger = getLogger("MessagesGateway");


  @SubscribeMessage('join')
  async onJoin(client: Socket, data: RoomJoinRequest) {
    this.logger.info(`\nClient ${data.user.id} joining room: ${data.room}\n`);
    client.join(data.user.id);
    const toAdd = {
      ...data.user,
      socket: client,
    }
    this.connectedUsers.set(data.user.id, toAdd);
  }

  @SubscribeMessage('chat')
  async onChat(client: Socket, payload: ChatMessage) {
    this.logger.info(`\nClient ${client.id} with userId ${payload.user.id} sent message: ${payload.message} in room ${payload.room}\n`);
    client.broadcast.to(payload.room).emit('message', payload);
  }

  @SubscribeMessage('getusers')
  async getUsers(client: Socket) {
    const users = this.connectedUsers.getAll().map(user => {
      const { socket, ...rest } = user;
      return rest;
    });
    client.emit('users', users);
  }

  @SubscribeMessage('chatrequest')
  async onChatRequest(client: Socket, payload: ChatRequest) {
    this.logger.info(`\nClient ${client.id} with userId ${payload.from.id} requested chat with ${payload.to.id}\n`);
    const toClient = this.connectedUsers.get(payload.to.id);
    if (!toClient) {
      throw new BadRequestException(`User ${payload.to.id} not connected`);
    }
    const fromClient = client;
    const room = `${payload.from.id}-${payload.to.id}`;
    this.userRoomMap[payload.from.id] = room;
    this.userRoomMap[payload.to.id] = room;
    const fromUser = {
      ...payload.from,
      chatRooms: [
        ...(payload.from.chatRooms || []),
        {
        id: room,
        messages: [],
      }],
    };
    const toUser = {
      ...payload.to,
      chatRooms: [
        ...(payload.to.chatRooms || []),{
        id: room,
        messages: [],
      }],
    };
    this.connectedUsers.set(payload.from.id, {
      ...fromUser,
      socket: fromClient
    });
    this.connectedUsers.set(payload.to.id, {
      ...toUser,
      socket: toClient.socket
    });
    this.server.to(payload.from.id).emit('chatrequest', {
      room,
      user: payload.to,
    });
  }

  @SubscribeMessage('begantyping')
  async onBegantyping(client: Socket, payload: {room: string, userId: string}) {
    this.logger.info(`\nClient ${client.id} with userId ${payload.userId} began typing in room ${payload.room}\n`);
    client.broadcast.to(this.userRoomMap[payload.userId]).emit('begantyping', payload);
  };

  @SubscribeMessage('messageread')
  async onMessageRead(client: Socket, payload: {room: string, userId: string}) {
    this.logger.info(`\nClient ${client.id} with userId ${payload.userId} marked message as read in room ${payload.room}\n`);
    client.broadcast.to(this.userRoomMap[payload.userId]).emit('messageread', payload);
  };



  @SubscribeMessage('switch')
  async onSwitch(client: Socket, data: RoomJoinRequest) {
    return null;
  }


  afterInit(server: Server) {
    this.logger.info('\nServer started\n');
    this.logger.info('MessagesGateway initialized on namespace: /messages');
  }

  handleDisconnect(client: Socket) {
    this.server.socketsLeave(client.id);
    this.connectedUsers.delete(client.id);
    this.logger.info(`\nClient disconnected: ${client.id}\n`);
    this.logger.info('Client disconnected');
  }

  async handleConnection(client: Socket, ...args: any[]) {
    this.logger.info(`\nClient connected: ${client.id}\n`);
    // try {
    //   const token = client.handshake.headers.authorization;
    //   if (!token) {
    //     this.logger.info(`${client.id}: No token provided`);
    //     client.disconnect();
    //     return new BadRequestException('No token provided!')
    //   }
    //     const truetoken = token.split(' ')[1];
    //     const decoded = jwt.decode(truetoken, {complete: true});
    //     console.log(decoded);
    //     this.logger.info(decoded);
    //     this.logger.info(`\nClient connected: ${client.id}\n`);
    //     this.server.send(client.id, 'Welcome to the chat');
    //     this.server.emit('message', {
    //       text: 'Connected to room ' + client.id,
    //     });
    // } catch (e) {
    //     this.logger.info(`\nConnection error: ${e}\n`);
    //     client.disconnect();
    //     return e;
    // }
  }
}
