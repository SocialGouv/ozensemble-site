import React, { useState } from "react"
import Navigation, {
  DownloadPopup,
  DownloadPopupTrigger,
} from "../../components/Navigation"
import Footer from "../../components/Footer"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"
import Head from "next/head"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { HiChevronLeft } from "react-icons/hi"
import styles from "../../style/bloga.module.css"

const Blog = ({ mdxSource, data }) => {
  const [showPopup, setShowPopup] = useState(false)
  return (
    <>
      <Head>
        <title>{data.title} | Blog | Oz Ensemble</title>
        <meta name="description" content={data.description} />
        <meta property="og:title" content={data.title} />
        <meta property="og:description" content={data.description} />
        <meta property="og:image" content={data.image} />
      </Head>
      <DownloadPopup showPopup={showPopup} setShowPopup={setShowPopup} />
      <Navigation showPopup={showPopup} setShowPopup={setShowPopup} />
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
            alt={data.title}
          />
        )}
      </div>

      <div
        className={`p-10 sm:rounded-xl md:rounded-3xl sm:mx-20 xl:mx-auto xl:w-[1100px] mb-8 text-base ${styles.blogContent}`}
      >
        <MDXRemote {...mdxSource} />
      </div>
      <div className="flex justify-center mb-10">
        <DownloadPopupTrigger setShowPopup={setShowPopup} />
      </div>
      <Footer />
    </>
  )
}

export async function getStaticProps({ params }) {
  const filePath = path.join(process.cwd(), "content", `${params.blog}.mdx`)
  const fileContents = fs.readFileSync(filePath, "utf-8")
  const { content, data } = matter(fileContents)
  const mdxSource = await serialize(content)

  return {
    props: {
      mdxSource,
      data,
    },
  }
}

export async function getStaticPaths() {
  const directoryPath = path.join(process.cwd(), "content")
  const filenames = fs.readdirSync(directoryPath)

  const paths = filenames.map((filename) => ({
    params: { blog: filename.replace(".mdx", "") },
  }))

  return {
    paths,
    fallback: false,
  }
}

export default Blog
