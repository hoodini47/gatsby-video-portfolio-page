/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import "./styles.scss"


export const Layout = ({ children }) => {

  const data = useStaticQuery(graphql`
  query MyLayoutQuery {
    datoCmsSiteTitle {
      title
    }
  }
  
  `)

  return (
    <>
    <div class="flex-wrapper">
        <Header siteTitle={data.datoCmsSiteTitle.title} />
        <main>{children}</main>
    </div>

    <footer>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
    </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
