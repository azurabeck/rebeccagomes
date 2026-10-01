import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  reactStrictMode: true,
  turbopack: {
    resolveAlias: {
      // Points next-intl at the request config. This is all `next-intl/plugin`
      // does for this setup; aliasing directly avoids its dependency on the
      // native @swc/core binding at config-load time.
      'next-intl/config': './src/i18n/request.ts',
    },
  },
};

export default nextConfig;
