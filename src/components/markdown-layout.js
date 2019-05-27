import React from "react"
import Layout from "./layout"
import SEO from "./seo"

function MarkdownPage({ children, pageContext: { frontmatter } }) {
  console.log(frontmatter)
  return (
    <>
      <SEO {...frontmatter} />
      <Layout>{children}</Layout>
    </>
  )
}

export default MarkdownPage
