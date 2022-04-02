import React from 'react';
import { io, Socket } from 'socket.io-client';

export interface SocketContextType {
  socket: Socket | undefined;
  onConnect: () => void;
  onDisconnect: () => void;
}

export interface SocketProviderProps {
  endpoint: string;
  namespace: string;
  children: React.ReactNode;
}

let SocketContext = React.createContext<SocketContextType>(null!);
export function SocketIOProvider({
  endpoint,
  namespace,
  children,
}: SocketProviderProps) {
  const [socket, setSocket] = React.useState<Socket | undefined>(undefined);

  React.useEffect(() => {
    const socket = io(endpoint, {
      path: `/${namespace}`,
    });
    setSocket(socket);
    return () => {
      socket.disconnect();
    };
  }, [endpoint, namespace]);
  const handleConnect = () => {
    const socket = io(`${endpoint}/${namespace}`);
    setSocket(socket);

    socket.on('connect', () => {
      return socket;
    });
  };
  const handleDisconnect = () => {
    if (socket) {
      socket.disconnect();
      setSocket(undefined);
    }
  };

  const value = {
    socket,
    onConnect: handleConnect,
    onDisconnect: handleDisconnect,
  };

  return (
    <SocketContext.Provider value={value}>{children}</SocketContext.Provider>
  );
}

export const useSocket = () => React.useContext(SocketContext);
