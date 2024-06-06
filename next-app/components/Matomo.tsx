"use client"
import { init, push } from "@socialgouv/matomo-next"
import { usePathname, useSearchParams } from "next/navigation"
import { Suspense, useEffect, useState } from "react"

const MATOMO_URL = "https://matomo.fabrique.social.gouv.fr/"
const MATOMO_SITE_ID = "34"

// inspired by
// https://github.com/SocialGouv/matomo-next/issues/99
// https://github.com/betagouv/reno/blob/master/utils/Matomo.tsx

const MatomoComponent = () => {
  const [initialised, setInitialised] = useState(false)
  useEffect(() => {
    if (MATOMO_URL && MATOMO_SITE_ID && !initialised) {
      init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID })
    }
    return () => {
      setInitialised(true)
      push(["HeatmapSessionRecording::disable"])
    }
  }, [initialised, setInitialised])

  const searchParams = useSearchParams(),
    pathname = usePathname()

  const searchParamsString = searchParams.toString()
  useEffect(() => {
    if (!pathname) return
    // may be necessary to decodeURIComponent searchParamsString ?
    const url = pathname + (searchParamsString ? "?" + searchParamsString : "")
    push(["setCustomUrl", url])
    push(["trackPageView"])
  }, [pathname, searchParamsString])
  return null
}

export default function Matomo() {
  return (
    <Suspense>
      <MatomoComponent />
    </Suspense>
  )
}
