import { withContentlayer } from "next-contentlayer"

!process.env.SKIP_ENV_VALIDATION && (await import("./env.mjs"))

/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  images: {
    domains: ["avatars.githubusercontent.com"],
  },
  webpack: (config) => {
    config.infrastructureLogging = {
      level: "error",
    }
    // Important: return the modified config
    // https://nextjs.org/docs/messages/undefined-webpack-config
    return config
  },
  eslint: {
    ignoreDuringBuilds: !!process.env.CI,
  },
  typescript: {
    ignoreBuildErrors: !!process.env.CI,
  },
}

export default withContentlayer(nextConfig)
