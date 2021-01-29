import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import headerStyles from '../styles/header.module.scss';

export default function Header({ about, image }) {
  return (
    <div className={headerStyles.container}>
      <Img
        alt="A photo of Geraldine"
        fluid={image}
        objectFit="cover"
        className={headerStyles.image}
      />
      <div className={headerStyles.header}>
        <div>
          <h1 className="line-1 anim-typewriter" style={{ marginBottom: 0 }}>
            Hi, I'm Geraldine!
          </h1>
        </div>
        <p className={headerStyles.about}>{about}</p>
        <ul>
          <Link
            className="link"
            style={{ paddingRight: '0.7rem' }}
            to="https://www.linkedin.com/in/geraldine-atayan/"
          >
            LinkedIn
          </Link>
          |
          <Link
            className="link"
            style={{ paddingLeft: '0.7rem' }}
            to="https://github.com/grcldq"
          >
            GitHub
          </Link>
        </ul>
      </div>
    </div>
  );
}
