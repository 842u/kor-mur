const { PHASE_DEVELOPMENT_SERVER } = require('next/constants');

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    /** @type {import('next').NextConfig} */

    const nextConfig = {
      reactStrictMode: true,
    };

    return nextConfig;
  }

  /** @type {import('next').NextConfig} */

  const ContentSecurityPolicy = `
    default-src 'self';
    script-src 'self';
    style-src 'self';
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
      value: 'origin-when-cross-origin',
    },
    {
      key: 'Content-Security-Policy',
      value: ContentSecurityPolicy.replace(/\s{2,}/g, ' ').trim(),
    },
  ];

  const nextConfig = {
    async headers() {
      return [
        {
          // Apply these headers to all routes in your application.
          source: '/:path*',
          headers: securityHeaders,
        },
      ];
    },
  };

  return nextConfig;
};
