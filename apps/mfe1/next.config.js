/** @type {import('next').NextConfig} */
const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
const nextConfig = {
  reactStrictMode: true,
  webpack(config, options) {
    const { isServer } = options;
    const location = isServer ? 'ssr' : 'chunks';
    const moduleFederationConfig = {
      name: 'MFE1',
      filename: 'static/chunks/remoteEntry.js',
      exposes: {
        './Button': './components/Button.tsx',
        './Heading': './components/Heading.tsx',
      },
      remotes: {
      },
      shared: {
        '@duannx-poc-base-ui/core': {
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
