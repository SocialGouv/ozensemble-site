/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: "standalone",

  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,

  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,

  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
  webpack: (config) => {
    config.resolve.fallback = { fs: false }
    config.module.rules.push({
      test: /\.woff2$/,
      type: "asset/resource",
    })
    return config
  },
}

module.exports = nextConfig
