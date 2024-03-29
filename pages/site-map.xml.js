import fs from "fs"
import matter from "gray-matter"
import path from "path"
import { serialize } from "next-mdx-remote/serialize"
import { stats } from "fs-extra"
import { format, parse } from "date-fns"
import { fr } from "date-fns/locale"

const URL = "https://ozensemble.fabrique.social.gouv.fr"

function generateSiteMap(posts) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
   <url>
   <loc>${URL}</loc>
   <lastmod>2023-12-16T19:39:33+00:00</lastmod>
   <priority>1.00</priority>
 </url>
 <url>
   <loc>${URL}/blog</loc>
   <lastmod>2023-12-16T19:39:35+00:00</lastmod>
   <priority>0.80</priority>
 </url>
 <url>
   <loc>${URL}/files/Affiche_OZ-Ensemble.pdf</loc>
   <lastmod>2023-12-16T19:39:33+00:00</lastmod>
   <priority>0.80</priority>
 </url>
 <url>
   <loc>${URL}/files/AFFICHE_OZ_-_Defi_de_Janvier.pdf</loc>
   <lastmod>2023-12-16T19:39:33+00:00</lastmod>
   <priority>0.80</priority>
 </url>
 <url>
   <loc>${URL}/files/DEPLIANT-OZ.pdf</loc>
   <lastmod>2023-12-16T19:39:33+00:00</lastmod>
   <priority>0.80</priority>
 </url>
 <url>
   <loc>${URL}/files/Dossier_de_presse_-_2023_-_Defi_de_Janvier.pdf</loc>
   <lastmod>2023-12-16T19:39:33+00:00</lastmod>
   <priority>0.80</priority>
 </url>
 <url>
   <loc>${URL}/files/26022024-Oz_Ensemble-Mentions_legales_site_V4.pdf</loc>
   <lastmod>2023-12-16T19:39:33+00:00</lastmod>
   <priority>0.80</priority>
 </url>
 <url>
   <loc>${URL}/files/25012023-Oz_Ensemble-Politique_de_confidentialite_site_V3.pdf</loc>
   <lastmod>2023-12-16T19:39:33+00:00</lastmod>
   <priority>0.80</priority>
 </url>
 <url>
   <loc>${URL}/stats</loc>
   <lastmod>2023-12-16T19:39:33+00:00</lastmod>
   <priority>0.80</priority>
 </url>
     ${posts
       .map(({ slug, lastmod }) => {
         return `
       <url>
           <loc>${`${URL}/blog/${slug}`}</loc>
           <lastmod>${lastmod}</lastmod>
       </url>
     `
       })
       .join("")}
   </urlset>
 `
}

export default function SiteMap() {
  return <div>{/* Render your sitemap content here */}</div>
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
        const parsedDate = data.date
          ? parse(data.date, "MMMM d, yyyy", new Date(), { locale: fr })
          : null
        const currentDate = new Date()

        if (parsedDate >= currentDate) {
          return null
        }
        return {
          ...data,
          mdxSource,
          slug: filename.replace(".mdx", ""),
          lastmod: parsedDate
            ? format(parsedDate, "yyyy-MM-dd")
            : stats.mtime.toISOString(),
        }
      })
  )

  const sitemap = generateSiteMap(posts.filter((post) => post !== null))

  fs.writeFileSync(path.join(process.cwd(), "public", "sitemap.xml"), sitemap)

  return {
    props: { posts },
  }
}
