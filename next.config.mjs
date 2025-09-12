
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable default image optimization
  },
  assetPrefix:'/portfolio/',
  distDir: 'dist',
  basePath: '/portfolio',
  output: 'export'
};

export default nextConfig;