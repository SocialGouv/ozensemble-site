"use client"
import { ROOT_URL } from "~/constants"
import { Header } from "@codegouvfr/react-dsfr/Header"
import { fr } from "@codegouvfr/react-dsfr"
import { Badge } from "@codegouvfr/react-dsfr/Badge"
import { Button } from "@codegouvfr/react-dsfr/Button"
import { Card } from "@codegouvfr/react-dsfr/Card"
import { Quote } from "@codegouvfr/react-dsfr/Quote"
import { Footer } from "@codegouvfr/react-dsfr/Footer"
import testimonies from "./testimonies"

export default function Page() {
  function onDownloadClick() {
    function redirect() {
      window.location.replace(ROOT_URL)
    }
    redirect()
  }

  return (
    <>
      <Header
        brandTop={
          <>
            MINISTÈRE
            <br />
            DU TRAVAIL,
            <br />
            DE LA SANTÉ
            <br />
            ET DE LA SOLIDARITÉ
          </>
        }
        operatorLogo={{
          alt: "Logo de la Fabrique Numérique des Ministères sociaux",
          imgUrl: "images/logo_fabrique.png",
          orientation: "horizontal",
          linkProps: {
            href: "https://www.fabrique.social.gouv.fr/",
            title: "La Fabrique Numérique des Ministères sociaux",
          },
        }}
        homeLinkProps={{
          href: "/",
          title: "Oz Ensemble",
        }}
        id="fr-header-header-with-quick-access-items"
        serviceTagline="L'application mobile qui a aidé à maitriser sa consommation d'alcool jusqu'en mai 2025"
        serviceTitle="Oz Ensemble"
      />
      <Footer accessibility="non compliant" />
    </>
  )
}
