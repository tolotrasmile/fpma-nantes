const path = require("path")

const here = (...p) => path.join(__dirname, ...p)

module.exports = {
  siteMetadata: {
    title: `FPMA Nantes`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@tolotrasmile`,
  },
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-transformer-remark",
    "gatsby-plugin-sass",
    {
      resolve: `gatsby-mdx`,
      options: {
        defaultLayouts: {
          default: here("./src/components/markdown-layout.js"),
        },
        extensions: [".mdx", ".md", ".markdown"],
      },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`PT+Sans`],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
