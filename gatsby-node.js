/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
// You can delete this file if you're not using it

const path = require("path")

exports.createPages = async function({ graphql, actions }) {
    const { createPage } = actions
    const blogPostTemplate = path.resolve(`src/templates/blog-post.js`)

    const result = await graphql(`
    query pageQuery {
      allDatoCmsVideoPost {
        edges {
          node {
              slugName
          }
        }
      }
    }
  `)
    // Create blog post pages.
    result.data.allDatoCmsVideoPost.edges.forEach(edge => {
      createPage({
        // Path for this page — required
        path: `/videos/${edge.node.slugName}`,
        component: blogPostTemplate,
        context: {
          // Add optional context data to be inserted
          // as props into the page component..
          //
          // The context data can also be used as
          // arguments to the page GraphQL query.
          //
          // The page "path" is always available as a GraphQL
          // argument.
        },
      })
    })
}

















// exports.onCreateNode = ({ node, getNode, actions }) => {
//   const { createNodeField } = actions
//   if (node.internal.type === `MarkdownRemark`) {
//     const slug = createFilePath({ node, getNode, basePath: `pages` })
//     createNodeField({
//       node,
//       name: `slug`,
//       value: slug,
//     })
//   }
// }

//////////
///https://hackernoon.com/how-to-use-gatsby-with-a-headless-cms-ba365bb77733
/////////


// exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const result = await graphql(`
//   query MyQuery {
//     allDatoCmsVideoPost {
//       edges {
//         node {
//           id
//           slugName
//         }
//       }
//     }
//   }
//   `)
//   console.log(JSON.stringify(result, null, 4))

//   if (result.errors) {
//     reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query')
//   }

//     // Create blog post pages.
//     const posts = result.data.allDatoCmsVideoPost.edges
//     // you'll call `createPage` for each result
//     posts.forEach(({ node }, index) => {
//       createPage({
//         // This is the slug you created before
//         // (or `node.frontmatter.slug`)
//         path: node.slug,
//         component: path.resolve(`./src/components/posts-page-layout.js`),
//         // This component will wrap our MDX content
//         // component: path.resolve(`./src/components/posts-page-layout.js`),
//         // You can use the values in this context in
//         // our page layout component
//         // context: { id: node.id },
//       })
//     })
// }
