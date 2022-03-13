import themeGet from '@styled-system/theme-get';
import styled from 'styled-components';
import {
  TypographyProps,
  ColorProps,
  typography,
  color,
  compose,
} from 'styled-system';

type TypogProps = TypographyProps & ColorProps;
const typoVals = compose(typography, color);

export const Title = styled.h1<TypogProps>`
  font-size: ${(props) => props.theme.fontSizes[5]};
  font-weight: ${themeGet('fontWeights.semiBold')};
  line-height: ${themeGet('lineHeights.title')};
  letter-spacing: ${themeGet('letterSpacings.tracked')};
  color: ${themeGet('colors.primary_text')};
  font-family: ${themeGet('fonts.header')};
  ${typoVals}
`;

export const Subtitle = styled.h2<TypogProps>`
  font-size: ${(props) => props.theme.fontSizes[4]};
  font-weight: ${themeGet('fontWeights.normal')};
  line-height: ${themeGet('lineHeights.title')};
  letter-spacing: ${themeGet('letterSpacings.tracked')};
  color: ${themeGet('colors.primary_text')};
  font-family: ${themeGet('fonts.header')};
  ${typoVals}
`;

export const HeadingTertiary = styled.h3<TypogProps>`
  font-size: ${(props) => props.theme.fontSizes[3]};
  font-weight: ${themeGet('fontWeights.semiBold')};
  line-height: ${themeGet('lineHeights.title')};
  letter-spacing: ${themeGet('letterSpacings.tracked')};
  color: ${themeGet('colors.primary_text')};
  font-family: ${themeGet('fonts.header')};
  ${typoVals}
`;

export const Text = styled.p<TypogProps>`
  font-size: ${(props) => props.theme.fontSizes[2]};
  font-weight: ${themeGet('fontWeights.normal')};
  line-height: ${themeGet('lineHeights.copy')};
  letter-spacing: ${themeGet('letterSpacings.normal')};
  color: ${themeGet('colors.primary_text')};
  font-family: ${themeGet('fonts.primary')};
  ${typoVals}
`;

export const Link = styled.a<TypogProps>`
  font-size: ${(props) => props.theme.fontSizes[2]};
  font-weight: ${themeGet('fontWeights.normal')};
  line-height: ${themeGet('lineHeights.copy')};
  letter-spacing: ${themeGet('letterSpacings.normal')};
  color: ${themeGet('colors.primary_text')};
  font-family: ${themeGet('fonts.primary')};
  ${typoVals}
`;

export const Sub = styled.sub<TypogProps>`
  font-size: ${(props) => props.theme.fontSizes[0]};
  font-weight: ${themeGet('fontWeights.light')};
  line-height: ${themeGet('lineHeights.sm')};
  letter-spacing: ${themeGet('letterSpacings.tight')};
  color: ${themeGet('colors.primary_text')};
  font-family: ${themeGet('fonts.primary')};
  ${typoVals}
`;
