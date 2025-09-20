/** @type {import('next').NextConfig} */
const nextConfig = {
  // Performance optimizations for global audience
  experimental: {
    // optimizeCss: true, // 임시 비활성화
    optimizePackageImports: ['lucide-react'],
  },
  
  // Image optimization for faster loading
  images: {
    formats: ['image/webp', 'image/avif'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  
  // Compression for better performance
  compress: true,
  
  // PWA support for better user experience
  swcMinify: true,
  
  // SEO optimizations
  trailingSlash: false,
  
  // Analytics bundle analyzer
  ...(process.env.ANALYZE === 'true' && {
    bundleAnalyzer: {
      enabled: true,
    },
  }),
  
  // Headers for better SEO and security
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'origin-when-cross-origin',
          },
        ],
      },
      {
        source: '/ads.txt',
        headers: [
          {
            key: 'Content-Type',
            value: 'text/plain',
          },
        ],
      },
    ];
  },
  
  // Redirects for SEO
  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
