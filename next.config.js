const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    const nextConfig = {
      async redirects() {
        return [
          {
            source: '/projects',
            destination: '/projects/tag/wszystkie',
            permanent: false,
          },
          {
            source: '/projects/tag',
            destination: '/projects/tag/wszystkie',
            permanent: false,
          },
        ];
      },

      reactStrictMode: true,

      images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'cdn.sanity.io',
          },
        ],
      },
    };

    return nextConfig;
  }

  const ContentSecurityPolicy = `
    default-src 'self';
    connect-src 'self' https://*.api.sanity.io wss://*.api.sanity.io;
    script-src 'self';
    style-src 'self' 'unsafe-inline';
    img-src 'self' data: https://*.githubusercontent.com https://cdn.sanity.io;
    font-src 'self';
  `;

  const securityHeaders = [
    {
      key: 'X-DNS-Prefetch-Control',
      value: 'on',
    },
    {
      key: 'X-XSS-Protection',
      value: '1; mode=block',
    },
    {
      key: 'X-Frame-Options',
      value: 'SAMEORIGIN',
    },
    {
      key: 'Permissions-Policy',
      value:
        'camera=(), microphone=(), geolocation=() , accelerometer=(), gyroscope=(), magnetometer=(), payment=()',
    },
    {
      key: 'X-Content-Type-Options',
      value: 'nosniff',
    },
    {
      key: 'Referrer-Policy',
      value: 'strict-origin-when-cross-origin',
    },
    {
      key: 'Content-Security-Policy',
      value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
    },
  ];

  const nextConfig = {
    async redirects() {
      return [
        {
          source: '/projects',
          destination: '/projects/tag/wszystkie',
          permanent: false,
        },
        {
          source: '/projects/tag',
          destination: '/projects/tag/wszystkie',
          permanent: false,
        },
      ];
    },

    async headers() {
      return [
        {
          source: '/:path*',
          headers: securityHeaders,
        },
      ];
    },

    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'cdn.sanity.io',
        },
      ],
    },
  };

  // eslint-disable-next-line
  const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true',
    openAnalyzer: false,
  });

  return withBundleAnalyzer(nextConfig);
};
