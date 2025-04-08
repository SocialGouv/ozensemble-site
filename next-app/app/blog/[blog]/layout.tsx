import React from "react"
import Navigation from "~/components/Navigation"
import Footer from "~/components/Footer"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { parse } from "date-fns"
import { fr } from "date-fns/locale"
import type { Metadata } from "next"
import { fetchAPI } from "~/app/api/strapi"

export async function generateMetadata({
  params,
}: {
  params: { blog: string }
}): Promise<Metadata> {
  const path = `/articles`
  const urlParamsObject = {
    filters: { slug: params.blog },
  }
  const options = {}
  const post = await fetchAPI(path, urlParamsObject, options)
  const postAttributes = post.data[0].attributes
  return {
    title: `${postAttributes.title} | Oz Ensemble`,
    description: postAttributes.description,
  }
}
export default function BlogLayout({ children }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  )
}

export async function generateStaticParams() {
  const path = `/articles`
  const urlParamsObject = {
    fields: ["slug"],
  }
  const options = {}
  const posts = await fetchAPI(path, urlParamsObject, options)
  return posts.data.map((post) => ({ blog: post.attributes.slug }))
}
