import Footer from "~/components/Footer"
import Navigation from "~/components/Navigation"
import Link from "next/link"

export default function Index() {
  return (
    <>
      <header className="oz-header-gradient">
        <Navigation />
        <div className="mt-[70px] md:flex pt-20 pb-8 md:pb-32 auto-cols-fr md:w-5/6 xl:w-[1100px] mx-[10%] md:m-auto">
          <div className="w-full md:w-1/2 text-center md:text-left flex items-center">
            <div>
              <h1 className="mb-2 font-bold text-lg text-oz-blue">
                Oz Ensemble
              </h1>
              <p className="mb-5 text-4xl font-bold">
                L'application mobile pour maitriser sa consommation d'alcool va
                s'arrêter de fonctionner début mai 2025.
              </p>
              <div className="flex flex-col space-y-6 lg:pb-10">
                <Checklist
                  title="N'oubliez pas de sauvegarder vos données"
                  subtitle="Rendez-vous dans le paramétrage de votre application pour sauvegarder les données de votre historique. Vous pourriez les réutiliser dans une application qui pourrait être compatible avec votre historique. Faites cette étape avant la fermeture du service début mai 2025."
                />
                <Checklist
                  title="Continuez à suivre vos consommations"
                  subtitle={
                    <>
                      Pour votre santé, nous vous conseillons de continuer à
                      suivre votre consommation. La liste n'est pas exhaustive,
                      mais vous pourriez utiliser (liste triée par ordre
                      alphabétique) :
                      <ul className="list-disc list-inside ml-8">
                        <li>
                          <a
                            className=" inline-flex h-4 items-center font-semibold border-b border-black gap-x-2"
                            href="https://mydefi.life/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            mydefi
                            <img
                              src="images/icon/external-link.svg"
                              alt="Icone indiquant une redirection, ici vers le site mydefi"
                              className="w-4"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            className=" inline-flex h-4 items-center font-semibold border-b border-black gap-x-2"
                            href="https://option-zero.fr/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Option Zero
                            <img
                              src="images/icon/external-link.svg"
                              alt="Icone indiquant une redirection, ici vers le site option zero"
                              className="w-4"
                            />
                          </a>
                        </li>
                        <li>
                          <a
                            className=" inline-flex h-4 items-center font-semibold border-b border-black gap-x-2"
                            href="https://dryjanuary.fr/lapplication-try-dry/"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            Try Dry
                            <img
                              src="images/icon/external-link.svg"
                              alt="Icone indiquant une redirection, ici vers le site try dry"
                              className="w-4"
                            />
                          </a>
                        </li>
                      </ul>
                    </>
                  }
                />
                <Checklist
                  title="Une question?"
                  subtitle={
                    <>
                      Pour toute question, n'hesitez pas à nous contacter à
                      l'adresse email{" "}
                      <a
                        className="underline"
                        href="mailto:ozensemble@fabrique.social.gouv.fr"
                      >
                        ozensemble@fabrique.social.gouv.fr
                      </a>
                    </>
                  }
                />
              </div>
            </div>
          </div>
          <div className="items-center justify-center w-2/3 m-auto md:w-1/2 md:flex pl-[5%] mt-14 md:mt-0">
            <img
              src="images/other/hero.png"
              alt="3 affichages écrans décoratifs :
              - l'écran suivi composé de graphiques et du récapitulatif des badges
              - l'écran calendrier indiquant par des icones la réusite d'objectifs quotidiens
              - l'écran mes activités regroupant les activités disponibles"
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
              Oz Ensemble, comment ça marchait ?
            </h3>
            <p className="text-base text-black mb-4">
              Chez Oz Ensemble, l’objectif était de vous redonner la maîtrise de
              votre consommation d’alcool, tout au long de l’année,{" "}
              <span className="sr-only">
                Le texte suivant était en gras et de couleur rouge
              </span>
              <strong className="text-oz-pink mb-4">
                sans nécessairement promouvoir l’abstinence totale et
                définitive.
              </strong>
            </p>
            <p className="text-base text-black mb-4">
              Oz Ensemble s’appuyait sur les dernières recommandations de la HAS
              (Haute Autorité de Santé) qui promeut la{" "}
              <span className="sr-only">
                Le texte suivant était en gras et de couleur rouge
              </span>
              <strong className="text-oz-pink ">
                réduction des risques alcool
              </strong>{" "}
              par les acteurs de la prévention et du soin en addictologie.
            </p>
            <p className="text-base text-black">
              Oz Ensemble enrichissait également le{" "}
              <span className="sr-only">
                Le texte suivant est en gras et de couleur rouge
              </span>
              <strong className="text-oz-pink">
                travail de suivi des professionnels
              </strong>{" "}
              de santé grâce à l’agenda de consommation que le patient pouvait
              lui partager.
            </p>
          </div>
          <div className="w-full space-y-6 lg:w-6/12">
            <Checklist2 content="Vous pouviez évaluer votre situation et le niveau de risque de votre consommation grâce aux tests et bilans." />
            <Checklist2 content="Vous pouviez ajouter votre consommation et fixer vous un objectif ainsi vous pouviez suivre vos économies en euros et calories." />
            <Checklist2 content="Vous pouviez réaliser des exercices et découvrir des articles de santé afin d’accroître votre motivation à changer vos habitudes de consommation." />
            <Checklist2 content="Si besoin, vous pouviez prendre un rendez-vous sur Doctolib avec un professionnel de l’addiction de l’équipe Oz Ensemble." />
          </div>
        </div>

        <div className="p-10 lg:pt-16 sm:rounded-xl md:rounded-3xl bg-oz-gray sm:mx-20 xl:mx-auto xl:w-[1100px]">
          <h3 className="text-2xl font-bold text-center lg:text-4xl text-oz-blue mb-14">
            À qui s'adressait Oz Ensemble ?
          </h3>
          <div className="grid grid-cols-1 gap-9 lg:grid-cols-3 text-center">
            <div className="p-5 bg-white rounded-2xl">
              <h4 className="text-oz-pink text-2xl mb-4">Aux usagers</h4>
              <p>Vous vous interrogiez sur votre consommation ?</p>
              <p>Vous buviez plus de 2 verres par jour ?</p>
              <p>
                Vous désiriez apprendre à maitriser votre consommation d’alcool
                ?
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl">
              <h4 className="text-oz-pink text-2xl mb-4">
                Aux professionnels de santé
              </h4>
              <p className="text-base text-black">
                Vous souhaitiez un outil complémentaire pour orienter une
                personne dépendante à l’alcool ? Ainsi qu’accompagner vos
                patients vers une maitrise de leur consommation ?
              </p>
            </div>
            <div className="p-6 bg-white rounded-2xl">
              <h4 className="text-oz-pink text-2xl mb-4">
                Aux acteurs sociaux
              </h4>
              <p className="text-base text-black">
                Vous souhaitiez aider une personne dépendante à l’alcool et
                sensibiliser vos bénéficiaires à maitriser leur consommation ?
              </p>
            </div>
          </div>
        </div>
        <div className="py-20 lg:py-32 " id="partners">
          <div className="mx-[10%] sm:mx-20 md:mx-auto md:w-7/12 lg:w-[750px] ">
            <div className="bottom-9 bg-grey-600">
              <h3 className="text-2xl font-bold text-center lg:text-3xl text-oz-blue">
                Ils parlent de nous
              </h3>
            </div>
            <div className="flex flex-wrap justify-center gap-8 top-9 mt-4">
              <div className="transition duration-500 hover:scale-110 basis-1/4 lg:basis-1/3">
                <a href="https://www.alcool-info-service.fr/Actualites/Oz-ensemble-une-application-pour-maitriser-sa-consommation-d-alcool">
                  <img
                    className="py-12"
                    src="images/logo_alcool_info_service.png"
                    alt="Partenaire alcool info service, accédez à leur site en cliquant sur ce logo"
                  />
                </a>
              </div>
              <div className="transition duration-500 hover:scale-110 basis-1/4 lg:basis-1/3">
                <a href="https://www.federationaddiction.fr/actualites/oz-ensemble-une-application-pour-smartphone-pour-reprendre-la-maitrise-de-sa-consommation-dalcool/">
                  <img
                    className="py-9"
                    src="images/logo_federation_addiction.png"
                    alt="Partenaire fédération addiction, accédez à leur site en cliquant sur ce logo"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center ">
            <Link
              href="/partners"
              className=" rounded-full bg-oz-pink font-bold text-white py-2 px-6 items-center cursor-pointer hover:text-oz-pink hover:bg-white border border-oz-pink transition"
            >
              <span>Voir tous</span>
            </Link>
          </div>
        </div>
        <div className="py-20 lg:py-32 bg-oz-gray " id="who-are-we">
          <div className="mx-[10%] sm:mx-20 md:mx-auto md:w-7/12 lg:w-[750px] ">
            <div className="bottom-9 bg-grey-600">
              <h3 className="text-2xl font-bold text-center lg:text-4xl text-oz-blue">
                Qui étions nous ?
              </h3>
              <p className="text-center my-7">
                OZ Ensemble fut un dispositif expérimental créé par le{" "}
                <a
                  href="https://www.linkedin.com/in/geraldine-talbot-13989b263/"
                  className=" inline-flex h-4 items-center font-semibold border-b border-black "
                >
                  Dr Géraldine Talbot
                  <img
                    src="images/icon/external-link.svg"
                    alt="Icone indiquant une redirection, ici vers le linkedin de Dr Géraldine Talbot"
                    className="w-4 ml-1"
                  />
                </a>
                , médecin addictologue de l'association{" "}
                <a
                  href="https://capasscite.fr/"
                  className=" inline-flex h-4 items-center font-semibold border-b border-black "
                >
                  CaPASSCité
                  <img
                    src="images/icon/external-link.svg"
                    alt="Icone indiquant une redirection, ici vers le site de l'association capasscité"
                    className="w-4 ml-1"
                  />
                </a>
                , financé par l’
                <a
                  href="https://www.ars.sante.fr/"
                  className="inline-flex h-4 items-center font-semibold border-b border-black"
                >
                  ARS
                  <img
                    src="images/icon/external-link.svg"
                    alt="Icone indiquant une redirection, ici vers le site de l'ars"
                    className="w-4 ml-1"
                  />
                </a>
                , la{" "}
                <a
                  href="https://www.drogues.gouv.fr/"
                  className=" inline-flex h-4 items-center font-semibold border-b border-black"
                >
                  MILDECA
                  <img
                    src="images/icon/external-link.svg"
                    alt="Icone indiquant une redirection, ici vers le portail de la mildeca"
                    className="w-4 ml-1"
                  />
                </a>{" "}
                et la{" "}
                <a
                  href="https://www.numerique.gouv.fr/dinum/"
                  className=" inline-flex h-4 items-center font-semibold border-b border-black"
                >
                  DINUM
                  <img
                    src="images/icon/external-link.svg"
                    alt="Icone indiquant une redirection, ici vers la page de la dinum"
                    className="w-4 ml-1"
                  />
                </a>
                , en collaboration avec la{" "}
                <a
                  href="https://www.fabrique.social.gouv.fr/"
                  className=" inline-flex h-4 items-center font-semibold border-b border-black"
                >
                  Fabrique numérique des ministères sociaux
                  <img
                    src="images/icon/external-link.svg"
                    alt="Icone indiquant une redirection, ici vers le site de la fabrique numérique des ministères sociaux"
                    className="w-4 ml-1"
                  />
                </a>
                .
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-6 top-9">
              <div className="transition duration-500 hover:scale-110 basis-1/4 lg:basis-1/6">
                <a href="https://www.fabrique.social.gouv.fr/">
                  <img
                    className="py-9"
                    src="images/logo_fabrique.png"
                    alt="logo de La Fabrique Numérique des Ministères Sociaux, accédez à leur site en cliquant sur ce logo"
                  />
                </a>
              </div>
              <div className="transition duration-500 hover:scale-110 basis-1/4 lg:basis-1/6">
                <a href="https://www.ars.sante.fr/">
                  <img
                    className=""
                    src="images/logo_ars.png"
                    alt="Partenaire l'agence régionale de santé Ile-de-France, accédez à leur site en cliquant sur ce logo"
                  />
                </a>
              </div>
              <div className="transition duration-500 hover:scale-110 basis-1/4 lg:basis-1/6">
                <a href="https://www.drogues.gouv.fr/">
                  <img
                    className=""
                    src="images/logo_MILDECA.png"
                    alt="Partenaire la MILDECA, accédez au portail de la mildeca"
                  />
                </a>
              </div>
              <div className="transition duration-500 hover:scale-110 basis-1/4 lg:basis-1/6">
                <a href="https://capasscite.fr/association/">
                  <img
                    className=""
                    src="images/logo_CaPASSCite.png"
                    alt="Partenaire l'association Capasscité, accédez à leur site en cliquant sur ce logo"
                  />
                </a>
              </div>
              <div className="transition duration-500 hover:scale-110 basis-1/4 lg:basis-1/6">
                <a href="https://www.numerique.gouv.fr/dinum/">
                  <img
                    className=""
                    src="images/logo_DINUM.png"
                    alt="Partenaire la direction interministérielle du numérique, accédez à leur site en cliquant sur ce logo"
                  />
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
                <a
                  href="files/Affiche_OZ-Ensemble.pdf"
                  className="border-b border-black h-5 flex flex-row font-semibold"
                >
                  Affiche Oz Ensemble
                  <img
                    src="images/icon/external-link.svg"
                    alt="Icone indiquant une redirection, ici vers le pdf affiche Oz Ensemble"
                    className="w-4 ml-1 mt-1"
                  />
                </a>
              </div>
              <div className="flex items-center mx-auto md:mx-0">
                <a
                  href="files/AFFICHE_OZ_-_Defi_de_Janvier.pdf"
                  className="border-b border-black h-5 flex flex-row font-semibold"
                >
                  Affiche Oz Ensemble - Défi de janvier
                  <img
                    src="images/icon/external-link.svg"
                    alt="Icone indiquant une redirection, ici vers le pdf défi de janvier"
                    className="w-4 ml-1 mt-1"
                  />
                </a>
              </div>
              <div className="flex items-center mx-auto md:mx-0">
                <a
                  href="files/DEPLIANT-OZ.pdf"
                  className="border-b border-black h-5 flex flex-row font-semibold"
                >
                  Dépliant Oz Ensemble
                  <img
                    src="images/icon/external-link.svg"
                    alt="Icone indiquant une redirection, ici vers le pdf dépliant d'Oz Ensemble"
                    className="w-4 ml-1 mt-1"
                  />
                </a>
              </div>
              <div className="flex items-center mx-auto md:mx-0">
                <a
                  href="files/Dossier_de_presse_-_2023_-_Defi_de_Janvier.pdf"
                  className="border-b border-black h-5 flex flex-row font-semibold"
                >
                  Dossier de presse Oz Ensemble
                  <img
                    src="images/icon/external-link.svg"
                    alt="Icone indiquant une redirection, ici vers le pdf dossier de presse 2023 du défi de janvier"
                    className="w-4 ml-1 mt-1"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  )
}

const Checklist = ({ title, subtitle }) => (
  <div>
    <h6>
      ‼️ <strong className="text-xl text-oz-pink">{title}</strong>
    </h6>
    <p className="text-sm text-black">{subtitle}</p>
  </div>
)

const Checklist2 = ({ content }) => (
  <div className="mt-[70px]">
    <div className="flex p-5 rounded-xl bg-oz-gray">
      <img
        className="mr-3 md:mx-7"
        src="images/icon/check-circle-oz-green.svg"
        alt="Icone coche turquoise entourée "
      />
      <p className="text-base text-black">{content}</p>
    </div>
  </div>
)
