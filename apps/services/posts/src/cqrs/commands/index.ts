import {
  CreatePostCommandHandler,
  UpdatePostCommandHandler,
  DeletePostCommandHandler,
  SendToKafkaCommandHandler,
 }  from './impl';


 export const CommandHandlers = [
  CreatePostCommandHandler,
  UpdatePostCommandHandler,
  DeletePostCommandHandler,
  SendToKafkaCommandHandler,
  ];
