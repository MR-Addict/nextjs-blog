const isGithubActions = process.env.GITHUB_ACTIONS || false;
let assetPrefix = "/";

if (isGithubActions) {
  const repo = process.env.GITHUB_REPOSITORY;
  assetPrefix = `/${repo}/`;
  console.log(repo);
}

module.exports = {
  assetPrefix: assetPrefix,
  images: {
    unoptimized: true,
  },
};
