import React from 'react'
import Link from 'gatsby-link'
import Layout from '../components/indexLayout'
import Img from 'gatsby-image'
import { graphql } from 'gatsby'

const IndexPage = props => (
  <Layout>
    <div className="page white-bg">
      <div className="container">
        <section className="hero-section">
          <div className="hero-texts">
            <Img
              fluid={props.data.imageFirst.childImageSharp.fluid}
              className="sosc-logo"
              alt="Lafche logo"
            />
            <p className="sosc-header">
              Какво е Лафче?
            </p>
            <p>
              Лафче е платформа, която позволява на хора, които имат знания или опит в дадена сфера, да ги споделят със заинтересовани слушатели. Без излишни детайли, по един достъпен и по възможност - забавен начин.
            </p>
            <a
              href="https://www.facebook.com/lafche.club" target="_blank" rel="noopener noreferrer"
              className="btn-hero-green"
            >
              Научи повече →
            </a>
          </div>
          <div>
            <Img
              fluid={props.data.imageOne.childImageSharp.fluid}
              className="hero-image"
              alt="hero image"
            />
          </div>
        </section>
      </div>
      <div className="container">
        <section className="hero-section2">
          <Img
            fluid={props.data.imageTwo.childImageSharp.fluid}
            className="hero-image"
            alt="hero image"
          />
          <div className="hero-texts">
            <p className="hero-header">Събития</p>
            <div className="dash" />
            <p>
              Събитията ще са в онлайн формат, веднъж месечно, при неформална обстановка :)
            </p>
            <p>
              Темите, които ще се обсъждат, не са от строго определени сфери, което означава - никакви ограничения. От садене на картофи, през програмиране, до пчеларство.
            </p>
            <Link className="btn-hero-green" to="/events">Научи повече →</Link>
          </div>
        </section>
      </div>

      <div className="container">
        <section className="hero-section3">
          <div className="hero-texts">
            <p className="hero-header">Свържете се с нас!</p>
            <div className="dash" />
            <p>
              Ако искате да станете част от Лафче или имате какво да споделите с нашата аудитория, бихте могли да се свържете с нас като ни изпратите съобщение във Фейсбук или ни пишете на <a href="mailto:contact@lafche.club">този</a> имейл. :)
            </p>
            <a href="https://www.facebook.com/lafche.club" target="_blank" rel="noopener noreferrer" className="btn-hero-green">
              Към страницата ни →
            </a>
          </div>
          <Img
            fluid={props.data.imageThree.childImageSharp.fluid}
            className="hero-image"
            alt="hero image"
          />
        </section>
      </div>
    </div>
  </Layout>
)

export const firstSiteImages = graphql`
  fragment firstSiteImages on File {
    childImageSharp {
      fluid(maxWidth: 1000) {
        ...GatsbyImageSharpFluid_tracedSVG
      }
    }
  }
`

export const pageQuery = graphql`
  query {
    imageFirst: file(relativePath: { eq: "images/logo_transparent.png" }) {
      ...firstSiteImages
    }
    imageOne: file(relativePath: { eq: "images/hero_main.png" }) {
      ...firstSiteImages
    }
    imageTwo: file(relativePath: { eq: "images/hero_clubs.png" }) {
      ...firstSiteImages
    }
    imageThree: file(relativePath: { eq: "images/hero_github.png" }) {
      ...firstSiteImages
    }
    imageFour: file(relativePath: { eq: "images/hero_connect_.png" }) {
      ...firstSiteImages
    }
  }
`

export default IndexPage
