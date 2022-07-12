import React from "react"
import Head from "next/head"
import { Layout } from "../src/components/Layout"
import { Container } from "react-bootstrap"

export default function Mentions() {
  return (
    <Layout>
      <Head>
        <title>Statistiques</title>
      </Head>
      <Container>
         <iframe
          src="https://matomo-metabase-ozensemble.fabrique.social.gouv.fr/public/dashboard/217417aa-20f3-4dae-acd8-7230ba3c8862"
          frameBorder="0"
          title="MonPsy Santé, statistiques"
          width="90%"
          height="600"
          style={{ display: "block", margin: "0 auto", padding: "2rem 0" }}
          allowTransparency
        />
      </Container>
    </Layout>
  )
}
