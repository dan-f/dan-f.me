export const siteMetadata = graphql`
  fragment SiteMetadata on RootQueryType {
    site {
      siteMetadata {
        title
      }
    }
  }
`
