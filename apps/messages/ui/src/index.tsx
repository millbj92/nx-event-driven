import themeGet from '@styled-system/theme-get';
import { useStore } from '@super-rad-poc/common/hooks';
import { NotificationBell } from '@super-rad-poc/desgn/icons';
import { useEffect, useState } from 'react';
import { connect, Socket } from 'socket.io-client';
import styled from 'styled-components';
import { MessageBox } from './message-box';

const StyledMessageBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9999;
  width: 100vw;
  background-color: #000;
`;

const Messages = () => {
  return <MessageBox />;
};

export { Messages };
