// next.config.mjs
/** @type {import('next').NextConfig} */

// Check if we are on GitHub Pages (VERCEL env undefined)
const isGitHubPages = process.env.VERCEL !== "1"

// basePath / assetPrefix instellen op GitHub Pages, root op Vercel
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isGitHubPages ? "/portfolio" : "",
  assetPrefix: isGitHubPages ? "/portfolio" : "",
}

export default nextConfig
