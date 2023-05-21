/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
    },
    images: {
        domains: ['pbs.twimg.com', 'ubcodesblog.com'],
    }
}

module.exports = nextConfig
