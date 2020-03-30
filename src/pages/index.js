import React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"
import "../components/styles.scss"

import Layout from "../components/layout"
import SEO from "../components/seo"
import VideosCollection from "../components/videos-collection"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <VideosCollection />

  </Layout>
)

export default IndexPage
