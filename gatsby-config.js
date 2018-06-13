module.exports = {
  siteMetadata: {
    title: 'Daniel Friedman',
    description: 'The personal website of Daniel Friedman',
    siteUrl: 'https://dan-f.me',
  },
  plugins: [
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blog',
        path: `${__dirname}/blog/`,
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js',
      },
    },
    { resolve: 'gatsby-plugin-feed' },
  ],
}
