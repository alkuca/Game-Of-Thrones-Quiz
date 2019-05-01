module.exports = {
  siteMetadata: {
    title: `Hardest Game Of Thrones Quiz`,
    description: `Solve the hardest Game of Thrones quiz for real superfans`,
    author: `alkuca`,
    url: `https://gameofthronequiz.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-json`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#2e38a5`,
        theme_color: `#2e38a5`,
        display: `minimal-ui`,
        icon: "src/images/icon.jpg",
      },
    },
    `gatsby-plugin-offline`,

    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-139193929-1"
      }
    }
  ]
}
