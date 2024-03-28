import got from "got"
import { DataFrame } from "data-forge"

export default async function handler(req, res) {
  try {
    const questionIndex = req.query.question
    let response = await got.post(
      "https://metabase-ozensemble.fabrique.social.gouv.fr/api/session",
      {
        json: { username: "yoan.roszak@selego.co", password: "igX_2MHQL8mfTn" },
        responseType: "json",
      }
    )
    let session_id = response.body.id
    let headers = { "X-Metabase-Session": session_id }

    response = await got.get(
      "https://metabase-ozensemble.fabrique.social.gouv.fr/api/card",
      {
        responseType: "json",
        headers: headers,
      }
    )

    let questions = response.body.filter((q) => q.public_uuid)

    const uuid = questions[questionIndex].public_uuid
    response = await got.get(
      `https://metabase-ozensemble.fabrique.social.gouv.fr/api/public/card/${uuid}/query`,
      {
        responseType: "json",
        headers: headers,
      }
    )

    const rows = response.body.data.rows
    const df = new DataFrame(rows)

    res.status(200).json({ result: df.toJSON() })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}
