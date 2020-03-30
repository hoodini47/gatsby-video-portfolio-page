import React from "react"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from 'gatsby'

import videosLayout from "../components/layout"

export const VideosCollection = () => {

    const data = useStaticQuery(graphql`
    query videoPostQuery {
          allDatoCmsVideoModel {
            nodes {
              id
              position
              newVideo {
                postTitle
                singleVideoDescription
                singleVideoVideo
                singleVideoImage {
                  path
                }
                slugName
                toSpotlight
                videoCategoryNumer
              }
            }
          }
        }
  `)
    
  return (
    <div>
    {
    data.allDatoCmsVideoModel.nodes.sort(
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
            <div key={index}  className='video-record'>
              <p>record position: {block.position}</p>
            
                {block.newVideo.map((innerBlock, index) => (
                  <div key={index}>
                  <p> post-title: {innerBlock.postTitle}</p>
                  <p> link to page:     <Link to={innerBlock.slugName}>Go to this record page</Link></p>
                  <p> description: {innerBlock.singleVideoDescription}</p>
                  <p> slug: {innerBlock.slugName}</p>
                  <p> spotlight: {innerBlock.toSpotlight}</p>
                  <p> video-url: <iframe title={index} width="560" height="315" src={innerBlock.singleVideoVideo}
                                  frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
                                 </iframe></p>
                  <p> category number: {innerBlock.videoCategoryNumer}</p>
                  <br></br>
                  </div>
                  ))}
            </div>  
            ))
    }

  </div>
  )
}

export default VideosCollection