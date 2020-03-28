/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default () => {
  return (
    <Layout>
      <div>
        <h1>Hello New Page</h1>
      </div>
    </Layout>
  )
}

