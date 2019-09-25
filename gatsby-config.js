module.exports = {
  siteMetadata: {
    title: `GB Bowlworks`,
    siteUrl: `https://www.gbbowlworks.com`,
    description: `Segmented wooden bowls made in Jenks, OK`,
    author: `Brett Bloxom`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    'gatsby-plugin-stripe',
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `store`,
        path: `${__dirname}/src/store`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `events`,
        path: `${__dirname}/src/events`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images`,
        name: 'images',
      },
    },
    `gatsby-remark-copy-linked-files`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-remark-images`,
      options: {
        maxWidth: 1080,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `GB Bowlworks`,
        short_name: `GB Bowlworks`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logos/main_logo.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-cloudinary`,
      options: {
        cloudName: 'dy6lb8vna',
        apiKey: '496439931267955',
        apiSecret: 'H5IWOSEuoO7E7MU669zatAs4Kb4',
        resourceType: 'image',
        tags: `true`,
      },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify-cms`,
  ],
}
