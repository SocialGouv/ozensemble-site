import { Html, Head, Main, NextScript } from "next/document"
import { dsfrDocumentApi } from "./_app"

const { getColorSchemeHtmlAttributes, augmentDocumentForDsfr } = dsfrDocumentApi

export default function Document(props) {
  return (
    <Html {...getColorSchemeHtmlAttributes(props)} lang="fr">
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

augmentDocumentForDsfr(Document)
