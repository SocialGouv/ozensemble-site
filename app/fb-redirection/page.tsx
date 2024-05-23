"use client"
import { ANDROID_URL, IOS_URL, ROOT_URL } from "~/constants"
import { Header } from "@codegouvfr/react-dsfr/Header"
import { fr } from "@codegouvfr/react-dsfr"
import { Badge } from "@codegouvfr/react-dsfr/Badge"
import { Button } from "@codegouvfr/react-dsfr/Button"
import { Card } from "@codegouvfr/react-dsfr/Card"
import { Quote } from "@codegouvfr/react-dsfr/Quote"
import { Footer } from "@codegouvfr/react-dsfr/Footer"
import testimonies from "./testimonies"
import { push } from "@socialgouv/matomo-next"

export default function Page() {
  function onDownloadClick() {
    function redirect() {
      let userAgent =
        // @ts-expect-error navigator is read-only
        navigator.userAgent || window.opera
      let ios =
        // @ts-expect-error navigator is read-only
        /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream
      if (ios) {
        // window.location = myapp://element/{ELEMENT_ID};
        window.setTimeout(() => {
          window.location.replace(IOS_URL)
          push(["adSpecialLandingPage", "appStoreRedirect", "iOS"])
        }, 25)
        return
      }
      let macos =
        // @ts-expect-error navigator is read-only
        /Mac/.test(userAgent) && !window.MSStream
      if (macos) {
        // window.location = myapp://element/{ELEMENT_ID};
        window.setTimeout(() => {
          window.location.replace(IOS_URL)
          push(["adSpecialLandingPage", "appStoreRedirect", "macOS"])
        }, 25)
        return
      }
      let android = /android/i.test(userAgent)
      if (android) {
        // window.location = myapp://element/{ELEMENT_ID};
        window.setTimeout(() => {
          window.location.replace(ANDROID_URL)
          push(["adSpecialLandingPage", "appStoreRedirect", "android"])
        }, 25)
        return
      }
      push(["adSpecialLandingPage", "appStoreRedirect", "no-redirect"])
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
        homeLinkProps={{
          href: "/",
          title: "Oz Ensemble",
        }}
        id="fr-header-header-with-quick-access-items"
        quickAccessItems={[
          {
            iconId: "fr-icon-download-line",
            text: "Télécharger l'application",
            buttonProps: {
              onClick: onDownloadClick,
            },
          },
        ]}
        serviceTagline="L'application mobile pour maitriser sa consommation d'alcool"
        serviceTitle="Oz Ensemble"
      />
      <section className={[fr.cx(), "bg-violet-50"].join(" ")}>
        <div
          className={[
            fr.cx(
              "fr-container",
              "fr-container--fluid",
              "fr-grid-row",
              "fr-p-md-6w"
            ),
            "flex flex-col gap-y-10 md:flex-row justify-between items-center",
          ].join(" ")}
        >
          <div
            className={[
              fr.cx("fr-col", "fr-col-md-6", "fr-col-12"),
              "!p-4 md:p-0 flex flex-col gap-y-4",
            ].join(" ")}
          >
            <div className={["flex-row flex gap-2 mb-2 flex-wrap"].join(" ")}>
              <Badge severity="info" noIcon>
                100% gratuit
              </Badge>
              <Badge severity="info" noIcon>
                Entièrement anonyme
              </Badge>
              <Badge severity="info" noIcon>
                Sécurisé
              </Badge>
            </div>
            <h1 className={fr.cx("fr-h1", "fr-mb-10v")}>
              Maitrisez votre consommation d’alcool
            </h1>
            <p className={fr.cx("fr-text--regular")}>
              Oz Ensemble est la première application qui vous permet de
              maîtriser votre consommation d’alcool facilement
            </p>
            <Button onClick={onDownloadClick} iconId="ri-download-2-fill">
              Télécharger Oz
            </Button>
            <div className={fr.cx("fr-mt-10v")}>
              <p className={fr.cx("fr-text--regular", "fr-mb-2v")}>Vue sur :</p>
              <div className="flex flex-wrap gap-2 [&_a]:max-w-20 [&_a]:inline-flex [&_a]:items-center [&_a]:justify-center [&_a]:no-underline [&_a]:bg-white [&_a]:bg-center [&_a]:[background-image:none]">
                <a href="https://rmc.bfmtv.com/conso/dry-january-maitrisez-votre-consommation-d-alcool-grace-a-ces-applications_AN-202401020669.html">
                  <img
                    className="object-contain"
                    src="images/logo_rmc_conso.svg"
                    alt="Journal rmc conso, accédez à leur site en cliquant sur ce logo"
                  />
                </a>
                <a
                  className=""
                  href="https://www.alcool-info-service.fr/Actualites/Oz-ensemble-une-application-pour-maitriser-sa-consommation-d-alcool"
                >
                  <img
                    className="object-contain"
                    src="images/logo_alcool_info_service.png"
                    alt="Partenaire alcool info service, accédez à leur site en cliquant sur ce logo"
                  />
                </a>
                <a href="https://www.lemonde.fr/sciences/article/2021/02/23/alcool-tabac-drogues-medicaments-les-addictions-autre-degat-collateral-du-covid-19_6070854_1650684.html">
                  <img
                    className="object-contain"
                    src="images/Le_monde_logo.png"
                    alt="Journal libération, accédez à leur site en cliquant sur ce logo"
                  />
                </a>
                <a href="https://www.whatsupdoc-lemag.fr/article/quarantaine-confinement-une-app-oz-ensemble-aide-au-controle-de-la-consommation-dalcool">
                  <img
                    className=""
                    src="images/logo_whatsupdoc.png"
                    alt="Magazine what's up doc, accédez à leur site en cliquant sur ce logo"
                  />
                </a>
                <a href="https://app.vivatechnology.com/partner/2d36f8bb-2201-ee11-907a-002248859577/oz-ensemble">
                  <img
                    className=""
                    src="images/logo_viva_technology.png"
                    alt="Entreprise VIVA technology, accédez à leur site en cliquant sur ce logo"
                  />
                </a>
              </div>
            </div>
          </div>
          <div
            className={[
              fr.cx("fr-col", "fr-col-md-6", "fr-col-12"),
              "flex items-center md:justify-end justify-center mb-20 md:mb-0",
            ].join(" ")}
          >
            <img
              src="images/other/hero.png"
              alt="3 affichages écrans décoratifs :
              - l'écran suivi composé de graphiques et du récapitulatif des badges
              - l'écran calendrier indiquant par des icones la réusite d'objectifs quotidiens
              - l'écran mes activités regroupant les activités disponibles"
              className={[
                " h-screen max-h-[700px] md:h-[75vh] object-contain md:p-10",
              ].join(" ")}
            />
          </div>
        </div>
      </section>
      <section className={[fr.cx(), "bg-white"].join(" ")}>
        <div
          className={[
            fr.cx(
              "fr-container",
              "fr-container--fluid",
              "fr-grid-row",
              "fr-p-md-6w"
            ),
            "flex flex-col gap-y-10 md:flex-row justify-between items-center",
          ].join(" ")}
        >
          <div
            className={[
              fr.cx("fr-col", "fr-col-md-6", "fr-col-12"),
              "!p-4 md:p-0 flex flex-col gap-y-4",
            ].join(" ")}
          >
            <h2 className={fr.cx("fr-h2", "fr-mb-10v")}>
              Suivi de consommation
            </h2>
            <p className={fr.cx("fr-text--regular")}>
              Oz Ensemble permet aux utilisateurs de suivre leur consommation
              d'alcool au quotidien, offrant une visualisation claire des
              habitudes de consommation, avec des statistiques pour encourager
              la maitrise de votre consommation d’alcool.
            </p>
            <Button
              onClick={onDownloadClick}
              iconId="ri-download-2-fill"
              priority="secondary"
            >
              Prendre le contrôle de ma consommation
            </Button>
          </div>
          <div
            className={[
              fr.cx("fr-col", "fr-col-md-6", "fr-col-12"),
              "flex items-center md:justify-end justify-center mb-20 md:mb-0",
            ].join(" ")}
          >
            <img
              src="images/landing/quizz-screenshot.png"
              alt="Écran de l'app avec un quizz pour évaluer sa consommation d'alcool"
              className={[
                " h-screen max-h-[700px] md:h-[75vh] object-contain md:p-10",
              ].join(" ")}
            />
          </div>
        </div>
      </section>
      <section className={[fr.cx(), "bg-white"].join(" ")}>
        <div
          className={[
            fr.cx(
              "fr-container",
              "fr-container--fluid",
              "fr-grid-row",
              "fr-p-md-6w"
            ),
            "flex flex-col gap-y-10 md:flex-row-reverse justify-between items-center",
          ].join(" ")}
        >
          <div
            className={[
              fr.cx("fr-col", "fr-col-md-6", "fr-col-12"),
              "!p-4 md:p-0 flex flex-col gap-y-4",
            ].join(" ")}
          >
            <h2 className={fr.cx("fr-h2", "fr-mb-10v")}>
              Evaluation du risque alcool individuel
            </h2>
            <p className={fr.cx("fr-text--regular")}>
              Oz Ensemble offre la possibilité d’évaluer votre niveau de risque
              lié à la consommation d’alcool grâce à un questionnaire
              interactif.
            </p>
            <Button
              onClick={onDownloadClick}
              iconId="ri-download-2-fill"
              priority="secondary"
            >
              Calculer mon niveau de risque
            </Button>
          </div>
          <div
            className={[
              fr.cx("fr-col", "fr-col-md-6", "fr-col-12"),
              "flex items-center md:justify-start justify-center mb-20 md:mb-0",
            ].join(" ")}
          >
            <img
              src="images/landing/quizz-screenshot-2.png"
              alt="Écran de l'app avec un quizz pour évaluer sa consommation d'alcool"
              className={[
                " h-screen max-h-[700px] md:h-[75vh] object-contain md:p-10",
              ].join(" ")}
            />
          </div>
        </div>
      </section>
      <section
        className={[
          fr.cx(
            "fr-container",
            "fr-container--fluid",
            "fr-grid-row",
            "fr-p-md-6w"
          ),
          "bg-violet-50 my-6",
        ].join(" ")}
      >
        <div
          className={[
            fr.cx(),
            "m-auto flex flex-col gap-y-10 md:flex-row justify-center items-center gap-10 [&_*]:flex-1",
          ].join(" ")}
        >
          <Card
            background
            border
            footer={
              <Button
                onClick={onDownloadClick}
                iconId="ri-download-2-fill"
                priority="secondary"
              >
                Me renseigner sur les aides pour diminuer
              </Button>
            }
            size="medium"
            title="Je suis en recherche d’aide pour diminuer"
            titleAs="h3"
          />
          <Card
            background
            border
            footer={
              <Button
                onClick={onDownloadClick}
                iconId="ri-download-2-fill"
                priority="primary"
              >
                Prendre contact avec un professionnel de santé
              </Button>
            }
            size="medium"
            title="Je souhaite me sevrer complètement (abstinence à l’alcool)"
            titleAs="h3"
          />
          <Card
            background
            border
            footer={
              <Button
                onClick={onDownloadClick}
                iconId="ri-download-2-fill"
                priority="secondary"
              >
                Commencer un test de consommation
              </Button>
            }
            size="medium"
            title="Je me pose des questions sur ma consommation"
            titleAs="h3"
          />
        </div>
      </section>
      <section className={[fr.cx(), "bg-white"].join(" ")}>
        <div
          className={[
            fr.cx(
              "fr-container",
              "fr-container--fluid",
              "fr-grid-row",
              "fr-p-md-6w"
            ),
            "flex flex-col gap-y-10 md:flex-row-reverse justify-between items-center",
          ].join(" ")}
        >
          <Quote
            text={testimonies[11].text}
            author={testimonies[11].pseudo}
            size="medium"
            className="[&_blockquote_p]:font-normal"
          />
        </div>
      </section>
      <section
        className={[
          fr.cx(
            "fr-container",
            "fr-container--fluid",
            "fr-grid-row",
            "fr-p-md-6w"
          ),
          "bg-violet-50 my-6",
        ].join(" ")}
      >
        <div
          className={[
            fr.cx(),
            "m-auto p-4 md:p-0 flex flex-col gap-y-10 md:flex-row justify-center items-center gap-10",
          ].join(" ")}
        >
          <div className="flex-1">
            <h4 className={[fr.cx("fr-h4", "fr-m-0"), "text-center"].join(" ")}>
              Maîtrisez votre consommation d’alcool dès maintenant !
            </h4>
          </div>
          <div className="">
            <Button
              onClick={onDownloadClick}
              iconId="ri-download-2-fill"
              className="mx-auto flex"
            >
              Télécharger l'application
            </Button>
          </div>
        </div>
      </section>
      <Footer accessibility="non compliant" />
    </>
  )
}
