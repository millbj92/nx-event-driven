import { useStore } from './store';
import { useSocket } from 'socket.io-react-hook';

export const useAuthenticatedSocket = (
  enpoint?: string,
  namespace?: string
) => {
  // const { token } = useStore();
  return useSocket({
    url: enpoint || 'http://localhost:5003',
    namespace: namespace || '',
    // extraHeaders: {
    //   Authorization: `Bearer ${token}`,
    // },
    enabled: true,
  });
};
