// Step 1: Import React
import * as React from 'react'
import Layout from '../components/layout'
import { StaticImage } from 'gatsby-plugin-image'
import { motion } from "framer-motion"
import '../components/css/styles.css'
const IndexPage: React.FC = ()=> {
  

  return (

      <Layout pageTitle="Home Page">
   
      <div className='example-container'>
        <motion.div
          animate={{
            scale: [1, 2, 4, 1, 1],
            rotate: [0, 0, 180, 180, 0],
            borderRadius: ["20%", "20%", "50%", "50%", "20%"]
          }}
          transition={{

            duration: 1,
            ease: "linear",
            times: [0, 0.2, 0.5, 0.8, 1],
            repeat: 0,
            repeatDelay: 1
          }}
        > 
          <StaticImage
        alt="Home"
        src="../../img/home.jpg"
      />
        </motion.div>
        
      </div>
    
    </Layout>
 
  )
}
// Step 3: Export your component
export default IndexPage