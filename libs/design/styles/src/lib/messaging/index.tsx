import themeGet from '@styled-system/theme-get';
import styled, { css } from 'styled-components';
import { BallAnimation, BounceAnimation } from '../animations';

export const style = {
  ball: css`
    content: '';
    display: block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    /*  background: rgba(255, 255, 255, .5);*/
    background: #888;
    z-index: 2;
    margin-top: 4px;
    animation: ${BallAnimation} 0.45s cubic-bezier(0, 0, 0.15, 0.7) alternate
      infinite;
  `,
};

export const StyledChatBox = styled.div`
  position: relative;
  width: 100%;
  height: calc(100% - 15px);
  max-height: 500px;
  z-index: 10;
  overflow: hidden;

  background: transparent;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const StyledChatBoxHeader = styled.div`
  flex: 0 1 45px;
  position: relative;
  z-index: 2;
  width: 100%;
  border-bottom: 1px solid #ccc;
  color: #777;
  padding-top: 50px;
  padding-bottom: 5px;
  background-color: #fff;
  text-transform: uppercase;
  text-align: center;

  h1,
  h2 {
    font-weight: normal;
    font-size: 14px;
    margin: 0;
    padding: 0;
  }

  h2 {
    font-size: 11px;
    letter-spacing: 1px;
  }
`;

export const StyledChatMessageContainer = styled.div`
  flex: 1 1 auto;
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const StyledChatMessageContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 101%;
  width: 100%;
`;

export const StyledMessageTimestamp = styled.div`
  position: absolute;
  bottom: -20px;
  font-size: 10px;
  color: #555;
  right: 30px;
  margin-right: 0.4rem;
  /* color: rgba(255, 255, 255, .7);*/
`;

export const StyledMessageBoxAvatar = styled.figure`
  position: absolute;
  z-index: 1;
  bottom: -15px;
  left: -35px;
  -webkit-border-radius: 28px;
  -moz-border-radius: 28px;
  border-radius: 28px;
  width: 30px;
  height: 30px;
  overflow: hidden;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: ${themeGet('colors.primary', '#009E7F')} solid 2px;
  img {
    width: 100%;
    border-radius: 30px;
    height: auto;
  }
`;

export const StyledMessage = styled.div`
  clear: both;
  float: left;
  min-width: 5rem;
  padding: 6px 10px 7px;
  -webkit-border-radius: 20px 20px 20px 0;
  -moz-border-radius: 20px 20px 20px 0;
  border-radius: 20px 20px 20px 0;
  background: #eee; /*rgba(0, 0, 0, 0.1);*/
  margin: 8px 0;
  font-size: 14px;
  line-height: 1.4;
  margin-left: 35px;
  position: relative;
  border: 1px solid #ccc;
  margin-bottom: 1.5rem;
  text-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  &:last-child {
    margin-bottom: 30px;
  }
`;

export const StyledNewMessage = styled(StyledMessage)`
  transform: scale(0);
  transform-origin: 0 0;
  animation: ${BounceAnimation} 500ms linear both;
