import React, { useState } from "react"
import Navigation, { DownloadPopup } from "../../components/Navigation"
import Footer from "../../components/Footer"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote } from "next-mdx-remote"
import Head from "next/head"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { HiChevronLeft } from "react-icons/hi"
import styles from "../../style/bloga.module.css"
import { ANDROID_URL, IOS_URL } from "../../constants"
import appStorePic from "../../public/images/other/app-store-fr.png"
import googlePlayPic from "../../public/images/other/google-play-fr.png"
import { parse } from "date-fns"
import { fr } from "date-fns/locale"

const Blog = ({ mdxSource, data }) => {
  const [showPopup, setShowPopup] = useState(false)

  const components = {
    DownloadButtons: () => (
      <div className="mb-1 grid max-w-[200px] sm:max-w-[400px] sm:grid-flow-col gap-6 auto-cols-fr md:w-5/6 m-auto">
        <a href={ANDROID_URL} target="_blank" rel="noopener noreferrer">
          <img
            className="object-contain w-full"
            src={googlePlayPic.src}
            alt="télécharger dans Google Play"
          />
        </a>
        <a href={IOS_URL} target="_blank" rel="noopener noreferrer">
          <img
            className="object-contain w-full"
            src={appStorePic.src}
            alt="télécharger dans l'App Store"
          />
        </a>
      </div>
    ),
  }

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
            alt={data.alt}
          />
        )}
      </div>

      <div
        className={`p-10 sm:rounded-xl md:rounded-3xl sm:mx-20 xl:mx-auto xl:w-[1100px] mb-8 text-base ${styles.blogContent}`}
      >
        <MDXRemote {...mdxSource} components={components} />
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
