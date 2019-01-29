// import React from 'react'
// import { graphql } from 'gatsby'

// import Header from './header'
// import Footer from './footer'

// import '../styles/postTemplate.css'

// export default function Template({
//   data // this prop will be injected by the GraphQL query below.
// }) {
//   const { markdownRemark } = data // data.markdownRemark holds our post data
//   const { frontmatter, html } = markdownRemark
//   return (
//     <>
//       <div className='site'>
//         <Header />
//         <div className='postWrapper'>
//           <div className='blog-post'>
//             <h1>{frontmatter.title}</h1>
//             <h2>{frontmatter.date}</h2>
//             <hr />
//             {/* <br /> */}
//             <div
//               className='blog-post-content'
//               dangerouslySetInnerHTML={{ __html: html }}
//             />
//           </div>
//         </div>
//       </div>
//       <Footer />
//     </>
//   )
// }

// export const pageQuery = graphql`
//   query($slug: String!) {
//     markdownRemark(frontmatter: { slug: { eq: $slug } }) {
//       html
//       frontmatter {
//         title
//         date(formatString: "MMMM DD, YYYY")
//         slug
//       }
//     }
//   }
// `
