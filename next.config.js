/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["@square/web-sdk", "react-square-web-payments-sdk"],
}

module.exports = nextConfig
