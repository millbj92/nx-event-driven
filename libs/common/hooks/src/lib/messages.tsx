import { ChatMessage, RoomJoinRequest } from '@super-rad-poc/common/models';
import { io, Socket } from 'socket.io-client';

let socket: Socket;
export const initiateSocket = (data: RoomJoinRequest) => {
  socket = io('http://localhost:5003/messages');
  console.log('Connecting socket....');
  if (socket && data.room) socket.emit('join', data);
  return socket;
};

export const disconnectSocket = () => {
  console.log('Disconnecting socket....');
  if (socket) socket.disconnect();
};

export const subscribetoChat = (
  cb: (err: Error | null, msg: ChatMessage) => void
) => {
  if (!socket) return true;

  socket.on('chat', (data: ChatMessage) => {
    console.log('Received message from server: ', data.message);
    return cb(null, data);
  });

  return false;
};

export const sendMessage = (data: ChatMessage) => {
  if (socket) socket.emit('chat', data);
};

export const sendBeganTyping = (data: { userId: string; room: string }) => {
  if (socket) socket.emit('begantyping', data);
};

export const sendMessageRead = (data: { userId: string; room: string }) => {
  if (socket) socket.emit('messageread', data);
};

export const switchRooms = (data: RoomJoinRequest) => {
  if (socket) socket.emit('switch', data);
};
