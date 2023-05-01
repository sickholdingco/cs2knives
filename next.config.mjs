/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation. This is especially useful
 * for Docker builds.
 */
await import("./src/env.mjs");
import { withContentlayer } from "next-contentlayer";

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  swcMinify: true, // content layer docs said to add this,
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },

  webpack: (config) => {
    config.infrastructureLogging = {
      level: "error",
    };
    // Important: return the modified config
    // https://nextjs.org/docs/messages/undefined-webpack-config
    return config;
  },

  /**
   * If you have `experimental: { appDir: true }` set, then you must comment the below `i18n` config
   * out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};

export default withContentlayer(config);
