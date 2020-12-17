import React, { useState } from 'react';
import { Helmet } from 'react-helmet';

const styles = {
  color: 'var(--primary-text)',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
};

const h1Styles = {
  color: 'var(--primary-icons)',
  fontSize: '10em',
  margin: '0',
};

const h2Styles = { color: 'var(--secondary-text)' };

export default function Default() {
  const [count, setCount] = useState(5);

  if (count > 0) {
    setTimeout(
      function () {
        setCount(count - 1);
      }.bind(this),
      1000
    );
  } else {
    window.location.href = '/';
  }

  return (
    <div className="container" style={styles}>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content="404 page" />
        <title>404 Not Found</title>
      </Helmet>
      <h1 style={h1Styles}>404</h1>
      <h2 style={h2Styles}>Page not found</h2>
      <p>Automatically redirecting in {count}...</p>
    </div>
  );
}
