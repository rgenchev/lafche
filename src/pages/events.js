import React from 'react'
import Card from '../components/event_card'
import Layout from '../components/indexLayout'
import { graphql } from 'gatsby'

import SEO from '../components/Seo'

function getEvents(data) {
  let events = []
  let eventList = data.allMarkdownRemark.edges

  eventList.map(({ node }, index) => {
    return events.push(
      <Card
        slug={node.frontmatter.slug}
        cover={node.frontmatter.cover}
        title={node.frontmatter.name}
        date={node.frontmatter.date}
        excerpt={node.excerpt}
        key={index}
      />
    )
  })
  return events
}

const EventsPage = ({ data }) => (
  <Layout>
    <SEO title="Събития" />

    <div class="mw9 center ph3-ns pt5">
      <div class="cf ph2-ns">
        <h1 className="tc mt4">Събития</h1>

        <div>{getEvents(data)}</div>
      </div>
    </div>
  </Layout>
)

export default EventsPage

export const eventsQuery = graphql`
  query eventsQuery {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { fileAbsolutePath: { regex: "/events/.*md$/" } }
    ) {
      totalCount
      edges {
        node {
          excerpt(pruneLength: 200)
          frontmatter {
            slug
            name
            date(formatString: "DD-MMM-YYYY")
            cover {
              publicURL
              childImageSharp {
                fluid(maxWidth: 1000) {
                  srcSet
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
