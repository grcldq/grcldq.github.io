import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import { MdOpenInNew } from 'react-icons/md'

import portfolioSampleStyles from '../styles/portfolio-sample.module.scss';

const Label = prop => (
  <div className={portfolioSampleStyles.label}>{prop.item}</div>
);

export default function PortfolioSample(props) {
  return (
    <div className={portfolioSampleStyles.portfolio}>
      <Img
        alt={props.alt}
        className={portfolioSampleStyles.sampleImage}
        fluid={props.image}
      />
      <div className={portfolioSampleStyles.portfolioDetails}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <div className={portfolioSampleStyles.technologies}>
          {props.technologies &&
            props.technologies.map((tech, i) => <Label item={tech} key={i} />)}
        </div>
        <Link className="link" target="_blank" rel="noopener" to={props.to}>
          Click here to see demo <MdOpenInNew />
        </Link>
      </div>
    </div>
  );
}
