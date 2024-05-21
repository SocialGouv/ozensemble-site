import Matomo from "~/components/Matomo"
import "~/style/default.css"
import { ANDROID_APP_ID, IOS_APP_ID, ROOT_URL } from "~/constants"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Oz Ensemble",
  metadataBase: new URL("https://ozensemble.fabrique.social.gouv.fr/"),
  description:
    "Oz Ensemble est une application mobile pour maitriser sa consommation d'alcool. Ce dispositif expérimental créé par le Dr Géraldine Talbot, médecin addictologue de l'association CaPASSCité, financé par l'ARS, la MILDECA et la DINUM, en collaboration avec la Fabrique numérique des ministères sociaux.",
  openGraph: {
    type: "article",
    locale: "fr_FR",
    url: `${ROOT_URL}/download`,
    title: "Oz Ensemble",
    description:
      "Oz Ensemble est une application mobile pour maitriser sa consommation d'alcool. Ce dispositif expérimental créé par le Dr Géraldine Talbot, médecin addictologue de l'association CaPASSCité, financé par l'ARS, la MILDECA et la DINUM, en collaboration avec la Fabrique numérique des ministères sociaux.",
    siteName: "Oz Ensemble",
    images: [
      {
        url: "/images/logo_oz.png",
        alt: "Oz Ensemble logo",
      },
    ],
  },
  alternates: {
    canonical: ROOT_URL,
  },
  icons: {
    icon: "/images/logo_oz.png",
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
  return (
    <html lang="fr">
      <body>
        <div className="mt-[70px]">{children}</div>
        <Matomo />
      </body>
    </html>
  )
}
