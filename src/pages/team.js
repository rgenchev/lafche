import React from 'react'
import { graphql } from 'gatsby'
import GatsbyConfig from '../../gatsby-config'
import CustomHelmet from '../components/CustomHelmet'
import Layout from '../components/indexLayout'
import Img from 'gatsby-image'

const TeamsPage = ({ data }) => (
  <Layout>
    <CustomHelmet page={GatsbyConfig.siteMetadata.team} />
    <div className="page">
      <div className="container">
        <h2>Екип</h2>
        <div className="team-section">
          {/* Card for coordinators */}
          <a className="card-link" href="https://www.linkedin.com/in/yosifgenchev" target="_blank" rel="noopener noreferrer">
            <div className="member-card white-bg elevate">
              <Img
                fluid={data.yosifGenchevAvatarImage.childImageSharp.fluid}
                className="profile-pic"
                style={{
                  zIndex: 4
                }}
              />

              <div className="member-details">
                <h3 className="name">Йосиф Генчев</h3>
                <p className="designation">Съосновател</p>
              </div>
            </div>
          </a>

          <a className="card-link" href="https://rgenchev.com/" target="_blank" rel="noopener noreferrer">
            <div className="member-card white-bg elevate">
              <Img
                fluid={data.radoslavGenchevAvatarImage.childImageSharp.fluid}
                className="profile-pic"
              />

              <div className="member-details">
                <h3 className="name">Радослав Генчев</h3>
                <p className="designation">Съосновател</p>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
  </Layout>
)

export default TeamsPage

export const teamQuery = graphql`
  query membersQuery {
    yosifGenchevAvatarImage: file(relativePath: { eq: "images/yge.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    radoslavGenchevAvatarImage: file(relativePath: { eq: "images/rgenchev.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`
