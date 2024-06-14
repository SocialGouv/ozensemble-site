import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Statistiques | Oz Ensemble",
  description: "Statistiques de l'application Oz Ensemble",
}

export default async function StatsLayout({ children }) {
  return <>{children}</>
}
