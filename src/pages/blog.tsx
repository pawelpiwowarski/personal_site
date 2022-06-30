import * as React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import type { PageProps } from "gatsby"


type DataProps = {
  allFile: {
    nodes: [{
      name: string
    }]
  }
}

const BlogPage = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
      {
        data.allFile.nodes.map(node => (
          <li key={node.name}>
            {node.name}
          </li>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
query  {
  allFile(filter: {extension: {eq: "mdx"}}) {
    nodes {
      name
    }
  }
}
 `
export default BlogPage