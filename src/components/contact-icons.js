import React from 'react';
import { Link } from 'gatsby';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

import contactIconsStyles from '../styles/contact-icons.module.scss';

const ListLink = props => (
  <li style={{ display: `inline-block` }}>
    <Link
      className={contactIconsStyles.link}
      target="_blank"
      rel="noopener"
      to={props.to}
    >
      {props.children}
    </Link>
  </li>
);

export default function ContactIcons() {
  return (
    <ul className={contactIconsStyles.contactLinks}>
      <ListLink to="https://www.linkedin.com/in/geraldine-atayan-324717135/">
        <FaLinkedin />
      </ListLink>
      <ListLink to="https://github.com/grcldq">
        <FaGithub />
      </ListLink>
      <li style={{ display: `inline-block` }}>
        <a
          href="mailto:geraldineatayan@gmail.com"
          className={contactIconsStyles.link}
        >
          <FaEnvelope />
        </a>
      </li>
    </ul>
  );
}
