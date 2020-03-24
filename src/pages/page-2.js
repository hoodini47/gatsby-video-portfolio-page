import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = ({data}) => (
  <Layout>
    <SEO title="Page two" />
    <h1>Videos</h1>
    <Link to="/">Go back to the homepage</Link>

    <div>
    {
    data.allDatoCmsVideoPost.edges.map((block, index) => (
      <div key={index}>
        <p> post-title: {block.node.postTitle}</p>
        <p> description: {block.node.singleVideoDescription}</p>
        <p> slug: {block.node.slugName}</p>
        <p> spotlight: {block.node.toSpotlight}</p>
        <p> video-url: <iframe title={index} width="560" height="315" src={block.node.singleVideoVideo} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>   </p>




        <br></br>
      </div>

    ))

    }
  </div>

  </Layout>
)

export default SecondPage

export const videoPostQuery = graphql`
query MyQuery {
  allDatoCmsVideoPost {
    edges {
      node {
        id
        postTitle
        singleVideoDescription
        slugName
        toSpotlight
        model {
          apiKey
        }
        singleVideoVideo
      }
    }
  }
}
`;