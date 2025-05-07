"use client"

import { useState, useEffect } from "react"

export default function Footer() {
  const [baseUrl, setBaseUrl] = useState("")

  useEffect(() => {
    if (typeof window !== "undefined") {
      setBaseUrl(window.location.origin)
    }
  }, [])
  return (
    <>
      <footer className="py-10 text-white bg-oz-blue">
        <div className="grid-flow-col gap-5 mx-10 md:mx-15 xl:mx-40 md:grid auto-cols-fr">
          <div className="col-span-4 mb-8">
          </div>
          <div className="col-span-2 mb-8">
            <div className="inline-block">
              <p>Accès rapide</p>
              <div className="w-2/5 mt-3 mb-5 border-b border-green-300" />
            </div>
            {/* <ArrowList
              text="Donnez votre avis"
              link="mailto:ozensemble@fabrique.social.gouv.fr"
            /> */}
            {/* <button
              className="block text-sm font-light mb-2 cursor-pointer"
              onClick={() => setShowContactPopup(true)}
            >
              → Donnez votre avis
            </button> */}
            <ArrowList text="Comment ça marchait ?" link="/#how-it-works" />
            <ArrowList text="Qui étions-nous ?" link="/#who-are-we" />
            {/* <ArrowList
              text="Nous contacter ?"
              link="mailto:ozensemble@fabrique.social.gouv.fr"
            /> */}
            <ArrowList text="Plan du site" link="/plan" />
            <ArrowList text="Ils parlent de nous" link="/partners" />
            <ArrowList text="Kit média" link="/#kit-media" />
          </div>
          <div className="col-span-2 mb-8">
            <div className="inline-block">
              <p>Utilités</p>
              <div className="w-4/5 mt-3 mb-5 border-b border-green-300" />
            </div>
            <ArrowList
              text="Mentions légales"
              link="/files/26022024-Oz_Ensemble-Mentions_legales_site_V4.pdf"
            />
            <ArrowList
              text="Politique de confidentialité"
              link="/files/23012024-Oz_Ensemble-Politique_de_confidentialite_site_V4.pdf"
            />
            <ArrowList text="Statistiques" link="/stats" />

            <ArrowList
              text="Accessibilité : non conforme"
              link="/files/ozensemble_declaration_accessibilite_finale_fixed-min.pdf"
            />
          </div>
          <div className="col-span-2 mb-8">
            <div className="inline-block">
              <p>Liens du gouv</p>
              <div className="w-4/5 mt-3 mb-5 border-b border-green-300" />
            </div>
            <ArrowList text="info.gouv.fr" link="https://www.info.gouv.fr/" />
            <ArrowList
              text="service-public.fr"
              link="https://www.service-public.fr/"
            />
            <ArrowList
              text="legifrance.gouv.fr"
              link="https://www.legifrance.gouv.fr/"
            />
            <ArrowList text="data.gouv.fr" link="https://www.data.gouv.fr/" />
          </div>
        </div>
        <div className="text-center mb-4 mx-[10%]">
          <p>
            La Fabrique Numérique des Ministères Sociaux ©{" "}
            {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </>
  )
}

const ArrowList = ({ text, link }) => (
  <div className="mb-2">
    <a href={link}>
      <p className="text-sm font-light underline">→ {text}</p>
    </a>
  </div>
)
