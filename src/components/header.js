import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import ListOfMenuItems from "./list-of-menu-items"

export const Header = () => {

  const data = useStaticQuery(graphql`
  query MyHeaderQuery {
    datoCmsHeaderAddOn {
      addOn
    }
    datoCmsSiteTitle {
      title
    }
  }
  `)



  return (
  <>
  <header>
    <div id="header-items">

        <h1>
        <Link siteTitle={data.datoCmsSiteTitle.title}
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}>

         {data.datoCmsSiteTitle.title}

        </Link>
        </h1>

        <ListOfMenuItems />

    </div>

    <div headerAddon={data.datoCmsHeaderAddOn.addOn}
          id="subMenu">
      <p>{data.datoCmsHeaderAddOn.addOn}</p>
    </div>

  </header>

  </>
  )
}

// Header.propTypes = {
//   title: PropTypes.string,
// }

// Header.defaultProps = {
//   title: ``,
// }

export default Header
