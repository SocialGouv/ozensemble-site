import { DsfrProvider } from "@codegouvfr/react-dsfr/next-appdir/DsfrProvider"
import Head from "next/head"
import { StartDsfr } from "~/app/StartDsfr"
import { DsfrHead } from "@codegouvfr/react-dsfr/next-appdir/DsfrHead"
import Link from "next/link"

/*
Note: normally we can't use <Head> with next 14
but here we don't want to use react dsfr in our whole appn because it's breaking all the styles
so we use it only in this nested layout

this breaks the pattern for which it was designed so we need to
- use <Head>
- patch package @codegouvfr/react-dsfr


*/
export default function Layout({ children }) {
  const lang = "fr"
  return (
    <>
      <Head>
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
      </Head>
      <DsfrProvider lang={lang}>{children}</DsfrProvider>
    </>
  )
}
