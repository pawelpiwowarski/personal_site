import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'

const AboutPage: React.FC  = () => {
  return (
    <Layout pageTitle="About Me">
<br></br>
  <StaticImage
  className='centered'
        alt="Home"
        src="../images/profile.jpeg"
        height={250}

        placeholder="blurred"
        layout="fixed"

      />
    
    <h2 >
Hi there! My name is Paweł Piwowarski I'm a passionate programming enthusiast. 
I'm currently a student at the Vrije Universiteit Amsterdam where I'm studying for 
a Bachelor's Degree in Artificial Intelligence. I'm interested in working as a backend web app developer, 
technologies that I'm familiar with include: ReactJS, NodeJs, GraphQL, Solidity and Python. 
On this website I present to you my portfolio build during my first year of studies. 
I hope that you will enjoy walking through it!
    </h2>
  </Layout>
  )
}
export default AboutPage