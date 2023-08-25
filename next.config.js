/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
	// Enables the styled-components SWC transform
	compiler: {
    styledComponents: true,
  },
	images: {
    domains: [process.env.IMAGE_DOMAIN],
  },
}

module.exports = nextConfig
