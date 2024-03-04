import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import Head from "next/head"

const Stats = () => {
  return (
    <>
      <Head>
        <title>Statistiques | Oz Ensemble</title>
      </Head>
      <div>
        <Navigation />
        <div className="h-96 bg-white">
          <scatter-chart
            className="w-full h-full"
            x="[[1, 5, 8], [1, 2, 15]]"
            y="[[30, 10, 20], [10, 20, 30]]"
          ></scatter-chart>
        </div>
        <div>
          <p className="text-center">
            L'affichage des données auxquelles vous avez accès est géré par
            Métabase. L'accessibilité non-conforme de cet affichage est sous le
            contrôle de Métabase.
          </p>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Stats
