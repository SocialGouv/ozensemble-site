import Footer from "~/components/Footer"
import Navigation from "~/components/Navigation"
export const metadata = {
  title: "Plan du site | Oz Ensemble",
  description: "Plan du site de l'application Oz Ensemble",
}

export default function Plan() {
  return (
    <div className="mt-[70px]">
      <Navigation />
      <div className="mt-30 lg:mt-40">
        <h1 className="mb-2 text-3xl text-center font-extrabold lg:text-5xl text-oz-blue">
          Plan du site
        </h1>
        <div className="flex flex-col gap-9 pl-40 py-12">
          <ArrowList text="Accueil" link="/" />
          <div className="flex flex-col gap-6 px-12">
            <SubArrowList text="Comment ça marche ?" link="/#how-it-works" />
            <SubArrowList text="Qui sommes-nous ?" link="/#who-are-we" />
          </div>
          <ArrowList text="Blog" link="/blog" />
          <ArrowList text="Ils parlent de nous" link="/partners" />
          <h3 className="text-2xl text-[#115F3D]">Utilités</h3>
          <div className="flex flex-col gap-6 px-12">
            <SubArrowList
              text="Mentions légales"
              link="/files/25012023-Oz_Ensemble-Mentions_legales_site_V2.pdf"
            />
            <SubArrowList
              text="Politique de confidentialité"
              link="/files/25012023-Oz_Ensemble-Politique_de_confidentialite_site_V3.pdf"
            />
            <SubArrowList text="Statistiques" link="/stats" />
            <SubArrowList
              text="Accessibilité : non conforme"
              link="/accessibility"
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
const ArrowList = ({ text, link }) => (
  <div className="mb-2 items-start">
    <a href={link}>
      <p className="text-2xl underline text-[#115F3D]">→ {text}</p>
    </a>
  </div>
)
const SubArrowList = ({ text, link }) => (
  <div className="mb-2 items-start">
    <a href={link}>
      <p className="text-xl font-light underline text-[#115F3D]">→ {text}</p>
    </a>
  </div>
)
