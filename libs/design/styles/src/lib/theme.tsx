import themeGet from '@styled-system/theme-get';
import { ThemeProps } from 'styled-components';
import { Theme } from 'styled-system';

export const BaseTheme: Theme = {
  space: [0, 4, 8, 16, 32, 64, 128, 256, 512],
  colors: {
    primary: '#3448c5',
    primary_dark: '#0f1a61',
    primary_light: '#6678ec',
    secondary: '#d66853',
    secondary_dark: '#a63d2d',
    secondary_light: '#f28f6c',
    primary_text: '#171123',
    secondary_text: '#757575',
    white: '#FFFFFF',
    background: '#e8e9eb',
    accent: '#e20c69',
    gray: '#9b9b9b',
    gray_light: '#f5f5f5',
    light_text: '#fafafa',

    purple: '#553c87',
  },
  fonts: {
    primary: 'Playfair Display, sans-serif',
    header: 'Lato, sans-serif',
  },
  fontSizes: [
    '12px',
    '14px',
    '16px',
    '24px',
    '32px',
    '48px',
    '64px',
    '96px',
    '128px',
  ],
  fontWeights: {
    light: 300,
    normal: 400,
    medium: 500,
    semiBold: 600,
    bold: 700,
    black: 900,
  },
  lineHeights: {
    sm: 0.75,
    solid: 1,
    title: 1.25,
    copy: 1.5,
  },
  letterSpacings: {
    normal: 'normal',
    tracked: '0.1em',
    tight: '-0.05em',
    mega: '0.25em',
  },
  radii: {
    default: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    circle: '50%',
  },
  shadows: {
    elevation_1: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    elevation_2: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    elevation_3: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    elevation_4: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)',
    elevation_5: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
    container:
      '0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1)',
    text_sm: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)',
    text_md: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)',
    text_lg: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
  },
  buttons: {
    primary: {
      color: 'white',
      backgroundColor: `${themeGet('colors.primary')}`,
    },
    secondary: {
      color: 'white',
      backgroundColor: `${themeGet('colors.secondary')}`,
    },
    accent: {
      color: 'white',
      backgroundColor: `${themeGet('colors.accent')}`,
    },
  },
  zIndices: {
    mobileStepper: 1000,
    speedDial: 1050,
    appBar: 1100,
    drawer: 1200,
    modal: 1300,
    snackbar: 1400,
    tooltip: 1500,
    godMode: 9999,
  },
};

export default BaseTheme;
