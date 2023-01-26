import { FaPhoneAlt } from "react-icons/fa"
import { ANDROID_URL, IOS_URL } from "constants"

export default function Footer() {
  return (
    <footer className="py-10 text-white bg-blue-800">
      <div className="grid-flow-col gap-5 mx-10 md:mx-15 xl:mx-40 md:grid auto-cols-fr">
        <div className="col-span-4 mb-8">
          <p>
            Notre équipe spécialisée en addictologie est présente pour répondre
            à toutes vos questions.
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
          <ArrowList
            text="Donnez votre avis"
            link="mailto:ozensemble@fabrique.social.gouv.fr"
          />
          <ArrowList text="Comment ça marche ?" link="/#how-it-works" />
          <ArrowList text="Qui sommes-nous ?" link="/#who-are-we" />
          <ArrowList
            text="Nous contacter ?"
            link="mailto:ozensemble@fabrique.social.gouv.fr"
          />
        </div>
        <div className="col-span-2 mb-8">
          <div className="inline-block">
            <p>Utilités</p>
            <div className="w-4/5 mt-3 mb-5 border-b border-green-300" />
          </div>
          <ArrowList text="Mentions légales" link="/mentions-legales" />
          <ArrowList
            text="Politique de confidentialité"
            link="/politique-confidentialite"
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
                alt=""
              />
            </a>
            <a href={IOS_URL}>
              <img
                className="object-contain"
                src="images/other/app-store-fr.png"
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

const ArrowList = ({ text, link }) => (
  <div className="mb-2">
    <a href={link}>
      <p className="text-sm font-light">→ {text}</p>
    </a>
  </div>
)