/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/u/26956655",
      },
    ],
  },

  async rewrites() {
    return [
      {
        source: '/blogs',
        destination: 'https://personal-blog-sigma-lemon.vercel.app/blogs',
      },
      {
        source: '/blogs/:path*',
        destination: 'https://personal-blog-sigma-lemon.vercel.app/blogs/:path*',
      },
    ];
  },
};

export default nextConfig;
