import themeGet from '@styled-system/theme-get';
import {
  HeartIcon,
  NotificationBell,
  NotificationBellInverted,
} from '@super-rad-poc/desgn/icons';
import styled from 'styled-components';
import { flexDirection } from 'styled-system';

export const StyledMessageBar = styled.div`
  background-color: #f5f5f5;
  border-radius: 4px;
  box-shadow: ${themeGet('shadows.elevation_1')};
  border-top: 1px solid ${themeGet('colors.primary')};

  width: 100%;
`;

export const StyledMessageBarContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledMessageBarIcon = styled.div`
  margin-right: 10px;
`;

export const StyledMessageBarText = styled.div`
  flex: 1;
`;

export const StyledMessageBarClose = styled.div`
  cursor: pointer;
  margin-left: auto;
`;

export const StyledMessageBarCloseIcon = styled.div`
  color: ${themeGet('colors.text.secondary')};
  font-size: ${themeGet('fontSizes.1')};
  margin-right: 5px;
`;

export const StyledMessageBarCloseText = styled.div`
  color: ${themeGet('colors.text.secondary')};
  font-size: ${themeGet('fontSizes.1')};
`;

export const StyledMessageBarTitle = styled.div`
  color: ${themeGet('colors.text.primary')};
  font-size: ${themeGet('fontSizes.1')};
  font-weight: ${themeGet('fontWeights.bold')};
`;

export const StyledMessageBarMessages = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledMessageBarToolbar = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 2px;
`;

export const MessageBar = ({
  children,
  title,
  ...props
}: {
  children?: React.ReactNode;
  title?: string;
}) => (
  <StyledMessageBar {...props}>
    <StyledMessageBarContent>
      <StyledMessageBarText>
        <StyledMessageBarToolbar>
          <NotificationBell />
        </StyledMessageBarToolbar>
      </StyledMessageBarText>
      <StyledMessageBarMessages>{children}</StyledMessageBarMessages>
    </StyledMessageBarContent>
  </StyledMessageBar>
);
