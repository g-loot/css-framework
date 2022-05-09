import { theme, ThemeProvider, GlobalStyle } from '@g-loot/component-library';
import InternalGlobalStyle from '../globalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <InternalGlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
