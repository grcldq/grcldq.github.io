import React from 'react';
import { ThemeToggler } from 'gatsby-plugin-dark-mode';
import { WiSolarEclipse, WiSunset } from 'react-icons/wi';

import headerStyles from '../styles/header.module.scss';
import ContactIcons from './contact-icons';

export default function Header() {
  const textToggle = React.useRef();

  function showText() {
    textToggle.current.style.display = 'block';
  }

  function hideText() {
    textToggle.current.style.display = 'none';
  }

  function isDarkModeOn(value) {
    return value === 'dark';
  }

  return (
    <div className={headerStyles.container}>
      <div className={headerStyles.header}>
        <div>
          <h1 className="line-1 anim-typewriter" style={{ marginBottom: 0 }}>
            Geraldine Atayan.
          </h1>
        </div>
        <ContactIcons />
        <ThemeToggler>
          {({ theme, toggleTheme }) => (
            <div style={{ display: 'flex' }}>
              <label
                className={headerStyles.toggleIcon}
                onMouseOver={showText}
                onFocus={showText}
                onMouseLeave={hideText}
                role="presentation"
              >
                {isDarkModeOn(theme) ? <WiSunset /> : <WiSolarEclipse />}
                <input
                  id="toggle"
                  type="checkbox"
                  onChange={e =>
                    toggleTheme(e.target.checked ? 'dark' : 'light')
                  }
                  checked={isDarkModeOn(theme)}
                  style={{ position: 'absolute', left: '-100vw' }}
                />
              </label>
              <p className={headerStyles.toggleText} ref={textToggle}>
                Switch to {isDarkModeOn(theme) ? 'light' : 'dark'} mode
              </p>
            </div>
          )}
        </ThemeToggler>
      </div>
    </div>
  );
}
