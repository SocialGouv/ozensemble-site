import { ROOT_URL } from "~/constants"
import { metadata as metadataMain } from "~/app/layout"

export const metadata = {
  ...metadataMain,
  title: "Télécharger Oz Ensemble",
  description:
    "Télécharger Oz Ensemble, une application mobile pour maitriser sa consommation d'alcool.",
}

export default function Download() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
  function redirect() {
    window.location.replace('${ROOT_URL}')
  }
  redirect()
`,
      }}
    />
  )
}
