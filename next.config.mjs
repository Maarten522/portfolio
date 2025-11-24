// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",                 // verplicht voor GitHub Pages
  images: {
    unoptimized: true,              // nodig voor static export
  },
  basePath: "/portfolio",           // jouw repo-naam
  assetPrefix: "/portfolio/",       // hoort dezelfde prefix te hebben
};

export default nextConfig;
