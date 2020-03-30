import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from "../components/seo"

// const VideosPage = ( {data} ) => (
//   <Layout>
//     <SEO title="Page two" />
//     <h1>Videos</h1>
//     <Link to="/">Go back to the homepage</Link>

//   {/* <div>
//     {data.allDatoCmsVideoModel.nodes.newVideo
//     .map(({ node }) => {
//       return <Link key={node.id} to={`/${node.slug}`}>{node.title}</Link>
//     })
//     }
//   </div> */}

//     <div>
//     {

//     data.allDatoCmsVideoModel.nodes.sort(
//                                           (a, b) => {
//                                           const positionA = a.position;
//                                           const positionB = b.position;
//                                           let comparision = 0;
//                                             if(positionA > positionB) {
//                                               comparision = 1;
//                                             } else if (positionA < positionB) {
//                                               comparision = -1
//                                             }
//                                             return comparision
//                                           }
//                                           ).map((block, index) => ( 
//             <div key={index}>
//               <p>record position: {block.position}</p>
            
//                 {block.newVideo.map((innerBlock, index) => (
//                   <div key={index}>
//                   <p> post-title: {innerBlock.postTitle}</p>
//                   <p> description: {innerBlock.singleVideoDescription}</p>
//                   <p> slug: {innerBlock.slugName}</p>
//                   <p> spotlight: {innerBlock.toSpotlight}</p>
//                   <p> video-url: <iframe title={index} width="560" height="315" src={innerBlock.singleVideoVideo}
//                                   frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
//                                  </iframe></p>
//                   <br></br>
//                   </div>
//                   ))}
//             </div>  
//             ))
//     }

//   </div>
//   </Layout>
// )

// export default VideosPage

// export const videoPostQuery = graphql`
// query videoPostQuery {
//   allDatoCmsVideoModel {
//     nodes {
//       id
//       position
//       newVideo {
//         postTitle
//         singleVideoDescription
//         singleVideoVideo
//         singleVideoImage {
//           path
//         }
//         slugName
//         toSpotlight
//       }
//     }
//   }
// }
// `;