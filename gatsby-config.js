require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Creative Portfolio`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-transformer-remark`,
    {
      resolve:`gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-166054208-1",
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true,
      },
    {
      resolve: `gatsby-source-datocms`,
      options: {
        apiToken: process.env.DATO_API_TOKEN,
      },
    },
  ],
}
