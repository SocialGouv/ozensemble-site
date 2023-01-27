import Footer from "../components/Footer"
import Navigation from "../components/Navigation"

const Stats = () => {
  return (
    <div>
      <Navigation />
      <div>
        <iframe
          src="https://matomo-metabase-ozensemble.fabrique.social.gouv.fr/public/dashboard/217417aa-20f3-4dae-acd8-7230ba3c8862"
          title="Oz Ensemble, statistiques"
          width="90%"
          height="700"
          style={{ display: "block", margin: "0 auto", padding: "2rem 0" }}
          // eslint-disable-next-line
          allowTransparency
        />
      </div>
      <Footer />
    </div>
  )
}

export default Stats
