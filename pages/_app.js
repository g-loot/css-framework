import "../assets/styles/globals.css";

import App from 'next/app';
import React from 'react';
import SiteLayout from '../components/SiteLayout';

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props

    const getLayout =
      Component.getLayout || (page => <SiteLayout>{page}</SiteLayout>)

    return getLayout(<Component {...pageProps} />)
  }
}

export default MyApp