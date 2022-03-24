import themeGet from '@styled-system/theme-get';
import styled from 'styled-components';
import { MessageBar } from './message-bar';
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
  return (
    <StyledMessageBarContainer>
      <MessageBar title="messages">
        <MessageBox />
        <MessageBox />
        <MessageBox />
      </MessageBar>
    </StyledMessageBarContainer>
  );
};

export { Messages };
