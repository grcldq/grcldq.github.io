import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql } from 'gatsby';

import Content from '../components/content';
import Footer from '../components/footer';
import Header from '../components/header';
import JSONContent from '../data/content.json';

export default function Home({ data }) {
  const { about, description, siteUrl, title } = JSONContent;

  return (
    <div className="container">
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <title>{title}</title>
        <link rel="canonical" href={siteUrl} />
      </Helmet>
      <Header image={data.profile.childImageSharp.fluid} about={about} />
      <hr />
      <Content data={data} />
      <Footer />
    </div>
  );
}

export const query = graphql`
  query {
    profile: file(relativePath: { eq: "images/profile.jpeg" }) {
      childImageSharp {
        fluid(grayscale: true) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    covidtracker: file(relativePath: { eq: "images/covidtracker.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;
