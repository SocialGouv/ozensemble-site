import React from "react"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { HiChevronLeft } from "react-icons/hi"
import { parse } from "date-fns"
import { fr } from "date-fns/locale"
import styles from "~/style/bloga.module.css"
import CustomMDX from "./CustomMDX"

export default async function Blog({ params }) {
  const { mdxSource, data } = await getBlogPost(params)

  return (
    <>
      <div className="p-4 lg:pt-16 sm:mx-20 xl:mx-auto xl:w-[1100px]">
        <div className="mb-6 text-oz-pink">
          <a
            className="flex items-center text-primary-1-2 hover:text-primary"
            href="/blog"
          >
            <HiChevronLeft className="mr-1 text-base lg:text-xl" />
            <span className="lg:text-xl">Retour</span>
          </a>
        </div>
        <h2 className="font-bold text-4xl lg:text-4xl text-oz-blue p-4 md:px-16">
          {data.title}
        </h2>
        <p className="lg:text-base text-gray-400 p-4 md:px-16 mb-10">
          {data.date}
        </p>
        {data.image && (
          <img
            className="w-full h-auto rounded-3xl"
            src={data.image}
            alt={data.alt}
          />
        )}
      </div>

      <div
        className={`p-10 sm:rounded-xl md:rounded-3xl sm:mx-20 xl:mx-auto xl:w-[1100px] mb-8 text-base ${styles.blogContent}`}
      >
        <CustomMDX source={mdxSource} />
      </div>
    </>
  )
}

async function getBlogPost(params: { blog: string }) {
  const filePath = path.join(process.cwd(), "content", `${params.blog}.mdx`)
  const fileContents = fs.readFileSync(filePath, "utf-8")
  const { content, data } = matter(fileContents)

  const articleDate = parse(data.date, "MMMM d, yyyy", new Date(), {
    locale: fr,
  })

  const currentDate = new Date()

  if (articleDate >= currentDate) {
    return {
      notFound: true,
    }
  }
  return {
    mdxSource: content,
    data,
  }
}
