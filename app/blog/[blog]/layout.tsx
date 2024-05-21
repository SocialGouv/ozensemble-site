import React from "react"
import Navigation, { DownloadPopupStandalone } from "~/components/Navigation"
import Footer from "~/components/Footer"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { parse } from "date-fns"
import { fr } from "date-fns/locale"
import type { Metadata, ResolvingMetadata } from "next"

type MetadataProps = {
  params: { blog: string }
  searchParams: { [key: string]: string | string[] | undefined }
}
export async function generateMetadata(
  { params, searchParams }: MetadataProps,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const filePath = path.join(process.cwd(), "content", `${params.blog}.mdx`)
  const fileContents = fs.readFileSync(filePath, "utf-8")
  const { data } = matter(fileContents)

  const articleDate = parse(data.date, "MMMM d, yyyy", new Date(), {
    locale: fr,
  })

  const currentDate = new Date()

  if (articleDate >= currentDate) {
    return null
  }
  return {
    title: data.title,
    description: data.description,
    openGraph: {
      title: data.title,
      description: data.description,
      images: [data.image],
    },
  }
}

export default function BlogLayout({ children }) {
  return (
    <>
      <DownloadPopupStandalone />
      <Navigation />
      {children}
      <Footer />
    </>
  )
}
