// next.config.mjs
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",              // nodig voor statische export (GitHub Pages)
  images: {
    unoptimized: true,           // voorkomt problemen met next/image
  },
  distDir: 'dist',
  basePath: "/portfolio", // bv. "/portfolio"
  assetPrefix: "/", // zorgt dat CSS/JS goed geladen wordt
};

export default nextConfig;
