import React from "react"
import Navigation, { DownloadPopupStandalone } from "~/components/Navigation"
import Footer from "~/components/Footer"
import BlogCard from "~/components/BlogCard"
import { fetchAPI, getStrapiMedia } from "~/app/api/strapi"

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
                .filter(
                  (post) => new Date(post.attributes.PublishAt) <= new Date()
                )
                .map((post) => {
                  const postAttributes = post.attributes;
                  const imageUrl = getStrapiMedia(
                    postAttributes.cover.data.attributes.url
                  );
                  const date = new Date(
                    postAttributes.PublishAt
                  ).toLocaleDateString("fr-FR", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  });
                  return (
                  <BlogCard
                    key={post.id}
                    imageUrl={imageUrl}
                    title={postAttributes.title}
                    date={date}
                    articleUrl={`/blog/${postAttributes.slug}`}
                    alt={postAttributes.cover.data.attributes.alternativeText}
                  />
                )
              })}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  )
}

async function getBlogPosts() {
  try {
    const path = `/articles`;
    const urlParamsObject = {
      populate: {
        autorsBio: {
          populate: "*",
        },
        category: { populate: "*" },
        cover: { fields: ["url", "alternativeText"] },
      },
      sort: { PublishAt: "desc" },
    };
    const options = {};
    const responseData = await fetchAPI(path, urlParamsObject, options);
    return responseData.data;
  } catch (error) {
    console.error(error);
    return [];
  }
}
