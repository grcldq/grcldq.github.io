import React from 'react'
import { FaExclamationCircle, FaRegTimesCircle } from 'react-icons/fa'

// This function encodes the captured form data in the format that Netlify's backend requires
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

export default function Form() {
  const nameInput = React.useRef()
  const emailInput = React.useRef()
  const messageInput = React.useRef()
  const formAlert = React.useRef()
  const formText = React.useRef()

  const updateFormAlert = (text, isSuccess) => {
    formText.current.innerHTML = text
    formAlert.current.classList.remove('hidden')

    if (isSuccess) {
      formAlert.current.classList.remove('failed')
      formAlert.current.classList.add('success')
    } else {
      formAlert.current.classList.remove('success')
      formAlert.current.classList.add('failed')
    }
  }

  const handleSubmit = event => {
    const name = { name: nameInput.current.value }
    const email = { email: emailInput.current.value }
    const message = { message: messageInput.current.value }

    event.preventDefault()
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': event.target.getAttribute('name'),
        ...name,
        ...email,
        ...message,
      }),
    })
      .then(() => {
        updateFormAlert('Thank you! Your form has been received.', true)
        document.getElementById('contactForm').reset()
      })
      .catch(() => {
        updateFormAlert('Oops. Something went wrong. ☹️', false)
      })
  }

  return (
    <form
      className="col-container"
      id="contactForm"
      name="contact"
      method="POST"
      data-netlify="true"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />
      <div ref={formAlert} className="form-alert hidden">
        <FaExclamationCircle className="form-icon" />
        <p ref={formText}></p>
        <FaRegTimesCircle
          className="form-close-btn"
          onClick={() => formAlert.current.classList.add('hidden')}
        />
      </div>
      <label>
        Name:
        <input type="text" name="name" ref={nameInput} required />
      </label>
      <label>
        Email:
        <input type="email" name="email" ref={emailInput} required />
      </label>
      <label>
        Message:
        <textarea
          type="text"
          name="message"
          ref={messageInput}
          rows="4"
          required
        />
      </label>
      <button type="submit">Send</button>
    </form>
  )
}
