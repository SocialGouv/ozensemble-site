import { Html, Head, Main, NextScript, DocumentProps } from "next/document"
import { dsfrDocumentApi } from "./_app"
import React from "react"

const { getColorSchemeHtmlAttributes, augmentDocumentForDsfr } = dsfrDocumentApi

export default function Document(props) {
  return (
    <Html {...getColorSchemeHtmlAttributes(props)}>
      <Head />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

augmentDocumentForDsfr(Document)
