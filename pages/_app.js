import "tailwindcss/tailwind.css"
import "../style/default.css"

import { init } from "@socialgouv/matomo-next"
import { ANDROID_APP_ID, IOS_APP_ID, ROOT_URL } from "constants"
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
          <title key="index">Oz Ensemble</title>
          <link rel="shortcut icon" href="/images/logo_oz.png" />
          <meta property="og:title" content="Oz Ensemble" key="index" />
          <meta
            name="description"
            content="Oz Ensemble est une application mobile pour maitriser sa consommation d'alcool. Ce dispositif expérimental créé par le Dr Géraldine Talbot, médecin addictologue de l'association CaPASSCité, financé par l'ARS, la MILDECA et la DINUM, en collaboration avec la Fabrique du numérique des ministères sociaux."
            key="index"
          />
          <meta
            property="og:description"
            content="Oz Ensemble est une application mobile pour maitriser sa consommation d'alcool. Ce dispositif expérimental créé par le Dr Géraldine Talbot, médecin addictologue de l'association CaPASSCité, financé par l'ARS, la MILDECA et la DINUM, en collaboration avec la Fabrique du numérique des ministères sociaux."
            key="index"
          />
          <meta charset="UTF-8" />
          <title key="download">Télécharger OzEnsemble</title>
          <meta property="og:url" content={`${ROOT_URL}/download`} />
          <meta property="og:image" content="/images/logo_oz.png" />
          <meta property="og:type" content="article" />
          <meta property="al:ios:app_store_id" content={IOS_APP_ID} />
          <meta property="al:ios:app_name" content="Oz Ensemble" />
          <meta property="al:android:app_name" content="Oz Ensemble" />
          <meta property="al:android:package" content={ANDROID_APP_ID} />
          <meta property="al:web:url" content={ROOT_URL} />
          <meta property="al:web:should_fallback" content="false" />
        </Head>
        <div className="mt-[70px]">
          <Component {...pageProps} />
        </div>
      </>
    )
  }
}

export default MyApp
