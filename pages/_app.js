import "../assets/styles/globals.css";

import App from 'next/app';
import React from 'react';
import SiteLayout from '../components/SiteLayout';
import { PrototypeProvider } from "../contexts/prototype";

class MyApp extends App {
  render() {
    const { Component, pageProps, router } = this.props

    const getLayout =
      Component.getLayout || (page => <SiteLayout><PrototypeProvider>{page}</PrototypeProvider></SiteLayout>)

    return getLayout(<Component {...pageProps} />)
  }
}

export default MyApp