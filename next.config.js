/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  assetPrefix: isProd && repoName ? `/${repoName}/` : '',
  basePath: isProd && repoName ? `/${repoName}` : '',
};

module.exports = nextConfig;


