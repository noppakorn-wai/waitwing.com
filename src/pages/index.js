import React from 'react'
import { Link } from 'gatsby'
import { StaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`waitwing`, `react`]} />
    <h1>Hi people</h1>
    <p>เปลวไฟมอดลงแล้ว เขาทอดสายตาผ่านหน้าต่างจับจ้องไปที่กลุ่มดวง<b>ดาว</b> but <b>if</b> I could do it?</p>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    {/* <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}> */}
      <StaticQuery
        query={graphql`
          query {
            placeholderImage: file(relativePath: { eq: "trianglify.png" }) {
              childImageSharp {
                fluid(maxWidth: 960) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        `}
        render={data => <Img fluid={data.placeholderImage.childImageSharp.fluid} />}
      />
    {/* </div> */}
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
