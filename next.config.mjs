// next.config.mjs
/** @type {import('next').NextConfig} */


const isGitHubPages = process.env.VERCEL !== "1"

const basePath = isGitHubPages ? "/portfolio" : ""
const assetPrefix = isGitHubPages ? "/portfolio" : ""

// Export config
const nextConfig = {
  output: "export",             // statische export nodig voor GitHub Pages
  images: {
    unoptimized: true,          // voorkomt problemen bij static export
  },
  basePath,
  assetPrefix,
}

export default nextConfig
