import styled, { css, keyframes } from 'styled-components';
import { DateTime } from 'luxon';
import themeGet from '@styled-system/theme-get';
import { useEffect, useRef, useState } from 'react';
import { Message, Thread } from '@prisma/client/messages';
import debounce from 'lodash.debounce';
import { v4 as uuid } from 'uuid';
import {
  CircleImage,
  MessageLoadingIndicator,
  Messenger,
  StyledAgentFace,
  StyledChatBox,
  StyledChatBoxHeader,
  StyledChatInner,
  StyledChatMessageContainer,
  StyledChatMessageContent,
  StyledCheckmarkContainer,
  StyledMessageBoxAvatar,
  StyledMessageBoxMenu,
  StyledMessageBoxMenuButton,
  StyledMessageBoxMenuItems,
  StyledMessageBoxSubmit,
  StyledMessageInput,
  StyledMessageList,
  StyledMessageTimestamp,
  StyledMessage_Box,
  StyledNewMessage,
  StyledPersonalMessage,
} from '@super-rad-poc/design/styles';
export interface MessageCheckboxProps {
  isActive: boolean;
}
export const MessageCheckboxIndicator = ({
  isActive,
}: MessageCheckboxProps) => {
  const [checked, setChecked] = useState(false);
  useEffect(() => {
    setChecked(isActive);
  }, [isActive]);

  return <StyledcbContainer isActive={checked}>&#10003;</StyledcbContainer>;
};

const StyledcbContainer = styled.span<{ isActive: boolean }>`
  color: ${({ isActive }) => (isActive ? themeGet('colors.accent') : '#ccc')};
`;

export const LocalMessage = (props: ChatMessage) => {
  const { message, user, room } = props;
  return (
    <StyledPersonalMessage>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {message}
        <StyledMessageTimestamp>
          {DateTime.now().toFormat('hh:mm a') ??
            DateTime.now().toFormat('hh:mm a')}
        </StyledMessageTimestamp>
        <StyledCheckmarkContainer>
          <MessageCheckboxIndicator isActive={true} />
          <MessageCheckboxIndicator isActive={true} />
        </StyledCheckmarkContainer>
      </div>
    </StyledPersonalMessage>
  );
};

export const RemoteMessage = ({ message, user }: ChatMessage) => {
  return (
    <StyledNewMessage>
      <StyledMessageBoxAvatar>
        <CircleImage src={user?.picture} />
      </StyledMessageBoxAvatar>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {message}
        <StyledMessageTimestamp>
          {DateTime.now().toFormat('hh:mm a') ?? ''}
        </StyledMessageTimestamp>
      </div>
    </StyledNewMessage>
  );
};

export interface LoadingMessageProps {
  avatar?: string;
}
export const LoadingMessage = ({ avatar }: LoadingMessageProps) => {
  return (
    <StyledNewMessage>
      <StyledMessageBoxAvatar>
        <CircleImage src={avatar} />
      </StyledMessageBoxAvatar>
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          width: '1.5rem',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <MessageLoadingIndicator delay={0.9} />
        <MessageLoadingIndicator delay={0.15} />
        <MessageLoadingIndicator delay={0.3} />
      </div>
    </StyledNewMessage>
  );
};

import {
  initiateSocket,
  sendMessage,
  subscribetoChat,
  sendBeganTyping,
  switchRooms,
  useStore,
  sendMessageRead,
} from '@super-rad-poc/common/hooks';
import { Socket } from 'socket.io-client';
import {
  ChatMessage,
  RoomJoinRequest,
  UserForChat,
} from '@super-rad-poc/common/models';

