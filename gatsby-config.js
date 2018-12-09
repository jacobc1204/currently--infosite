module.exports = {
  siteMetadata: {
    title: 'Currently',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Currently',
        short_name: 'currently',
        start_url: '/',
        background_color: '#5CBCEC',
        theme_color: '#5CBCEC',
        display: 'minimal-ui',
        icon: 'src/images/currentlylogo.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
