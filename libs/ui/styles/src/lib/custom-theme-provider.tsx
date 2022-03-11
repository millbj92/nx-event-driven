import { themeGet } from '@styled-system/theme-get';
import React from 'react';
import { Helmet } from 'react-helmet';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

export interface DesignSystemComponentsProps {
  children: string | React.ReactNode;
  theme: Record<string, unknown>;
}

export function CustomThemeProvider(props: DesignSystemComponentsProps) {
  const GlobalStyles = createGlobalStyle`
      body {
        background: ${themeGet('colors.background')};
        color: ${themeGet('colors.primary_text')};
        font-family: ${themeGet('fonts.primary')};
      }
      html, body {
          height: 100%;
          width: 100%;
          padding: 0;
          margin: 0;
      }

      body, #root {
          height: 100%;
          display: flex;
          flex-direction: column;
      }

      h1,
      h2,
      h3 {
        font-family: ${themeGet('fonts.header')};
      }
  `;

  return (
    <ThemeProvider theme={props.theme}>
      <>
        <Helmet>
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link
            rel="preconnect"
            href="https://fonts.gstatic.com"
            crossOrigin="*"
          />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Playfair+Display:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
        </Helmet>
        <GlobalStyles />
        {props.children}
      </>
    </ThemeProvider>
  );
}

export default CustomThemeProvider;
