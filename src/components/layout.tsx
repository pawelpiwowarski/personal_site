
import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { site_tile,container, nav_link, nav_link_item, nav_link_text, heading, footer, footer_ul } from './layout.css'
import ResponsiveAppBar from './ResposiveAppBar'
import { motion } from "framer-motion"

interface Props {

        pageTitle: string,
        children: JSX.Element | JSX.Element[]

    
}

const Layout: React.FC<Props> = ({ pageTitle , children }) => {

    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <div>

    <div className={container}>
    
      <div className={site_tile}>
      <title > {pageTitle} | {data.site.siteMetadata.title}</title>
      
</div>
      <motion.div  animate={{ x: 50, opacity:10 }}
      
  transition={{ ease: "easeOut", duration: 3 }}>
    
      <header className={site_tile}>{data.site.siteMetadata.title}</header>

    </motion.div>

      <ResponsiveAppBar></ResponsiveAppBar>

     
      <main className='main'>

        {children}
      </main>
   

    </div>

    </div>
  )
}
export default Layout