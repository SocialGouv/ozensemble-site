import { DsfrProvider } from "@codegouvfr/react-dsfr/next-appdir/DsfrProvider"

export default function Layout({ children }) {
  const lang = "fr"
  return <DsfrProvider lang={lang}>{children}</DsfrProvider>
}
