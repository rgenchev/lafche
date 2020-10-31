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
                  __html: `${props.date}`
                }}
              />
            </div>
          </div>
          <p class="f6 lh-copy mt2 mid-gray">{props.excerpt}</p>
        </div>
      </article>
    </Link>
  </div>
  // <div class="mw9 center ph3-ns">
  //   <div class="cf ph2-ns">
  //     <div class="fl w-100 w-50-ns pa2">
  //       <div class="outline bg-white pv4"></div>
  //     </div>
  //     <div class="fl w-100 w-50-ns pa2">
  //       <div class="outline bg-white pv4"></div>
  //     </div>
  //   </div>
  // </div>

  //  {/* <section class="flex-ns items-center flex-column-m bb b--black-10 justify-center">
  //    <article className="ml-auto mw-100 mw6-ns mw-100-m br3 hidden ba b--black-10 mv4">
  //      <div className="mw-90 h5-ns mw8-m pr0-m mt5-m mb5-m mt4 mb5 center">
  //        <Img fluid={props.cover.childImageSharp.fluid} className="mt3 mw5-m mw5-ns" alt="Card Image Text" />
  //      </div>
  //      <div className="pa3 bt b--black-10">
  //        <p className="f6 f4-ns lh-copy">
  //          <img src={DateIcon} className="mr1" alt="date icon" />
  //          <span
  //             className="mr1"
  //             dangerouslySetInnerHTML={{
  //               __html: `${props.date}`,
  //             }}
  //           />
  //         <span>{isUpcoming(props.date)}</span>
  //       </p>
  //     </div>
  //   </article>
  // </section>
  // <div className="card elevate white-bg">
  //   <Link className="card-container" to={props.slug}>

  //      <div className="card-text">
  //        <h2 className="card-header-text">
  //          {props.title}
  //        </h2>
  //        <div className="card-date black">



  //        </div>
  //      </div>
  //    </Link>
  //  </div> */}
)

export default Card
