import React from "react";
import Link from "gatsby-link";
import PostListing from "../components/Posts/PostListing";
const IndexPage = ({ data }) => (
  <div>
    <h1>Posts</h1>
    {data.allMarkdownRemark.edges.map(({ node }) => {
      return <PostListing key={node.id} post={node} />;
    })}
  </div>
);
export default IndexPage;

export const query = graphql`
  query SiteMeta {
    site {
      siteMetadata {
        title
        desc
      }
    }
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MMMM DD YYYY")
          }
          html
          excerpt(pruneLength: 280)
        }
      }
    }
  }
`;
