import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from 'gatsby'


export const ListOfMenuItems = () => {

    const data = useStaticQuery(graphql`
    query MyMenuQuery {
      allDatoCmsMenu {
        nodes {
          position
          menuItem
          categoryNumber
        }
      }
    }
  `)
    
  return (
    <ul id="menu">
    {
    data.allDatoCmsMenu.nodes.sort(
                                          (a, b) => {
                                          const positionA = a.position;
                                          const positionB = b.position;
                                          let comparision = 0;
                                            if(positionA > positionB) {
                                              comparision = 1;
                                            } else if (positionA < positionB) {
                                              comparision = -1
                                            }
                                            return comparision
                                          }
                                          ).map((block, index) => (
                <li key={index}>
                  <p key={index}>
                  {block.menuItem}
                  </p>
                </li>
            ))
    }

    </ul>
  )
}

export default ListOfMenuItems