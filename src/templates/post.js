// import React from "react"
// import { graphql } from "gatsby"
// import Layout from "../components/Layout"
// import { PageTitle } from "../styles"

// const SinglePOST = ({ data }) => {
//     const {
//         content,
//         title,
//         acfDemoFields: { flexibleField, myTextField },
//     } = data.wpgraphql.post

//     return (
//         <Layout>
//             <PageTitle dangerouslySetInnerHTML={{ __html: title }} />
//             <h2>{myTextField}</h2>
//             <p className="content" dangerouslySetInnerHTML={{ __html: content }} />
//             {flexibleField.length > 0 &&
//                 flexibleField.map(layout => {
//                     switch (layout.__typename) {
//                         case "WPGraphQL_Post_Acfdemofields_FlexibleField_TextareaBlock":
//                             return (
//                                 <>
//                                     <h3>Textarea</h3>
//                                     <p>{layout.textarea}</p>
//                                 </>
//                             )

//                         case "WPGraphQL_Post_Acfdemofields_FlexibleField_ImageBlock":
//                             return (
//                                 <>
//                                     <h3>Text Image block</h3>
//                                     <img src={layout.image.sourceUrl} alt="" />
//                                     <h4>{layout.text}</h4>
//                                 </>
//                             )
//                     }
//                 })}
//         </Layout>
//     )
// }
// export default SinglePOST

// export const pageQuery = graphql`
//   query GET_POST($id: ID!) {
//     wpgraphql {
//       post(id: $id) {
//         title
//         content
//         acfDemoFields {
//           myTextField
//           flexibleField {
//             __typename
//             ... on WPGraphQL_Post_Acfdemofields_FlexibleField_ImageBlock {
//               text
//               image {
//                 sourceUrl
//               }
//             }
//             ... on WPGraphQL_Post_Acfdemofields_FlexibleField_TextareaBlock {
//               textarea
//             }
//           }
//         }
//       }
//     }
//   }
// `
