import { withContentlayer } from "next-contentlayer"

import "./env.mjs"

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  experimental: {
    serverComponentsExternalPackages: ["@prisma/client"],
  },
  webpack: (config) => {
    config.infrastructureLogging = {
      level: "error",
    }
    // Important: return the modified config
    // https://nextjs.org/docs/messages/undefined-webpack-config
    return config
  },
}

export default withContentlayer(nextConfig)
