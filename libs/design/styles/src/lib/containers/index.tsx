import themeGet from '@styled-system/theme-get';
import styled from 'styled-components';
import {
  color,
  ColorProps,
  compose,
  layout,
  LayoutProps,
  space,
  SpaceProps,
  typography,
  TypographyProps,
} from 'styled-system';

import { rgba } from 'polished';

const containerProps = compose(layout, space, color);
type ContainerProps = LayoutProps & SpaceProps & ColorProps;

export const GlassmorphismContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 60%;
  padding: 3.5rem;
  border-radius: ${themeGet('radii.md')};

  background: ${(props) => rgba(props.theme.colors.primary, 0.3)};
  -webkit-backdrop-filter: blur(2px);
  backdrop-filter: blur(2px);
  border: 1px solid ${(props) => rgba(props.theme.colors.primary_light, 0.4)};
  ${containerProps};
`;

export const Container = styled.div<ContainerProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3.5rem;
  width: 50%;
  border-radius: ${themeGet('radii.md')};
  ${containerProps};
`;

const titleProps = compose(space, typography);

export const ContainerTitle = styled.div<TypographyProps & SpaceProps>`
  font-size: 2em;
  ${titleProps};
`;
