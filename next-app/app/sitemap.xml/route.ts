// sitemap/index.xml
// https://api-ozensemble-site.fabrique.social.gouv.fr/api/sitemap/index.xml
export const dynamic = "force-dynamic" // defaults to auto

export async function GET() {
  const sitemap = await fetch(
    "https://api-ozensemble-site.fabrique.social.gouv.fr/api/sitemap/index.xml"
  ).then((res) => res.text())

  if (!sitemap) {
    return new Response("It exists but its fucked up", {
      headers: {
        "Content-Type": "text/xml",
      },
    })
  }
  return new Response(
    sitemap.replace(
      `<?xml-stylesheet type="text/xsl" href="xsl/sitemap.xsl"?>`,
      ``
    ),
    {
      headers: {
        "Content-Type": "text/xml",
      },
    }
  )
}
