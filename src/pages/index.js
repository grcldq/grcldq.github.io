import React from 'react'
import Img from 'gatsby-image'
import { Helmet } from 'react-helmet'
import { Link } from 'gatsby'
import { useStaticQuery, graphql } from 'gatsby'
import { GrGatsbyjs } from 'react-icons/gr'
import {
  DiBootstrap,
  DiCss3,
  DiGit,
  DiHtml5,
  DiJsBadge,
  DiSass,
} from 'react-icons/di'

import ExperienceDetails from '../components/experience-details'
import Footer from '../components/footer'
import Header from '../components/header'
import Layout from '../components/layout'
import PortfolioSample from '../components/portfolio-sample'

import OpenWc from '../data/assets/openwc.svg'

const Stack = props => (
  <div className="stack-item">
    {props.children}
    <p style={{ fontSize: '16px', marginTop: '5px' }}>{props.text}</p>
  </div>
)

// TODO: loading
// TODO: 404 page
export default function Home() {
  const data = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "images/profile.JPG" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Geraldine Atayan - Web Developer</title>
        <link rel="canonical" href="https://geraldineatayan.netlify.app" />
      </Helmet>
      <Header />
      <div className="grid-layout">
        <div className="personal-photo">
          <Img
            alt="A photo of Geraldine"
            fluid={data.profile.childImageSharp.fluid}
            objectFit="cover"
            className="image"
          />
        </div>
        <div className="about">
          <Layout title="about">
            <p style={{ textAlign: 'justify' }}>
              I'm a front end developer focused on using JavaScript (ES6
              practices). I graduated in 2017 with a Bachelor's Degree in
              Information Systems from De La Salle University-Manila. I am
              adaptable, and love to continuously improve myself, not only in
              developing applications or knowledge on paper, but as well as my
              personal growth. I am fluent in English, Filipino, and can read
              and speak elementary level Mandarin.
            </p>
          </Layout>
          <Layout title="publications">
            <Link
              className="link"
              to="https://ieeexplore.ieee.org/document/8228343"
              target="_blank"
            >
              TENCON 2017 IEEE Region 10 Conference, Penang, 2017
            </Link>
          </Layout>
        </div>
        <div className="stack">
          <Layout title="technologies">
            <div className="stack-list">
              <Stack text="JavaScript">
                <DiJsBadge />
              </Stack>
              <Stack text="HTML5">
                <DiHtml5 />
              </Stack>
              <Stack text="CSS3">
                <DiCss3 />
              </Stack>
              <Stack text="Git">
                <DiGit />
              </Stack>
              <Stack text="Sass">
                <DiSass />
              </Stack>
              <Stack text="Bootstrap">
                <DiBootstrap />
              </Stack>
              <Stack text="Gatsby">
                <GrGatsbyjs />
              </Stack>
              <Stack text="open-wc">
                <OpenWc className="svg-icon" alt="open-wc logo" />
              </Stack>
            </div>
          </Layout>
        </div>
        <div className="portfolio">
          <Layout title="portfolio">
            <div className="portfolio-items">
              <PortfolioSample
                image="covidtracker"
                alt="A screenshot of the COVID Tracker site"
                title="COVID-19 Tracker"
                description="A case tracker for COVID-19"
                technologies={['open-wc', 'lit-html', 'javascript', 'css']}
                to="https://app-coronavirus-tracker.netlify.app/"
              />
            </div>
          </Layout>
        </div>
        <div className="experience">
          <Layout title="work experience">
            <ExperienceDetails
              establishment="ING Business Shared Services"
              title="Web Engineer"
            />
            <ExperienceDetails
              establishment="Lotus Labs Inc."
              title="Front End Developer"
            />
            <ExperienceDetails
              establishment="Orange and Bronze Software Labs Inc."
              title="Associate Software Engineer"
            />
          </Layout>
          <Layout title="education">
            <ExperienceDetails
              establishment="Beijing Language and Culture University"
              title="Chinese Language"
            />
            <ExperienceDetails
              establishment="De La Salle University-Manila"
              title="Bachelor of Science, Information Systems"
            />
          </Layout>
        </div>
        <div className="contact">
          <Layout title="contact">
            <form
              className="col-container"
              name="contact"
              method="POST"
              data-netlify="true"
            >
              <input type="hidden" name="form-name" value="contact" />
              <label>
                Name:
                <input type="text" name="name" required />
              </label>
              <label>
                Email:
                <input type="email" name="email" required />
              </label>
              <label>
                Message:
                <textarea type="text" name="message" rows="4" required />
              </label>
              <button type="submit">Send</button>
            </form>
          </Layout>
        </div>
      </div>
      <Footer />
    </div>
  )
}
