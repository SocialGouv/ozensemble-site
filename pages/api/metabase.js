import { DataFrame } from "data-forge"
import fetch from "node-fetch"

export default async function metabase(req, res) {
  try {
    const questionIndex = req.query.question
    const sessionResponse = await fetch(
      "https://metabase-ozensemble.fabrique.social.gouv.fr/api/session",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          username: process.env.METABASE_ACCOUNT,
          password: process.env.METABASE_PASSWORD,
        }),
      }
    )

    if (!sessionResponse.ok) {
      throw new Error("Failed to authenticate with Metabase")
    }

    const { id: session_id } = await sessionResponse.json()
    const headers = { "X-Metabase-Session": session_id }

    const cardResponse = await fetch(
      "https://metabase-ozensemble.fabrique.social.gouv.fr/api/card",
      {
        headers,
      }
    )

    if (!cardResponse.ok) {
      throw new Error("Failed to fetch cards from Metabase")
    }

    const cardData = await cardResponse.json()
    const questions = cardData.filter((q) => q.public_uuid)

    if (questionIndex < 0 || questionIndex >= questions.length) {
      throw new Error("Invalid question index")
    }

    const uuid = questions[questionIndex].public_uuid

    const queryResponse = await fetch(
      `https://metabase-ozensemble.fabrique.social.gouv.fr/api/public/card/${uuid}/query`,
      {
        headers,
      }
    )

    if (!queryResponse.ok) {
      throw new Error("Failed to fetch query result from Metabase")
    }

    const {
      data: { rows },
    } = await queryResponse.json()
    const df = new DataFrame(rows)

    res.status(200).json({ result: df.toJSON() })
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: "Internal Server Error" })
  }
}