`;

export const StyledPersonalMessage = styled(StyledNewMessage)`
  float: right;
  text-align: right;
  background: linear-gradient(120deg, #ddd, #eee);
  background: #fff;
  border: 1px solid #4a90e2;
  -webkit-border-radius: 20px 20px 0 20px;
  -moz-border-radius: 20px 20px 0 20px;
  border-radius: 20px 20px 0 20px;
`;

export interface LoadingIndicatorProps {
  delay: number;
}
export const MessageLoadingIndicator = styled.div<LoadingIndicatorProps>`
  &::before {
    ${style.ball}
    border: none;
    animation-delay: ${(props) => props.delay}s;
  }
  & > span {
    display: block;
    font-size: 0;
    width: 20px;
    height: 10px;
    position: relative;
    &::before {
      ${style.ball}
      margin-left: -7px;
    }
    &::after {
      ${style.ball}
      margin-left: 7px;
      animation-delay: ${(props) => props.delay}s;
    }
  }
`;

export const StyledCheckmarkContainer = styled.div`
  position: absolute;
  bottom: -20px;
  right: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledMessage_Box = styled.div`
  flex: 0 1 42px;
  width: 90%;
  background: #fff;
  margin: 2px auto;
  padding: 10px;
  position: relative;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  height: 14px;
  border: 1px solid #ccc;
`;

export const StyledMessageInput = styled.textarea`
  background: none;
  border: none;
  outline: none;
  resize: none;

  font-size: 15px;
  height: 24px;
  margin: 0;
  padding-right: 20px;
  width: 265px;
  color: #444;

  &:focus {
    outline: none;
    ::-webkit-input-placeholder {
      color: transparent;
    }
  }
`;

export const StyledMessageBoxSubmit = styled.button`
  position: absolute;
  z-index: 1;
  top: 9px;
  right: 10px;
  color: #4a90e2;
  border: none;
  background: #fff;
  font-size: 12px;
  text-transform: uppercase;
  line-height: 1;
  padding: 6px 10px;
  border-radius: 5px;
  outline: none !important;
  transition: background 0.2s ease;
  cursor: pointer;
  &:hover {
    background: #fff;
    color: #333;
  }
`;

export const Messenger = styled.div`
  opacity: 1;
  -webkit-border-radius: 20px;
  -moz-border-radius: 20px;
  border-radius: 20px;
  height: calc(100% - 60px) !important;
  max-height: 460px !important;
  min-height: 220px !important;
  width: 320px;
  /*  transform: translateY(0);
    -webkit-transform: translateY(0);
    -moz-transform: translateY(0);
  */
  background: rgba(255, 255, 255, 0.9);
  position: fixed;
  right: 20px;
  bottom: 20px;
  margin: auto;
  z-index: 10;
  box-shadow: 2px 10px 40px rgba(22, 20, 19, 0.4);
  /*  transform: translateX(300px);*/
  transition: 0.3s all ease-out 0.1s, transform 0.2s ease-in;
  -webkit-transition: 0.3s all ease-out 0.1s, transform 0.2s ease-in;
  -moz-transition: 0.3s all ease-out 0.1s, transform 0.2s ease-in;

  div {
    font-size: 14px;
    color: #232323;
  }
`;

export const StyledAgentFace = styled.div`
  position: absolute;
  left: 0;
  top: -50px;
  right: 0;
  margin: auto;
  width: 101px;
  height: 50px;
  background: transparent;
  z-index: 12;
`;

export const StyledMessageBoxMenu = styled.div``;

export interface MessageBoxMenuItemProps {
  isActive: boolean;
}
export const StyledMessageBoxMenuItems = styled.span<MessageBoxMenuItemProps>`
  color: #111;
  z-index: 12;
  font-size: 14px;
  text-align: center;
  position: absolute;
  right: 0;
  top: 40px;
  height: 86px;
  line-height: 40px;
  background: #fff;
  border-left: 1px solid #ccc;
  border-bottom: 1px solid #ccc;
  border-right: 1px solid #ccc;
  width: 48px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  transition: 0.3s all ease-in-out;
  -webkit-transition: 0.3s all ease-in-out;

  opacity: ${(props) => (props.isActive ? 1 : 0)};

  a {
    cursor: pointer;
    text-decoration: none;
    color: #111;
    transition: all 0.3s ease-in-out;

    &:hover {
      color: #4a90e2;
    }
  }
`;

export interface MessageBoxMenuButtonProps {
  onClick: () => void;
  isActive: boolean;
}
export const StyledMessageBoxMenuButton = styled.div<MessageBoxMenuButtonProps>`
  font-size: 30px !important;
  z-index: 12;
  text-align: right;
  color: #333;
  content: '...';
  display: block;
  width: 40px;
  line-height: 25px;
  height: 40px;
  border-top-right-radius: 20px;
  /* border-top-left-radius: 20px; */
  position: absolute;
  right: 0;
  padding-right: 10px;
  cursor: pointer;
  transition: 0.3s all ease-in-out;
  -webkit-transition: 0.3s all ease-in-out;
  background: ${(props) => (props.isActive ? '#ccc' : 'transparent')};
`;

export const StyledChatInner = styled.div`
  position: relative;
  height: 100%;
  max-width: 100%;
  outline: 0;
  direction: ltr;
  padding-left: 0.5rem;
  padding-right: 0.5rem;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const StyledMessageList = styled.div`
  position: relative;
  top: -1px;
  left: 0px;
  margin-right: 0px;
`;
