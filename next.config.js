/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  experimental: {
    forceSwcTransforms: true
  },
  images: {
    domains: ['rb.gy']
  }
}
