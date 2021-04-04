import 'bootstrap/dist/css/bootstrap.min.css';
import 'styles/index.scss';
import 'highlight.js/styles/darcula.css';

import React from 'react';
import { useRouter } from 'next/router';
import { createTheme } from 'src/theme';
import useSettings from 'src/hooks/useSettings';
import { jssPreset, StylesProvider, ThemeProvider } from '@material-ui/core';
import rtl from 'jss-rtl';
import { create } from 'jss';
import CssBaseline from '@material-ui/core/CssBaseline/CssBaseline';

import Head from 'next/head';
import { THEMES } from 'src/constants';

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

function MyApp({ Component, pageProps }) {
  const settings = useSettings();

  const router = useRouter();
  const theme = createTheme({
    direction: settings?.direction,
    // responsiveFontSizes: settings.responsiveFontSizes,
    theme: router.pathname === '/' ? THEMES.LIGHT : THEMES.LIGHT,
  });
  return (
    <>
      <Head>
        <meta
          content="minimum-scale=1, initial-scale=1, width=device-width"
          name="viewport"
        />
      </Head>
      <ThemeProvider theme={theme}>
        <StylesProvider jss={jss}>
          <CssBaseline />
          <Component {...pageProps} />
        </StylesProvider>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
