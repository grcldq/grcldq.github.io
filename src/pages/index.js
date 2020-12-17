import React from 'react';
import Img from 'gatsby-image';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';
import { graphql } from 'gatsby';
import {
  MdAccountBox,
  MdCode,
  MdLibraryBooks,
  MdMail,
  MdOpenInNew,
  MdPermMedia,
  MdSchool,
  MdWork,
} from 'react-icons/md';

import ExperienceDetails from '../components/experience-details';
import Footer from '../components/footer';
import Form from '../components/form';
import Header from '../components/header';
import GridItem from '../components/grid-item';
import PortfolioSample from '../components/portfolio-sample';
import StackItem from '../components/stack-item';
import JSONContent from '../data/content.json';

export default function Home({ data }) {
  const {
    about,
    description,
    education,
    portfolioItems,
    publication,
    siteUrl,
    title,
    workExperience,
    skillset,
  } = JSONContent;

  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <title>{title}</title>
        <link rel="canonical" href={siteUrl} />
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
        <GridItem title="about" class="grid-about" icon={<MdAccountBox />}>
          <p style={{ textAlign: 'justify' }}>{about}</p>
        </GridItem>
        <GridItem
          title="publications"
          class="grid-publications"
          icon={<MdLibraryBooks />}
        >
          <Link
            className="link"
            to={publication.url}
            target="_blank"
            rel="noopener"
          >
            {publication.title} <MdOpenInNew />
          </Link>
        </GridItem>
        <GridItem
          title="technologies"
          class="grid-stack"
          isPadded={true}
          icon={<MdCode />}
        >
          <div className="stack-list">
            {skillset.map((item, index) => (
              <StackItem
                icon={item.icon}
                isCustom={item.isCustom}
                title={item.title}
                key={item.title + index}
              />
            ))}
          </div>
        </GridItem>
        <GridItem
          title="sample projects"
          class="grid-portfolio"
          icon={<MdPermMedia />}
        >
          <div className="portfolio-items">
            {portfolioItems.map((item, index) => (
              <PortfolioSample
                image={item.image}
                alt={item.alt}
                title={item.title}
                description={item.description}
                technologies={item.technologies}
                to={item.url}
                key={item.title + index}
              />
            ))}
          </div>
        </GridItem>
        <GridItem title="work experience" class="grid-work" icon={<MdWork />}>
          {workExperience.map((item, index) => (
            <ExperienceDetails
              establishment={item.company}
              title={item.position}
              key={item.company + index}
            ></ExperienceDetails>
          ))}
        </GridItem>
        <GridItem title="education" class="grid-edu" icon={<MdSchool />}>
          {education.map((item, index) => (
            <ExperienceDetails
              establishment={item.school}
              title={item.studies}
              key={item.school + index}
            ></ExperienceDetails>
          ))}
        </GridItem>
        <GridItem
          title="contact"
          class="grid-contact"
          isPadded={true}
          icon={<MdMail />}
        >
          <Form />
        </GridItem>
      </div>
      <Footer />
    </div>
  );
}

export const query = graphql`
  query {
    profile: file(relativePath: { eq: "images/profile.jpeg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
