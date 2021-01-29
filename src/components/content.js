import React from 'react';
import { Link } from 'gatsby';

import ContentItem from '../components/content-item';
import ExperienceDetails from '../components/experience-details';
import Form from '../components/form';
import PortfolioSample from '../components/portfolio-sample';
import StackItem from '../components/stack-item';
import JSONContent from '../data/content.json';
import {
  MdCode,
  MdLibraryBooks,
  MdMail,
  MdOpenInNew,
  MdPermMedia,
  MdSchool,
  MdWork,
} from 'react-icons/md';

import contentStyles from '../styles/content.module.scss';

export default function Content({ data }) {
  const {
    education,
    portfolioItems,
    publication,
    skillset,
    workExperience,
  } = JSONContent;

  return (
    <div className={contentStyles.content}>
      <ContentItem title="tech stack" icon={<MdCode />}>
        <div className={contentStyles.techStack}>
          {skillset.map((item, index) => (
            <StackItem
              icon={item.icon}
              isCustom={item.isCustom}
              title={item.title}
              key={item.title + index}
            />
          ))}
        </div>
      </ContentItem>
      <ContentItem title="sample projects" icon={<MdPermMedia />}>
        <div className="portfolio-items">
          {portfolioItems.map((item, index) => (
            <PortfolioSample
              image={data[item.image].childImageSharp.fluid}
              alt={item.alt}
              title={item.title}
              description={item.description}
              technologies={item.technologies}
              to={item.url}
              key={item.title + index}
            />
          ))}
        </div>
      </ContentItem>
      <div className={contentStyles.others}>
        <ContentItem title="work experience" icon={<MdWork />}>
          {workExperience.map((item, index) => (
            <ExperienceDetails
              establishment={item.company}
              title={item.position}
              key={item.company + index}
            ></ExperienceDetails>
          ))}
        </ContentItem>
        <ContentItem title="education" icon={<MdSchool />}>
          {education.map((item, index) => (
            <ExperienceDetails
              establishment={item.school}
              title={item.studies}
              key={item.school + index}
            ></ExperienceDetails>
          ))}
        </ContentItem>
        <ContentItem title="publications" icon={<MdLibraryBooks />}>
          <Link
            className="link"
            to={publication.url}
            target="_blank"
            rel="noopener"
          >
            {publication.title} <MdOpenInNew />
          </Link>
        </ContentItem>
        <ContentItem title="contact" icon={<MdMail />}>
          <Form />
        </ContentItem>
      </div>
    </div>
  );
}
