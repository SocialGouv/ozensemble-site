import Footer from "~/components/Footer"
import Navigation from "~/components/Navigation"

export default function Index() {
  return (
    <>
      <header className="oz-header-gradient">
        <Navigation />
        <div className="mt-[220px] md:flex pt-20 pb-8 md:pb-32 auto-cols-fr md:w-5/6 xl:w-[1100px] mx-[10%] md:m-auto">
          <div className="w-full md:w-1/2 text-center md:text-left flex items-center">
            <div>
              <h2 className="mb-5 text-4xl font-bold">
                Oz Ensemble, fin de l'application
              </h2>
              <div className="flex flex-col space-y-6 lg:pb-10">
                <p className="text-sm text-black">
                  Après cinq années de collaboration avec la Fabrique du Ministère du Travail, de la Santé, des Solidarités et des Familles, l'application Oz Ensemble est arrivée au terme de son parcours. Conçue comme un projet innovant, Oz Ensemble a rempli sa mission d'expérimentation en tant que compagnon numérique pour accompagner la réduction des consommations d'alcool.
                </p>
                <p className="text-sm text-black">
                  L'application permettait à chacun d'évaluer sa situation, de se fixer des objectifs personnalisés, et de suivre ses progrès, en autonomie ou avec un accompagnement à distance. Elle s'adressait à toute personne souhaitant questionner ou faire évoluer sa consommation, y compris celles qui n'étaient pas engagées dans un parcours de soins.
                </p>
                <p className="text-sm text-black">
                  Faute de financements permettant de prolonger le service au-delà de sa phase d'expérimentation, l'application Oz Ensemble a définitivement cessé de fonctionner en mai 2025.
                </p>
                <p className="text-sm text-black">
                  Nous remercions chaleureusement toutes les personnes qui ont utilisé ou soutenu ce service au fil des années, ainsi que les partenaires publics qui ont rendu ce projet possible, notamment :
                </p>
                <p className="text-sm text-black">
                  – l'Agence Régionale de Santé Île-de-France,<br />
                  – la MILDECA (Mission interministérielle de lutte contre les drogues et les conduites addictives),<br />
                  – la Direction du Numérique du Ministère du Travail, de la Santé, des Solidarités et des Familles,<br />
                  – et la DINUM (Direction interministérielle du numérique).
                </p>
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
        {/* Toutes les sections ont été supprimées comme demandé */}
      </main>

      <Footer />
    </>
  )
}
