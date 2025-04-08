import Matomo from "~/components/Matomo"
import "~/style/default.css"
import { ROOT_URL } from "~/constants"
import type { Metadata } from "next"
// import { getHtmlAttributes } from "@codegouvfr/react-dsfr/next-appdir/getHtmlAttributes"
// import { defaultColorScheme } from "./defaultColorScheme"

export const metadata: Metadata = {
  title: "Oz Ensemble",
  metadataBase: new URL("https://ozensemble.fabrique.social.gouv.fr/"),
  description:
    "Oz Ensemble fut une application mobile pour maitriser sa consommation d'alcool. Ce dispositif expérimental créé par le Dr Géraldine Talbot, médecin addictologue de l'association CaPASSCité, fut financé par l'ARS, la MILDECA et la DINUM, en collaboration avec la Fabrique numérique des ministères sociaux.",
  openGraph: {
    type: "article",
    locale: "fr_FR",
    url: ROOT_URL,
  },
  alternates: {
    canonical: ROOT_URL,
  },
}

export default function RootLayout({ children }) {
  const lang = "fr"
  return (
    <html
      //  {...getHtmlAttributes({ defaultColorScheme, lang })} // for dark mode
      data-fr-scheme="light" // we don't want dark mode
      lang={lang}
    >
      <body>
        {children}
        <Matomo />
      </body>
    </html>
  )
}
