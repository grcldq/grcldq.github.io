import React from 'react';
import footerStyles from '../styles/footer.module.scss';
import ContactIcons from './contact-icons';

export default function Footer() {
  return (
    <div className={footerStyles.footer}>
      <p>© GERALDINE ATAYAN 2021</p>
      <ContactIcons />
    </div>
  );
}
