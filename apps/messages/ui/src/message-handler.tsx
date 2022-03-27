import { Message, Thread } from '@prisma/client/messages';
import { useEffect, useState } from 'react';
import { connect, Socket } from 'socket.io-client';
import { MessageBox } from './message-box';
import { Config } from './config';
import { useStore } from '@super-rad-poc/common/hooks';
import { useAuth } from '@super-rad-poc/design/components';

export type GroupedThread = Thread & {
  messages: Message[];
};
export const MessageHandler = () => {
  const [messages] = useState<Message[]>([]);
  const [threads, setThreads] = useState<GroupedThread[]>([]);
  const [socket, setSocket] = useState<Socket>();
  const { token } = useStore();

  useEffect(() => {
    if (!token) return;
    const headers = {
      authorization: `Bearer ${token}`,
    };
    setSocket(
      connect(Config.Messages.endpoint, {
        extraHeaders: headers,
      })
    );

    socket?.emit('sendMessage', {
      text: 'Hello',
    });

    socket?.on('receiveMessage', (message: any) => {
      console.log(message);
    });

    return () => {
      socket?.disconnect();
    };
  }, [token]);

  useEffect(() => {
    //group messages by thread
    const groupedThreads = messages.reduce((acc, message) => {
      const thread = acc.find((t) => t.id === message.threadId);
      if (thread) {
        thread.messages.push(message);
      } else {
        acc.push({
          ...message,
          messages: [message],
        });
      }
      return acc;
    }, [] as GroupedThread[]);

    setThreads(groupedThreads);

    return () => {
      setThreads([]);
    };
  }, [messages]);

  return (
    <div>
      {threads.map((thread) => (
        <MessageBox
          key={thread.id}
          thread={thread}
          onBeganTyping={() => {
            socket?.emit('began typing', {
              threadId: thread.id,
            });
          }}
          onSendMessage={(message) => {
            socket?.emit('message', {
              threadId: thread.id,
              message,
            });
          }}
          onMessageSeen={(messageId: string) => {
            socket?.emit('message seen', {
              threadId: thread.id,
              messageId,
            });
          }}
        />
      ))}
    </div>
  );
};
