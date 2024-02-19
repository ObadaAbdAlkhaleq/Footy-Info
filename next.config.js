/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { remotePatterns: [{ hostname: 'crests.football-data.org' }, { hostname: 'upload.wikimedia.org' }] }
}

module.exports = nextConfig
