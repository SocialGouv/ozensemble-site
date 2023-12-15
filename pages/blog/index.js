import React from "react"
import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"
import BlogCard from "../../components/BlogCard"
import fs from "fs"
import path from "path"
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"

const Index = ({ posts }) => {
  return (
    <>
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
                  />
                ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join(process.cwd(), "content"))

  const posts = await Promise.all(
    files
      .filter((fn) => fn.endsWith(".mdx"))
      .map(async (filename) => {
        const filePath = path.join(process.cwd(), "content", filename)
        const rawContent = fs.readFileSync(filePath, "utf8")
        const { content, data } = matter(rawContent)
        const mdxSource = await serialize(content)

        return {
          ...data,
          slug: filename.replace(".mdx", ""),
          mdxSource,
        }
      })
  )

  return {
    props: { posts },
  }
}

export default Index
