import { 
  SubscribeMessage, 
  WebSocketGateway ,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect,
  WsResponse
} from '@nestjs/websockets';
import { Message } from '@prisma/client/messages';

import { getLogger } from '@super-rad-poc/common/models';
import { Socket, Server} from 'socket.io';
import axios from 'axios';
import * as jwktopem from 'jwk-to-pem';
import * as jwt  from 'jsonwebtoken';
import { BadRequestException } from '@nestjs/common';
import { JWK, JWS } from 'node-jose';

export type MessagePayload = Message;

@WebSocketGateway({
  namespace: '/messages',
  cors: {
    origin: '*',
  },
})
export class MessagesGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {
  @WebSocketServer() server: Server;
  private logger = getLogger("MessagesGateway");
 
  @SubscribeMessage('sendMessage')
  handleMessage(client: Socket, payload: MessagePayload) {
    const { text } = payload;
    this.logger.info(`Message received: ${text}`)
    this.server.emit('receiveMessage', {
      text: 'Message received. Assigned to room ' + client.id,
    });
  }

  afterInit(server: Server) {
    this.logger.info('\nServer started\n');

    this.logger.info('MessagesGateway initialized on namespace: /messages');
  }

  handleDisconnect(client: Socket) {
    this.server.socketsLeave(client.id);
    this.logger.info(`\nClient disconnected: ${client.id}\n`);
    this.logger.info('Client disconnected');
  }

  async handleConnection(client: Socket, ...args: any[]) {
    const token = client.handshake.headers.authorization;

    if (!token) {
      this.logger.info('No token provided');
      client.disconnect();
      return new BadRequestException('No token provided!')
    }
    const truetoken = token.split(' ')[1];
    const decoded = jwt.decode(truetoken, {complete: true}); 
    try {
      console.log(decoded);
      this.logger.info(decoded);
      this.logger.info(`\nClient connected: ${client.id}\n`);
      return decoded;
    } catch (e) {
      this.logger.info(`\nConnection error: ${e}\n`);
      client.disconnect();
      return e;
    }
  }
}
