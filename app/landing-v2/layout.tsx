import { DsfrHead } from "@codegouvfr/react-dsfr/next-appdir/DsfrHead"
import { DsfrProvider } from "@codegouvfr/react-dsfr/next-appdir/DsfrProvider"
import { getHtmlAttributes } from "@codegouvfr/react-dsfr/next-appdir/getHtmlAttributes"
import { StartDsfr } from "~/app/StartDsfr"
import { defaultColorScheme } from "~/app/defaultColorScheme"
import Link from "next/link"

export default function RootLayout({ children }) {
  const lang = "fr"
  return <DsfrProvider lang={lang}>{children}</DsfrProvider>
}
