import "../assets/styles/globals.css";

import InternalGlobalStyle from '../globalStyle';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <InternalGlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
