
import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { site_tile,container, nav_link, nav_link_item, nav_link_text, heading, footer, footer_ul } from './layout.css'

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
    <div className={container}>
      <title>{pageTitle} | {data.site.siteMetadata.title}</title>
      <header className={site_tile}>{data.site.siteMetadata.title}</header>

      <nav>
        <ul className={nav_link}>
          <li className={nav_link_item}><Link className={nav_link_text} to="/">Home</Link></li>
          <li className={nav_link_item}><Link className={nav_link_text} to="/about">About</Link></li>
          <li className={nav_link_item}>
            <Link to="/blog" className={nav_link_item}>
              Blog
            </Link>
          </li>
        </ul>
        
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
   

    </div>

    
  )
}
export default Layout