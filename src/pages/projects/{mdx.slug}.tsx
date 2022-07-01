import * as React from 'react'
import Layout from '../../components/layout'
import { graphql, PageProps } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

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
       <GatsbyImage
      image={image}
      alt={data.mdx.frontmatter.hero_image_alt}
    />
        <p>
        <a href={data.mdx.frontmatter.hero_image_credit_link}>
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
      </p>
      <p>{data.mdx.frontmatter.date}</p>
      <MDXRenderer>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
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