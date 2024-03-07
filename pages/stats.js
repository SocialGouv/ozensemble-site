import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import Head from "next/head"
import { useState, useEffect } from "react"
import Chart from "chart.js/auto"

const Stats = () => {
  const [error, setError] = useState(null)
  const [result, setResult] = useState(null)
  const [result2, setResult2] = useState(null)
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/api/metabase?question=0")
        const responseData = await response.json()
        const data = JSON.parse(responseData.result)

        setResult(data)

        const response2 = await fetch("/api/metabase?question=1")
        const responseData2 = await response2.json()
        const data2 = JSON.parse(responseData2.result)

        setResult2(data2)
      } catch (error) {
        console.error(error)
        setError("Error loading data")
      }
    }

    fetchData()
  }, [])

  const createChart = (data, id) => {
    const ctx = document.getElementById(id)

    let parsedData
    if (id === "myChart2") {
      parsedData = data.map((row) => {
        return {
          x: new Date(row[1]).toLocaleString("fr-FR", {
            month: "long",
            year: "numeric",
          }),
          y: row[0],
        }
      })
    } else {
      parsedData = data.map((row) => {
        return {
          x: new Date(row[0]).toLocaleString("fr-FR", {
            day: "numeric",
            month: "long",
            year: "numeric",
          }),
          y: row[1],
        }
      })
    }

    if (ctx && !Chart.getChart(ctx)) {
      new Chart(ctx, {
        type: "line",
        data: {
          datasets: [
            {
              label:
                id === "myChart2"
                  ? "Nombre de nouveaux utilisateurs engagés distincts, par mois"
                  : "Nombre d'utilisateurs distincts ayant ouvert l'application par jour",
              data: parsedData,
              borderColor: "#4030A5",
              borderWidth: 2,
              fill: true,
              backgroundColor: "#bebaff",
            },
          ],
        },
        options: {
          layout: {
            padding: 20,
          },

          scales: {
            x: {
              ticks: {
                maxTicksLimit: 10,
              },
              position: "bottom",
            },
            y: {
              ticks: {
                beginAtZero: true,
              },
            },
          },
          pointRadius: 0,
        },
      })
    }
  }
  if (error) return <div>{error}</div>

  return (
    <>
      <Head>
        <title>Statistiques | Oz Ensemble</title>
      </Head>
      <div>
        <Navigation showPopup={showPopup} setShowPopup={setShowPopup} />
        <div>
          <h3 className="mb-16 text-4xl xl:text-5xl font-bold text-center text-oz-blue">
            Statistiques
          </h3>
          <div className="p-10 h-[1200px] lg:pt-10 sm:rounded-xl md:rounded-3xl bg-oz-gray sm:mx-20 xl:mx-auto xl:w-[1100px] mb-10">
            <div className="flex flex-col gap-4 mb-10 text-center">
              <div className=" bg-white rounded-2xl">
                <div className="text-2xl text-[#DE285E] font-bold pt-4">
                  Utilisateurs Actifs Journaliers
                </div>
                {result ? (
                  <canvas
                    aria-label="Graphique représentant les Utilisateurs Actifs Journaliers"
                    role="widget"
                    id="myChart"
                    tabIndex={0}
                    ref={(el) => el && createChart(result, "myChart")}
                  />
                ) : (
                  <div aria-live="polite">Chargement en cours...</div>
                )}
              </div>
              <div className=" bg-white rounded-2xl ">
                <div className="text-2xl text-[#DE285E] font-bold pt-4">
                  Engagement global - par mois
                </div>
                {result2 ? (
                  <canvas
                    aria-label="Graphique représentant les Engagés"
                    role="widget"
                    id="myChart2"
                    tabIndex={0}
                    ref={(el) => el && createChart(result2, "myChart2")}
                  />
                ) : (
                  <div aria-live="polite">Chargement en cours...</div>
                )}
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Stats
