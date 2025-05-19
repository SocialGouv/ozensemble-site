import Footer from "~/components/Footer"
import Navigation from "~/components/Navigation"

export default function MentionsLegales() {
  return (
    <>
      <header className="oz-header-gradient">
        <Navigation />
        <div className="mt-[120px] md:flex pt-20 pb-8 md:pb-32 auto-cols-fr md:w-5/6 xl:w-[1100px] mx-[10%] md:m-auto">
          <div className="w-full text-center md:text-left">
            <div>
              <h2 className="mb-5 text-4xl font-bold">
                Mentions légales
              </h2>
              <div className="flex flex-col space-y-6 lg:pb-10">
                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-oz-blue mb-4">Editeur</h3>
                  <p className="text-sm text-black mb-4">
                    La Plateforme est éditée par la Fabrique numérique du Ministère du Travail, de la Santé, des Solidarités et des Familles, située : <br />
                    Tour Highline<br />
                    8 Rue François Ory<br />
                    92120 Montrouge<br />
                    France <br />
                    Téléphone : 01 44 38 36 02 
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-oz-blue mb-4">Directrice de la publication</h3>
                  <p className="text-sm text-black mb-4">
                    Madame Anne JEANJEAN, Directrice du numérique Ministère du Travail, de la Santé, des Solidarités et des Familles.
                  </p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-md">
                  <h3 className="text-xl font-bold text-oz-blue mb-4">Hébergement du site</h3>
                  <p className="text-sm text-black mb-4">
                    Cette plateforme est hébergée par : <br />
                    OVH SAS <br />
                    2 rue Kellermann <br />
                    59100 Roubaix <br />
                    France
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <main>
        {/* Contenu principal vide */}
      </main>

      <Footer />
    </>
  )
}
