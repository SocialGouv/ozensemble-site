import Matomo from "~/components/Matomo"
import "~/style/default.css"
import { ANDROID_APP_ID, IOS_APP_ID, ROOT_URL } from "~/constants"
import type { Metadata } from "next"
import { DsfrHead } from "@codegouvfr/react-dsfr/next-appdir/DsfrHead"
import { DsfrProvider } from "@codegouvfr/react-dsfr/next-appdir/DsfrProvider"
import { getHtmlAttributes } from "@codegouvfr/react-dsfr/next-appdir/getHtmlAttributes"
import { StartDsfr } from "./StartDsfr"
import { defaultColorScheme } from "./defaultColorScheme"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Oz Ensemble",
  metadataBase: new URL("https://ozensemble.fabrique.social.gouv.fr/"),
  description:
    "Oz Ensemble est une application mobile pour maitriser sa consommation d'alcool. Ce dispositif expérimental créé par le Dr Géraldine Talbot, médecin addictologue de l'association CaPASSCité, financé par l'ARS, la MILDECA et la DINUM, en collaboration avec la Fabrique numérique des ministères sociaux.",
  openGraph: {
    type: "article",
    locale: "fr_FR",
    url: `${ROOT_URL}/download`,
  },
  alternates: {
    canonical: ROOT_URL,
  },
  appLinks: {
    ios: {
      url: `${ROOT_URL}/download`,
      app_store_id: IOS_APP_ID,
    },
    android: {
      package: ANDROID_APP_ID,
      app_name: "Oz Ensemble",
    },
    web: {
      url: ROOT_URL,
      should_fallback: false,
    },
  },
  applicationName: "Oz Ensemble",
  appleWebApp: {
    capable: true,
    title: "Oz Ensemble",
  },
}

export default function RootLayout({ children }) {
  const lang = "fr"
  return (
    <html {...getHtmlAttributes({ defaultColorScheme, lang })}>
      <head>
        <StartDsfr />
        <DsfrHead
          Link={Link}
          preloadFonts={[
            //"Marianne-Light",
            //"Marianne-Light_Italic",
            "Marianne-Regular",
            //"Marianne-Regular_Italic",
            "Marianne-Medium",
            //"Marianne-Medium_Italic",
            "Marianne-Bold",
            //"Marianne-Bold_Italic",
            //"Spectral-Regular",
            //"Spectral-ExtraBold"
          ]}
        />
      </head>
      <body>
        {children}
        <Matomo />
      </body>
    </html>
  )
}
