import Footer from "../components/Footer"
import Navigation, { DownloadPopup } from "../components/Navigation"
import { ANDROID_URL, IOS_URL } from "../constants"
import { useState } from "react"

export default function Index() {
  const [showPopup, setShowPopup] = useState(false)

  return (
    <div className="">
      <DownloadPopup showPopup={showPopup} setShowPopup={setShowPopup} />
      <header className="oz-header-gradient">
        <Navigation showPopup={showPopup} setShowPopup={setShowPopup} />
        <div className="md:flex pt-20 pb-8 md:pb-32 auto-cols-fr md:w-5/6 xl:w-[1100px] mx-[10%] md:m-auto">
          <div className="w-full md:w-1/2 text-center md:text-left flex items-center">
            <div>
              <h1 className="mb-2 text-3xl font-bold lg:text-6xl text-oz-blue">
                Oz Ensemble
              </h1>
              <p className="mb-5 text-lg  leading-normal lg:leading-9 lg:text-2xl">
                L'application mobile pour maitriser sa consommation d'alcool
              </p>
              <div className="grid grid-flow-col gap-3 sm:gap-6 max-w-sm mb-7 mx-auto md:mx-0">
                <a href={ANDROID_URL}>
                  <img
                    className="object-contain w-full"
                    src="images/other/google-play-fr.png"
                    alt=""
                  />
                </a>
                <a href={IOS_URL}>
                  <img
                    className="object-contain w-full"
                    src="images/other/app-store-fr.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="flex flex-col space-y-6 lg:pb-10">
                <Checklist
                  title="100% gratuit, 100 % anonyme et sans création de compte"
                  subtitle="Si vous souhaitez supprimer toutes vos données d’un coup, il vous suffit de désinstaller l’application."
                />
                <Checklist
                  title="Sécurité des données"
                  subtitle="Je reste propriétaire des données saisies, je les partage uniquement si je le souhaite"
                />
                <Checklist
                  title="Simple, rapide et intuitive"
                  subtitle="En quelques secondes par jour, je remplis mon agenda de consommation"
                />
              </div>
            </div>
          </div>
          <div className="items-center justify-center w-2/3 m-auto md:w-1/2 md:flex pl-[5%] mt-14 md:mt-0">
            <img
              src="images/other/hero.png"
              alt=""
              className="max-w-2/3 md:max-w-full md:max-h-[450px] lg:max-h-[600px]"
            />
          </div>
        </div>
      </header>
      <main>
        <div className="py-16 mx-[10%] sm:mx-20">
          <div className="w-full mx-auto xl:w-[1100px]">
            <h3 className="mb-16 text-2xl font-bold text-center lg:text-4xl text-oz-blue">
              L'alcool : un problème de santé publique
            </h3>
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 text-center">
              <div className="px-10 py-8 rounded-3xl bg-oz-gray oz-box-shadow">
                <h4 className="text-oz-green text-4xl font-bold mb-4">
                  5 millions
                </h4>
                <p className="text-black leading-relaxed">
                  de personnes souffrent de dépendance à l’alcool en France.
                </p>
              </div>
              <div className="px-10 py-8 rounded-3xl bg-oz-gray oz-box-shadow">
                <h4 className="text-oz-green text-4xl font-bold mb-4">
                  120 milliards
                </h4>
                <p className="text-base text-black">
                  Le coût social de l’alcool en France chaque année.
                </p>
              </div>
              <div className="px-10 py-8 rounded-3xl bg-oz-gray oz-box-shadow">
                <h4 className="text-oz-green text-4xl font-bold mb-4">2ème</h4>
                <p className="text-base text-black">
                  cause de mortalité prématurée évitable après le tabac.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div
          className="flex flex-col justify-between py-20 mx-[10%] sm:mx-20 xl:mx-auto xl:w-[1100px] lg:py-28 lg:flex-row "
          id="how-it-works"
        >
          <div className="w-full mb-6 lg:mb-0 lg:w-5/12">
            <h3 className="mb-8 text-2xl font-bold leading-normal lg:text-4xl text-oz-blue">
              Oz Ensemble, comment ça marche ?
            </h3>
            <p className="text-base text-black">
              Chez Oz Ensemble, l’objectif est de vous redonner la maîtrise de
              votre consommation d’alcool, tout au long de l’année,{" "}
              <span className="text-oz-pink">
                sans nécessairement promouvoir l’abstinence totale et
                définitive.
              </span>
              <br />
              <br />
              Oz Ensemble s’appuie sur les dernières recommandations de la HAS
              (Haute Autorité de Santé) qui promeut la{" "}
              <span className="text-oz-pink">
                réduction des risques alcool
              </span>{" "}
              par les acteurs de la prévention et du soin en addictologie.
              <br />
              <br />
              Oz Ensemble enrichie également le{" "}
              <span className="text-oz-pink">
                travail de suivi des professionnels
              </span>{" "}
              de santé grâce à l’agenda de consommation que le patient pourra
              vous partager.
            </p>
          </div>
          <div className="w-full space-y-6 lg:w-6/12">
            <Checklist2 content="Évaluez votre situation et le niveau de risque de votre consommation grâce aux tests et bilans." />
            <Checklist2 content="Ajoutez votre consommation et fixez-vous un objectif ainsi vous pourrez suivre vos économies en euros et calories." />
            <Checklist2 content="Réalisez des exercices et découvrez des articles de santé afin d’accroître votre motivation à changer vos habitudes de consommation." />
            <Checklist2 content="Si besoin, vous pouvez prendre un rendez-vous sur Doctolib avec un professionnel de l’addiction de l’équipe Oz Ensemble." />
          </div>
        </div>

        <div className="p-10 lg:pt-16 sm:rounded-xl md:rounded-3xl bg-oz-gray sm:mx-20 xl:mx-auto xl:w-[1100px]">
          <h3 className="text-2xl font-bold text-center lg:text-4xl text-oz-blue mb-14">
            À qui s'adresse Oz Ensemble ?
          </h3>
          <div className="grid grid-cols-1 gap-9 lg:grid-cols-3 text-center">
            <div className="p-5 bg-white rounded-2xl">
              <h4 className="text-oz-pink text-2xl mb-4">Aux usagers</h4>
              <p>
                Vous vous interrogez sur votre consommation ?<br />
                Vous buvez plus de 2 verres par jour ? <br />
                Vous désirez apprendre à maitriser votre consommation d’alcool ?
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl">
              <h4 className="text-oz-pink text-2xl mb-4">
                Aux professionnels de santé
              </h4>
              <p className="text-base text-black">
                Vous souhaitez un outil complémentaire pour orienter une
                personne dépendante à l’alcool ? Ainsi qu’accompagner vos
                patients vers une maitrise de leur consommation ?
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl">
              <h4 className="text-oz-pink text-2xl mb-4">
                Aux acteurs sociaux
              </h4>
              <p className="text-base text-black">
                Vous souhaitez aider une personne dépendante à l’alcool et
                sensibiliser vos bénéficiaires à maitriser leur consommation ?
              </p>
            </div>
          </div>
        </div>

        <div className="mt-5 md:mx-[5%] lg:mx-[8%] xl:mx-auto xl:max-w-[1200px]">
          <button onClick={() => setShowPopup(true)}>
            <img
              className="w-full"
              src="images/other/january_challenge.png"
              alt="Et si on faisait le défi de janvier ? Tous ensemble. Première étape : on télécharge l'appli !"
            />
          </button>
        </div>

        <div className="py-20 lg:py-32" id="who-are-we">
          <div className="mx-[10%] sm:mx-20 md:mx-auto md:w-7/12 lg:w-[750px]">
            <div className="bottom-9 bg-grey-600">
              <h3 className="text-2xl font-bold text-center lg:text-4xl text-oz-blue">
                Qui sommes nous ?
              </h3>
              <p className="text-center my-7">
                OZ Ensemble est un dispositif expérimental créé par le Dr
                Géraldine Talbot, médecin addictologue de l'association{" "}
                <a href="https://capasscite.fr/" className="text-link-style">
                  CaPASSCité
                </a>
                , financé par l’
                <a href="https://www.ars.sante.fr/" className="text-link-style">
                  ARS
                </a>
                , la{" "}
                <a
                  href="https://www.drogues.gouv.fr/"
                  className="text-link-style"
                >
                  MILDECA
                </a>{" "}
                et la{" "}
                <a
                  href="https://www.numerique.gouv.fr/dinum/"
                  className="text-link-style"
                >
                  DINUM
                </a>
                , en collaboration avec la{" "}
                <a
                  href="https://www.fabrique.social.gouv.fr/"
                  className="text-link-style"
                >
                  Fabrique numérique des ministères sociaux
                </a>
                .
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 top-9">
              <div className="transition duration-500 hover:scale-110 basis-1/4 lg:basis-1/6">
                <a href="https://solidarites-sante.gouv.fr/">
                  <img
                    className=""
                    src="images/logo_ministeres_sociaux.png"
                    alt=""
                  />
                </a>
              </div>
              <div className="transition duration-500 hover:scale-110 basis-1/4 lg:basis-1/6">
                <a href="https://www.ars.sante.fr/">
                  <img className="" src="images/logo_ars.png" alt="" />
                </a>
              </div>
              <div className="transition duration-500 hover:scale-110 basis-1/4 lg:basis-1/6">
                <a href="https://www.drogues.gouv.fr/">
                  <img className="" src="images/logo_MILDECA.png" alt="" />
                </a>
              </div>
              <div className="transition duration-500 hover:scale-110 basis-1/4 lg:basis-1/6">
                <a href="https://capasscite.fr/association/">
                  <img className="" src="images/logo_CaPASSCite.png" alt="" />
                </a>
              </div>
              <div className="transition duration-500 hover:scale-110 basis-1/4 lg:basis-1/6">
                <a href="https://www.numerique.gouv.fr/dinum/">
                  <img className="" src="images/logo_DINUM.png" alt="" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div
          className="py-20 mx-[10%] sm:mx-20 md:mx-auto md:w-7/12 lg:w-[750px]"
          id="kit-media"
        >
          <div className="bottom-9 bg-grey-600">
            <h3 className="text-2xl font-bold text-center lg:text-4xl text-oz-blue mb-10">
              Kit média à télécharger
            </h3>
            <div className="grid gap-5 md:grid-cols-2">
              <div className="flex items-center mx-auto md:mx-0">
                <a href="files/Affiche_OZ-Ensemble.pdf">
                  <img src="images/icon/link.svg" alt="" className="w-[30px]" />
                </a>
                <p className="underline font-semibold pl-1">
                  <a href="files/Affiche_OZ-Ensemble.pdf">
                    Affiche Oz Ensemble
                  </a>
                </p>
              </div>
              <div className="flex items-center mx-auto md:mx-0">
                <a href="files/AFFICHE_OZ_-_Defi_de_Janvier.pdf">
                  <img src="images/icon/link.svg" alt="" className="w-[30px]" />
                </a>
                <p className="underline font-semibold pl-1">
                  <a href="files/AFFICHE_OZ_-_Defi_de_Janvier.pdf">
                    Affiche Oz Ensemble - Défi de janvier
                  </a>
                </p>
              </div>
              <div className="flex items-center mx-auto md:mx-0">
                <a href="files/DEPLIANT-OZ.pdf">
                  <img src="images/icon/link.svg" alt="" className="w-[30px]" />
                </a>
                <p className="underline font-semibold pl-1">
                  <a href="files/DEPLIANT-OZ.pdf">Dépliant Oz Ensemble</a>
                </p>
              </div>
              <div className="flex items-center mx-auto md:mx-0">
                <a href="files/Dossier_de_presse_-_2023_-_Defi_de_Janvier.pdf">
                  <img src="images/icon/link.svg" alt="" className="w-[30px]" />
                </a>
                <p className="underline font-semibold pl-1">
                  <a href="files/Dossier_de_presse_-_2023_-_Defi_de_Janvier.pdf">
                    Dossier de presse Oz Ensemble
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

const Checklist = ({ title, subtitle }) => (
  <div>
    <h6 className="text-base font-bold text-oz-pink">✓ {title}</h6>
    <p className="text-sm text-black">{subtitle}</p>
  </div>
)

const Checklist2 = ({ content }) => (
  <div className="flex p-5 rounded-xl bg-oz-gray">
    <img
      className="mr-3 md:mx-7"
      src="images/icon/check-circle-turqoise-500.svg"
      alt=""
    />
    <p className="text-base text-black">{content}</p>
  </div>
)
