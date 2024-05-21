import React from "react"
import Navigation, { DownloadPopupStandalone } from "~/components/Navigation"
import Footer from "~/components/Footer"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { parse } from "date-fns"
import { fr } from "date-fns/locale"
import type { Metadata } from "next"

export async function generateMetadata({
  params,
}: {
  params: { blog: string }
}): Promise<Metadata> {
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

export async function generateStaticParams() {
  const directoryPath = path.join(process.cwd(), "content")
  const filenames = fs.readdirSync(directoryPath)

  return filenames.map((filename) => ({ blog: filename.replace(".mdx", "") }))
}
