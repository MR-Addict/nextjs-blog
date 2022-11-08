const isGithubActions = process.env.GITHUB_ACTIONS || false;

let assetPrefix = "/";

if (isGithubActions) {
  // trim off `<owner>/`
  const repo = process.env.GITHUB_REPOSITORY.replace(/.*?\//, "");

  assetPrefix = `/${repo}/`;
}

module.exports = {
  assetPrefix: assetPrefix,
};
