/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const repoName = process.env.GITHUB_REPOSITORY?.split('/')[1] || '';
const isUserOrOrgSite = /\.github\.io$/i.test(repoName);

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // For user/organization pages (e.g. username.github.io), basePath should be empty
  assetPrefix: isProd && repoName && !isUserOrOrgSite ? `/${repoName}/` : '',
  basePath: isProd && repoName && !isUserOrOrgSite ? `/${repoName}` : '',
};

module.exports = nextConfig;


