/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: 'Geraldine Atayan - Web Developer',
    siteUrl: 'https://grcldq.github.io/',
    description: 'Web portfolio created by Geraldine Atayan using Gatsby.js',
  },
  plugins: [
    'gatsby-plugin-dark-mode',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets/,
        },
      },
    },
  ],
}
