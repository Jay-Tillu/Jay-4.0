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
        destination: 'https://jaytillu.com/blogs',
      },
      {
        source: '/blogs/:path*',
        destination: 'https://jaytillu.com/blogs/:path*',
      },
    ];
  },
};

export default nextConfig;
