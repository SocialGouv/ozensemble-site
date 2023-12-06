import { useState } from "react"
import { FaPhoneAlt } from "react-icons/fa"
import {
  ANDROID_URL,
  IOS_URL,
  INSTAGRAM_URL,
  FACEBOOK_URL,
  TWITTER_URL,
  LINKEDIN_URL,
} from "../constants"
import ContactPopup from "./ContactPopup"

export default function Footer() {
  const [showContactPopup, setShowContactPopup] = useState(false)

  return (
    <>
      {/* Popup and overlay on top of the page */}
      <ContactPopup
        showPopup={showContactPopup}
        setShowPopup={setShowContactPopup}
      />

      <footer className="py-10 text-white bg-oz-blue">
        <div className="grid-flow-col gap-5 mx-10 md:mx-15 xl:mx-40 md:grid auto-cols-fr">
          <div className="col-span-4 mb-8">
            <p>
              Notre équipe spécialisée en addictologie est présente pour
              répondre à toutes vos questions.
            </p>
            <p className="my-5 text-sm font-light">
              Du lundi au vendredi de 9h à 13h et de 14h à 18h
            </p>
            <a
              href="tel:+33148571421"
              className="flex items-center gap-3 p-3 px-6 border border-white rounded-full w-min"
            >
              <FaPhoneAlt />
              <p className="text-sm font-light">
                01{"\u00A0"}48{"\u00A0"}57{"\u00A0"}14{"\u00A0"}21
              </p>
            </a>
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
            <ArrowList text="Comment ça marche ?" link="/#how-it-works" />
            <ArrowList text="Qui sommes-nous ?" link="/#who-are-we" />
            {/* <ArrowList
              text="Nous contacter ?"
              link="mailto:ozensemble@fabrique.social.gouv.fr"
            /> */}
            <button
              className="block underline text-sm font-light mb-2 cursor-pointer"
              onClick={() => setShowContactPopup(true)}
            >
              → Nous contacter ?
            </button>
            <ArrowList text="Kit média" link="/#kit-media" />
          </div>
          <div className="col-span-2 mb-8">
            <div className="inline-block">
              <p>Utilités</p>
              <div className="w-4/5 mt-3 mb-5 border-b border-green-300" />
            </div>
            <ArrowList
              text="Mentions légales"
              link="/files/25012023-Oz_Ensemble-Mentions_legales_site_V2.pdf"
            />
            <ArrowList
              text="Politique de confidentialité"
              link="/files/25012023-Oz_Ensemble-Politique_de_confidentialite_site_V3.pdf"
            />
            <ArrowList text="Statistiques" link="/stats" />
            <p className="mt-5 text-sm font-light">
              Accessibilité : non conforme
            </p>
          </div>
          <div className="max-w-md col-span-4 mb-8 lg:col-span-3">
            <div className="inline-block">
              <p>Téléchargez l'application Oz Ensemble</p>
              <div className="w-1/4 mt-3 mb-5 border-b border-green-300" />
            </div>
            <div className="grid grid-flow-col gap-6 max-w-md">
              <a href={ANDROID_URL}>
                <img
                  className="object-contain"
                  src="images/other/google-play-fr.png"
                  alt="Disponible sur Google Play"
                />
              </a>
              <a href={IOS_URL}>
                <img
                  className="object-contain"
                  src="images/other/app-store-fr.png"
                  alt="Télécharger dans l'App Store"
                />
              </a>
            </div>
            <div className="inline-block mt-5">
              <p>Suivez-nous</p>
              <div className="w-1/4 mt-3 mb-5 border-b border-green-300" />
            </div>
            <div className="flex gap-6">
              <a href={INSTAGRAM_URL}>
                <img
                  className="object-contain w-[40px]"
                  src="images/icon/instagram.svg"
                  alt="Vers profil instagram"
                />
              </a>
              <a href={FACEBOOK_URL}>
                <img
                  className="object-contain w-[40px]"
                  src="images/icon/facebook.svg"
                  alt="Vers profil facebook"
                />
              </a>
              <a href={TWITTER_URL}>
                <img
                  className="object-contain w-[40px]"
                  src="images/icon/X.svg"
                  alt="Vers profil twitter"
                />
              </a>
              <a href={LINKEDIN_URL}>
                <img
                  className="object-contain w-[40px]"
                  src="images/icon/linkedin.svg"
                  alt="Vers profil linkedin"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="text-center mb-1 mx-[10%]">
          <p>La Fabrique Numérique des Ministères Sociaux © 2023</p>
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
