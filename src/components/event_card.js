import React from 'react'
import Link from 'gatsby-link'
import moment from 'moment'
import DateIcon from '../images/date_icon.svg'
import Img from 'gatsby-image'

function isUpcoming(date) {
  let eventDate = moment(date, 'DD-MMM-YYYY')
  let today = new Date()
  today.setHours(0, 0, 0, 0)
  if (today < eventDate._d) {
    return `(Предстоящ)`
  } else {
    return ``
  }
}

const Card = props => (
  <div class="fl w-100-m w-50-ns pa2">
    <Link className="no-underline" to={props.slug}>
      <article class="br2 ba dark-gray b--black-10 mv4 w-100 center" style={{boxShadow: "rgba(0, 0, 0, 0.3) 0px 30px 60px -10px, rgba(0, 0, 0, 0.33) 0px 18px 36px -18px"}}>
        <Img fluid={props.cover.childImageSharp.fluid} className="db w-100 br2 br--top" alt="Card Image Text" />
        <div class="pa2 ph3-ns pb3-ns">
          <div class="dt w-100 mt1">
            <div class="dtc">
              <h1 class="f5 f4-ns mv0">
                <img src={DateIcon} className="mr1" alt="date icon" />
              </h1>
            </div>
            <div class="dtc tr">
              <h2
                class="f5 mv0"
                dangerouslySetInnerHTML={{
                  __html: `${props.date} ${isUpcoming(props.date)}`
                }}
              />
            </div>
          </div>
          <p class="f6 lh-copy mt2 mid-gray">{props.excerpt}</p>

        </div>
      </article>
    </Link>
  </div>
)

export default Card
