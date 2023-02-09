import "tailwindcss/tailwind.css"
import "../style/default.css"

import { init } from "@socialgouv/matomo-next"
import App from "next/app"
import Head from "next/head"

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID

class MyApp extends App {
  componentDidMount() {
    init({ siteId: MATOMO_SITE_ID, url: MATOMO_URL })
  }
  render() {
    const { Component, pageProps } = this.props
    return (
      <>
        <Head>
          <title>Oz Ensemble</title>
          <link rel="shortcut icon" href="/images/logo_oz.png" />
          <meta
            name="description"
            content="Oz Ensemble est une application mobile pour maitriser sa consommation d’alcool. Ce dispositif expérimental créé par le Dr Géraldine Talbot, médecin addictologue de l'association CaPASSCité, financé par l'ARS, la MILDECA et la DINUM, en collaboration avec la Fabrique du numérique des ministères sociaux."
          />
        </Head>
        <div className="mt-[70px]">
          <Component {...pageProps} />
        </div>
      </>
    )
  }
}

export default MyApp