export const MessageBox = () => {
  const [room, setRoom] = useState<string>('');
  const [message, setMessage] = useState('');
  const [chat, setChat] = useState<ChatMessage[]>(Array<ChatMessage>());
  //const [user?.id, setuser?.id] = useState<string>();
  const [socket, setSocket] = useState<Socket | undefined>(undefined);
  const prevRoomRef = useRef(room);
  const [shiftDown, setShiftDown] = useState(false);
  const [minimized, setMinimized] = useState(false);
  const [menuButtonActive, setMenuButtonActive] = useState(false);
  const [userTyping, setUserTyping] = useState(false);

  const [chatUser, setChatUser] = useState<UserForChat>();
  const user = useStore((str) => str.user);
  const [userid, setuserid] = useState(uuid());
  let messagesEnd = useRef<HTMLDivElement>(null);
  let scrollContainer = useRef<HTMLDivElement>(null);
  let typingTimeout = useRef<number | undefined>(undefined);
  const [remoteUser, setRemoteUser] = useState<UserForChat>();
  useEffect(() => {
    if (prevRoomRef.current !== room && chatUser) {
      setSocket(initiateSocket(new RoomJoinRequest(room, chatUser)));
      prevRoomRef.current = room;
    }
  });
  const prevRoom = prevRoomRef.current;

  useEffect(() => {
    if (user) {
      setChatUser(
        new UserForChat(
          user.id,
          user.firstName,
          user.lastName,
          user.picture,
          [],
          socket?.id
        )
      );
    }
  }, [user]);

  useEffect(() => {
    if (prevRoom && room && chatUser)
      switchRooms(new RoomJoinRequest(room, chatUser, prevRoom));
    else if (room && chatUser)
      setSocket(initiateSocket(new RoomJoinRequest(room, chatUser)));
    setChat([]);
  }, [room, prevRoom]);

  useEffect(() => {
    if (socket) {
      socket.on('message', (data) => {
        if (!remoteUser) {
          setRemoteUser(data.user);
        }
        setChat((oldChat) => [...oldChat, data]);
        clearTimeout(typingTimeout.current);
        setUserTyping(false);
        scrollToLastMessage();
        if (user) sendMessageRead({ userId: user.id, room });
      });

      socket.on('begantyping', (data) => {
        clearTimeout(typingTimeout.current);
        setUserTyping(true);
        scrollToLastMessage();
        typingTimeout.current = window.setTimeout(() => {
          setUserTyping(false);
        }, 1000);
      });

      socket.on('messageread', () => {});
    }
  }, [socket]);

  const handleSendMessage = () => {
    if (message.trim().length > 0 && chatUser) {
      const newMsg = new ChatMessage(message, chatUser, room);
      sendMessage(newMsg);
      setChat((oldChats) => [...oldChats, newMsg]);
      setMessage('');
      scrollToLastMessage();
    }
  };

  const handleBeganTyping = () => {
    if (chatUser) {
      const debounceFilter = debounce(() => {
        sendBeganTyping({ userId: chatUser.id, room });
      }, 500);

      debounceFilter();
    }
  };

  const scrollToLastMessage = () => {
    setTimeout(() => {
      if (scrollContainer.current) {
        scrollContainer.current.scrollTo({
          top: scrollContainer.current.scrollHeight,
          behavior: 'smooth',
        });
      }
    }, 100);
  };

  return (
    <Messenger
      style={{
        bottom: minimized ? '-55%' : '0',
      }}
    >
      <StyledMessageBoxMenu>
        <StyledMessageBoxMenuItems isActive={menuButtonActive}>
          <a
            target="_blank"
            title="Minimize"
            onClick={() => setMinimized(true)}
          >
            —
          </a>
          <br />
          <a target="_blank" title="Close">
            ✕
          </a>
        </StyledMessageBoxMenuItems>
        <StyledMessageBoxMenuButton
          onClick={() => setMenuButtonActive(!menuButtonActive)}
          isActive={menuButtonActive}
        >
          ...
        </StyledMessageBoxMenuButton>
      </StyledMessageBoxMenu>
      <StyledAgentFace>
        <CircleImage src={remoteUser?.picture} />
      </StyledAgentFace>
      <StyledChatBox>
        <StyledChatBoxHeader>
          <h1>{`${remoteUser?.firstName} ${remoteUser?.lastName}`}</h1>
          <h2>{DateTime.now().toFormat('hh mm a')}</h2>
        </StyledChatBoxHeader>
        <StyledChatMessageContainer>
          <StyledChatMessageContent>
            <StyledChatInner ref={scrollContainer}>
              <StyledMessageList>
                {chat.map((msg, index) => {
                  if (msg.user.id === chatUser?.id) {
                    return <LocalMessage key={index} {...msg} />;
                  } else {
                    return <RemoteMessage key={index} {...msg} />;
                  }
                })}
              </StyledMessageList>
              {userTyping && <LoadingMessage avatar={remoteUser?.picture} />}
              <div ref={messagesEnd} />
            </StyledChatInner>
          </StyledChatMessageContent>
        </StyledChatMessageContainer>
        <StyledMessage_Box>
          <StyledMessageInput
            onKeyUp={(e) => {
              if (e.key === 'Shift') {
                setShiftDown(false);
              }
            }}
            onKeyDown={(e) => {
              if (e?.key === 'Shift') setShiftDown(true);

              if (e?.key === 'Enter' && !shiftDown) {
                handleSendMessage();
              } else if (e?.key === 'Enter' && shiftDown) {
                setMessage(message + '\n');
              }
            }}
            value={message}
            onChange={(e) => {
              handleBeganTyping();
              setMessage(e.target.value);
            }}
          />
          <StyledMessageBoxSubmit
            onClick={() => {
              handleSendMessage();
            }}
          >
            Send
          </StyledMessageBoxSubmit>
        </StyledMessage_Box>
      </StyledChatBox>
    </Messenger>
  );
};
