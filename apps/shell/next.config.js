/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options;
    const location = isServer ? 'ssr' : 'chunks';
    const moduleFederationConfig = {
      name: 'SHELL',
      filename: 'static/chunks/remoteEntry.js',
      exposes: {
      },
      remotes: {
        MFE1: `MFE1@${process.env.NEXT_PUBLIC_MFE1_URL}/_next/static/${location}/remoteEntry.js`,
        MFE2: `MFE2@${process.env.NEXT_PUBLIC_MFE2_URL}/_next/static/${location}/remoteEntry.js`,
      },
      shared: {
        '@duannx-poc-base-ui/core/': {
          singleton: true,
          requiredVersion: false,
        },
        '@t1rearc-ui-base/component': {
          singleton: true,
          requiredVersion: false,
        },
      },
    };
    config.plugins.push(new NextFederationPlugin(moduleFederationConfig));
    return config
  }
}

module.exports = nextConfig
