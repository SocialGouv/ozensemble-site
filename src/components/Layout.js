import React from "react";
import Head from "next/head";
import { Container } from "react-bootstrap";

import { Nav } from "./Nav";
import { Header } from "./Header";
import { Footer } from "./Footer";

export function Layout({ showHeader, children }) {
  return (
    <React.Fragment>
      <Head>
        <title>Mon suivi Psy</title>
      </Head>
      <Nav />
      {showHeader && <Header />}
      <Container>{children}</Container>
      <Footer />
    </React.Fragment>
  );
}
