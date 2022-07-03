import * as React from 'react'
import Layout from '../../components/layout'
import { Link, graphql } from 'gatsby'
import type { PageProps } from "gatsby"
import { Card, Heading, Image } from 'rebass'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

type DataProps = {
  allMdx: {
    nodes: [{
      frontmatter: {
      title: string
      date: string,
      hero_image: any
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
        data.allMdx.nodes.map(node => 
        
          {
            let image : any= getImage(node.frontmatter.hero_image)
            
            return(

          <article key={node.id}>
            <Card width={500}>
        

            <Link to={`/projects/${node.slug}`}>    <GatsbyImage alt = 'dad' image={image} /> 
            <Heading        fontWeight='bold' textAlign='center'
fontFamily='fantasy'
color='primary' fontSize={[ 5 ]}>{node.frontmatter.title}</Heading> </Link>



</Card>
        
          </article>
        )})
      }
      </ul>
    </Layout>
  )
}

export const query = graphql`
query MyQuery {
  allMdx(sort: {fields: frontmatter___date, order: ASC}) {
    nodes {
      frontmatter {
        date(formatString: "MMMM D, YYYY")
        title
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
      id
      body
      slug
    }
  }
}

 `
export default BlogPage