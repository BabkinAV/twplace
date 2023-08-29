/** @type {import('next').NextConfig} */

const withPWA = require("next-pwa")({
	dest: "public",
	register: true,
	skipWaiting: true,
	disable: process.env.NODE_ENV === "development",
});

module.exports = withPWA({
	reactStrictMode: true,
	// Enables the styled-components SWC transform
	compiler: {
    styledComponents: true,
  },
	images: {
    domains: [process.env.IMAGE_DOMAIN],
  },
});
