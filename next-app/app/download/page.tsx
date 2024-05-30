import { ANDROID_URL, IOS_URL, ROOT_URL } from "~/constants"
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
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    var ios = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    if (ios) {
      // window.location = myapp://element/{ELEMENT_ID};
      window.setTimeout(() => {
        window.location.replace('${IOS_URL}');
      }, 25)
      return
    }
    var android = /android/i.test(userAgent);
    if (android) {
      // window.location = myapp://element/{ELEMENT_ID};
      window.setTimeout(() => {
        window.location.replace('${ANDROID_URL}');
      }, 25)
      return
    }
    window.location.replace('${ROOT_URL}')
  }
  redirect()
`,
      }}
    />
  )
}
