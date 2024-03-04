import got from "got"
import { DataFrame } from "data-forge"

export default async function handler(req, res) {
  try {
    let response = await got.post("http://localhost:3000/api/session", {
      json: { username: "yoan.roszak@selego.co", password: "#Ep4-R6n3" },
      responseType: "json",
    })
    let session_id = response.body.id
    let headers = { "X-Metabase-Session": session_id }

    response = await got.get("http://localhost:3000/api/card", {
      responseType: "json",
      headers: headers,
    })

    // filter for public questions
    let questions = response.body.filter((q) => q.public_uuid)
    console.log(
      `${questions.length} public of ${response.body.length} questions`
    )
    const uuid = questions[0].public_uuid
    response = await got.get(
      `http://localhost:3000/api/public/card/${uuid}/query`,
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
