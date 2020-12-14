import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

import portfolioSampleStyles from '../styles/portfolio-sample.module.scss'

const Label = prop => (
  <div className={portfolioSampleStyles.label}>{prop.item}</div>
)

export default function PortfolioSample(props) {
  const data = useStaticQuery(graphql`
    query {
      covidtracker: file(relativePath: { eq: "images/covidtracker.png" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className={portfolioSampleStyles.portfolio}>
      <Img
        alt={props.alt}
        className={portfolioSampleStyles.sampleImage}
        fluid={data[props.image].childImageSharp.fluid}
      />
      <div className={portfolioSampleStyles.portfolioDetails}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <div className={portfolioSampleStyles.technologies}>
          {props.technologies &&
            props.technologies.map((tech, i) => <Label item={tech} key={i} />)}
        </div>
        <Link className="link" target="_blank" to={props.to}>
          Click here to see demo
        </Link>
      </div>
    </div>
  )
}
