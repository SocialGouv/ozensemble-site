import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import Head from "next/head"
import { useState } from "react"

const Partners = () => {
  const [showPopup, setShowPopup] = useState(false)
  return (
    <>
      <Head>
        <title>Partners | Oz Ensemble</title>
      </Head>
      <div>
        <Navigation showPopup={showPopup} setShowPopup={setShowPopup} />
        <div className="mt-30 lg:mt-40">
          <h1 className="mb-2 text-3xl text-center font-extrabold lg:text-5xl text-oz-blue">
            Ils parlent de nous
          </h1>
          <div className="px-20 lg:py-10">
            <h3 className="text-2xl font-bold lg:text-4xl text-oz-green">
              Institutions
            </h3>
            <div className="flex flex-wrap mt-10 gap-10 ">
              <div className="transition duration-500 hover:scale-110 basis-1/6">
                <a
                  className=""
                  href="https://www.alcool-info-service.fr/Actualites/Oz-ensemble-une-application-pour-maitriser-sa-consommation-d-alcool"
                >
                  <img
                    className="pt-8"
                    src="images/logo_alcool_info_service.png"
                    alt="Partenaire alcool info service, accédez à leur site en cliquant sur ce logo"
                  />
                </a>
              </div>
              <div className="transition duration-500 hover:scale-110 basis-1/6">
                <a href="https://www.federationaddiction.fr/actualites/oz-ensemble-une-application-pour-smartphone-pour-reprendre-la-maitrise-de-sa-consommation-dalcool/">
                  <img
                    className="pt-7"
                    src="images/logo_federation_addiction.png"
                    alt="Partenaire fédération addiction, accédez à leur site en cliquant sur ce logo"
                  />
                </a>
              </div>
              <div className="transition duration-500 hover:scale-110 basis-32">
                <a href="https://www.ars.sante.fr/">
                  <img
                    className=""
                    src="images/logo_ars.png"
                    alt="Partenaire l'agence régionale de santé Ile-de-France, accédez à leur site en cliquant sur ce logo"
                  />
                </a>
              </div>
              <div className="transition duration-500 hover:scale-110 basis-40">
                <a href="https://capasscite.fr/association/">
                  <img
                    className=""
                    src="images/logo_CaPASSCite.png"
                    alt="Partenaire l'association Capasscité, accédez à leur site en cliquant sur ce logo"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="px-20 py-20 lg:py-10">
            <h3 className="text-2xl font-bold lg:text-4xl text-oz-green">
              Communes
            </h3>
            <div className="flex flex-wrap mt-10 gap-10 ">
              <div className="transition duration-500 hover:scale-110 basis-1/6">
                <a href="https://correns.fr/fr/nw/1870442/1732031/dispositif-oz-ensemble">
                  <img
                    className=""
                    src="images/logo_correns.png"
                    alt="La commune de Correns, accédez à leur site en cliquant sur ce logo"
                  />
                </a>
              </div>
              <div className="transition duration-500 hover:scale-110">
                <a href="https://www.mairie-jury.fr/a-la-une/une-861/oz-le-dispositif-du-ministere-de-la-sante-en-addictologie-5326.html">
                  <img
                    className=""
                    src="images/logo_jury.png"
                    alt="Commune jury, accédez à leur site en cliquant sur ce logo"
                  />
                </a>
              </div>
              <div className="transition duration-500 hover:scale-110">
                <a href="https://mairie-martressurmorge.fr/2023/10/18/oz-ensemble-maitriser-sa-consommation-dalcool/">
                  <img
                    className=""
                    src="images/logo_martres_sur_morge.png"
                    alt="Commune les martres sur morge, accédez à leur site en cliquant sur ce logo"
                  />
                </a>
              </div>
              <div className="transition duration-500 hover:scale-110 basis-32">
                <a href="https://www.intramuros.org/laa-mondrans/actualites/321342">
                  <img
                    className=""
                    src="images/logo_laa_mondrans.jpg"
                    alt="Commune Laà Mondras , accédez à leur site en cliquant sur ce logo"
                  />
                </a>
              </div>
              <div className="transition duration-500 hover:scale-110 basis-1/6">
                <a href="https://gps.gf/agenda/presentation-de-l-application-oz-ensemble/">
                  <img
                    className=""
                    src="images/logo_guyane_promo_sante.png"
                    alt="L'association guyane promo santé, accédez à leur site en cliquant sur ce logo"
                  />
                </a>
              </div>
              <div className="transition duration-500 hover:scale-110 basis-1/6">
                <a href="https://ouzouersurloire.fr/application-mobile-oz-ensemble ">
                  <img
                    className=""
                    src="images/logo_ouzouer.png"
                    alt="La commune ouzouer-sur-loire, accédez à leur site en cliquant sur ce logo"
                  />
                </a>
              </div>
              <div className="transition duration-500 hover:scale-110 basis-1/6">
                <a href="https://villeneuvelesbouloc.fr/fr/nw/1326795/1651652/application-oz-ensemble">
                  <img
                    className=""
                    src="images/logo_villeneuve_les_bouloc.jpg"
                    alt="Partenaire fédération addiction, accédez à leur site en cliquant sur ce logo"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="px-20 py-20 lg:py-10">
            <h3 className="text-2xl font-bold lg:text-4xl text-oz-green">
              Autres
            </h3>
            <div className="flex flex-wrap mt-10 gap-10 ">
              <div className="transition duration-500 hover:scale-110 basis-1/6">
                <a href="https://www.whatsupdoc-lemag.fr/article/quarantaine-confinement-une-app-oz-ensemble-aide-au-controle-de-la-consommation-dalcool">
                  <img
                    className=""
                    src="images/logo_whatsupdoc.png"
                    alt="Magazine what's up doc, accédez à leur site en cliquant sur ce logo"
                  />
                </a>
              </div>
              <div className="transition duration-500 hover:scale-110 basis-1/6">
                <a href="https://www.ordotype.fr/recommandations/sevrage-alcoolique-application-oz-ensemble">
                  <img
                    className=""
                    src="images/logo_ordotype.svg"
                    alt="Le site internet ordotype, accédez à leur site en cliquant sur ce logo"
                  />
                </a>
              </div>
              <div className="transition duration-500 hover:scale-110 basis-1/6">
                <a href="https://www.lanutrition.fr/dry-january-quels-bienfaits-en-attendre-pour-la-sante">
                  <img
                    className=""
                    src="images/logo_la_nutrition.svg"
                    alt="Journal la nutrition, accédez à leur site en cliquant sur ce logo"
                  />
                </a>
              </div>
              <div className="transition duration-500 hover:scale-110 basis-1/6">
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
          <div className="px-20 py-20 lg:py-10">
            <h3 className="text-2xl font-bold lg:text-4xl text-oz-green">
              Presse
            </h3>
            <div className="flex flex-wrap my-10 gap-10 ">
              <div className="transition duration-500 hover:scale-110 basis-1/6">
                <a href="https://rmc.bfmtv.com/conso/dry-january-maitrisez-votre-consommation-d-alcool-grace-a-ces-applications_AN-202401020669.html">
                  <img
                    className=""
                    src="images/logo_rmc_conso.svg"
                    alt="Journal rmc conso, accédez à leur site en cliquant sur ce logo"
                  />
                </a>
              </div>
              <div className="transition duration-500 hover:scale-110 basis-1/6">
                <a href="https://www.liberation.fr/lifestyle/gastronomie/dry-january-questionner-sa-consommation-dalcool-sur-la-duree-20230131_M6DBQPJS4VALHIKGNUPSS7KIHA/">
                  <img
                    className=""
                    src="images/logo_liberation.svg"
                    alt="Journal libération, accédez à leur site en cliquant sur ce logo"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Partners
