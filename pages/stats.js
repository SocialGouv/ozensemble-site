import Footer from "../components/Footer"
import Navigation from "../components/Navigation"
import Head from "next/head"
import { useState, useEffect } from "react"
import Chart from "chart.js/auto"
import Pagination from "./pagination"

const Stats = () => {
  const [result, setResult] = useState(null)
  const [result2, setResult2] = useState(null)
  const [showTable, setShowTable] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const dataPerPage = 10
  const offset = (currentPage - 1) * dataPerPage
  const currentPageData = result && result.slice(offset, offset + dataPerPage)
  const [currentPage2, setCurrentPage2] = useState(1)
  const offset2 = (currentPage2 - 1) * dataPerPage
  const currentPageData2 =
    result2 && result2.slice(offset2, offset2 + dataPerPage)

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

    if (ctx && parsedData && !Chart.getChart(ctx)) {
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
          legend: {
            onClick: null,
          },
          events: ["mousemove"],

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

          <div className=" flex justify-between flex-col text-center p-10 h-[1300px] lg:pt-10 sm:rounded-xl md:rounded-3xl bg-oz-gray sm:mx-20 xl:mx-auto xl:w-[1100px] mb-2">
            <div className=" bg-white rounded-2xl ">
              <div className="text-2xl text-[#DE285E] font-bold py-4">
                Utilisateurs Actifs Journaliers
              </div>
              {result ? (
                !showTable ? (
                  <canvas
                    aria-label="Graphique représentant les Utilisateurs Actifs Journaliers"
                    role="img"
                    id="myChart"
                    tabIndex={0}
                    ref={(el) => el && createChart(result, "myChart")}
                  />
                ) : (
                  <>
                    <div className="overflow-x-auto rounded-xl">
                      <table className="min-w-full  bg-white rounded-xl">
                        <thead className="bg-[#DE285E] text-white">
                          <tr>
                            <th className="py-2 px-4">Date</th>
                            <th className="py-2 px-4">Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentPageData &&
                            currentPageData.map((row, index) => (
                              <tr key={index}>
                                <td className="py-2 px-4">
                                  {new Date(row[0]).toLocaleString("fr-FR", {
                                    day: "numeric",
                                    month: "long",
                                    year: "numeric",
                                  })}
                                </td>
                                <td className="py-2 px-4">{row[1]}</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                    <Pagination
                      total={result ? result.length : 0}
                      per_page={dataPerPage}
                      currentPage={currentPage}
                      onNext={() => setCurrentPage(currentPage + 1)}
                      onPrevious={() => setCurrentPage(currentPage - 1)}
                    />
                  </>
                )
              ) : (
                <div aria-live="polite">Chargement en cours...</div>
              )}
            </div>
            <div className=" bg-white rounded-2xl ">
              <div className="text-2xl text-[#DE285E] font-bold py-4">
                Engagement global - par mois
              </div>
              {result2 ? (
                !showTable ? (
                  <canvas
                    aria-label="Graphique représentant les Utilisateurs Actifs Journaliers"
                    role="img"
                    id="myChart2"
                    tabIndex={0}
                    ref={(el) => el && createChart(result2, "myChart2")}
                  />
                ) : (
                  <>
                    <div className="overflow-x-auto rounded-xl">
                      <table className="min-w-full  bg-white rounded-xl">
                        <thead className="bg-[#DE285E] text-white">
                          <tr>
                            <th className="py-2 px-4">Date</th>
                            <th className="py-2 px-4">Value</th>
                          </tr>
                        </thead>
                        <tbody>
                          {currentPageData2 &&
                            currentPageData2.map((row, index) => (
                              <tr key={index}>
                                <td className="py-2 px-4">
                                  {new Date(row[1]).toLocaleString("fr-FR", {
                                    month: "long",
                                    year: "numeric",
                                  })}
                                </td>
                                <td className="py-2 px-4">{row[0]}</td>
                              </tr>
                            ))}
                        </tbody>
                      </table>
                    </div>
                    <Pagination
                      total={result2 ? result2.length : 0}
                      per_page={dataPerPage}
                      currentPage={currentPage2}
                      onNext={() => setCurrentPage2(currentPage2 + 1)}
                      onPrevious={() => setCurrentPage2(currentPage2 - 1)}
                    />
                  </>
                )
              ) : (
                <div aria-live="polite">Chargement en cours...</div>
              )}
            </div>
          </div>
          <div className="flex justify-center">
            <button
              className="flex group rounded-full bg-oz-pink font-bold text-white py-2 px-6 mb-6 items-center cursor-pointer hover:text-oz-pink hover:bg-white border border-oz-pink transition"
              onClick={() => setShowTable(!showTable)}
            >
              <span>
                {showTable
                  ? "Afficher les graphiques"
                  : "Afficher les tableaux"}
              </span>
            </button>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default Stats
