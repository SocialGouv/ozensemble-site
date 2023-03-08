import Head from "next/head"

import {
  ANDROID_APP_ID,
  ANDROID_URL,
  IOS_APP_ID,
  IOS_URL,
  ROOT_URL,
} from "../constants"

// ANDROID_URL
// IOS_URL

const download = () => {
  return (
    <Head>
      <meta charset="UTF-8" />
      <title>Télécharger OzEnsemble</title>
      <meta
        property="og:title"
        content="Télécharger OzEnsemble"
        key="download"
      />
      <meta
        name="description"
        content="Télécharger Oz Ensemble, l'une application mobile pour maitriser sa consommation d'alcool."
        key="download"
      />
      <meta
        property="og:description"
        content="Télécharger Oz Ensemble, l'une application mobile pour maitriser sa consommation d'alcool."
        key="download"
      />
      <meta property="og:image" content="/images/logo_oz.png" />
      <meta property="og:type" content="article" />
      {/* <meta property="fb:app_id" content="{FACEBOOK_APP_ID}" /> */}
      {/* <meta property="al:ios:url" content="myapp://element/{ELEMENT_ID}" /> */}
      <meta property="al:ios:app_store_id" content={IOS_APP_ID} />
      <meta property="al:ios:app_name" content="Oz Ensemble" />
      {/* <meta property="al:android:url" content="myapp://element/{ELEMENT_ID}" /> */}
      <meta property="al:android:app_name" content="Oz Ensemble" />
      <meta property="al:android:package" content={ANDROID_APP_ID} />
      <meta property="al:web:url" content={ROOT_URL} />
      <meta property="al:web:should_fallback" content="false" />
      <script
        dangerouslySetInnerHTML={{
          __html: `
  function redirect() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var ios = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    if (ios) {
      // window.location = myapp://element/{ELEMENT_ID};
      window.setTimeout(() => {
        window.location.replace('${IOS_URL}');
      }, 25)
      return
    }
    var android = /android/i.test(userAgent);
    if (android) {
      // window.location = myapp://element/{ELEMENT_ID};
      window.setTimeout(() => {
        window.location.replace('${ANDROID_URL}');
      }, 25)
      return
    }
    window.location.replace('${ROOT_URL}')
  }
  redirect()
`,
        }}
      />
    </Head>
  )
}

export default download
