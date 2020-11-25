import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { init } from "@socialgouv/matomo-next";

import "bootstrap/dist/css/bootstrap.css";
import "../src/bootstrap-theme.scss";
import "../src/main.scss";

const theme = {
  colors: {},
};

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

class MyApp extends App {
  componentDidMount() {
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <React.Fragment>
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=yes"
          />
          <meta name="description" content="" />
          <meta name="author" content="" />
        </Head>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default MyApp;
