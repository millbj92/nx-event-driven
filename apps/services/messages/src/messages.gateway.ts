import { 
  SubscribeMessage, 
  WebSocketGateway ,
  OnGatewayInit,
  WebSocketServer,
  OnGatewayConnection,
  OnGatewayDisconnect
} from '@nestjs/websockets';

import { getLogger } from '@super-rad-poc/common/models';
import { Socket, Server} from 'socket.io';


interface MessagePayload  {
  message: string;
  userId: string;
  recipients: string[];
}

@WebSocketGateway({
  namespace: '/messages',
  cors: {
    origin: '*',
  },
})
export class MessagesGateway implements OnGatewayInit, OnGatewayConnection, OnGatewayDisconnect {

  @WebSocketServer() server: Server;
  private logger = getLogger();
 
  @SubscribeMessage('onReceivedMessage')
  handleMessage(client: Socket, payload: MessagePayload) {
    this.server.emit('onReceivedMessage', payload);
  }

  afterInit(server: Server) {
    this.logger.info('MessagesGateway initialized on namespace: /messages');
  }

  handleDisconnect(client: Socket) {
    this.logger.info('Client disconnected');
  }

  handleConnection(client: Socket, ...args: any[]) {
    this.logger.info('Client connected');
  }
}
