import * as React from 'react'
import Layout from '../../components/layout'
import { Link, graphql } from 'gatsby'
import type { PageProps } from "gatsby"


type DataProps = {
  allMdx: {
    nodes: [{
      frontmatter: {
      title: string
      date: string
      }
      body: string,
      id: string
      slug: string
    }]
  }
}

const BlogPage = ({ data }: PageProps<DataProps>) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <ul>
      {
        data.allMdx.nodes.map(node => (
          <article key={node.id}>
          <li key={node.frontmatter.title}>
            <p>{node.frontmatter.date}</p>
            <h2>
              <Link to={`/projects/${node.slug}`}>
                {node.frontmatter.title}
              </Link>
            </h2>
     
          
          </li>
          </article>
        ))
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allMdx(sort: {fields: frontmatter___date, order: DESC}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
      }
      id
      body
      slug
    }
  }
}

 `
export default BlogPage