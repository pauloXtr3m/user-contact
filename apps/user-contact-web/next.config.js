/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: () => ([{
        source: '/',
        destination: '/contato',
        permanent: true
    }])
}

module.exports = nextConfig
