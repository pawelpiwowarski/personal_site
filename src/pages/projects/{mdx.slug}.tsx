import * as React from 'react'
import Layout from '../../components/layout'
import { graphql, PageProps } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import {  Heading } from 'rebass'

type DataProps = {
mdx: {
  frontmatter: {
    title: string,
    date: string
    hero_image: any
    hero_image_alt: string
    hero_image_credit_link: string,
    hero_image_credit_text: string

  }
  body: string
}
}
const BlogPost = ({data}: PageProps<DataProps>) => {
  const image: any = getImage(data.mdx.frontmatter.hero_image)

  return (
   
    <Layout pageTitle={data.mdx.frontmatter.title}>
<br></br>



       <GatsbyImage 
      image={image}
      alt={data.mdx.frontmatter.hero_image_alt}
    />
  

          <br></br>
          <br></br>

        <a target='_blank' href={data.mdx.frontmatter.hero_image_credit_link}>
         <Heading fontWeight='bold' textAlign='center'
fontFamily='fantasy'
color='primary' fontSize={[ 5 ]}> {data.mdx.frontmatter.hero_image_credit_text}</Heading>
        </a>

      <h2> Started in {data.mdx.frontmatter.date}</h2>
      <h2>   <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer></h2>
   
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      body
      frontmatter {
        title
        date(formatString: "MMMM,YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default BlogPost