import fs from "fs"
import matter from "gray-matter"
import path from "path"
import { serialize } from "next-mdx-remote/serialize"
import { stats } from "fs-extra"
import { format, parse } from "date-fns"
import { fr } from "date-fns/locale"
import type { MetadataRoute } from "next"
import { ROOT_URL } from "~/constants"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
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

  return [
    {
      url: ROOT_URL,
      lastModified: "2023-12-16T19:39:33+00:00",
      priority: 1.0,
    },
    {
      url: `${ROOT_URL}/download`,
      lastModified: "2023-12-16T19:39:33+00:00",
      priority: 0.8,
    },
    {
      url: `${ROOT_URL}/blog`,
      lastModified: "2023-12-16T19:39:35+00:00",
      priority: 0.8,
    },
    {
      url: `${ROOT_URL}/files/Affiche_OZ-Ensemble.pdf`,
      lastModified: "2023-12-16T19:39:33+00:00",
      priority: 0.8,
    },
    {
      url: `${ROOT_URL}/files/AFFICHE_OZ_-_Defi_de_Janvier.pdf`,
      lastModified: "2023-12-16T19:39:33+00:00",
      priority: 0.8,
    },
    {
      url: `${ROOT_URL}/files/DEPLIANT-OZ.pdf`,
      lastModified: "2023-12-16T19:39:33+00:00",
      priority: 0.8,
    },
    {
      url: `${ROOT_URL}/files/Dossier_de_presse_-_2023_-_Defi_de_Janvier.pdf`,
      lastModified: "2023-12-16T19:39:33+00:00",
      priority: 0.8,
    },
    {
      url: `${ROOT_URL}/files/26022024-Oz_Ensemble-Mentions_legales_site_V4.pdf`,
      lastModified: "2023-12-16T19:39:33+00:00",
      priority: 0.8,
    },
    {
      url: `${ROOT_URL}/files/25012023-Oz_Ensemble-Politique_de_confidentialite_site_V3.pdf`,
      lastModified: "2023-12-16T19:39:33+00:00",
      priority: 0.8,
    },
    {
      url: `${ROOT_URL}/stats`,
      lastModified: "2023-12-16T19:39:33+00:00",
      priority: 0.8,
    },
    ...posts.map(({ slug, lastmod }) => ({
      url: `${ROOT_URL}/blog/${slug}`,
      lastModified: lastmod,
      priority: 0.8,
    })),
  ]
}
