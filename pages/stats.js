import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import Head from "next/head"
import { useState, useEffect } from "react"
import "@gouvfr/dsfr/dist/dsfr.min.css"
import "@gouvfr/dsfr-chart/LineChart/line-chart.common"

const Stats = () => {
  const [result, setResult] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/metabase")
        const data = await response.json()
        setResult(data.result)
      } catch (error) {
        console.error(error)
        setError("Error loading data")
      }
    }

    fetchData()
  }, [])

  if (error) return <div>{error}</div>
  if (result === null) return <div>Loading...</div>

  return (
    <>
      <Head>
        <title>Statistiques | Oz Ensemble</title>
      </Head>
      <div>
        <Navigation />
        <div></div>
        <div>
          <h1>Statistiques</h1>
          <div>
            <h1>My DSFR LineChart</h1>
            <LineChart
              title="My LineChart"
              data={result}
              options={{
                scales: {
                  y: {
                    beginAtZero: true,
                  },
                },
              }}
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Stats
