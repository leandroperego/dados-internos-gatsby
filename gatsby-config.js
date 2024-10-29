/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `dados-internos-gatsby`,
    siteUrl: `https://www.yourdomain.tld`,
  },
  plugins: [
    {
      resolve: `gatsby-source-rest-api`,
      options: {
        endpoints: ["https://jsonplaceholder.typicode.com/users"]
      }
    }
  ],
}
