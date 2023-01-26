import App from "next/app";
import { init } from "@socialgouv/matomo-next";
import Head from "next/head";

import "tailwindcss/tailwind.css";
import "style/default.css";

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

class MyApp extends App {
  componentDidMount() {
    init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID });
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <Head>
          <title>Oz Ensemble</title>
          <link rel="shortcut icon" href="/images/logo_oz.png" />
        </Head>
        <div className="mt-[70px]">
          <Component {...pageProps} />
        </div>
      </>
    );
  }
}

export default MyApp;
