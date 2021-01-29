import React, { useRef, useState } from 'react';
import { FaExclamationCircle, FaRegTimesCircle } from 'react-icons/fa';

import styles from '../styles/form.module.scss';

export default function Form() {
  const formAlert = useRef();
  const formText = useRef();
  const [submitSuccessful, setSubmitSuccessful] = useState(false);
  const [isAlertHidden, setIsAlertHidden] = useState(true);

  const updateFormAlert = (text, isSuccess) => {
    formText.current.innerHTML = text;

    setIsAlertHidden(false);

    isSuccess ? setSubmitSuccessful(true) : setSubmitSuccessful(false);
  };

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        updateFormAlert('Thank you! Your form has been received.', true);
      } else {
        updateFormAlert('Oops. Something went wrong. ☹️', false);
      }
    };
    xhr.send(data);
  };

  const getAlertStyles = () => {
    if (isAlertHidden) {
      return [styles.formAlert, styles.hidden].join(' ');
    }

    if (submitSuccessful) {
      return [styles.formAlert, styles.success].join(' ');
    }

    return [styles.formAlert, styles.failed].join(' ');
  };

  return (
    <form
      action="https://formspree.io/f/xaylpgeo"
      className={styles.container}
      method="POST"
      name="contact"
      onSubmit={handleSubmit}
    >
      <div ref={formAlert} className={getAlertStyles()}>
        <FaExclamationCircle className={styles.formIcon} />
        <p ref={formText}></p>
        <FaRegTimesCircle
          className={styles.formCloseBtn}
          onClick={() => setIsAlertHidden(true)}
        />
      </div>
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
  );
}
