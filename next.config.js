/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
	// Enables the styled-components SWC transform
	compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig
