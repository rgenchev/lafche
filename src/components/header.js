import React from 'react'
import Link from 'gatsby-link'
import favicon from '../images/favicon.ico'
import Helmet from 'react-helmet'
import GatsbyConfig from '../../gatsby-config'
import SiteLogo from '../images/logo_transparent.png';

const Header = ({ siteTitle }) => (
  <div className="nav-bar">
    <Helmet
      title={GatsbyConfig.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Лафче' },
        {
          name: 'keywords',
          content: 'Общност, лектори, Лафче, срещи, събития',
        },
      ]}
      link={[{ rel: 'shortcut icon', type: 'image/ico', href: `${favicon}` }]}
    />

    <div className="container">
      <div className="nav-items">
        <Link to="/" className="brand-link">
          {/* <img src={SiteLogo} className="brand" alt="Site Logo" /> */}
          <span className="f3 fw5 dib w2 br-100 black">Лафче</span>
        </Link>
        <ul>
          <li>
            <Link to="/" exact="true" activeClassName="active">
              Начало
            </Link>
          </li>
          <li>
            <Link to="/events" exact="true" activeClassName="active">
              Събития
            </Link>
          </li>
          <li>
            <Link to="/team" exact="true" activeClassName="active">
              Екип
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </div>
)

export default Header
