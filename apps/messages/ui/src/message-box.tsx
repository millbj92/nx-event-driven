import themeGet from '@styled-system/theme-get';
import styled from 'styled-components';

export const StyledMessageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;

  border-radius: 12px 12px 0 0;
  background-color: #f5f5f5;
  box-shadow: ${themeGet('shadows.elevation_1')};
  border: 1px solid ${themeGet('colors.primary_light')};
  padding: 15px;
  width: 8rem;
`;

export const StyledMessageBoxContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledMessageBoxTitle = styled.div`
  color: ${themeGet('colors.text.primary')};
  font-size: ${themeGet('fontSizes.1')};
  font-weight: ${themeGet('fontWeights.bold')};
`;

export const StyledMessageBoxText = styled.div`
  flex: 1;
`;

export const MessageBox = ({
  children,
  title,
  ...props
}: {
  children?: React.ReactNode;
  title?: string;
}) => (
  <StyledMessageBox {...props}>
    <StyledMessageBoxContent>
      <StyledMessageBoxText>
        {title && <StyledMessageBoxTitle>{title}</StyledMessageBoxTitle>}
      </StyledMessageBoxText>
    </StyledMessageBoxContent>
  </StyledMessageBox>
);
