import React from "react"
import fs from "fs"
import matter from "gray-matter"
import Navigation, { DownloadPopupStandalone } from "~/components/Navigation"
import Footer from "~/components/Footer"
import BlogCard from "~/components/BlogCard"
import { parse } from "date-fns"
import { fr } from "date-fns/locale"

export const metadata = {
  title: "Blog | Oz Ensemble",
  description: "Découvrez les dernières actualités d'Oz Ensemble",
}

export default async function Blog() {
  const posts = await getBlogPosts()

  return (
    <div className="mt-[70px]">
      <DownloadPopupStandalone />
      <div className="flex flex-col min-h-screen">
        <Navigation />
        <div className="flex-grow py-16 mx-[10%] sm:mx-20 h-auto">
          <div className="w-full mx-auto xl:w-[1100px]">
            <h3 className="mb-16 text-4xl xl:text-5xl font-bold text-center lg:text-4xl text-oz-blue">
              Nos derniers posts
            </h3>

            <div className="grid grid-cols-1 gap-6 lg:grid-cols-3 text-center">
              {posts
                .sort((a, b) => a.order - b.order)
                .map((post) => (
                  <BlogCard
                    key={post.slug}
                    imageUrl={post.image}
                    title={post.title}
                    date={post.date}
                    articleUrl={`/blog/${post.slug}`}
                    alt={post.alt}
                  />
                ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

async function getBlogPosts() {
  // in the current folder there is an (articles) folder
  const folders = fs.readdirSync("./app/blog/(articles)")
  console.log(folders)

  const posts = await Promise.all(
    folders
      .filter((fn) => !fn.endsWith(".tsx"))
      .map(async (slug) => {
        const rawContent = fs.readFileSync(
          `./app/blog/(articles)/${slug}/page.mdx`,
          "utf8"
        )
        const { data } = matter(rawContent)
        const articleDate = parse(data.date, "MMMM d, yyyy", new Date(), {
          locale: fr,
        })

        const currentDate = new Date()

        if (articleDate >= currentDate) {
          return null
        }

        return {
          slug,
          order: data.order || 0,
          image: data.image || "",
          title: data.title || "",
          date: data.date || "",
          alt: data.alt || "",
        }
      })
      .filter(Boolean)
  )

  return posts
}